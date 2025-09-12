import { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { stack_icons } from "@/lib/stack";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ChevronRight, Eye, EyeOff } from "lucide-react";

export default function MainDetails(props: {project: Project, isInDevelopment: boolean}) {
    const { project, isInDevelopment } = props;
    const codeIsAvailable = project.code !== "";
    const demoIsAvailable = project.demo !== "";

    return (
        <div className="flex flex-col gap-4">
            {isInDevelopment && (
                <>
                    <p className="text-sm font-sans text-center">This project is still in development !</p>
                    <p className="text-sm text-muted-foreground font-sans text-center">The images above are not the final product, but the current state of the project.</p>
                </>
            )}

            <section className="flex flex-col gap-4">
                <h2 className="border-b pb-2 text-xl md:text-2xl font-semibold font-mono">Tech Stack</h2>

                <div className="flex flex-wrap gap-2">
                    {project?.stack.map((tech) => (
                        <Badge key={tech} variant="outline" className="p-2 flex items-center gap-2">
                            {stack_icons[tech as keyof typeof stack_icons] && (
                                <Image src={stack_icons[tech as keyof typeof stack_icons]} alt={tech} width={16} height={16} className="rounded-sm"/>
                            )}

                            {tech}  
                        </Badge>    
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <h3 className="border-b pb-2 text-xl md:text-2xl font-semibold font-mono">Links</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                    <Button variant="outline" size="sm" className={`font-mono !bg-transparent ${codeIsAvailable ? "hover:!bg-card" : "cursor-default"}`} asChild>
                        <Link href={project?.code || "https://github.com/Xraww/"} target="_blank" className="flex justify-between gap-4 p-8">
                            <div className="flex items-center justify-center size-8 rounded-lg border">
                                <Github className="w-4 h-4"/>
                            </div>

                            <div className="flex flex-col flex-1">
                                <p className="text-sm font-mono">{codeIsAvailable ? "View on GitHub" : "Source code not available"}</p>
                                <p className="text-xs text-muted-foreground font-sans">{codeIsAvailable ? "Check out the source code" : "The repository is private..."}</p>
                            </div>

                            {codeIsAvailable && <ChevronRight className="w-4 h-4"/>}
                        </Link>
                    </Button>

                    <Button variant="outline" size="sm" className={`font-mono !bg-transparent ${demoIsAvailable ? "hover:!bg-card" : "cursor-default"}`} asChild>
                        <Link href={project?.demo || ""} target="_blank" className="flex justify-between gap-4 p-8">
                            <div className="flex items-center justify-center size-8 rounded-lg border">
                                {demoIsAvailable ? <Eye className="w-4 h-4"/> : <EyeOff className="w-4 h-4"/>}
                            </div>

                            <div className="flex flex-col flex-1">
                                <p className="text-sm font-mono">{demoIsAvailable ? "View Demo" : "Demo not available"}</p>
                                <p className="text-xs text-muted-foreground font-sans">{demoIsAvailable ? "Check out the live demo" : "You can see the images above..."}</p>
                            </div>

                            {demoIsAvailable && <ChevronRight className="w-4 h-4"/>}
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <h3 className="border-b pb-2 text-xl md:text-2xl font-semibold font-mono">Features</h3>

                <div className="border p-4 rounded-lg">
                    <ul className="ml-6 list-disc [&>li]:mt-2">
                        {project?.features?.map((feature) => (
                            <li key={feature} className="font-sans font-light">{feature}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}