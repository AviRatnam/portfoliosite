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

const TechIUse = () => {
  return (
    <div class="pt-16 font-sans font-bold text-4xl md:pl-28 pl-20">
      <div class="border-l-4 border-black px-2 ">Technology I use</div>
      <div class="grid grid-cols-4 my-7 gap-y-7 gap-x-1">
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
  );
};

export default TechIUse;
