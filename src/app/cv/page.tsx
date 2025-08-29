import GotoButton from "@/components/ui/goto-button";

export default function CV() {
    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0 my-4">
            <GotoButton href="/" text="Back to Home" type="back"/>

            <div className="flex flex-col gap-4">
                <h1 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">Curriculum Vitae</h1>

                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold font-mono">Personal Information</h2>
                </div>

                <p className="text-sm text-muted-foreground font-sans">
                    I'm a fullstack developer with a passion for creating beautiful and functional web applications. Always ready to learn & work hard.
                </p>

                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold font-mono">Core Skills</h2>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold font-mono">Experience</h2>
                </div>
            </div>
        </section>
    );
}