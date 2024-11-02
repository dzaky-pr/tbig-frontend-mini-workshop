export const getAuthCookie = (cookies) => {
  const authCookie = cookies.get("Authorization");
  if (authCookie == null) return null;
  const cookie = authCookie?.name + "=" + authCookie?.value;
  return cookie;
};
