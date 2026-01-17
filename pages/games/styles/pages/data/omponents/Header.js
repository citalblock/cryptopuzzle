import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 p-4 shadow-lg fixed w-full z-10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-green-400">CryptoPlay</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-green-400">Home</Link></li>
          <li><Link href="/games" className="hover:text-green-400">Games</Link></li>
          <li><Link href="#benefits" className="hover:text-green-400">Benefits</Link></li>
          <li><Link href="#testimonials" className="hover:text-green-400">Testimonials</Link></li>
          <li><Link href="#about" className="hover:text-green-400">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
