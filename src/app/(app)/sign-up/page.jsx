"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"

import { cn } from "@/lib/utils";
import * as z from "zod"
import { useForm } from "react-hook-form";
import Link from "next/link";
import FloatingDockDemo from "@/components/Header";
import TextGenerateEffectDemo from "@/components/Gente";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function SignupFormDemo() {
 const Schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email:z.string(),
  password: z.string()
 })

 const router = useRouter()
  const onSubmit = async()=>{
    try {
       const response = await axios.post('/api/user/signup')
       console.log("SignUp Success",response.data);
       router.push("/login")
       
    } catch (error) {
      console.log("SignUp Failed ", error.message);
      
    }
     }
     const {register,handleSubmit, formState:{errors } } = useForm({
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
<div className="h-screen flex flex-wrap items-center justify-around  w-full">
   <div className="flex   w-full mt-5 mb-5 items-center justify-center h-3">
    <FloatingDockDemo/>
    </div>
    (<div
      className="max-w-md mt-5 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Unleashing world
      </h2>
      <TextGenerateEffectDemo/>
      <form className="my-8" onSubmit={handleSubmit(onSubmit) }>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input {...register("firstname",{required:true})} id="firstname" placeholder="Tyler" type="text" />
            {errors.firstname && <p>{errors.firstname.message}</p>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input {...register("lastname",{required:true})} id="lastname" placeholder="Durden" type="text" />
            {errors.lastname && <p>{errors.lastname.message}</p>}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input {...register("email",{required:true})} id="email" placeholder="projectmayhem@fc.com" type="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input {...register("password",{required:true})} id="password" placeholder="••••••••" type="password" />
          {errors.password && <p>{errors.password.message}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input {...register("password",{required:true,maxLength:20})}  id="twitterpassword" placeholder="••••••••" type="password" />
          {errors.password && <p>{errors.password.message}</p>}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
         <Link href={'/sign-up'}> Sign up</Link> &rarr;

          <BottomGradient />
        </button>
       <div className="flex  w-full justify-end">
       <p className=" mt-3 "> Don't have Account <Link className="font-bold" href={'/sign-in'}> Sign In</Link></p>
       </div>

        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
{/* 
        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit">
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit">
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit">
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
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
