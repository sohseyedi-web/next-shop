import http from "./https";

export function getProductsWithQuery(query, cookies) {
  return http
    .get(`/products?${query}`, {
      headers: {
        Cookies: cookies,
      },
    })
    .then((data) => data.data);
}

export async function getAllProducts() {
  return await http.get("/products").then((data) => data.data);
}

export async function getProductById(id) {
  return await http.get(`/products/${id}`).then((data) => data.data);
}
