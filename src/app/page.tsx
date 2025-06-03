import Navbar from "@/sections/Navbar"
import Hero from "@/sections/Hero";
import Cursor from "@/components/Cursor"
import Preloader from "@/components/Preloader/Preloader";
import TechStack from "@/sections/TechStack";
import WorkExperience from "@/sections/WorkExperience";
import CallToAction from "@/sections/CallToAction";

export default function Home() {
    return (
        <>
            
            <Cursor />
            <Navbar />
            <Hero />
            <WorkExperience/>
            <TechStack />
            <CallToAction />

        </>
    );
}
