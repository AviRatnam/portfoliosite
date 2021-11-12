import "./App.css";
import "./styles.css";
import "./logos/linkedin.svg";
import Linkedin from "./logos/linkedin";
import Medium from "./logos/medium";
import Github from "./logos/github";
import {
  C,
  Css,
  Html,
  Js,
  Python,
  React,
  Tailwindcss,
  Ts,
} from "./logos/techlogos";
import Card from "./Card";

function App() {
  return (
    <div class="grid md:grid-cols-3">
      <div class="md:col-span-1 bg-yellow-brightyellowcrayola w-full h-screen">
        <div class="mx-16 mt-44 font-sans font-bold">
          <div class="text-6xl"> Hello there!</div>
          <div class="my-6 text-3xl">My name is Avinash!</div>
          <div class="my-6 text-3xl">
            I'm an aspiring UI/ UX Developer and Designer from Bangalore, India.{" "}
          </div>
          <div class="my-6 text-3xl">Welcome to my portfolio!</div>
          <div class="my-36 flex gap-24 justify-center">
            <Linkedin />
            <Medium />
            <Github />
          </div>
        </div>
      </div>
      <div class="md:col-span-2 overflow-auto">
        {/* <div class="mx-16 mt-10">
          <div class="text-lg font-bold border-b-2 border-yellow-brightyellowcrayola max-w-2xs">
            About me
          </div>
        </div> */}
        <div class="mx-16 mt-44 font-sans font-bold text-4xl ">
          About me
          <div class="text-xl mt-5 text-gray-800">
            I'm a fourth-year engineering student at PES University, Bangalore,
            India. I love developing, designing, and imagining new, clean, and
            intuitive ways humans interact with devices.
            <br /> Along with developing User Interfaces, I am interested in
            IoT, Data Analytics, and Natural Language Processing.
            <br /> Apart from coding, I love watching football (or soccer),
            Formula One, and dissecting the numbers behind both! In addition, I
            enjoy playing video games and watching movies during the later hours
            of my day.
          </div>
        </div>

        <div class="mx-16 mt-16 font-sans font-bold text-4xl ">
          Technology I use
          <div class="flex my-5 gap-10 sm:overflow-auto">
            <Html />
            <Css />
            <Js />
            <React />
            <Ts />
            <Tailwindcss />
            <Python />
            <C />
            <div class="text-2xl my-3">And more...</div>
          </div>
        </div>

        <div class="mx-16 mt-16 font-sans font-bold text-4xl ">
          Projects, Publications and Certifications
          <div class="flex my-5 gap-10">
            <Card
              title="Elderaan: An app for the Elderly"
              description="Test"
              link="https://github.com/AviRatnam/HCI_Project"
            />
            <Card
              title="PES University Capstone Project 2021"
              description="Test"
              link="https://github.com/AviRatnam/React-Capstone"
            />
            <Card
              title="PES University Data Visualisation Project"
              description="Test"
              link="https://github.com/AviRatnam/IDS-Project"
            />
          </div>
          <div class="flex my-5 gap-10">
            <Card
              title="Research Paper Nov. 2020"
              description="Test"
              link="https://drive.google.com/file/d/1GenLaf_9bwu9JH4Ehah9Faec3IbZii8l/view?usp=sharing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
