import Image from "next/image";
import { Landing } from "./components/Landing";

export default function LandingPage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Landing />
    </main>
  );
}
