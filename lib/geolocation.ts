import { isPublicIp } from "./request-meta";

export type GeoIpInfo = {
  ip: string;
  country?: string;
  country_code?: string;
  region?: string;
  city?: string;
  postal?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  isp?: string;
  org?: string;
};

type IpWhoResponse = {
  success?: boolean;
  ip?: string;
  country?: string;
  country_code?: string;
  region?: string;
  city?: string;
  postal?: string;
  latitude?: number;
  longitude?: number;
  timezone?: { id?: string };
  connection?: { isp?: string; org?: string };
};

export async function lookupGeoIp(ip: string): Promise<GeoIpInfo | null> {
  if (!isPublicIp(ip)) {
    return null;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as IpWhoResponse;
    if (!data.success) {
      return null;
    }

    return {
      ip: data.ip || ip,
      country: data.country,
      country_code: data.country_code,
      region: data.region,
      city: data.city,
      postal: data.postal,
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone?.id,
      isp: data.connection?.isp,
      org: data.connection?.org,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
