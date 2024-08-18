import Link from "next/link";
import React from "react";
import Image from "next/image"

const LeftSidebar = () => {
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/">
            <Image src="/icons/logo.svg" alt="logo" width={24} height={28}/>
        </Link>
      </nav>
    </section>
  );
};

export default LeftSidebar;
