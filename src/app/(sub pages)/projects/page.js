import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";
export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      /> 
      <ProjectList projects={projectsData} />

      <div className="h-screen fixed top-20 -left-24 flex justify-center items-center">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
