import { PreviousMap } from "postcss";
import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = () => {
  const [projectdata, setProjectdata] = useState([
    {
      title: "Elderaan: An app for the Elderly",
      description: "Test",
      link: "https://github.com/AviRatnam/HCI_Project",
    },
    {
      title: "PES University Capstone Project 2021",
      description: "Test",
      link: "https://github.com/AviRatnam/React-Capstone",
    },
    {
      title: "PES University Data Visualisation Project",
      description: "Test",
      link: "https://github.com/AviRatnam/IDS-Project",
    },
    {
      title: "Research Paper Nov. 2020",
      description: "Test",
      link: "https://drive.google.com/file/d/1GenLaf_9bwu9JH4Ehah9Faec3IbZii8l/view?usp=sharing",
    },
  ]);

  const setprojectdata = () => {
    setProjectdata(projectdata);
  };

  return (
    <ProjectContext.Provider value={{ projectdata, setprojectdata }}>
      {PreviousMap.children}
    </ProjectContext.Provider>
  );
};
