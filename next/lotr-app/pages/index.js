import Link from "next/link";
import Overview from "./volumes";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Link href="/">Overview</Link>
    </div>
  );
}
