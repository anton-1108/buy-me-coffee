import Image from "next/image";
import Left from "./auth/components/Left-login";
import Dashboard from "./_components/Home";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Dashboard />
    </div>
  );
}
