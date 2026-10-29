import { shopifyImage } from "@/lib/gallery";

type ArtworkImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
};

const WIDTHS = [480, 800, 1200, 1600, 2000];

// Image Shopify CDN redimensionnée côté CDN (aucune dépendance), proportions d'origine conservées.
export function ArtworkImage({ src, alt, width, height, sizes, priority, className }: ArtworkImageProps) {
  const widths = WIDTHS.filter((w) => w <= width);
  if (!widths.length) widths.push(width);
  const srcSet = widths.map((w) => `${shopifyImage(src, w)} ${w}w`).join(", ");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={shopifyImage(src, widths[Math.min(1, widths.length - 1)])}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
