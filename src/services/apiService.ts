import {
  RegradeRequestPayload,
  RegradeRequestStatus,
  PostRegradeRequest,
  PostAccessCodeRequest,
  AccessCodeRequestPayload,
  AccessCodeRequestStatus,
  GetProjectsRequest,
  GenericStatus,
} from "./types";

const endpoints = {
  projects: "/api/projects/",
  regrades: "/api/regrades/",
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
    console.log("Send access code request");
    console.log(payload);

    // TODO: call backend api
    return {
      status: AccessCodeRequestStatus.Success,
      payload: null,
    };
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
}

const apiService = new ApiService();

export { apiService, ApiService };
