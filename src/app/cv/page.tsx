"use client";

import Script from "next/script"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import GotoButton from "@/components/ui/goto-button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { My_Education, My_Experience, My_Stack_CV, Soft_Skills, stack_icons, CV_Translation } from "@/lib/stack";
import Image from "next/image";
import { useState } from "react";

export default function CV() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://xraww.fr/cv",
        name: "Curriculum Vitae | Alexis Bonzi",
        description: "View and download my CV as a web developer in PDF."
    }

    const [language, setLanguage] = useState<("en" | "fr")>("en");

    // TODO: PDF A4 format

    return (
        <section className="flex flex-col mx-4 my-4">
            <GotoButton href="/" text="Back to Home" type="back"/>

            <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2 gap-4 md:gap-0">
                <h1 className="text-2xl md:text-3xl font-semibold font-mono">Curriculum Vitae - Alexis Bonzi</h1>

                <Script id="json-ld-cv" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}/>

                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
                            <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path>
                            <path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path>
                            <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path>
                            <path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path>
                            <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                            <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                            <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
                            <rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect>
                            <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path>
                            <path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path>
                            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                        </svg>

                        <Switch className="cursor-pointer" checked={language === "fr"} onCheckedChange={() => setLanguage(language === "en" ? "fr" : "en")}/>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path fill="#fff" d="M10 4H22V28H10z"></path>
                            <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#092050"></path>
                            <path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path>
                            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-4 md:w-1/3">
                    <Avatar className="w-25 h-25 mt-6">
                        <AvatarImage src="/images/profile-picture.jpg"/>
                        <AvatarFallback>X</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="text-lg font-semibold font-mono text-center">Alexis Bonzi</h2>
                            <p className="text-sm text-muted-foreground font-mono border-b pb-1">{CV_Translation.job[language]}</p>
                        </div>

                        <p className="text-sm text-muted-foreground font-mono text-center">{CV_Translation.description[language]}</p>

                        <div className="flex items-center gap-2">
                            <Button variant="link" size="sm" className="font-mono p-2 border hover:bg-accent hover:text-accent-foreground" asChild>
                                <Link href="https://github.com/Xraww" target="_blank">
                                    <Github className="w-4 h-4"/>
                                </Link>
                            </Button>

                            <Button variant="link" size="sm" className="font-mono p-2 border hover:bg-accent hover:text-accent-foreground" asChild>
                                <Link href="https://www.linkedin.com/in/xraww/" target="_blank">
                                    <Linkedin className="w-4 h-4"/>
                                </Link>
                            </Button>

                            <Button variant="link" size="sm" className="font-mono p-2 border hover:bg-accent hover:text-accent-foreground" asChild>
                                <Link href="https://x.com/Xraaww" target="_blank">
                                    <Twitter className="w-4 h-4"/>
                                </Link>
                            </Button>

                            <Button variant="link" size="sm" className="font-mono p-2 border hover:bg-accent hover:text-accent-foreground" asChild>
                                <Link href="mailto:contact.xraww@gmail.com" target="_blank">
                                    <Mail className="w-4 h-4"/>
                                </Link>
                            </Button>
                        </div>      

                        <Button variant="link" size="sm" className="font-mono" asChild>
                            <Link href="/" target="_blank">
                                xraww.fr
                            </Link>
                        </Button>       
                        
                        <div className="hidden md:grid md:grid-cols-2 gap-4 mt-10">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-md font-semibold font-mono hidden md:block">{CV_Translation.skills.frontend[language]}</h3>

                                <div className="hidden md:flex flex-wrap gap-2">
                                    {My_Stack_CV.frontend.map((skill) => (
                                        <Badge key={skill} variant="outline" className="p-2 flex items-center gap-2 xl:w-[calc(50%-0.5rem)]">
                                            {stack_icons[skill as keyof typeof stack_icons] && (
                                                <Image src={stack_icons[skill as keyof typeof stack_icons]} alt={skill} width={16} height={16} className="rounded-sm" priority />
                                            )}

                                            {skill}  
                                        </Badge>  
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-md font-semibold font-mono hidden md:block">{CV_Translation.skills.backend[language]}</h3>

                                <div className="hidden md:flex flex-wrap gap-2">
                                    {My_Stack_CV.backend.map((skill) => (
                                        <Badge key={skill} variant="outline" className="p-2 flex items-center gap-2">
                                            {stack_icons[skill as keyof typeof stack_icons] && (
                                                <Image src={stack_icons[skill as keyof typeof stack_icons]} alt={skill} width={16} height={16} className="rounded-sm" priority />
                                            )}

                                            {skill}  
                                        </Badge>  
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-md font-semibold font-mono hidden md:block">{CV_Translation.skills.tools[language]}</h3>

                                <div className="hidden md:flex flex-wrap gap-2">
                                    {My_Stack_CV.tools.map((skill) => (
                                        <Badge key={skill} variant="outline" className="p-2 flex items-center gap-2 xl:w-[calc(50%-0.5rem)]">
                                            {stack_icons[skill as keyof typeof stack_icons] && (
                                                <Image src={stack_icons[skill as keyof typeof stack_icons]} alt={skill} width={16} height={16} className="rounded-sm" priority />
                                            )}

                                            {skill}  
                                        </Badge>  
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-md font-semibold font-mono hidden md:block">{CV_Translation.skills.other[language]}</h3>

                                <ul className="list-disc list-inside hidden md:block">
                                    {Soft_Skills[language].map((skill) => (
                                        <li key={skill} className="text-sm text-muted-foreground font-sans">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full md:border-l-2 md:pl-4 md:flex-1">
                    <div className="flex flex-col gap-4">
                        <h3 className="border-b pb-2 text-md font-semibold font-mono md:hidden">{CV_Translation.skills.frontend[language]}</h3>

                        <div className="flex flex-wrap gap-2 md:hidden">
                            {My_Stack_CV.frontend.map((skill) => (
                                <Badge key={skill} variant="outline" className="p-2 flex items-center gap-2">
                                    {stack_icons[skill as keyof typeof stack_icons] && (
                                        <Image src={stack_icons[skill as keyof typeof stack_icons]} alt={skill} width={16} height={16} className="rounded-sm"/>
                                    )}
        
                                    {skill}  
                                </Badge>  
                            ))}
                        </div>

                        <h3 className="border-b pb-2 text-md font-semibold font-mono md:hidden">{CV_Translation.skills.backend[language]}</h3>

                        <div className="flex flex-wrap gap-2 md:hidden">
                            {My_Stack_CV.backend.map((skill) => (
                                <Badge key={skill} variant="outline" className="p-2 flex items-center gap-2">
                                    {stack_icons[skill as keyof typeof stack_icons] && (
                                        <Image src={stack_icons[skill as keyof typeof stack_icons]} alt={skill} width={16} height={16} className="rounded-sm"/>
                                    )}
        
                                    {skill}  
                                </Badge>  
                            ))}
                        </div>

                        <h3 className="border-b pb-2 text-md font-semibold font-mono md:hidden">{CV_Translation.skills.tools[language]}</h3>

                        <div className="flex flex-wrap gap-2 md:hidden">
                            {My_Stack_CV.tools.map((skill) => (
                                <Badge key={skill} variant="outline" className="p-2 flex items-center gap-2">
                                    {stack_icons[skill as keyof typeof stack_icons] && (
                                        <Image src={stack_icons[skill as keyof typeof stack_icons]} alt={skill} width={16} height={16} className="rounded-sm"/>
                                    )}
        
                                    {skill}  
                                </Badge>  
                            ))}
                        </div>

                        <h3 className="border-b pb-2 text-md font-semibold font-mono md:hidden">{CV_Translation.skills.other[language]}</h3>

                        <ul className="list-disc list-inside md:hidden">
                            {Soft_Skills[language].map((skill) => (
                                <li key={skill} className="text-sm text-muted-foreground font-sans">{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="border-b pb-2 text-lg font-semibold font-mono">{CV_Translation.experience[language]}</h3>

                        {My_Experience.map((experience) => (
                            <div key={experience.company[language]} className="relative flex flex-col gap-2 border-l-2 pl-4 md:gap-1.5">
                                <h4 className="text-sm font-semibold font-mono">{experience.job[language]}</h4>
                                <p className="text-sm text-muted-foreground font-sans">{experience.date}</p>
                                <p className="text-sm text-muted-foreground font-sans">{experience.company[language]}</p>
                                <p className="text-sm text-muted-foreground font-sans">{experience.description[language]}</p>

                                <div className="absolute -left-[5px] top-[5px] h-2.5 w-2.5 rounded-full bg-gray-600"></div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="border-b pb-2 text-lg font-semibold font-mono">{CV_Translation.education[language]}</h3>

                        <div className="flex flex-col gap-2">
                            {My_Education.map((education) => (
                                <div key={education.name[language]} className="flex flex-col gap-2 border rounded-md p-2">
                                    <h4 className="text-sm font-semibold font-mono">{education.name[language]}</h4>
                                    <p className="text-sm text-muted-foreground font-sans">{education.date[language]}</p>
                                    <p className="text-sm text-muted-foreground font-sans">{education.description[language]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}