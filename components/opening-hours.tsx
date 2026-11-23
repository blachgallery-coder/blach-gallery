import { GALLERY_PHONE, OPENING_HOURS, OPENING_HOURS_NOTE } from "@/lib/gallery";

export function OpeningHours() {
  return (
    <div className="muted">
      <p>
        <strong>Horaires d&apos;ouverture</strong>
      </p>
      <ul className="hours-list">
        {OPENING_HOURS.map((row) => (
          <li key={row.days}>
            {row.days} : {row.slots}
          </li>
        ))}
      </ul>
      <p>
        {OPENING_HOURS_NOTE} <a href={`tel:${GALLERY_PHONE.e164}`}>{GALLERY_PHONE.display}</a>
      </p>
    </div>
  );
}
