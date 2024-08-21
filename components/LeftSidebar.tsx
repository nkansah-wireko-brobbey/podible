'use client'

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2 pb-10 max-lg:justify-center"
        >
          <Image src="/icons/logo.svg" alt="logo" width={24} height={28} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podible
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {

          const isActive = pathName === route || pathName.startsWith(`${router}`)

          return (
            
          <Link href={route} key={route} className={cn("flex gap-4 cursor-pointer  items-center py-4  max-lg:px-4 justify-center lg:justify-start",{
            'bg-nav-focus border-r-4 border-orange-1':isActive
          } )}>
            <Image src={imgURL} width={24} height={24} alt={label} />
            <p>{label}</p>
          </Link>
        )})}
      </nav>
    </section>
  );
};

export default LeftSidebar;
