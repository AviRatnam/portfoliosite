const Card = ({ title, subtitle, link }) => {
  const cardstyle = "rounded-md px-5 py-4 font-sans font-bold text-xl border-2 border-gray-200 hover:bg-yellow-200";

  return (
    <a href={link}>
      <div class={cardstyle}>
        <div class="border-l-2 border-black px-2">{title}</div>
      </div>
    </a>
  );
};

export default Card;
