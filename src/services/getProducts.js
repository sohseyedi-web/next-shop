import http from "./https";

export function getProducts(query, cookies) {
  return http
    .get(`/products?${query}`, {
      headers: {
        Cookies: cookies,
      },
    })
    .then((data) => data.data);
}

// export async function getProductById(id) {
//   return await http.get(`/products/${id}`).then((data) => data.data);
// }
