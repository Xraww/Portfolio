import GotoButton from "@/components/ui/goto-button";
import { My_Projects } from "../../../lib/projects";
import ProjectCarousel from "@/components/ui/project-carousel";
import { notFound } from "next/navigation";
import Footer from "@/components/sections/footer";
import MainDetails from "@/components/details/main";
import { Metadata } from "next";

export async function generateMetadata(props: {params: Promise<{ id: string }>}): Promise<Metadata> {
    const params = await props.params;
    const project = My_Projects.find((project) => project.id === params.id);
    
    if (!project) {
        return {
            title: "Project Not Found - Xraww",
            description: "The requested project could not be found."
        };
    }
    
    return {
        title: `${project.name} - Xraww`,
        description: project.description,
        openGraph: {
            title: `${project.name} - Xraww`,
            description: project.description,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.name} - Xraww`,
            description: project.description,
        }
    };
}

export default async function Project(props: {params: Promise<{ id: string }>}) {
    const params = await props.params;
    const project = My_Projects.find((project) => project.id === params.id);
    
    if (!project) {
        notFound();
    }
    
    const categories = Object.keys(project.images || {});

    return (
        <>
            <section className="flex flex-col gap-4 mx-4 md:mx-0 my-4">
                <GotoButton href="/projects" text="Back to projects" type="back"/>
                <h1 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">{project.name}</h1>
                <p className="text-sm text-muted-foreground font-sans">{project.description}</p>

                <ProjectCarousel categories={categories} project={{
                    id: project.id,
                    name: project.name,
                    description: project.description,
                    demo: project.demo,
                    code: project.code,
                    stack: project.stack,
                    images: project.images,
                    pinned: project.pinned,
                    isInDevelopment: project.isInDevelopment
                }}/>

                <MainDetails project={project} isInDevelopment={project.isInDevelopment}/>
            </section>

            <Footer/>
        </>
    )
}