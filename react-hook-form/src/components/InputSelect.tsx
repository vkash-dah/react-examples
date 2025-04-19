export default function InputSelect({
    label,
    register,
    error,
    options,
  }: {
    label: string;
    register: any;
    error?: any;
    options: { value: string; label: string }[];
  }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select
          {...register}
          className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
      </div>
    );
  }