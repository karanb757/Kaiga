"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes"; 
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function MainNav({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true); 
  }, []);

  useEffect(() => {
    const foundIndex = items.findIndex((item) => item.href === pathname);
    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }
  }, [pathname, items]);

  return (
    <div className="flex items-center w-full px-2 md:px-4 py-4">
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        {mounted && (
          <Image
            src={
              resolvedTheme === "dark"
                ? siteConfig.logoWhite
                : siteConfig.logo
            }
            alt={siteConfig.name}
            width={60}
            height={60}
            className="rounded-md object-contain"
          />
        )}
      </Link>

      {/* Nav Items */}
      {items?.length > 0 && (
        <nav className="flex items-center gap-8 ml-10">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-base transition-colors hover:text-foreground",
                    activeIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-50"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      )}
    </div>
  );
}

export default MainNav;
