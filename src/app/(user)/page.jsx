import { cookies } from "next/headers";
import queryString from "query-string";
import { toStringCookie } from "@/utils/toStringCookies";
import { getProducts } from "@/services/getProducts";
import { getCategory } from "@/services/getCategory";
import Products from "./Products";
export const dynamic = "force-dynamic";

export default async function Home({ searchParams }) {
  const cookieStore = cookies();
  const strCookie = toStringCookie(cookieStore);
  const categoryPromise = getCategory();
  const productsPromise = getProducts(
    queryString.stringify(searchParams),
    strCookie
  );

  const [products, category] = await Promise.all([
    productsPromise,
    categoryPromise,
  ]);

  // const { data, isLoading, isError } = useQuery(
  //   ["get-products"],
  //   getProducts(queryString.stringify(searchParams), strCookie),
  //   {
  //     refetchInterval: 100,
  //   }
  // );

  // if (isLoading) return <Loading />;

  // if (isError) return <Error />;

  // const handleSearch = () => {
  //   return data?.filter((i) => i.title.toLowerCase().includes(search));
  // };

  return (
    <main className="pt-28 text-center">
      <section className="max-w-7xl mx-auto">
        <Products products={products} />
      </section>
    </main>
  );
}

{
  /* <Topside />
        <div className=" flex gap-y-6 lg:gap-x-16 items-center flex-wrap">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div> */
}
