import Image from "next/image";

interface Product {
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">

      <div className="relative h-56">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover aspect-3/2"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-gray-500">
          {product.category}
        </p>

        <p className="font-semibold mt-2">
          ${product.price}
        </p>

        <button className="mt-4 bg-black text-white px-4 py-2 rounded">
          Ver producto
        </button>
      </div>

    </div>
  );
}
