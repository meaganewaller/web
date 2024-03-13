import type { NextRequest } from "next/server";
import * as crypto from "node:crypto";

export const useSessionId = (req: NextRequest) => {
  const ipAddress = req.headers.get("x-forwarded-for") || "localhost";

  const sessionId = crypto
    .createHash("sha256")
    .update(ipAddress, "utf-8")
    .digest("hex");

  return sessionId;
};
