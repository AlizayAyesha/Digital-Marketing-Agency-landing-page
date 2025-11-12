import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Digital Marketing Agency</h3>
            <p className="text-neutral-300">
              Custom tailored solutions for your business. We are a team of creatives who are excited to help you grow your business.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/website-design" className="text-neutral-300 hover:text-white">Website Design</Link></li>
              <li><Link href="/graphic-design" className="text-neutral-300 hover:text-white">Graphic Design</Link></li>
              <li><Link href="/shopify-stores" className="text-neutral-300 hover:text-white">Shopify Stores</Link></li>
              <li><Link href="/brands" className="text-neutral-300 hover:text-white">Branding</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-neutral-300 hover:text-white">Contact</Link></li>
              <li><Link href="/pricing" className="text-neutral-300 hover:text-white">Pricing</Link></li>
              <li><Link href="/book" className="text-neutral-300 hover:text-white">Book a Call</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400">&copy; 2024 Digital Marketing Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
