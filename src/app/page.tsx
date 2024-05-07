import Image from "next/image";
import { Landing } from "./components/Landing";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Landing />
    </main>
  );
}
