const PRIVATE_IP_PATTERN =
  /^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|::1$|unknown$|localhost$)/i;

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp?.trim()) {
    return realIp.trim();
  }

  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp?.trim()) {
    return cfIp.trim();
  }

  return "unknown";
}

export function getUserAgent(request: Request): string {
  return request.headers.get("user-agent")?.trim() || "unknown";
}

export function isPublicIp(ip: string): boolean {
  if (!ip || ip === "unknown") {
    return false;
  }

  return !PRIVATE_IP_PATTERN.test(ip);
}
