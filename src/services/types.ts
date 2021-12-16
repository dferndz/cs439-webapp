type RegradeRequestPayload = {
  code: string;
  csid: string;
  project: string;
  commit: string;
};

type ResponseType<StatusType, ResponsePayload = null, ErrorPayload = null> = {
  status: StatusType;
  payload: ResponsePayload | ErrorPayload;
};

type RequestType<PayloadType, ResponseType> = (
  payload: PayloadType
) => Promise<ResponseType>;

enum RegradeRequestStatus {
  Success,
  AuthError,
  ServerError,
}

type RegradeRequestResponse = ResponseType<RegradeRequestStatus>;

type PostRegradeRequest = RequestType<
  RegradeRequestPayload,
  RegradeRequestResponse
>;

export type {
  RegradeRequestPayload,
  ResponseType,
  RequestType,
  PostRegradeRequest,
  RegradeRequestResponse,
};

export { RegradeRequestStatus };
