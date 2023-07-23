"use client";
import { getProducts } from "@/services/getProducts";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import ProductCard from "./ProductCard";
import Topside from "./Topside";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery(["get-products"], getProducts, {
    refetchInterval: 100,
  });

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  const handleSearch = () => {
    return data?.filter((i) => i.title.toLowerCase().includes(search));
  };

  return (
    <main className="pt-28 text-center">
      <section className="max-w-7xl mx-auto">
        <Topside search={search} setSearch={setSearch} />
        <div className=" flex gap-y-6 lg:gap-x-16 items-center flex-wrap">
          {handleSearch().map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
