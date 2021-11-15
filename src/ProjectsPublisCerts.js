import Card from "./Card";

const ProjectsPublisPapers = () => {
  return (
    <div class="pt-8 font-sans font-bold text-4xl pl-28 ">
      <div class="border-l-4 border-black px-2">
        Projects, Publications and Certifications
      </div>
      <div class="md:flex md:gap-10 pr-20">
        <div class="pt-7">
          <Card
            title="Elderaan: An app for the Elderly"
            link="https://github.com/AviRatnam/HCI_Project"
          />
        </div>
        <div class="pt-7">
          <Card
            title="PES University Capstone Project 2021"
            link="https://github.com/AviRatnam/React-Capstone"
          />
        </div>
        <div class="pt-7">
          <Card
            title="PES University Data Visualisation Project"
            link="https://github.com/AviRatnam/IDS-Project"
          />
        </div>
      </div>
      <div class="md:flex gap-10 pr-28">
        <div class="py-7">
          <Card
            title="Research Paper Nov. 2020"
            link="https://drive.google.com/file/d/1GenLaf_9bwu9JH4Ehah9Faec3IbZii8l/view?usp=sharing"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPublisPapers;
