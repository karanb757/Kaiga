import QRComp from "@/components/qrcode";
import BuyProduct from "@/components/razorPay/buyProduct";
import { Button } from "@/components/ui/button";
import { setPayment } from "@/redux/slices/paymentSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SingleExhibition = ({ exhibitionData }) => {
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
          src={exhibitionData.imageURL}
          className="rounded-xl  lg:w-80 lg:h-[350px] object-contain"
        />
        <p className="text-center text-lg font-normal font-serif lg:absolute lg:ml-[450px] lg:-mt-[350px]">
          {exhibitionData.title}
        </p>
        <p className="text-center text-l font-light text-gray-600 lg:absolute lg:ml-[450px] lg:-mt-[310px]">
          ₹ {exhibitionData.price}
        </p>
        <hr className="h-[2px] w-96 bg-gray-300 lg:absolute lg:ml-[450px] lg:-mt-[270px]"></hr>
        <p className="font-light text-gray-700 lg:absolute lg:ml-[450px] lg:-mt-[250px] md:mr-[200px]">
          {exhibitionData.description}
        </p>

        <div className="mx-auto md:-mt-12 lg:ml-[450px] lg:-mt-12 lg:w-96 text-white">
          <BuyProduct
            purchaseData={exhibitionData}
            paymentFor={exhibitionData.title}
            price={exhibitionData.price}
            userId={45785}
            productId={exhibitionData.id}
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

export default SingleExhibition;
