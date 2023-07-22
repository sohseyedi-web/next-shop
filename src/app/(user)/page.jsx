"use client";
import { getProducts } from "@/services/getProducts";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import ProductCard from "./ProductCard";

export default function Home() {
  const { data, isLoading } = useQuery(["get-products"], getProducts, {
    refetchInterval: 100,
  });

  if (isLoading) return <Loading />;

  return (
    <main className="pt-28 text-center">
      <div className="max-w-7xl mx-auto flex gap-y-6 lg:gap-x-16  items-center flex-wrap">
        {data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}
