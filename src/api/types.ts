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

type PagingLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type PaginationProps = {
  path: string;
  from: number;
  to: number;
  total: number;
  current_page: number;
  last_page: number;
  links: PagingLink[];
  first_page_url: string | null;
  next_page_url: string | null;
  prev_page_url: string | null;
  last_page_url: string | null;
  per_page: number;
};

export type PaginatedResponse<T> = {
  data: T[];
} & PaginationProps;
