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
    <main className="p-8">
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
    </main>
  );
}



