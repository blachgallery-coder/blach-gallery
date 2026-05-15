import Image from "next/image";
import Link from "next/link";
import type { NewsEvent } from "@/lib/collective";

export function NewsBoard({ events }: { events: NewsEvent[] }) {
  return (
    <div className="news-grid">
      {events.map((event) => (
        <article key={event.slug} className="news-card">
          <div className="news-card-media">
            <Image src={event.image} alt={event.title} fill sizes="(max-width: 960px) 100vw, 33vw" />
          </div>
          <div className="news-card-copy">
            <p className="eyebrow">{event.dateLabel}</p>
            <h2>{event.title}</h2>
            <p className="news-card-venue">{event.venue}</p>
            <p>{event.excerpt}</p>
            <Link href={event.href} className="news-card-link">
              {event.ctaLabel}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
