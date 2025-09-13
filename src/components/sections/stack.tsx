import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { My_Stack, stack_icons } from "../../lib/stack"

export default function Stack() {
    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0">
            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                What I use
            </h2>

            <ul className="flex flex-col gap-4 p-4 rounded-lg border">
                {My_Stack.map((item) => (
                    <li key={item.name}>
                        <HoverCard>
                            <div className="flex items-center gap-2">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src={stack_icons[item.name as keyof typeof stack_icons]}/> 
                                    <AvatarFallback>{item.name}</AvatarFallback>
                                </Avatar>
                                
                                <div className="flex flex-col items-start">
                                    <HoverCardTrigger asChild>
                                        <Button variant="link" className="cursor-pointer active:bg-muted/20 sm:active:bg-transparent rounded p-0 font-mono">
                                            @{item.name}
                                        </Button>
                                    </HoverCardTrigger>

                                    <span className="text-sm md:text-base text-muted-foreground sm:block font-sans">
                                        {item.sentence}
                                    </span>
                                </div>
                            </div>

                            <HoverCardContent className="w-72 bg-card p-4 rounded-lg border ml-4 md:ml-40 z-5">
                                <div className="flex justify-between items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={stack_icons[item.name as keyof typeof stack_icons]}/> 
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

// TODO: Add the collapsible component to the stack section but keep the same style with the hover card etc...

{/* <div className="flex flex-col gap-4">
<Collapsible className="w-full" defaultOpen={true}>
    <CollapsibleTrigger className="flex items-center justify-between w-full border-b pb-2 text-md font-semibold font-mono">
        Frontend
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
    
    <CollapsibleContent className="mt-3">
        <div className="flex flex-wrap gap-2">
            {My_Stack_CV.frontend.map((skill: string) => (
                <Badge
                    key={skill}
                    variant="outline"
                    className="p-2 flex items-center gap-2"
                >
                    {stack_icons[skill as keyof typeof stack_icons] && (
                        <Image
                            src={stack_icons[skill as keyof typeof stack_icons]}
                            alt={skill}
                            width={16}
                            height={16}
                            className="rounded-sm"
                        />
                    )}
                    
                    {skill}
                </Badge>
            ))}
        </div>
    </CollapsibleContent>
</Collapsible>

<Collapsible className="w-full">
    <CollapsibleTrigger className="flex items-center justify-between w-full border-b pb-2 text-md font-semibold font-mono">
        Backend
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
    
    <CollapsibleContent className="mt-3">
        <div className="flex flex-wrap gap-2">
            {My_Stack_CV.backend.map((skill: string) => (
                <Badge
                    key={skill}
                    variant="outline"
                    className="p-2 flex items-center gap-2"
                >
                    {stack_icons[skill as keyof typeof stack_icons] && (
                        <Image
                            src={stack_icons[skill as keyof typeof stack_icons]}
                            alt={skill}
                            width={16}
                            height={16}
                            className="rounded-sm"
                        />
                    )}

                    {skill}
                </Badge>
            ))}
        </div>
    </CollapsibleContent>
</Collapsible>

<Collapsible className="w-full">
    <CollapsibleTrigger className="flex items-center justify-between w-full border-b pb-2 text-md font-semibold font-mono">
        Tools
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
    
    <CollapsibleContent className="mt-3">
        <div className="flex flex-wrap gap-2">
            {My_Stack_CV.tools.map((skill: string) => (
                <Badge
                    key={skill}
                    variant="outline"
                    className="p-2 flex items-center gap-2"
                >
                    {stack_icons[skill as keyof typeof stack_icons] && (
                        <Image
                            src={stack_icons[skill as keyof typeof stack_icons]}
                            alt={skill}
                            width={16}
                            height={16}
                            className="rounded-sm"
                        />
                    )}
                    
                    {skill}
                </Badge>
            ))}
        </div>
    </CollapsibleContent>
</Collapsible>

<Collapsible className="w-full">
    <CollapsibleTrigger className="flex items-center justify-between w-full border-b pb-2 text-md font-semibold font-mono">
        Other
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
    
    <CollapsibleContent className="mt-3">
        <div className="flex flex-wrap gap-2">
            {My_Stack_CV.other.map((skill: string) => (
                <Badge
                    key={skill}
                    variant="outline"
                    className="p-2 flex items-center gap-2"
                >
                    {stack_icons[skill as keyof typeof stack_icons] && (
                        <Image
                            src={stack_icons[skill as keyof typeof stack_icons]}
                            alt={skill}
                            width={16}
                            height={16}
                            className="rounded-sm"
                        />
                    )}
                    
                    {skill}
                </Badge>
            ))}
        </div>
    </CollapsibleContent>
</Collapsible>
</div> */}