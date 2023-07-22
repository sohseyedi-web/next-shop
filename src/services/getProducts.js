
import http from "./https";

export async function getProducts() {
  return await http.get("/products").then((data) => data.data);
}
