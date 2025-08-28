"use client"

import { My_Projects } from "../../lib/projects"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "../../components/ui/badge";
import { ChevronLeft, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Projects() {
    const router = useRouter();

    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0 my-4">
            <Button variant="ghost" className="w-fit !pl-0 gap-1 text-muted-foreground" asChild>    
                <Link href="/">
                    <ChevronLeft className="w-4 h-4"/>
                    Return to home
                </Link>
            </Button>

            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                What I've done 
            </h2>

            <p className="text-sm text-muted-foreground font-sans">
                Always working on new exitings projects. Stay tuned for the next ones !
            </p>

            <div className="grid md:grid-cols-2 gap-4">
                {My_Projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="group rounded-md cursor-pointer bg-gradient-to-br from-background to-accent/20 hover:bg-accent/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                        onClick={() => {
                            router.push(`/projects/${project.id}`);
                        }}
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
                    </div>
                ))}

                <div className="group relative overflow-hidden rounded-md cursor-pointer hover:bg-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-gradient-to-br from-background to-accent/20 h-full flex flex-col">
                    <div className="flex flex-col h-full">
                        <div className="w-full h-48 bg-primary/5 rounded-t-md flex items-center justify-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 border-2 border-dashed border-primary/30">
                                <Plus className="w-8 h-8 text-primary"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 p-4 flex-1">
                            <h3 className="text-lg font-semibold font-sans text-center">
                                More coming soon
                            </h3>

                            <p className="text-sm text-muted-foreground font-sans flex-1 text-center">
                                Always working on new exiting projects. Stay tuned for the next ones !
                            </p>

                            <div className="flex gap-2 flex-wrap mt-auto justify-center">
                                <Badge variant="outline" className="text-xs font-sans">
                                    Coming soon
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}