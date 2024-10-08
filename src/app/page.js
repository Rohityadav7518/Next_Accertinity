"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from 'next/image';
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";



export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Explore",
      href:"/typeffect",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    (<div
      className={cn(
        "rounded-md  flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen"
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Sloth Aura",
                href: "",
                icon: (
                  <Image
                    src="https://imgs.search.brave.com/w5kUBi0b5B9Yy5Rey_Ec-cO72IInLo8EJLgHywhO2YE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NDk4ODY5OS9waG90/by9idXNpbmVzc21h/bi1jb250ZW1wbGF0/aW5nLWluLXRoZS1v/ZmZpY2UtbG9va2lu/Zy10aHJvdWdoLXRo/ZS13aW5kb3cuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVVM/V2xGTlVreUY4V0NV/eEl2Mm9LQ2FsVDhO/NFdCeXRMNUFMUXI3/N2pYUkE9"
                    width={50}
                    height={50}
                    
                    alt="Avatar"
                     />
                ),
              }} />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>)
  );
}
export const Logo = () => {
  return (
    (<Link
      href=""
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div
        className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre">
        Acet Labs
      </motion.span>
    </Link>)
  );
};
export const LogoIcon = () => {
  return (
    (<Link
      href=""
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div
        className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>)
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  
   
  return (
    (<div className="flex flex-1 mt-2 " >
      <div
        className="p-2 h-screen  rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-wrap  flex-1  max-w-full max-h-screen   ">
        <div className="flex   items-center justify-center  w-full
          h-screen  "  >

        <Spline 
        scene="https://prod.spline.design/fagRARJHZH5e0X04/scene.splinecode"/>
          
          
          
        </div>
       
      </div>
    </div>)
    
  );
};
