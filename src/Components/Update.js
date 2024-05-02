import React, { useState } from "react";
import "../App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {update} from "../Constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";


function Update(){
return(

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg><motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroHeadText} flex justify-center`}
      >
        Upcoming Events
      </motion.h1>
    
  <div className="flex flex-col justify-center items-center w-full h-full">
  <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "5px solid #232631" }}
      date={update.date}
      iconStyle={{ background: update.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={update.icon}
            alt="event-image"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
     
       <p class="leading-relaxed title-font tracking-wider font-45px text-lg font-large "> 
       <h1 class="font size text-md ">Creating website using tailwind and css</h1>
      
      </p>
      <span class=" h-1 w-10 rounded  mt-10 mb-8">Date : 25/09/2024</span>
    <p>
      hi  i am pankaj dhoran from second year it how are u i am fine title-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-widertitle-font tracking-wider
    </p>
      <h2 class=" font-small title-font text-lg">Mr. Rutwik Jadhav</h2>
      <p class="text-lg title-font tracking-wider">B.tech SGGSIE&T, Nanded</p>
      </VerticalTimelineElement>
    </div>
  </div> </div>
</section>
);
}

export default Update;
