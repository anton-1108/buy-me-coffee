import Image from "next/image";
import Left from "./auth/components/Left-login";
import ProfileSetup from "./_components/Profile";
import ProfileSetupForm from "./_components/Profile";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <ProfileSetupForm />
    </div>
  );
}
