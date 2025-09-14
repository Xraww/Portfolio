import Script from "next/script"

import Header from "@/components/sections/header";
import CanDo from "@/components/sections/cando";
import Stack from "@/components/sections/stack";
import Projects from "@/components/sections/projects";
import AboutMe from "@/components/sections/aboutme";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export const revalidate = 86400 // 1 day

export default function Home() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://xraww.fr",
        name: "Portfolio Alexis Bonzi | Web Developer",
        description: "Discover my portfolio as a web developer."
    }

    return (
        <div className="max-w-[640px] mx-auto flex flex-col gap-10">
            <Script id="json-ld-home" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}/>

            <Header/>

            <main className="flex flex-col gap-10">
                <CanDo/>
                <Stack/>
                <Projects/>
                <AboutMe/>
                <Contact/>
            </main>

            <Footer/>
        </div>
    );
}