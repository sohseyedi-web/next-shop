import http from "./https";

export async function getProducts() {
  return await http.get("/products").then((data) => data.data);
}

export async function getProductById(id) {
  return await http.get(`/products/${id}`).then((data) => data.data);
}
