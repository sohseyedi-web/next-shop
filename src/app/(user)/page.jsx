import { cookies } from "next/headers";
import queryString from "query-string";
import { toStringCookie } from "@/utils/toStringCookies";
import { getProductsWithQuery } from "@/services/getProducts";
import { getAllCategory } from "@/services/getCategory";
import Products from "./Products";
export const dynamic = "force-dynamic";

export default async function Home({ searchParams }) {
  const cookieStore = cookies();
  const strCookie = toStringCookie(cookieStore);
  const categoryPromise = getAllCategory();
  const productsPromise = getProductsWithQuery(
    queryString.stringify(searchParams),
    strCookie
  );

  const [products, categories] = await Promise.all([
    productsPromise,
    categoryPromise,
  ]);

  return (
    <main className="pt-28 text-center">
      <section className="max-w-7xl mx-auto">
        <Products products={products}/>
      </section>
    </main>
  );
}
