import Card from "./Card";

const ProjectsPublisPapers = () => {
  return (
    <div class="pt-16 font-sans font-bold text-4xl ">
      <div class="border-l-4 border-black px-2">
        Projects, Publications and Certifications
      </div>
      <div class="flex my-7 gap-10">
        <Card
          title="Elderaan: An app for the Elderly"
          link="https://github.com/AviRatnam/HCI_Project"
        />
        <Card
          title="PES University Capstone Project 2021"
          link="https://github.com/AviRatnam/React-Capstone"
        />
        <Card
          title="PES University Data Visualisation Project"
          link="https://github.com/AviRatnam/IDS-Project"
        />
      </div>
      <div class="flex my-5 gap-10">
        <Card
          title="Research Paper Nov. 2020"
          link="https://drive.google.com/file/d/1GenLaf_9bwu9JH4Ehah9Faec3IbZii8l/view?usp=sharing"
        />
      </div>
    </div>
  );
};

export default ProjectsPublisPapers;
