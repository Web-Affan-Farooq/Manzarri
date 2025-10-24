import LoginSchema from "@/validations/LoginSchema";
import { z } from "zod";
import SignupSchema from "@/validations/SignupSchema";
import { Account } from "./accounts";

// ___ Types for VerifyUser ...
interface VerifyUserResponse {
  exists: boolean;
  user: Pick<
    Account,
    "_id" | "isAdmin" | "isBlocked" | "userEmail" | "userName" | "userPassword"
  > | null;
  message: string;
}

export type { VerifyUserResponse };
// ___ Types for SanitizeData ...
type SanitizeResult = {
  success: boolean;
  message: string | null;
};

type AuthPayload = z.infer<typeof SignupSchema> | z.infer<typeof LoginSchema>;

export type { SanitizeResult, AuthPayload };

// ___ Types for signup ...
interface AccountPayload {
  _type: "Accounts";
  userName: string;
  userPassword: string;
  userEmail: string;
  isAdmin: boolean;
  isBlocked: boolean;
  lastLogin: string;
  phoneNumber: string;
  country: string;
  postalCode: string;
  city: string;
  address: string;
  orders: [];
}

interface AccountActivity {
  _type: "AccountActivity";
  userId: string;
  lastLogin: string;
  orders: [];
}

interface Notification {
  _type: "Notifications";
  userId: string;
  notificationTitle: string;
  notificationText: string;
  notificationType: "Success";
  isSeen: false;
}

export type { Notification, AccountPayload, AccountActivity };
