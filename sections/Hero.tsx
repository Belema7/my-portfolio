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
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/grid-bg.png')`,
                }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 z-1 bg-black/70" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 text-white">
                {/* Navbar */}
                <HeroNavbar />

                {/* Main Hero Content */}
                <div className="flex flex-1 items-center justify-center py-10">
                    <div className="w-full max-w-4xl">
                        {/* Hero Card */}
                        <div className="relative rounded-2xl border border-white/10 bg-white/5 px-8 py-12 shadow-2xl shadow-black/40 backdrop-blur-2xl">


                            <Image
                                src="/avatar.jpg"
                                alt={`${name} avatar`}
                                width={112}
                                height={112}
                                className="absolute -top-16 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border border-white/20 object-cover shadow-xl sm:hidden"
                            />

                            <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">

                                {/* Left Side Text */}
                                <div className="pt-14 text-center sm:pt-0 sm:text-left">
                                    <p className="text-sm font-medium text-white/70">
                                        Hello, I’m
                                    </p>

                                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        {name}
                                    </h1>

                                    <p className="mt-3 text-lg font-semibold text-cyan-300 sm:text-xl">
                                        {title}
                                    </p>

                                    <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
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
                                            className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-lg px-6 py-6 text-base font-medium"
                                        >
                                            <a href="#projects">Projects</a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Profile Image */}
                                <div className="hidden flex-shrink-0 sm:block">
                                    <Image
                                        src="/avatar.jpg"
                                        alt={`${name} avatar`}
                                        width={208}
                                        height={208}
                                        className="h-52 w-52 rounded-full border border-white/20 object-cover shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-2">
                    <div className="mx-auto w-fit animate-bounce">
                        <a
                            href="#skills"
                            className="text-white/60 hover:text-cyan-300"
                        >
                            ↓
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
