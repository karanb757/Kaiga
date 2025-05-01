import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import CartContainer from "./cartContainer";
import BuyProduct from "./razorPay/buyProduct";
import { getAllPurchases, savePurchase } from "@/firebase/functions";
import { useEffect, useState } from "react";
import TicketContainer from "./ticketContainer";

export function SheetDemo() {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.user);
  const [activeComponent, setActiveComponent] = useState("Cart");

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleCheckout = () => {
    savePurchase("viveksahu1762@gmail.com", cartItems);
  };

  useEffect(() => {
    getAllPurchases("viveksahu1762@gmail.com").then((pur) => console.log(pur));
  }, []);

  // console.log(cartItems);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex flex-col items-center justify-center">
          {cartItems && cartItems.length > 0 && (
            <div className=" bg-red-500 rounded-full relative left-4 px-2 text-sm text-white">
              {cartItems.length}
            </div>
          )}
          <CiShoppingCart className=" text-3xl cursor-pointer" />
        </div>
      </SheetTrigger>
      <SheetContent className="h-screen flex flex-col justify-between">
        <SheetHeader>
          <div className={"flex justify-between"}>
            <SheetTitle
              onClick={() => handleClick("Cart")}
              className="cursor-pointer"
            >
              Cart
            </SheetTitle>
            <SheetTitle
              onClick={() => handleClick("MyTickets")}
              className="cursor-pointer"
            >
              My Tickets
            </SheetTitle>
          </div>
          {activeComponent === "Cart" && <CartContainer />}
          {activeComponent === "MyTickets" && <TicketContainer />}
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription> */}
        </SheetHeader>

        <SheetFooter className={""}>
          {user ? (
            //  <BuyProduct />
            <button onClick={handleCheckout}>checkout</button>
          ) : (
            <Button>Login to check out</Button>
          )}
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
