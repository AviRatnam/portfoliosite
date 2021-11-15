// import { useState } from "react";

const Card = ({ title, link }) => {
  const cardstyle =
    "rounded-md px-10 py-20 font-sans font-bold text-xl border-2 border-gray-600 hover:bg-yellow-brightyellowcrayola";

  return (
    <a href={link}>
      <div class={cardstyle}>
        <div class="border-l-2 border-black px-2 text-gray-800">{title}</div>
      </div>
    </a>
  );
};

export default Card;
