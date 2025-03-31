import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";
import AuthVerificationStep from "./auth-verification-step";

export default function SignInForm() {
  return (
    <SignIn.Root path="/sign-in" routing="path">
      {/* Start Step */}
      <SignIn.Step name="start" className="space-y-5">
        {/* Email Input */}
        <Clerk.Field name="identifier" className="space-y-1">
          <Clerk.Label className="block text-base text-gray-700">
            Correo electrónico
          </Clerk.Label>
          <Clerk.Input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            placeholder="partyspot@example.com"
            required
            autoComplete="email"
          />
          <Clerk.FieldError className="text-sm text-red-600" />
        </Clerk.Field>

        {/* Password Input */}
        <Clerk.Field name="password" className="space-y-1">
          <Clerk.Label className="block text-base text-gray-700">
            Contraseña
          </Clerk.Label>
          <Clerk.Input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            placeholder="••••••••••"
            type="password"
            required
            autoComplete="current-password"
          />
          <Clerk.FieldError className="text-sm text-red-600" />
        </Clerk.Field>

        {/* Forgot password */}
        <div className="flex justify-end">
          <Link
            href="/sign-in/forgot-password"
            className="cursor-pointer text-sm font-medium text-pink-600 hover:text-pink-700"
          >
            Olvidé mi contraseña
          </Link>
        </div>

        {/* Sign In Button */}
        <SignIn.Action
          submit
          className="w-full cursor-pointer rounded-md bg-pink-600 px-3 py-2 text-center font-medium text-white shadow-sm transition-colors hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none"
        >
          Iniciar Sesión
        </SignIn.Action>

        {/* Social Login Options */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Iniciar con</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <Clerk.Connection
              name="google"
              className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <Clerk.Icon className="h-5 w-5" />
            </Clerk.Connection>
            <Clerk.Connection
              name="facebook"
              className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <Clerk.Icon className="h-5 w-5" />
            </Clerk.Connection>
            <Clerk.Connection
              name="apple"
              className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <Clerk.Icon className="h-5 w-5" />
            </Clerk.Connection>
          </div>
        </div>
      </SignIn.Step>

      {/* Use the other components */}
      <AuthVerificationStep />
      {/* <AuthChooseStrategyStep /> */}
      {/* <ForgotPasswordStep /> */}
      {/* <ResetPasswordStep /> */}
    </SignIn.Root>
  );
}
