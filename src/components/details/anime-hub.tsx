import { My_Projects } from "@/lib/projects";
import { Github, ChevronRight, Eye, EyeOff, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnimeHubDetails() {
    const project = My_Projects.find((project) => project.id === "anime-hub");
    const codeIsAvailable = project?.code !== "";
    const demoIsAvailable = project?.demo !== "";

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm font-sans text-center">This project is still in development !</p>
            <p className="text-sm text-muted-foreground font-sans text-center">The images above are not the final product, but the current state of the project.</p>

            <section className="flex flex-col gap-4">
                <h2 className="border-b pb-2 text-xl md:text-2xl font-semibold font-mono">Tech Stack</h2>

                <div className="my-6 w-full overflow-y-auto">
                    <table className="w-full">
                        <tbody>
                            {(() => {
                                // Group technologies into rows of 3
                                const rows = [];
                                
                                if (project?.stack) {
                                    for (let i = 0; i < project.stack.length; i += 3) {
                                        rows.push(project.stack.slice(i, i + 3));
                                    }
                                }
                                
                                return rows.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className={`${row[0] ? "border" : "border-none"} px-4 py-2 text-left`}>
                                            {row[0] || ""}
                                        </td>

                                        <td className={`${row[1] ? "border" : "border-none"} px-4 py-2 text-left`}>
                                            {row[1] || ""}
                                        </td>

                                        <td className={`${row[2] ? "border" : "border-none"} px-4 py-2 text-left`}>
                                            {row[2] || ""}
                                        </td>
                                    </tr>
                                ));
                            })()}
                        </tbody>
                    </table>
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
            </section>
        </div>
    )
}