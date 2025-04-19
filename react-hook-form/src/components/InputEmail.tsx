import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export default function InputEmail({
  register,
  error,
}: {
  register: UseFormRegisterReturn;
  error?: FieldError;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        {...register}
        className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
}