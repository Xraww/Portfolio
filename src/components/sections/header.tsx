import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
    return (
        <header className="mt-10 flex flex-col gap-4 mx-4 md:mx-0">
            <div className="flex items-center gap-4">
                <Avatar className="w-25 h-25">
                    <AvatarImage src="/images/profile-picture.jpg" alt="Xraww Profile Picture"/>
                    <AvatarFallback>X</AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold md:text-5xl font-sans">Alexis Bonzi</h1>
                    <p className="text-md font-semibold font-mono">Fullstack Developer</p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-muted-foreground italic font-sans text-sm md:text-base">
                    I&apos;m a fullstack developer with a passion for creating beautiful and functional web applications. Always ready to learn & work hard.
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
                        <Link href="mailto:contact@xraww.fr" target="_blank">
                            Email
                        </Link>
                    </Button>

                    <Button variant="outline" size="sm" className="font-mono" asChild>
                        <Link href="/cv">
                            Web CV
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}