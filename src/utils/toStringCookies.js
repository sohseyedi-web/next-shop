export function toStringCookie(cookies) {
  let str = "";

  cookies.getAll().forEach((item) => {
    return (str += `${item?.name}=${item?.value} `);
  });

  return str;
}
