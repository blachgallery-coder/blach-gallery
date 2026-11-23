import Link from "next/link";
import type { BlogArticle } from "@/lib/blog-articles";
import { SITE_URL } from "@/lib/seo";

export function blogArticleJsonLd(article: BlogArticle) {
  const url = `${SITE_URL}/blog/${article.slug}`;
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
        inLanguage: "fr-FR",
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

export function BlogArticleView({ article }: { article: BlogArticle }) {
  const updated = new Date(article.updatedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  return (
    <article className="page-shell container blog-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogArticleJsonLd(article)) }} />
      <p className="eyebrow">
        <Link href="/blog">Blog</Link>
      </p>
      <h1 className="page-title">{article.title}</h1>
      <p className="muted">Mis à jour le {updated} · BLACH GALLERY</p>
      <p className="page-intro">{article.intro}</p>

      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
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
        <h2>Questions fréquentes</h2>
        {article.faq.map((item) => (
          <div key={item.q} className="faq-item">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Pour aller plus loin</h2>
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
