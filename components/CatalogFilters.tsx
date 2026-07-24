"use client";

interface FiltersProps {
  category: string;
  setCategory: (value: string) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
}

export default function CatalogFilters({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
}: FiltersProps) {

  return (
    <aside className="border rounded-xl p-5 space-y-6">

      <h2 className="text-xl font-bold">
        Filtros
      </h2>


      <div>
        <h3 className="font-semibold mb-3">
          Categoría
        </h3>

        <label className="block">
          <input
            type="radio"
            checked={category === "Todas"}
            onChange={() => setCategory("Todas")}
          />
          <span className="ml-2">
            Todas
          </span>
        </label>


        <label className="block">
          <input
            type="radio"
            checked={category === "Tecnología"}
            onChange={() => setCategory("Tecnología")}
          />
          <span className="ml-2">
            Tecnología
          </span>
        </label>


        <label className="block">
          <input
            type="radio"
            checked={category === "Accesorios"}
            onChange={() => setCategory("Accesorios")}
          />
          <span className="ml-2">
            Accesorios
          </span>
        </label>

      </div>


      <div>

        <h3 className="font-semibold mb-3">
          Precio máximo
        </h3>

        <input
          type="range"
          min="0"
          max="2000"
          value={maxPrice}
          onChange={(e)=>
            setMaxPrice(Number(e.target.value))
          }
          className="w-full"
        />

        <p>
          Hasta ${maxPrice}
        </p>

      </div>


    </aside>
  );
}
