import Linkedin from "./logos/linkedin";
import Medium from "./logos/medium";
import Github from "./logos/github";
import Hackerrank from "./logos/hackerrank";

const IntroPanel = () => {
  return (
    <div class=" bg-yellow-brightyellowcrayola w-screen h-screen px-44 py-48 ">
      <div class="font-sans font-bold">
        <div class="text-6xl"> Hello there!</div>
        <div class="my-6 text-3xl">My name is Avinash!</div>
        <div class="my-6 text-3xl">
          I'm an aspiring UI/ UX Developer and Designer from Bangalore, India.
        </div>
        <div class="my-6 text-3xl">Welcome to my portfolio!</div>
        <div class="my-36 flex gap-24 justify-center">
          <Linkedin />
          <Medium />
          <Github />
          <Hackerrank/>
        </div>
      </div>
    </div>
  );
};

export default IntroPanel;
