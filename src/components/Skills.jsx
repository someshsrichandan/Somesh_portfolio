import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1.png";
import sk5 from "../assets/sk-5.png";
import github from "../assets/github.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import c from "../assets/c.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import sknode from "../assets/node.png";
import skmongo from "../assets/mongo.png";
import ae from "../assets/ae.png";
import skjava from "../assets/java.png";
import skgit from "../assets/gitt.png";
import next from "../assets/next.png";
import skpython from "../assets/python.png";
import pr from "../assets/pr.png";
import tail from "../assets/tail.png";

import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={sknode} />
                    <SkillIcon path={skmongo} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={github} />
                    <SkillIcon path={skjava} />
                    <SkillIcon path={next} />
                    <SkillIcon path={tail} />
                    <SkillIcon path={sk1} />
                    <SkillIcon path={ae} />
                    <SkillIcon path={pr} />
                    <SkillIcon path={skgit} />
                    
                    <SkillIcon path={skpython} />
                    <SkillIcon path={c} />
                    
                   
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                    <Service
                            num="1"
                            title="Web Sloution Services"
                            desc="I possess a solid foundation in web development, specializing in the MERN stack. My proficiency extends to utilizing Next.js for robust design and harnessing the power of Tailwind CSS for precise styling. With this skill set, I'm well-prepared to provide comprehensive web solution services, ensuring that projects are not only functional but visually appealing and user-friendly."
                            data={[
                                "MERN Stack",
                                "Next.js",
                                "Tailwind css"
                            ]}
                        />
                                                <Service
                            num="2"
                            title="Motion Graphics & Editing"
                            desc="Familiar with Photoshop, After Effects, and Premiere Pro, I possess a working knowledge of graphic design and video editing. These Adobe tools enable me to produce visually appealing content, edit videos, and enhance multimedia projects effectively, meeting creative objectives with precision."
                            data={[
                                "After Effects",
                                "Photoshop ",
                                "Premiere Pro"
                            ]}
                        />
                        

                       
                        

                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Providing</span>
                        <span>Effective</span>
                        <span className="flex items-center gap-2">
                        Services
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                        Solve{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Problems</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
