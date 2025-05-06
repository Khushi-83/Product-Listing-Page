// components/Header.tsx
'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/products" className="text-2xl font-bold">PLP</Link>
      <nav className="space-x-4">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Sign Up</Link>
      </nav>
    </header>
  );
}
