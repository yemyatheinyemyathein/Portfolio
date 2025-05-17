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
      
      <p className="text-xs md:text-base mt-2 text-center">And others Company Project.
        <br/>
        Currently working at <strong>REI Group</strong> as a frontend developer.
      </p>

      <div className="h-screen fixed top-16 -translate-x-1/2 lg:-translate-x-0 lg:top-20 left-1/2 lg:-left-24 flex justify-center items-center -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
