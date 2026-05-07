"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/data";
import { ProductGrid } from "@/components/product-grid";

type ShopFiltersProps = {
  products: Product[];
};

export function ShopFilters({ products }: ShopFiltersProps) {
  const [price, setPrice] = useState("all");
  const [style, setStyle] = useState("all");
  const [artist, setArtist] = useState("all");
  const [format, setFormat] = useState("all");

  const styles = [...new Set(products.map((product) => product.style))];
  const artists = [...new Set(products.map((product) => product.artist))];
  const formats = [...new Set(products.map((product) => product.format))];

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const priceMatch =
          price === "all" ||
          (price === "under-1300" && product.price < 1300) ||
          (price === "1300-1700" && product.price >= 1300 && product.price <= 1700) ||
          (price === "1700-plus" && product.price > 1700);

        return (
          priceMatch &&
          (style === "all" || product.style === style) &&
          (artist === "all" || product.artist === artist) &&
          (format === "all" || product.format === format)
        );
      }),
    [artist, format, price, products, style]
  );

  return (
    <div className="shop-layout">
      <aside className="filters">
        <label>
          Prix
          <select value={price} onChange={(event) => setPrice(event.target.value)}>
            <option value="all">Tous</option>
            <option value="under-1300">Moins de 1300 €</option>
            <option value="1300-1700">1300 € à 1700 €</option>
            <option value="1700-plus">Plus de 1700 €</option>
          </select>
        </label>
        <label>
          Style
          <select value={style} onChange={(event) => setStyle(event.target.value)}>
            <option value="all">Tous</option>
            {styles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Artiste
          <select value={artist} onChange={(event) => setArtist(event.target.value)}>
            <option value="all">Tous</option>
            {artists.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Format
          <select value={format} onChange={(event) => setFormat(event.target.value)}>
            <option value="all">Tous</option>
            {formats.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </aside>
      <div>
        <p className="results-count">{filteredProducts.length} oeuvre(s) correspondant à votre recherche</p>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
