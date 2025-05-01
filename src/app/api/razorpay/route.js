import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";
import { RAZORPAY_API_KEY, RAZORPAY_APT_SECRET } from "@/creds/credentials";

const instance = new Razorpay({
  key_id: RAZORPAY_API_KEY,
  key_secret: RAZORPAY_APT_SECRET,
});

export async function GET() {
  const payment_capture = 1;
  const amount = 1 * 100;
  const currency = "INR";
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      // These notes will be added to your transaction. So you can search it within their dashboard.
      // Also, it's included in webhooks as well. So you can automate it.
      paymentFor: "testingDemo",
      userId: "100",
      productId: "P100",
    },
  };

  const order = await instance.orders.create(options);
  return NextResponse.json({ msg: "success", order });
}

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  try {
    const { paymentFor, userId, productId, price } = body;

    const payment_capture = 1;
    const amount = price * 100;
    const currency = "INR";
    const options = {
      amount: amount.toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
      notes: {
        paymentFor,
        userId,
        productId,
      },
    };

    const order = await instance.orders.create(options);
    console.log(order);
    return NextResponse.json({ msg: "success", order });
  } catch (error) {
    return NextResponse.error(new Error("Error processing the request"), {
      status: 500,
    });
  }
} 