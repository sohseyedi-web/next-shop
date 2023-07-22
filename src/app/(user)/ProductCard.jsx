import { addItem } from "@/redux/features";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    toast.success("added to cart");
    dispatch(addItem(product));
  };

  return (
    <div
      className="w-[90%] lg:w-[30%] md:w-[45%] lg:mx-0 mx-auto border-2 shadow-md p-2 rounded-md"
      key={product.id}
    >
      <div className="w-full h-[250px]">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full rounded-b-md"
        />
      </div>
      <div className="text-center my-3 font-medium">
        {product.title.slice(0, 18)}
      </div>
      <div className="my-3 flex items-center justify-between">
        <span>{Math.ceil(product.price)}$</span>
        <span>{product.rating.rate}</span>
      </div>
      <button
        onClick={addItemHandler}
        className="w-full mt-3 mb-1 h-[45px] bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all duration-300"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
