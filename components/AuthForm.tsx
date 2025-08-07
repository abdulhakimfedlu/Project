"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"


const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};
const AuthForm = ({type}:{type:FormType}) => {
  const formSchema = authFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const isSignIn = type ==="sign-in";
  return (
    <div className="card-border lg:min-w-[566px]" >
      <div className="flex flex-col gap-6 card py-14 px-10" >
        <div className="flex fle-row gap-2 justify-center">
          <Image src="/logo (1).svg" alt="logo" height={32} width={38} />
        <h1 className="text-primary-100">Adi Ai</h1>
        </div>
      <h3>Practice Job Interviews using Ai</h3>
      
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
        {!isSignIn &&<p>Name</p>}
        <p>Email</p>
        <p>Password</p>
        
        <Button className="btn" type="submit"> {isSignIn? "Sign In": "create an account"}</Button>
      </form>
    </Form>
    <p className="text-center">
      {isSignIn? 'No account yet?':'have an account already?'}
      <Link href={!isSignIn? '/sign-in': '/sign-up'} className="font-bold text-user-primary ml-1">
      {isSignIn? 'sign-up': 'sign-in'}
      </Link>

    </p>
    </div>
    </div>
  );
};

export default AuthForm;