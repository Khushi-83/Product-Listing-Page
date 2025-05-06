// app/products/page.tsx
import { fetchProducts, Product } from '../../lib/api';
import ProductCard from '../../components/ProductCard';

export const dynamic = 'force-dynamic'; // SSR enabled :contentReference[oaicite:3]{index=3}

export default async function ProductsPage() {
  const products: Product[] = await fetchProducts();

  return (
    <section className="p-4 grid gap-6
                       grid-cols-1 
                       sm:grid-cols-2 
                       lg:grid-cols-4">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </section>
  );
}
