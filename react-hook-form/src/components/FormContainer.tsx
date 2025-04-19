export default function FormContainer({ children }: { children: React.ReactNode }) {
    return (
      <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        {children}
      </div>
    );
  }