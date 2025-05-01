"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/nav/icons";
import MainNav from "./main-nav";
import { ThemeToggle } from "./toggle-theme";
import { NavAlert } from "./nav-alert";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "@/redux/slices/userSlice";
import { SheetDemo } from "../sheetDemo";
import { AvatarComp } from "../avatar";

export function SiteHeader() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    // localStorage.clear();

    // dispatch({
    //   type: actionType.SET_USER,
    //   user: null,
    //   role: null,
    // });
    dispatch(resetUser());
    router.push("/");
  };
  // console.log(user)

  return (
    <header className="backdrop-blur-xl bg-backgroundOpac sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-1 space-x-1">
            {/* <div className="md:flex hidden">
              <NavAlert />
            </div> */}

            <ThemeToggle />
            {/* {user && <Button onClick={logout}>Logout</Button>} */}

            <SheetDemo />
            <AvatarComp />
          </nav>
        </div>
      </div>
    </header>
  );
}
