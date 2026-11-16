"use client";

import { useState } from "react";

type Props = { src: string; title: string; alt: string; width: number; height: number; nsfw?: boolean };

/** Image floutée tant que le visiteur ne clique pas (œuvres de nu). */
export function RevealImage({ src, title, alt, width, height, nsfw }: Props) {
  const [shown, setShown] = useState(!nsfw);
  return (
    <figure style={{ margin: 0, position: "relative" }}>
      <button
        type="button"
        onClick={() => setShown(true)}
        aria-label={shown ? title : `Afficher l'œuvre « ${title} » (nu artistique)`}
        style={{ all: "unset", cursor: shown ? "default" : "pointer", display: "block", position: "relative" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          style={{ width: "100%", height: "auto", filter: shown ? "none" : "blur(24px)", transition: "filter .3s" }}
        />
        {!shown ? (
          <span
            style={{
              position: "absolute", inset: 0, display: "grid", placeItems: "center",
              color: "#fff", fontWeight: 700, textAlign: "center", padding: "1rem", background: "rgba(0,0,0,.35)"
            }}
          >
            Nu artistique — cliquer pour afficher
          </span>
        ) : null}
      </button>
      <span>{title}</span>
    </figure>
  );
}
