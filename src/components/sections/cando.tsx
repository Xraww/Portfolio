import { Code2, Database, ClipboardList } from "lucide-react"


export default function CanDo() {
    return (
        <section className="flex flex-col gap-6 mx-4 md:mx-0">
            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                What I can do
            </h2>

            <div className="flex items-start gap-4">
                <Code2 className="h-8 w-8 text-primary mt-1"/>

                <div>
                    <h3 className="text-lg font-semibold font-mono">Web Development</h3>

                    <p className="text-muted-foreground font-sans">
                        I build modern, responsive websites and web applications with{" "}
                        <span className="font-medium">Next.js, React, Tailwind CSS, and TypeScript</span>.
                        My focus is on performance and user experience.
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <Database className="h-8 w-8 text-primary mt-1"/>

                <div>
                    <h3 className="text-lg font-semibold font-mono">Backend Development</h3>

                    <p className="text-muted-foreground font-sans">
                        I design and develop <span className="font-medium">scalable backends and APIs</span>{" "}
                        using Node.js, Prisma, and relational or NoSQL databases like PostgreSQL and MongoDB.
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <ClipboardList className="h-8 w-8 text-primary mt-1"/>

                <div>
                    <h3 className="text-lg font-semibold font-mono">Requirements Analysis</h3>
                    
                    <p className="text-muted-foreground font-sans">
                        I work closely with clients to <span className="font-medium">analyze requirements</span>{" "}
                        and translate business needs into clear and efficient technical solutions.
                    </p>
                </div>
            </div>
        </section>
    );
}