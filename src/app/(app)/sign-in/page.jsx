"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"

import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import * as z from "zod"
import { useForm } from "react-hook-form";
import Link from "next/link";
import FloatingDockDemo from "@/components/Header";
import TextGenerateEffectDemo from "@/components/Gente";

export default function SignupFormDemo() {
 const Schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email:z.string(),
  password: z.string()
 })
  const onSubmit = (data)=>{
    console.log(data);
     }

     const {register,handleSubmit,formState:{errors}} = useForm({
      resolver:zodResolver(Schema),
      defaultValues:{
        firstname:"",
        lastname:"",
        password:"",
        email:"",
        
      }
     })
  return (
    <>
   <div className="h-screen flex flex-wrap items-center justify-center mt-5 w-full">
   <div className="flex  w-full mb-6 items-center justify-center h-3">
    <FloatingDockDemo/>
    </div>
    (<div
      className="max-w-md mt-2 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
       
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
    <TextGenerateEffectDemo/>
      <form className="my-8" onSubmit={ handleSubmit(onSubmit) }>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
     
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input {...register("email",{required:true })} id="email" placeholder="Email / username" type="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input {...register("password",{required:true})} id="password" placeholder="••••••••" type="password" />
          {errors.password && <p>{errors.password.message}</p>}
        </LabelInputContainer>
       

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Sign up &rarr;
          <BottomGradient />
        </button>
        <div className="flex  w-full justify-end">
       <p className=" mt-3 "> Don't have Account <Link className="font-bold" href={'/sign-up'}> Sign Up</Link></p>
       </div>

        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        
      </form>
    </div>)
   </div>
    </>
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};
