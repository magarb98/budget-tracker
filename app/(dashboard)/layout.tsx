import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex h-screen w-full flex-col'>
      <div className='w-full'></div>
      <Navbar />
      {children}
    </div>
  );
}

export default layout;
