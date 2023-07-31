"use client";
import Loading from "@/components/Loading";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/services/getProducts";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { addItem } from "@/redux/features";
import LikeProduct from "./LikeProduct";

const ProductDetail = () => {
  const pathname = usePathname();
  const { data, isLoading } = useQuery(["get-product", pathname], () =>
    getProductById(pathname)
  );

  const dispatch = useDispatch();
  const addItemHandler = (product) => {
    toast.success("added to cart");
    dispatch(addItem(product));
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex gap-x-2 flex-col md:flex-row" key={data?.id}>
        <img
          src={data?.image}
          className="object-contain md:w-1/3 w-full mb-3 md:mb-0 md:mx-0 mx-auto h-[280px] rounded-md shadow-md"
          alt={data?.title}
        />
        <div className="md:w-2/3 w-[90%] md:mx-0 mx-auto space-y-3">
          <div className="gap-x-1">
            <span className="font-semibold">Title :</span>
            <span>{data?.title}</span>
          </div>
          <div className="gap-x-1">
            <span className="font-semibold">Price : </span>
            <span>{Math.ceil(data?.price)}$</span>
          </div>
          <div className="gap-x-1">
            <span className="font-semibold">Category : </span>
            <span>{data?.category}</span>
          </div>
          <div className=" flex gap-x-3">
            <div className="gap-x-1">
              <span className="font-semibold">Rate : </span>
              <span>{data?.rating.rate}</span>
            </div>
            <div className="gap-x-1">
              <span className="font-semibold">Count : </span>
              <span>{data?.rating.count}</span>
            </div>
          </div>
          <button
            onClick={() => addItemHandler(data)}
            className="px-10 py-3 bg-indigo-700 rounded-md text-white hover:bg-indigo-600 transition-all duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <LikeProduct item={data}/>
    </>
  );
};

export default ProductDetail;
