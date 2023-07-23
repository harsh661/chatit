"use client"

import React, { useCallback, useState } from "react"
import Input from "./Input"
import Heading from "./Heading"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Button from "../Button"
import SocialButton from "./SocialButton"
import { AiOutlineGoogle } from "react-icons/ai"
import axios from "axios"
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react"

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
      axios
        .post("/api/register", data)
        .catch(() => toast.error("Something went wrong"))
        .finally(() => setIsLoading(false))
    }

    if (variant === "Login") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((response) => {
          if (response?.error) {
            toast.error("Incorrect credentials")
          }

          if (response?.ok && !response?.error) {
            toast.success("Logged in successfully")
          }
        })
        .finally(() => setIsLoading(false))
    }
  }

  const socialLogin = (action: string) => {
    setIsLoading(true)

    signIn(action, { redirect: false })
      .then((response) => {
        if (response?.error) {
          toast.error("Something went wrong")
        }

        if (response?.ok && !response?.error) {
          toast.success("Logged in successfully")
        }
      })
      .finally(() => setIsLoading(false))
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

      <SocialButton
        icon={AiOutlineGoogle}
        onClick={() => socialLogin("google")}
      />

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        {variant === "Register" && (
          <Input
            id="name"
            label="Name"
            disabled={isLoading}
            errors={errors}
            register={register}
            placeholder="John doe"
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          disabled={isLoading}
          errors={errors}
          register={register}
          placeholder="john@email.com"
        />
        <Input
          id="password"
          type="password"
          label="Password"
          disabled={isLoading}
          errors={errors}
          register={register}
          placeholder="•••••••"
        />

        <Button type="submit" label={variant} />

        <div className="text-dark-text text-center">
          <span>
            {variant === "Login"
              ? "Don't have an account? "
              : "Have an account? "}
          </span>
          <span
            onClick={changeVariant}
            className="underline text-white cursor-pointer"
          >
            {variant === "Login" ? "Register" : "Login"} now
          </span>
        </div>
      </form>
    </div>
  )
}

export default Form
