"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/nav/site-header";
import Footer from "@/components/footer";

export default function ConditionalHeaderFooter({ children }) {
  const pathname = usePathname();
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  useEffect(() => {
    const hideForRoutes = ["/signup", "/login"];
    const currentRoute = pathname;

    const shouldHide = hideForRoutes.includes(currentRoute);

    setShowHeaderFooter(!shouldHide);
  }, [pathname]);

  //   console.log(showHeaderFooter);

  return (
    <>
      <SiteHeader />
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
}
