import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <div className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className="col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-2xl text-left w-full capitalize">Architect Of Enchantement</h2>
          <p>
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-5xl">25+ <sub className="font-semibold text-base">clients</sub></p>
        </ItemLayout>
        <ItemLayout className="col-span-4 text-accent">
        <p className="font-semibold w-full text-left text-5xl">2+ <sub className="font-semibold text-base">Years Of Experiences</sub></p>
        </ItemLayout>

        <ItemLayout className="col-span-4 !p-0">
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=yemyatheinyemyathein&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="YeMyatHein" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className="col-span-8 !p-0">
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=yemyatheinyemyathein&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="YeMyatHein" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className="col-span-full">
          <img className="w-full h-auto" src="https://skillicons.dev/icons?i=bootstrap,css,figma,firebase,git,github,graphql,html,js,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,postgres,react,redux,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn,c#,dotnet" alt="YeMyatHein" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className="col-span-6 !p-0">
          <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com? user=yemyatheinyemyathein&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&  currStreakNum=FEFE5B" alt="YeMyatHein" loading="lazy" />
        </ItemLayout>
        <ItemLayout className="col-span-6 !p-0">
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=yemyatheinyemyathein&repo=Portfolio&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B& text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="YeMyatHein" loading="lazy"/>
        </ItemLayout>

      
        
      </div>
    </div>
  );
};

export default AboutDetails;
