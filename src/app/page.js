import Herosection from "./Component/Home/Herosection";
import Navbar from "./Component/Home/Navbar";
import About from "./Component/About/About";
import Skills from "./Component/Skill/Skills";
import ProjectSection from "./Component/Project/ProjectSection";
import EmailSection from "./Component/Footer/EmailSection";
import Footer from "./Component/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-full bg-[#13163F] container ">
    <Navbar/>
    <div className="container mt-24 mx-auto px-12 py-4">
    <Herosection/>
    <About/>
    <Skills/>
    <ProjectSection/>
    <EmailSection/>
    </div>
    <Footer/>
    </main>
  );
}
