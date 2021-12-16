import {
  RegradeRequestPayload,
  RegradeRequestStatus,
  PostRegradeRequest,
  PostAccessCodeRequest,
  AccessCodeRequestPayload,
  AccessCodeRequestStatus,
} from "./types";

class ApiService {
  postRegradeRequest: PostRegradeRequest = async (
    payload: RegradeRequestPayload
  ) => {
    console.log("Send regrade request");
    console.log(payload);

    // TODO: call backend api
    return {
      status: RegradeRequestStatus.Success,
      payload: null,
    };
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
}

const apiService = new ApiService();

export { apiService, ApiService };
