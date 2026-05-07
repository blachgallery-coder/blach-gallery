import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { getProductsByTheme, getThemeBySlug, themePages } from "@/lib/data";

type ThemePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return themePages.map((theme) => ({ slug: theme.slug }));
}

export function generateMetadata({ params }: ThemePageProps): Metadata {
  const theme = getThemeBySlug(params.slug);

  if (!theme) {
    return {};
  }

  return {
    title: theme.h1,
    description: theme.intro.slice(0, 155)
  };
}

export default function ThemePage({ params }: ThemePageProps) {
  const theme = getThemeBySlug(params.slug);

  if (!theme) {
    notFound();
  }

  const themeProducts = getProductsByTheme(params.slug);

  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">Page thématique</p>
        <h1 className="page-title">{theme.h1}</h1>
        <p className="page-intro">{theme.intro}</p>
      </div>
      <ProductGrid products={themeProducts} />
    </section>
  );
}
