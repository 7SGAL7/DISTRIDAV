"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "./productos";
import CatalogFilters from "@/components/CatalogFilters";

export default function Catalogo() {

    const [category, setCategory] = useState("Todas");
    const [maxPrice, setMaxPrice] = useState(2000);
    const [search, setSearch] = useState("");
    const result = products.filter((p) =>
        p.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
            <div
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
            </div>
            <br />
            <h1 className="text-4xl font-bold mb-6">
                Catálogo
            </h1>
            <input
                className="border rounded p-3 w-full mb-8"
                placeholder="Buscar productos..."
                onChange={(e)=>setSearch(e.target.value)}
            />
            <div className="grid md:grid-cols-4 gap-8">
                <CatalogFilters
                category={category}
                setCategory={setCategory}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                />
                <div className="md:col-span-3">
                    Productos aquí
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {result.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  );
}



