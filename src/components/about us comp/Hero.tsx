import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-yellow-400 text-black py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Get Your Papers Cooked to Perfection</h1>
        <p className="text-xl mb-8">Quality projects and assignments at student-friendly prices</p>
        <Link href="#pricing" className="bg-black text-yellow-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
          Get Started
        </Link>
      </div>
    </section>
  )
}

