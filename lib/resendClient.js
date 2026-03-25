import { Resend } from "resend";

let resendClient;

export function getResendClient() {
  if (resendClient) {
    return resendClient;
  }

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY no esta definida");
  }

  resendClient = new Resend(process.env.RESEND_API_KEY);
  return resendClient;
}
