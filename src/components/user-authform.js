"use client";

import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { addPatient, getAllPatients } from "@/firebase/functions";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

export function UserAuthForm({ className, ...props }) {
  const user = useSelector((state) => state.user.user);

  const router = useRouter();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // const [allPatients, setAllPatients] = useState([]);
  const [patientExists, setPatientExists] = useState(false);
  const dispatch = useDispatch();

  const login = async () => {
    // const {
    //   user: { providerData },
    // } = await signInWithPopup(firebaseAuth, provider);

    const res = await signInWithPopup(firebaseAuth, provider);
    if (res.user.providerData[0]) {
      const userData = res.user.providerData[0];
      // console.log(res.user.providerData[0]);
      dispatch(setUser(userData));
      router.push('/')
    }

    // const allPatients = await getAllPatients();
    // let isPatientFound = false;
    // allPatients.forEach(({ patient }) => {
    //   if (providerData[0].email === patient.email) {
    //     isPatientFound = true;
    //   }
    // });

    // if (isPatientFound) <></>;
    // else {
    //   const patientData = {
    //     patient: providerData[0],
    //     role: "patient",
    //   };

    //   addPatient(patientData);
    //   router.push("/questions");
    // }
  };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  const logout = () => {
    localStorage.clear();
  };

  // logout();

  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={login}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
