type RegradeRequestPayload = {
  code: string;
  csid: string;
  project: string;
  commit: string;
};

type Project = {
  id: string;
  name: string;
  description?: string;
  info_site_name?: string;
  active?: boolean;
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

enum GenericStatus {
  Success,
  Error,
}

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
type GetProjectsResponse = ResponseType<GenericStatus, Project[]>;

type PostRegradeRequest = RequestType<
  RegradeRequestPayload,
  RegradeRequestResponse
>;

type PostAccessCodeRequest = RequestType<
  AccessCodeRequestPayload,
  AccessCodeRequestResponse
>;

type GetProjectsRequest = RequestType<undefined | null, GetProjectsResponse>;

export type {
  RegradeRequestPayload,
  ResponseType,
  RequestType,
  PostRegradeRequest,
  RegradeRequestResponse,
  AccessCodeRequestResponse,
  PostAccessCodeRequest,
  AccessCodeRequestPayload,
  GetProjectsRequest,
  GetProjectsResponse,
  Project,
};

export { RegradeRequestStatus, AccessCodeRequestStatus, GenericStatus };
