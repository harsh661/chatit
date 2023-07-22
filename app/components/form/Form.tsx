"use client"

import React, { useCallback, useState } from "react"
import Input from "./Input"
import Heading from "./Heading"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Button from "../Button"
import SocialButton from "./SocialButton"
import { AiOutlineGoogle } from 'react-icons/ai'

type Variant = "Login" | "Register"

const Form = () => {
  const [variant, setVariant] = useState<Variant>("Login")
  const [isLoading, setIsLoading] = useState(false)

  const changeVariant = useCallback(() => {
    if (variant === "Login") {
      setVariant("Register")
    } else {
      setVariant("Login")
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === "Register") {
      //register
    }

    if (variant === "Login") {
      //login
    }
  }

  const socialLogin = () => {
    //sociallogin
  }

  return (
    <div className="w-full mx-auto max-w-sm text-sm flex flex-col gap-5">
      <Heading
        title={variant === "Login" ? "Welcome back" : "Get started"}
        subtitle={
          variant === "Login"
            ? "Sign in to your account"
            : "Register new account"
        }
      />

      <SocialButton icon={AiOutlineGoogle} onClick={()=> socialLogin()}/>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        {variant === "Register" && (
          <Input placeholder="John doe" id="name" label="Name" errors={errors} register={register} />
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          errors={errors}
          register={register}
          placeholder="john@email.com"
        />
        <Input
          id="pass"
          type="password"
          label="Password"
          errors={errors}
          register={register}
          placeholder="•••••••"
        />
        
        <Button type="submit" label={variant}/>

        <div className="text-dark-text text-center">
          <span>{variant === 'Login' ? "Don't have an account? ": "Have an account? "}</span>
          <span onClick={changeVariant} className="underline text-white cursor-pointer">{variant === 'Login'? 'Register': 'Login'} now</span>
        </div>
      </form>
    </div>
  )
}

export default Form
