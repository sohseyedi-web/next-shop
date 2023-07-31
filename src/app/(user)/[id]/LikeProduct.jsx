"use client";
import { getAllProducts } from "@/services/getProducts";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import * as FiIcon from "react-icons/fi";

const LikeProduct = ({ item }) => {
  const { data } = useQuery(["get-products"], getAllProducts);

  const likeProduct = data?.filter((i) => i.category === item.category);
  const filterLikeProduct = likeProduct?.filter((i) => i.id !== item.id);

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 330;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 330;
  };

  return (
    <div className="relative py-6">
      <div className="flex items-center justify-between my-5 pb-4 border-b-2 border-gray-400">
        <h4 className="font-semibold text-xl">Similar Products</h4>
        <div className="flex items-center gap-x-4">
          <button
            onClick={scrollLeft}
            className="p-2 m-2 rounded-full bg-blue-500 border-none shadow-md text-white"
          >
            <FiIcon.FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-blue-500 border-none shadow-md  text-white"
          >
            <FiIcon.FiChevronRight />
          </button>
        </div>
      </div>
      <div
        id="content"
        className="carousel py-4 flex items-center justify-start overflow-x-hidden scroll-smooth  scrollbar-hide"
      >
        {filterLikeProduct?.map((product) => (
          <div key={product.id}>
            <div className="card bg-white w-[300px] h-[300px] m-2 rounded-md shadow-md px-3">
              <div className="top">
                <img
                  className="w-full h-[200px] object-contain  p-2"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="title font-semibold text-center my-3">
                {product.title.slice(0, 18)}
              </div>
              <Link href={`/${product.id}`}>
                <button className="border-none w-full h-[45px] bg-indigo-700 rounded-md text-white hover:bg-indigo-600 transition-all duration-300">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikeProduct;

