import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <div className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 sm:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-md md:text-base">
            My adventure in web development is fueled by a spellbinding blend of
            tools and languages, with JavaScript at the heart of my digital
            magic. I masterfully wield frameworks like React.js and Next.js to
            craft intuitive portals (websites) that link realms (users) across
            the digital cosmos. Drawing upon the ancient powers of the Jamstack,
            I conjure experiences that are fast, secure, and responsive. Paired
            with a keen eye for design, my creations are not only powerful but
            visually enchanting. Join me on this ever-evolving journey as I
            discover new spells and technologies to reshape the web’s future.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">Years Of Experiences</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=yemyatheinyemyathein&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="YeMyatHein"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=yemyatheinyemyathein&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="YeMyatHein"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=bootstrap,css,figma,firebase,git,github,html,js,jquery,mongodb,mysql,nextjs,nodejs,npm,postgres,react,redux,tailwind,vercel,vite,vscode,dotnet"
            alt="YeMyatHein"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com? user=yemyatheinyemyathein&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&  currStreakNum=FEFE5B"
            alt="YeMyatHein"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=yemyatheinyemyathein&repo=Portfolio&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B& text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="YeMyatHein"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </div>
  );
};

export default AboutDetails;
