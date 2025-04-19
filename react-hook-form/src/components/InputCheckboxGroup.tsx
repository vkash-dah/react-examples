export default function InputCheckboxGroup({
    label,
    name,
    options,
    register,
  }: {
    label: string;
    name: string;
    options: string[];
    register: any;
  }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-2 space-y-1">
          {options.map((opt) => (
            <label key={opt} className="flex items-center">
              <input type="checkbox" value={opt.toLowerCase()} {...register(name)} />
              <span className="ml-2">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }