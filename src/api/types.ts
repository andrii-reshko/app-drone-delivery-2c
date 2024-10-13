// Errors...

type ServerErrorEntry = {
  path: string;
  message: string;
  details?: string;
};

export type ServerErrorResponse = {
  errors: ServerErrorEntry[];
  meta?: object | null;
};

export type ServerResponse<T> = {
  data: T;
  meta?: object | null;
};

// Entity responses

export type TokenResponse = {
  token_type: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at: string;
};

export type UserResponse = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};
