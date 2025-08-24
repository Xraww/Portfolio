"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { ClipboardCopy, MailCheck } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("contact.xraww@gmail.com");
            setCopied(true);
            
            // Reset the icon after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy email:", err);
        }
    };

    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0">
            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                Contact me
            </h2>

            <div className="flex flex-col gap-4">
                <p className="text-muted-foreground font-sans">
                    I'm always looking for new opportunities and collaborations. Feel free to contact me if you have any questions or want to work together.
                </p>

                <div className="flex items-center gap-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1 font-mono" asChild>
                        <Link href="mailto:contact.xraww@gmail.com" target="_blank">
                            contact.xraww@gmail.com
                        </Link>
                    </Button>

                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="font-mono cursor-pointer transition-all duration-300" 
                        onClick={handleCopy}
                    >
                        <div className="relative w-4 h-4">
                            <ClipboardCopy 
                                className={`w-4 h-4 transition-all duration-300 ${
                                    copied ? "opacity-0 scale-75" : "opacity-100 scale-100"
                                }`}
                            />
                            
                            <MailCheck 
                                className={`absolute top-0 left-0 w-4 h-4 text-green-600 transition-all duration-300 ${
                                    copied ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                }`}
                            />
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
}