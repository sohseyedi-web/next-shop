"use client";
import { addItem, removeItem } from "@/redux/features";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const hasItems = cartItems.length;

  const addItemHandler = (item) => {
    toast.success("added to cart");
    dispatch(addItem(item));
  };
  const removeItemHandler = (item) => {
    toast.error("remove item");
    dispatch(removeItem(item));
  };

  const totalPrice = cartItems.reduce(
    (price, total) => price + total.quantity * total.price,
    0
  );

  const totalCount = cartItems.reduce(
    (quantity, total) => quantity + total.quantity,
    0
  );

  return (
    <section className="pt-28">
      <div className="max-w-7xl mx-auto flex justify-between lg:flex-row flex-col">
        {hasItems ? (
          <>
            <div className="lg:w-[75%] lg:mx-0 mx-auto md:w-[60%] w-[90%] shadow-md rounded-md">
              {cartItems.map((cart) => (
                <div
                  className="mb-3 flex items-center justify-between px-6 py-3"
                  key={cart.id}
                >
                  <div className="flex items-center">
                    <img
                      src={cart.image}
                      className="rounded-md lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] object-contain"
                      alt={cart.title}
                    />
                    <div className="lg:text-lg mr-4">
                      <div className="font-semibold">
                        {cart.title.slice(0, 18)}
                      </div>
                      <div className="">{Math.ceil(cart.price)}$</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <button
                      className="w-[35px] flex items-center justify-center text-white text-center h-[35px] border-none rounded-full  bg-[#2eb573]"
                      onClick={() => addItemHandler(cart)}
                    >
                      <RiIcon.RiAddLine />
                    </button>
                    <span className="mx-2 text-lg">{cart.quantity}</span>
                    <button
                      className="w-[35px] flex items-center justify-center text-white text-center h-[35px] border-none rounded-full bg-[#2eb573]"
                      onClick={() => removeItemHandler(cart)}
                    >
                      <RiIcon.RiSubtractFill />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="shadow-md lg:mx-0 mx-auto h-[220px] px-2 py-3 lg:w-[23%] md:w-[60%] w-[90%]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">total purchase</span>
                <span>{Math.ceil(totalPrice)}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">
                  Number of orders
                </span>
                <span>{totalCount}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">discount</span>
                <span>{0}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">total </span>
                <span>{Math.ceil(totalPrice)}</span>
              </div>
              <button className="w-full  bg-[#2eb573] rounded-md text-white border-none text-lg py-2">
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-2xl text-indigo-600 dark:text-white font-semibold w-full">
            No Items
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
