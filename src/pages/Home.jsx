import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-24 px-6">

      <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        CertiChain
      </h1>

      <p className="text-gray-300 mb-10 text-lg">
        Generate & Verify Certificates Instantly with QR Technology
      </p>

      <div className="flex justify-center gap-6">
        <Link
          to="/generate"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Generate
        </Link>

        <Link
          to="/verify"
          className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Verify
        </Link>
      </div>

    </div>
  );
}