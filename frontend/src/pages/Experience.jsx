// import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

// // import timelineElements from "../components/Data/Constants";
// import timelin
import timelineElements from "../components/Data/Constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  // Set background colors of school and work icons
  const workIconStyles = { background: "#1ABC9C" }; // Turquoise
  const schoolIconStyles = { background: "#E67E22" }; // Carrot Orange

  return (
    <section id="experience" className="py-8 bg-[#34495E] text-white mt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mt-6">
          <h3 className="text-3xl font-semibold">
            My <span className="text-[#1ABC9C]">Experience</span>
          </h3>
          <p className="text-gray-300 my-2 text-lg">Experience and Education</p>
        </div>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            const isWorkIcon = element.icon === "work";
            const showButton = element.certificateUrl;

            return (
              <VerticalTimelineElement
                key={element.id} // Changed from element.key to element.id
                date={element.date}
                dateClassName="text-gray-100"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <FaBriefcase /> : <IoSchoolSharp />}
              >
                <h3 className="text-lg font-medium bg-[#2C3E50] p-2 rounded">
                  {element.title}
                </h3>
                <h5 className="text-sm font-bold text-gray-500">
                  {element.location}
                </h5>
                {element.icon === "school" && (
                  <>
                    <p className="text-gray-400 text-base mt-2">
                      <strong>Stream:</strong> {element.stream}
                    </p>
                    <p className="text-gray-400 text-base mt-2">
                      <strong>Grade:</strong> {element.grade}
                    </p>
                  </>
                )}
                <p className="text-gray-600 text-sm mt-2">
                  {element.description}
                </p>
                {showButton && (
                  <div className="mt-4">
                    <a
                      className="inline-block text-white bg-[#1ABC9C] px-4 py-2 rounded hover:bg-[#16A085] font-bold"
                      href={element.certificateUrl}
                      download
                    >
                      {element.buttonText || "Download Certificate"}
                    </a>
                  </div>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
