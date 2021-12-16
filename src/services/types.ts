type RegradeRequestPayload = {
  code: string;
  csid: string;
  project: string;
  commit: string;
};

type AccessCodeRequestPayload = {
  csid: string;
  eid: string;
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
  DuplicateError,
  ServerError,
}

enum AccessCodeRequestStatus {
  Success,
  NotRegistered,
  MatchingError,
  ServerError,
}

type RegradeRequestResponse = ResponseType<RegradeRequestStatus>;
type AccessCodeRequestResponse = ResponseType<AccessCodeRequestStatus>;

type PostRegradeRequest = RequestType<
  RegradeRequestPayload,
  RegradeRequestResponse
>;

type PostAccessCodeRequest = RequestType<
  AccessCodeRequestPayload,
  AccessCodeRequestResponse
>;

export type {
  RegradeRequestPayload,
  ResponseType,
  RequestType,
  PostRegradeRequest,
  RegradeRequestResponse,
  AccessCodeRequestResponse,
  PostAccessCodeRequest,
  AccessCodeRequestPayload,
};

export { RegradeRequestStatus, AccessCodeRequestStatus };
