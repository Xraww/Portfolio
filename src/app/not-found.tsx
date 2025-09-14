"use client"

import Footer from "@/components/sections/footer";
import GotoButton from "@/components/ui/goto-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NotFound() {
    return (
        <>
            <section className="flex flex-col gap-4 mx-4 md:mx-0 my-4">
                <GotoButton href="/" text="Back to Home" type="back"/>

                <h1 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">404 - Page Not Found</h1>
                
                <p className="text-md text-muted-foreground font-sans">
                    The page you are looking for does not exist. But don&apos;t worry, you can find everything you need on my website !
                </p>

                <div className="relative flex justify-center items-center my-12 md:my-8">
                    <div className="relative">
                        <Avatar className="size-32 md:size-36 ring-2 ring-primary ring-offset-2 ring-offset-background transition-transform duration-300 hover:scale-105">
                            <AvatarImage src="/images/profile-picture.jpg" alt="Profile Picture" className="object-cover" />
                            <AvatarFallback>X</AvatarFallback>
                        </Avatar>

                        <div className="absolute -top-11 -right-0 animate-bounce">
                            <div className="relative">
                                <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-2xl text-sm font-mono font-bold shadow-lg whitespace-nowrap">
                                    Are you lost ?
                                </div>
                                
                                <div className="absolute h-3 w-3 bg-primary transform rotate-45 bottom-[-4px] right-16"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <p className="text-md text-muted-foreground font-sans">
                        Go back to the : <Link href="/" className="font-mono text-primary font-bold">Home page</Link>.
                    </p>

                    <p className="text-md text-muted-foreground font-sans">
                        All my projects are available on my : <Link href="/projects" className="font-mono text-primary font-bold">Projects page</Link>.
                    </p>

                    <p className="text-md text-muted-foreground font-sans">
                        You can also contact me on my : <Link href="/cv" className="font-mono text-primary font-bold">CV page</Link>.
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Button variant="outline" size="sm" className="font-mono" asChild>
                            <Link href="https://github.com/Xraww" target="_blank">
                                GitHub
                            </Link>
                        </Button>

                        <Button variant="outline" size="sm" className="font-mono" asChild>
                            <Link href="https://www.linkedin.com/in/xraww/" target="_blank">
                                LinkedIn
                            </Link>
                        </Button>

                        <Button variant="outline" size="sm" className="font-mono" asChild>
                            <Link href="https://x.com/Xraaww" target="_blank">
                                X
                            </Link>
                        </Button>

                        <Button variant="outline" size="sm" className="font-mono" asChild>
                            <Link href="mailto:contact.xraww@gmail.com" target="_blank">
                                Email
                            </Link>
                        </Button>

                        <Button variant="outline" size="sm" className="font-mono" asChild>
                            <Link href="/cv">
                                CV
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}