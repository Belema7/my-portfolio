import { personalInfo } from '@/data/personal';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { name } = personalInfo;

    return (
        <footer className="py-8 border-t border-[var(--color-border)] bg-[var(--color-secondary)]">
            <div className="container">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[var(--color-text-secondary)]">
                        © {currentYear} {name}. All rights reserved.
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                        Built with Next.js, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
