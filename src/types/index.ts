export type CreateUser = {
  name: string;
  job: string;
};

export type User = {
  id: number | string;
  email: string;
  first_name: string;
  last_name: string;
  job: string;
  avatar: string;
};

export type Support = {
  url: string;
  text: string;
};

export type UserData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
};

export type UsersState = {
  data: UserData;
  loading: string | null;
};
