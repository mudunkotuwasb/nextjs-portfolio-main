"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-8">
        {/* Programming Languages */}
        <div>
          <h3 className="font-bold text-lg mb-2">Programming Languages</h3>
          <ul className="list-disc pl-5">
            <li>Java</li>
            <li>JavaScript</li>
            <li>C#</li>
          </ul>
        </div>

        {/* Web Development */}
        <div>
          <h3 className="font-bold text-lg mb-2">Web Development</h3>
          <ul className="list-disc pl-5">
            <li>ReactJS</li>
            <li>Next.js</li>
            <li>HTML/CSS</li>
          </ul>
        </div>

        {/* Mobile App Development */}
        <div>
          <h3 className="font-bold text-lg mb-2">Mobile App Development</h3>
          <ul className="list-disc pl-5">
            <li>React Native</li>
            <li>Expo Go</li>
          </ul>
        </div>

        {/* Databases */}
        <div>
          <h3 className="font-bold text-lg mb-2">Databases</h3>
          <ul className="list-disc pl-5">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>

        {/* Tools and Platforms */}
        <div>
          <h3 className="font-bold text-lg mb-2">Tools and Platforms</h3>
          <ul className="list-disc pl-5">
            <li>Keycloak</li>
            <li>Grafana</li>
            <li>Prometheus</li>
          </ul>
        </div>

        {/* Version Control */}
        <div>
          <h3 className="font-bold text-lg mb-2">Version Control</h3>
          <ul className="list-disc pl-5">
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        {/* DevOps */}
        <div>
          <h3 className="font-bold text-lg mb-2">DevOps</h3>
          <ul className="list-disc pl-5">
            <li>Docker</li>
            <li>NGINX</li>
          </ul>
        </div>
      </div>
    ),
  },
];





const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-2 xl:gap-16 sm:py-16 xl:px-2">
      <Image
  src="/images/about-image.png"
  alt="My Image"
  width={500}
  height={500}
  className="col-span-1 self-start mt-[80px]" // Moves the image upwards
/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am an Information Technology and Management undergraduate at the University of Moratuwa, with strong teamwork and communication skills. Passionate about emerging technologies, I am eager to learn and expand my skills in the software engineering field. I have experience working with JavaScript, React, React Native, Node.js, Express, HTML, CSS, Git, and Spring Boot. Currently, I am looking forward to gaining hands-on experience as a software engineer intern, where I can apply my knowledge and continue growing in this ever-evolving industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
// a