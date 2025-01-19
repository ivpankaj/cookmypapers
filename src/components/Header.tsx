import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-yellow-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">cookmypapers</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="hover:text-yellow-200">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-yellow-200">Pricing</Link></li>
            <li><Link href="#contact" className="hover:text-yellow-200">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

