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
        <div class="mx-16 my-44 font-sans font-bold">
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
        <div class="mx-16 mt-44 font-sans font-bold text-4xl ">
          Technology I use
          <div class="md:flex my-5 gap-10">
            <Html />
            <Css />
            <Js />
            <Ts />
            <Tailwindcss />
            <React />
            <Python />
            <C />
            <div class="text-2xl my-3">And more...</div>
          </div>
        </div>

        <div class="mx-16 mt-24 font-sans font-bold text-4xl ">
          My Projects
          <div class="flex my-5 gap-10">
            <Card title="Elderaan App" subtitle="Test" link="" />
            <Card title="Capstone 2021" subtitle="Test" link="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
