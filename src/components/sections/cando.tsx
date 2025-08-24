export default function CanDo() {
    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0">
            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                What I can do
            </h2>

            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>
                    <h3 className="text-lg font-semibold font-mono">Web Development</h3>

                    <p className="text-muted-foreground font-sans">
                        I can develop web applications using Next.js, React, Tailwind CSS, and TypeScript
                    </p>
                </li>

                <li>
                    <h3 className="text-lg font-semibold font-mono">Backend Development</h3>

                    <p className="text-muted-foreground font-sans">
                        I build scalable backends and APIs with modern frameworks and databases
                    </p>
                </li>

                <li>
                    <h3 className="text-lg font-semibold font-mono">Requirements Analysis</h3>

                    <p className="text-muted-foreground font-sans">
                        I can understand client needs and translate them into clear technical solutions
                    </p>
                </li>
            </ul>
        </section>
    );
}