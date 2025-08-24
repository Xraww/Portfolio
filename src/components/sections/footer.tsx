import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
    return (
        <footer className="mb-8 mx-4 md:mx-0">
            <div className="flex flex-col gap-4 items-start">
                 <Button variant="link" className="cursor-pointer text-lg active:bg-muted/20 sm:active:bg-transparent rounded px-1 font-mono" asChild>
                    <Link href="/">
                        xraww.fr
                    </Link>
                 </Button>
                
                <p className="text-xs text-muted-foreground font-mono">
                    Copyright &copy; 2025 Xraww. All rights reserved.
                </p>
            </div>
        </footer>
    );
} 