"use client"

import { My_Projects } from "../../lib/projects"
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { GalleryVerticalEnd, ChevronRight } from "lucide-react";
import GotoButton from "../ui/goto-button";

export default function Projects() {
    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0">
            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                What I&apos;ve done 
            </h2>

            <div className="flex justify-end">
                <GotoButton href="/projects" text="Let's see what I've done" type="forward"/>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {My_Projects.map((project) => (
                    project.pinned ? (
                        <Link 
                            key={project.id} 
                            href={`/projects/${project.id}`}
                            className="rounded-md cursor-pointer bg-gradient-to-br from-background to-accent/20 hover:bg-accent/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                        >
                            <div className="flex flex-col h-full">
                                <Image 
                                    src={`${project.images.base_url}${project.images.preview}`} 
                                    alt={project.name} 
                                    width={100} 
                                    height={100} 
                                    className="w-full h-48 object-cover rounded-t-md"
                                    unoptimized
                                />

                                <div className="flex flex-col gap-2 p-4 flex-1">
                                    <h3 className="text-lg font-semibold font-sans">
                                        {project.name}
                                    </h3>

                                    <p className="text-sm text-muted-foreground font-sans flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-2 flex-wrap mt-auto">
                                        {(project.stack.length > 3
                                            ? [...project.stack.slice(0, 3), "..."]
                                            : project.stack
                                        ).map((tech, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="outline"
                                                className="text-xs font-sans"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ) : null
                ))}
                <Link 
                    href="/projects"
                    className="group relative overflow-hidden rounded-md cursor-pointer hover:bg-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-gradient-to-br from-background to-accent/20"
                >
                    <div className="relative flex flex-col gap-4 p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                                <GalleryVerticalEnd className="w-6 h-6 text-primary"/>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold font-mono text-foreground group-hover:text-primary transition-colors duration-300">
                                    Other projects
                                </h3>

                                <p className="text-sm text-muted-foreground font-sans">
                                    Let&apos;s see what I&apos;ve done !
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-between">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold font-mono text-primary">
                                    {My_Projects.length}
                                </span>
                                
                                <span className="text-xs text-muted-foreground font-sans">
                                    Projects
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold font-mono text-primary">
                                    {Array.from(new Set(My_Projects.flatMap(p => p.stack))).length}
                                </span>

                                <span className="text-xs text-muted-foreground font-sans">
                                    Technologies
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold font-mono text-primary">
                                    {My_Projects.filter(p => p.code !== "").length}
                                </span>

                                <span className="text-xs text-muted-foreground font-sans">
                                    Source code
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 items-center justify-center md:pt-4">
                            <p className="text-sm font-mono">
                                More coming soon...
                            </p>

                            <p className="text-sm text-muted-foreground font-sans text-center">
                                Always working on new exiting projects. Stay tuned for the next ones !
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 md:pt-4">
                            <Badge variant="outline" className="text-xs font-sans">
                                View all
                            </Badge>

                            <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                <span className="font-sans">Explore</span>
                                <ChevronRight className="w-4 h-4"/>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}