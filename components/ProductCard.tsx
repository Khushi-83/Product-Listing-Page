// components/ProductCard.tsx
import Image from 'next/image';
import { Product } from '../lib/api';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="border rounded-lg p-4 bg-white flex flex-col items-center">
      <div className="w-32 h-32 relative mb-4">
        <Image src={product.image} alt={product.title} fill style={{ objectFit: 'contain' }} />
      </div>
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-xl font-bold">${product.price}</p>
    </article>
  );
}
