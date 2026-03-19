import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-white">
        CertiChain 🚀
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/generate" className="hover:text-blue-400">Generate</Link>
        <Link to="/verify" className="hover:text-blue-400">Verify</Link>
      </div>

    </nav>
  );
}