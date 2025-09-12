import Header from "@/components/sections/header";
import CanDo from "@/components/sections/cando";
import Stack from "@/components/sections/stack";
import Projects from "@/components/sections/projects";
import AboutMe from "@/components/sections/aboutme";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
    return (
        <div className="max-w-[640px] mx-auto flex flex-col gap-10">
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