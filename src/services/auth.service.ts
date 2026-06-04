import api from "./api";
import type {
  LoginPayload,
  RegisterPayload,
} from "../types/auth.types";

export const login = (
  data: LoginPayload
) => {
  return api.post(
    "/auth/login",
    data
  );
};

export const register = (
  data: RegisterPayload
) => {
  return api.post(
    "/auth/register",
    data
  );
};