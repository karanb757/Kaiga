import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import QRComp from "./qrcode";
import { useSelector } from "react-redux";

export function AlertDialogDemo({ item }) {
  const { user } = useSelector((state) => state.user);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className=" cursor-pointer w-full p-1 px-2 rounded-lg bg-cartItem flex gap-3 items-center hover:bg-secondary">
          <img
            src={item?.imageURL}
            className="w-20 h-20 max-w-[60px] rounded-lg object-contain"
            alt=""
          />

          {/* name section */}
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold">{item?.title}</p>
            <p className="text-sm font-semibold">
              {item.description.substring(0, 50)}....
            </p>
          </div>

          {/* button section */}
          <div className="group flex items-center gap-2 ml-auto cursor-pointer">
            <p className="rounded-sm items-center justify-center">
              Rs. {item.price}
            </p>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Proof of purchase</AlertDialogTitle>
          <AlertDialogDescription>
            Scan this to verify purchase.
          </AlertDialogDescription>
          <div className="flex md:flex-row flex-col gap-3 items-center justify-center">
            <QRComp
              value={`https://frames-by-engineer.vercel.app/tickets/${user.email}/${item.id}`}
            />
            <div className="flex flex-col ">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p>{item.description.substring(0, 150)}...</p>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
