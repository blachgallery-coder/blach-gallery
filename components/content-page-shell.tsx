import type { ReactNode } from "react";

type ContentPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function ContentPageShell({ eyebrow, title, description, children }: ContentPageShellProps) {
  return (
    <section className="page-shell container">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{description}</p>
      </div>
      {children ?? null}
    </section>
  );
}
