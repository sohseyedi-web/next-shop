import http from "./https";
export async function getCategory() {
  const { data } = await http.get("/products/category");
  return data;
}
