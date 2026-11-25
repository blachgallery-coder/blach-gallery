import Link from "next/link";
import type { BlogArticle } from "@/lib/blog-articles";
import { SITE_URL } from "@/lib/seo";

export function blogArticleJsonLd(article: BlogArticle, lang: "fr" | "en" = "fr") {
  const url = `${SITE_URL}${lang === "en" ? "/en" : ""}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        inLanguage: lang === "en" ? "en" : "fr-FR",
        mainEntityOfPage: url,
        author: { "@id": `${SITE_URL}/#blach` },
        publisher: { "@id": `${SITE_URL}/#gallery` }
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        }))
      }
    ]
  };
}

export function BlogArticleView({ article, lang = "fr", altHref }: { article: BlogArticle; lang?: "fr" | "en"; altHref?: string }) {
  const en = lang === "en";
  const updated = new Date(article.updatedAt).toLocaleDateString(en ? "en-GB" : "fr-FR", { day: "numeric", month: "long", year: "numeric" });
  return (
    <article className="page-shell container blog-article" lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogArticleJsonLd(article, lang)) }} />
      <p className="eyebrow">
        <Link href={en ? "/en/blog" : "/blog"}>Blog Fluxus</Link>
        {altHref && (
          <>
            {" · "}
            <Link href={altHref} hrefLang={en ? "fr" : "en"}>
              {en ? "Version française" : "English version"}
            </Link>
          </>
        )}
      </p>
      <h1 className="page-title">{article.title}</h1>
      <p className="muted">
        {en ? "Updated" : "Mis à jour le"} {updated} · BLACH® · BLACH GALLERY
      </p>
      <p className="page-intro">{article.intro}</p>

      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {section.image && (
            <figure className="blog-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={section.image.src}
                alt={section.image.alt}
                width={section.image.width}
                height={section.image.height}
                loading="lazy"
              />
              {section.image.caption && <figcaption className="muted">{section.image.caption}</figcaption>}
            </figure>
          )}
          {section.bullets && (
            <ul>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section>
        <h2>{en ? "FAQ" : "Questions fréquentes"}</h2>
        {article.faq.map((item) => (
          <div key={item.q} className="faq-item">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{en ? "Read more" : "Pour aller plus loin"}</h2>
        <ul>
          {article.links.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
