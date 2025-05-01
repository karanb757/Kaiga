import QRComp from "@/components/qrcode";
import BuyProduct from "@/components/razorPay/buyProduct";
import { Button } from "@/components/ui/button";
import { setPayment } from "@/redux/slices/paymentSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SingleProduct = ({ frameData }) => {
  const [buyNowClicked, setBuyNowClicked] = useState(false);
  const payment = useSelector((state) => state.payment.payment);
  const router = useRouter();
  const dispatch = useDispatch();

  //   const handleBuy = (data) => {
  //     console.log(data);
  //     const obj = { paymentFor: data.title, price: data.price, productId: data.id, userId: 45785  };
  //     dispatch(setPayment(obj));
  //     router.push("/buyProduct");
  //   };
  return (
    <section className="max-w-5xl">
      <div className="border border-gray-300 rounded-xl mt-12 mx-auto max-w-xl px-4 lg:w-80 lg:h-96 lg:ml-[200px] items-center">
        <img
          src={frameData.imageURL}
          className="rounded-xl  lg:w-80 lg:h-[350px] object-contain"
        />
        <p className="text-center text-lg font-normal font-serif lg:absolute lg:ml-[450px] lg:-mt-[350px]">
          {frameData.title}
        </p>
        <p className="text-center text-l font-light text-gray-600 lg:absolute lg:ml-[450px] lg:-mt-[310px]">
          ₹ {frameData.price}
        </p>
        <hr className="h-[2px] w-96 bg-gray-300 lg:absolute lg:ml-[450px] lg:-mt-[270px]"></hr>
        <div className="font-light text-gray-700 lg:absolute lg:ml-[450px] lg:-mt-[250px] md:mr-[200px]">
          <p>Category: {frameData.category}</p>
          <p>Color: {frameData.color}</p>
          <p>Dimension: {frameData.dimensions}</p>
          <p>Glass: {frameData.glass}</p>
          <p>Material: {frameData.material}</p>
          <p>Width: {frameData.width}</p>
          <p>Height: {frameData.height}</p>
        </div>

        <div className="mx-auto md:-mt-12 lg:ml-[450px] lg:-mt-12 lg:w-96 text-white">
          <BuyProduct
            type={"frame"}
            purchaseData={frameData}
            paymentFor={frameData.title}
            price={frameData.price}
            userId={45785}
            productId={frameData.id}
          />
        </div>
        {/* <Button
          className="mx-auto md:-mt-12 lg:ml-[450px] lg:-mt-12 lg:w-96 text-white"
          onClick={() => handleBuy(exhibitionData)}
        >
          Buy Ticket
        </Button> */}
      </div>

      {/* {buyNowClicked && (
        <>
          {payment && (
            <BuyProduct
              paymentFor={payment?.paymentFor}
              price={payment?.price}
              userId={payment?.us}
              productId={payment.productId}
            />
          )}
        </>
      )} */}
    </section>
  );
};

export default SingleProduct;
