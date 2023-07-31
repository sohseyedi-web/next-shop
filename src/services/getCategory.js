import http from "./https";

export function getAllCategory() {
  return http.get(`/products/categories`).then((data) => data.data);
}
