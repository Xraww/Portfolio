import Link from "next/link";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GotoButton(props: {href: string, text: string, type: "back" | "forward"}) {
    return (
        <Button variant="ghost" className={`w-fit gap-1 text-muted-foreground active:bg-muted/20 sm:active:bg-transparent rounded font-sans ${props.type === "back" ? "!pl-0" : "!pr-0"}`} asChild>    
            <Link href={props.href}>
                {props.type === "back" ? (
                    <>
                        <ChevronLeft className="w-4 h-4"/>
                        {props.text}
                    </>
                ) : (
                    <>
                        {props.text}
                        <ChevronRight className="w-4 h-4"/>
                    </>
                )}
            </Link>
        </Button>
    )
}