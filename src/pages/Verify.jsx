import { useState } from "react";

export default function Verify() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const verifyCert = () => {
    let certs = JSON.parse(localStorage.getItem("certs")) || [];

    const found = certs.find((c) => c.id === input);

    if (found) {
      setResult({
        status: "valid",
        data: found,
      });
    } else {
      setResult({
        status: "invalid",
      });
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Verify Certificate
      </h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter Certificate ID"
        className="border p-3 w-full rounded mb-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={verifyCert}
        className="bg-green-600 text-white px-6 py-2 rounded w-full"
      >
        Verify
      </button>

      {/* Result */}
      {result && (
        <div className="mt-6 p-6 border rounded shadow text-center">

          {result.status === "valid" ? (
            <>
              <h3 className="text-green-600 text-xl font-bold mb-2">
                ✅ Certificate Verified
              </h3>

              <p><strong>Name:</strong> {result.data.name}</p>
              <p><strong>ID:</strong> {result.data.id}</p>
              <p><strong>Date:</strong> {result.data.date}</p>
            </>
          ) : (
            <h3 className="text-red-600 text-xl font-bold">
              ❌ Invalid Certificate
            </h3>
          )}

        </div>
      )}

    </div>
  );
}