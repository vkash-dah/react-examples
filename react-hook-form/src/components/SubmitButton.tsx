export default function SubmitButton({ label = "Submit" }: { label?: string }) {
    return (
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all"
      >
        {label}
      </button>
    );
  }