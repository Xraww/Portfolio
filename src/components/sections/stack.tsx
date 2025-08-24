import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const stack = [
    {
        name: "React",
        sentence: "The first web library I learned and used",
        description: "The library created and maintained by @meta.",
        icon: "https://github.com/react.png",
    },
    {
        name: "Next.js",
        sentence: "The React framework I use to build web applications",
        description: "The React framework created and maintained by @vercel.",
        icon: "https://github.com/vercel.png",
    },
    {
        name: "TypeScript",
        sentence: "The programming language I use to build my web applications",
        description: "The programming language created and maintained by @microsoft.",
        icon: "https://imgs.search.brave.com/yfRmq4OLlA9rivmZvzhhMIfEyWVtoqo8WPBcl5sczSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXR5cGVzY3JpcHQt/bG9nby1pY29uLWRv/d25sb2FkLWluLXN2/Zy1wbmctZ2lmLWZp/bGUtZm9ybWF0cy0t/cHJvZ3JhbW1pbmct/bGFuZ3VhZ2UtbG9n/b3MtcGFjay1pY29u/cy0xMTc0OTY1LnBu/Zz9mPXdlYnAmdz0y/NTY",
    },
    {
        name: "Tailwind CSS",
        sentence: "The CSS framework I use to style my web applications",
        description: "The CSS framework created and maintained by @tailwindlabs.",
        icon: "https://github.com/tailwindlabs.png",
    },
    {
        name: "Shadcn UI",
        sentence: "The UI library I use to style my web applications",
        description: "The UI library created and maintained by @shadcn.",
        icon: "https://github.com/shadcn.png",
    },
    {
        name: "Prisma",
        sentence: "The ORM I use to interact with my database",
        description: "The ORM created and maintained by @prisma.",
        icon: "https://github.com/prisma.png",
    },
    {
        name: "PostgreSQL",
        sentence: "The database I use to store my data",
        description: "The database created and maintained by @postgresql.",
        icon: "https://github.com/postgresql.png",
    },
    {
        name: "Vercel",
        sentence: "The platform I use to deploy my web applications",
        description: "The platform created and maintained by @vercel.",
        icon: "https://github.com/vercel.png",
    },
    {
        name: "Cursor",
        sentence: "The AI-powered code editor I use to write my code",
        description: "The code editor created and maintained by @cursor.",
        icon: "https://github.com/cursor.png",
    },
    {
        name: "Lua",
        sentence: "Useless here but I can also write code in Lua",
        description: "The programming language created and maintained by @lua.",
        icon: "https://github.com/lua.png",
    }
];


export default function Stack() {
    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0">
            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                What I use
            </h2>

            <ul className="flex flex-col gap-4 p-4 rounded-lg bg-card border sm:bg-transparent">
                {stack.map((item) => (
                    <li key={item.name}>
                        <HoverCard>
                            <div className="flex items-center gap-2">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src={item.icon} />
                                    <AvatarFallback>{item.name}</AvatarFallback>
                                </Avatar>
                                
                                <div className="flex flex-col items-start">
                                    <HoverCardTrigger asChild>
                                        <Button variant="link" className="cursor-pointer active:bg-muted/20 sm:active:bg-transparent rounded px-1 font-mono">
                                            @{item.name}
                                        </Button>
                                    </HoverCardTrigger>

                                    <span className="text-sm md:text-base text-muted-foreground sm:block font-sans">
                                        {item.sentence}
                                    </span>
                                </div>
                            </div>

                            <HoverCardContent className="w-72 bg-background p-4 rounded-lg border ml-4 md:ml-40 z-5 sm:bg-card">
                                <div className="flex justify-between items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={item.icon} />
                                        <AvatarFallback>{item.name}</AvatarFallback>
                                    </Avatar>

                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold">{item.name}</h4>
                                        <p className="text-xs text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </li>
                ))}
            </ul>
        </section>
    );
}