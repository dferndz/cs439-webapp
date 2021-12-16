import {
  RegradeRequestPayload,
  RegradeRequestStatus,
  PostRegradeRequest,
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
}

const apiService = new ApiService();

export { apiService, ApiService };
