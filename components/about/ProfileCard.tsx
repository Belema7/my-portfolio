import Image from "next/image";
import { personal } from "@/data/personal";
export function ProfileCard() {
  const { name, role, location, avatarUrl, availabilityBadge } = personal;

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="relative mx-auto mb-5 aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-xl border border-[var(--surface-border)] bg-black/5 dark:bg-white/5">
        <Image
          src={avatarUrl}
          alt={`${name} profile`}
          fill
          className="object-cover object-top"
          sizes="220px"
          priority
        />
      </div>
      <div className="text-center">
        <h2 className="font-heading text-xl font-bold text-[var(--color-primary)]">
          {name}
        </h2>
        <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
          {role}
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Based in {location}
        </p>
        <div className="mt-4 flex justify-center">
          <span className="accent-badge">{availabilityBadge}</span>
        </div>
      </div>
    </div>
  );
}
