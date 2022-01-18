import {
  RegradeRequestPayload,
  RegradeRequestStatus,
  PostRegradeRequest,
  PostAccessCodeRequest,
  AccessCodeRequestPayload,
  AccessCodeRequestStatus,
  GetProjectsRequest,
  GenericStatus,
  GetResourcesRequest,
} from "./types";

const BASE_URL =
  process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URL : "/";

const makeEndpoint = (path: string) => `${BASE_URL}${path}`;

const endpoints = {
  projects: makeEndpoint("api/projects/"),
  resources: makeEndpoint("api/resources/"),
  regrades: makeEndpoint("api/regrades/"),
  code: makeEndpoint("api/auth/request-code/"),
};

class ApiService {
  postRegradeRequest: PostRegradeRequest = async (
    payload: RegradeRequestPayload
  ) => {
    const res = await fetch(endpoints.regrades, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.status === 200) {
        return Promise.resolve({
          status: RegradeRequestStatus.Success,
          payload: null,
        });
      }

      return res.json().then((data) => {
        if (data.csid || (data.detail && data.detail === "invalid_code")) {
          return Promise.resolve({
            status: RegradeRequestStatus.AuthError,
            payload: null,
          });
        } else if (data.detail && data.detail === "regrade_already_exists") {
          return Promise.resolve({
            status: RegradeRequestStatus.DuplicateError,
            payload: null,
          });
        }
        return Promise.resolve({
          status: RegradeRequestStatus.ServerError,
          payload: null,
        });
      });
    });

    return res;
  };

  postRequestAccessCode: PostAccessCodeRequest = async (
    payload: AccessCodeRequestPayload
  ) => {
    const res = await fetch(endpoints.code, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.status === 200) {
        return Promise.resolve({
          status: AccessCodeRequestStatus.Success,
          payload: null,
        });
      }

      return res.json().then((data) => {
        if (data.csid || (data.detail && data.detail === "invalid_eid")) {
          return Promise.resolve({
            status: AccessCodeRequestStatus.MatchingError,
            payload: null,
          });
        } else if (data.detail && data.detail === "not_registered") {
          return Promise.resolve({
            status: AccessCodeRequestStatus.NotRegistered,
            payload: null,
          });
        }
        return Promise.resolve({
          status: AccessCodeRequestStatus.ServerError,
          payload: null,
        });
      });
    });

    return res;
  };

  getProjects: GetProjectsRequest = async (payload: undefined | null) => {
    const data = await fetch(endpoints.projects).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.resolve(null);
      }
    });

    if (data === null) {
      return {
        status: GenericStatus.Error,
        payload: null,
      };
    }

    return {
      status: GenericStatus.Success,
      payload: data,
    };
  };

  getResources: GetResourcesRequest = async (payload: undefined | null) => {
    const data = await fetch(endpoints.resources).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.resolve(null);
      }
    });

    if (data === null) {
      return {
        status: GenericStatus.Error,
        payload: null,
      };
    }

    return {
      status: GenericStatus.Success,
      payload: data,
    };
  };
}

const apiService = new ApiService();

export { apiService, ApiService };
