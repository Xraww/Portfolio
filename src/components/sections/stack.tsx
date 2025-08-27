import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { My_Stack } from "../../lib/stack"

export default function Stack() {
    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0">
            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                What I use
            </h2>

            <ul className="flex flex-col gap-4 p-4 rounded-lg bg-card border sm:bg-transparent">
                {My_Stack.map((item) => (
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