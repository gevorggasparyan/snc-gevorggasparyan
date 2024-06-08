import { QueryFunction } from "@tanstack/react-query";
import { request } from "@/utils/client/request";
import { User } from "@/utils/common/person";

export const getPerson: QueryFunction<User> = async ({ queryKey }) => {
  const [_key, person] = queryKey;

  return request<User>("GET", `person?person=${person}`);
};
