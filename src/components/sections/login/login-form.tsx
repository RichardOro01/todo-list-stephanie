"use client";

import React, { FormEventHandler, useState } from "react";
import { paths } from "@/config";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import InputPassword from "@/components/common/input-password";
import ButtonPrimary from "@/components/common/button-primary";
import Image from "next/image";
import lock from "@/assets/icons/lock.svg";
import { loginSchema } from "./schemas";
import Loading from "@/components/common/loading";
import { ZodError } from "zod";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const dataForm = new FormData(event.currentTarget);
      const password = dataForm.get("password");
      loginSchema.parse(password);
      const res = await signIn("credentials", {
        password,
        redirect: false,
      });
      if (res?.status === 401) {
        setError("Contraseña incorrecta");
        setLoading(false);
      } else if (res?.status === 200) {
        router.replace(returnTo || paths.app);
      }
    } catch (error) {
      if (error instanceof ZodError) setError(error.issues[0].message);
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
      <InputPassword
        error={!!error}
        helperText={error}
        onChange={() => setError("")}
        name="password"
        startAdornment={<Image src={lock} alt="lock" />}
      />
      <ButtonPrimary className="w-full">
        {loading ? <Loading color="white" /> : "Iniciar sesión"}
      </ButtonPrimary>
    </form>
  );
};

export default LoginForm;
