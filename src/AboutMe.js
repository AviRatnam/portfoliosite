const AboutMe = () => {
  return (
    <div class="pt-16 font-sans font-bold text-4xl ">
      <div class="border-l-4 border-black px-2">About me</div>

      <div class="lg:flex lg:justify-between">
        <div class="text-xl pt-7 text-gray-800 max-w-3xl">
          I'm an engineering student at PES University, Bangalore, India. I love
          developing, designing, and imagining new, clean, and intuitive ways
          humans interact with devices.
          <br /> Along with developing User Interfaces, I am interested in
          Internet of Things, Data Analytics, and Natural Language Processing.
          <br /> Apart from coding, I love watching football (or soccer),
          Formula One, and dissecting the numbers behind both!
          <br />
          In addition, I enjoy playing video games and watching movies during
          the later hours of my day.
        </div>
        {/* <img src="images/avi.jpg" alt="me"></img> */}
      </div>
    </div>
  );
};

export default AboutMe;
