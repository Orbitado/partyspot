import * as Clerk from "@clerk/elements/common";

interface AuthEmailVerificationStepProps {
  title: string;
  description: string;
  resendButtonText: string;
  submitAction: React.ReactNode;
  resendAction?: React.ReactNode;
}

export default function AuthEmailVerificationStep({
  title,
  description,
  resendButtonText,
  submitAction,
  resendAction
}: AuthEmailVerificationStepProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Clerk.Field name="code" className="space-y-1">
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
      <div className="flex flex-col space-y-2">
        {submitAction}
        {resendAction || (
          <button
            type="button"
            className="text-center text-sm font-medium text-pink-600 hover:text-pink-700"
          >
            {resendButtonText}
          </button>
        )}
      </div>
    </div>
  );
}
