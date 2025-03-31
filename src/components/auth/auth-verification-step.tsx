import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";

export default function AuthVerificationStep() {
  return (
    <SignIn.Step name="verifications" className="space-y-5">
      {/* Email Code Verification Strategy */}
      <SignIn.Strategy name="email_code">
        <h2 className="text-xl font-semibold text-gray-900">
          Verificá tu email
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Enviamos un código a{" "}
          <span className="font-medium">
            <SignIn.SafeIdentifier />
          </span>
        </p>
        <Clerk.Field name="code" className="mt-4 space-y-1">
          <Clerk.Label className="block text-sm font-medium text-gray-700">
            Código de verificación
          </Clerk.Label>
          <Clerk.Input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            placeholder="Código de 6 dígitos"
            maxLength={6}
            pattern="\d{6}"
            inputMode="numeric"
            autoComplete="one-time-code"
          />
          <Clerk.FieldError className="text-sm text-red-600" />
        </Clerk.Field>
        <SignIn.Action
          submit
          className="mt-4 w-full rounded-md bg-pink-600 px-3 py-2 text-center font-medium text-white shadow-sm transition-colors hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none"
        >
          Verificar
        </SignIn.Action>
        <SignIn.Action
          resend
          className="mt-2 block w-full text-center text-sm font-medium text-pink-600 hover:text-pink-700"
          fallback={({ resendableAfter }) => (
            <p className="mt-2 text-center text-sm text-gray-500">
              Podrás reenviar el código en {resendableAfter} segundos
            </p>
          )}
        >
          Reenviar código
        </SignIn.Action>
        <SignIn.Action
          navigate="choose-strategy"
          className="mt-4 block text-center text-sm text-gray-500 hover:text-gray-700"
        >
          Usar otro método
        </SignIn.Action>
      </SignIn.Strategy>

      {/* Password Verification Strategy */}
      <SignIn.Strategy name="password">
        <h2 className="text-xl font-semibold text-gray-900">
          Ingresá tu contraseña
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Para la cuenta{" "}
          <span className="font-medium">
            <SignIn.SafeIdentifier />
          </span>
        </p>
        <Clerk.Field name="password" className="mt-4 space-y-1">
          <Clerk.Label className="block text-sm font-medium text-gray-700">
            Contraseña
          </Clerk.Label>
          <Clerk.Input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            type="password"
            placeholder="••••••••••"
            required
            autoComplete="current-password"
          />
          <Clerk.FieldError className="text-sm text-red-600" />
        </Clerk.Field>
        <div className="mt-2 flex justify-end">
          <Link
            href="/sign-in/forgot-password"
            className="cursor-pointer text-sm font-medium text-pink-600 hover:text-pink-700"
          >
            Olvidé mi contraseña
          </Link>
        </div>
        <SignIn.Action
          submit
          className="mt-4 w-full rounded-md bg-pink-600 px-3 py-2 text-center font-medium text-white shadow-sm transition-colors hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none"
        >
          Continuar
        </SignIn.Action>
        <SignIn.Action
          navigate="choose-strategy"
          className="mt-4 block text-center text-sm text-gray-500 hover:text-gray-700"
        >
          Usar otro método
        </SignIn.Action>
      </SignIn.Strategy>

      {/* Reset Password Email Code Verification Strategy */}
      <SignIn.Strategy name="reset_password_email_code">
        <h2 className="text-xl font-semibold text-gray-900">
          Verificá tu email
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Enviamos un código a{" "}
          <span className="font-medium">
            <SignIn.SafeIdentifier />
          </span>{" "}
          para restablecer tu contraseña
        </p>
        <Clerk.Field name="code" className="mt-4 space-y-1">
          <Clerk.Label className="block text-sm font-medium text-gray-700">
            Código de verificación
          </Clerk.Label>
          <Clerk.Input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            placeholder="Código de 6 dígitos"
            maxLength={6}
            pattern="\d{6}"
            inputMode="numeric"
            autoComplete="one-time-code"
          />
          <Clerk.FieldError className="text-sm text-red-600" />
        </Clerk.Field>
        <SignIn.Action
          submit
          className="mt-4 w-full rounded-md bg-pink-600 px-3 py-2 text-center font-medium text-white shadow-sm transition-colors hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none"
        >
          Verificar
        </SignIn.Action>
        <SignIn.Action
          resend
          className="mt-2 block w-full text-center text-sm font-medium text-pink-600 hover:text-pink-700"
          fallback={({ resendableAfter }) => (
            <p className="mt-2 text-center text-sm text-gray-500">
              Podrás reenviar el código en {resendableAfter} segundos
            </p>
          )}
        >
          Reenviar código
        </SignIn.Action>
        <SignIn.Action
          navigate="choose-strategy"
          className="mt-4 block text-center text-sm text-gray-500 hover:text-gray-700"
        >
          Usar otro método
        </SignIn.Action>
      </SignIn.Strategy>
    </SignIn.Step>
  );
}
