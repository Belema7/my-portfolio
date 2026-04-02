import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeroNavbar } from "@/components/HeroNavbar"
import { personalInfo } from "@/data/personal"

export function Hero() {
    const { name, title, valueStatement } = personalInfo

    return (
        <section
            id="hero"
            aria-label="Introduction"
            className="relative isolate min-h-screen"
        >
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6">
                {/* Navbar */}
                <HeroNavbar />

                {/* Main Hero Content */}
                <div className="flex flex-1 items-center justify-center py-10">
                    <div className="w-full max-w-4xl">
                        {/* Hero Card */}
                        <div className="relative rounded-2xl border border-(--surface-border) bg-white dark:bg-black/40 px-8 py-12 shadow-2xl shadow-black/20 dark:shadow-black/40 dark:backdrop-blur-3xl">


                            <div className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full border border-(--surface-border) bg-white/50 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-xl sm:hidden">
                                <Image
                                    src="/avatar.jpg"
                                    alt={`${name} avatar`}
                                    width={112}
                                    height={112}
                                    className="h-28 w-28 rounded-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">

                                {/* Left Side Text */}
                                <div className="pt-14 text-center sm:pt-0 sm:text-left">
                                    <p className="text-sm font-medium text-(--color-text-secondary)">
                                        Hello, I’m
                                    </p>

                                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-(--color-primary) sm:text-5xl">
                                        {name}
                                    </h1>

                                    <p className="mt-3 text-lg font-semibold text-(--color-accent) sm:text-xl">
                                        {title}
                                    </p>

                                    <p className="mt-5 max-w-xl text-base leading-relaxed text-(--color-text-secondary) sm:text-lg">
                                        {valueStatement}
                                    </p>

                                    {/* Buttons */}
                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <Button
                                            asChild
                                            className="bg-cyan-400 text-black hover:bg-cyan-300 rounded-lg px-6 py-6 text-base font-medium"
                                        >
                                            <a href="#contact">Contact</a>
                                        </Button>

                                        <Button
                                            asChild
                                            variant="outline"
                                            className="bg-transparent border-(--surface-border) text-(--color-text-primary) hover:bg-black/5 dark:hover:bg-white/10 rounded-lg px-6 py-6 text-base font-medium"
                                        >
                                            <a href="#projects">Projects</a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Profile Image */}
                                <div className="hidden shrink-0 sm:block">
                                    <div className="h-56 w-56 rounded-full border border-[var(--surface-border)] bg-white/50 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                                        <Image
                                            src="/avatar.jpg"
                                            alt={`${name} avatar`}
                                            width={208}
                                            height={208}
                                            className="h-52 w-52 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-2">
                    <div className="mx-auto w-fit animate-bounce">
                        <a
                            href="#skills"
                            className="text-(--color-text-secondary) hover:text-(--color-accent)"
                        >
                            ↓
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
