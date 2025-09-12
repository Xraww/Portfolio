import Header from "@/components/sections/header";
import CanDo from "@/components/sections/cando";
import Stack from "@/components/sections/stack";
import Projects from "@/components/sections/projects";
import Activities from "@/components/sections/aboutme";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
    return (
        <>
            <Header/>

            <main className="flex flex-col gap-10">
                <CanDo/>
                <Stack/>
                <Projects/>
                <Activities/>
                <Contact/>
            </main>

            <Footer/>
        </>
    );
}