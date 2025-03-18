import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <nav className="p-4 rounded-lg">
        <ul className="flex space-x-4">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
