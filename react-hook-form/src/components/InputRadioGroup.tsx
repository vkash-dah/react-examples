export default function InputRadioGroup({
    label,
    name,
    options,
    register,
    error,
  }: {
    label: string;
    name: string;
    options: string[];
    register: any;
    error?: any;
  }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-2 space-x-4">
          {options.map((opt) => (
            <label key={opt}>
              <input type="radio" value={opt.toLowerCase()} {...register(name)} />
              <span className="ml-1">{opt}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-sm text-red-500 mt-1">This field is required</p>}
      </div>
    );
  }