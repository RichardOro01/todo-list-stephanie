import LoginForm from "@/components/sections/login/login-form";
import React from "react";

const LoginPage = async () => {
  return (
    <section className="flex justify-center items-center flex-1 h-screen">
      <div className="border-2 border-solid rounded border-primary-900 dark:border-primary-600 px-8 py-6 shadow-2xl">
        <h3 className="text-center mb-8 text-lg font-semibold">Bienvenida</h3>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
