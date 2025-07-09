import { RiTailwindCssFill } from "react-icons/ri";

const Tag = () => {
  return (
    <section className="w-full bg-black my-8 md:px-12 ">
      <div className="container mx-auto px-2 py-6  flex flex-wrap md:flex-row items-center justify-around md:justify-around gap-x-5 lg:space-x-6">
        <span className="text-white font-semibold text-sm lg:text-2xl">
          Agility
        </span>
        <RiTailwindCssFill className="text-orange-500 text-xl" />
        <span className="text-white font-semibold text-sm lg:text-2xl">
          Fitness
        </span>
        <RiTailwindCssFill className="text-orange-500 text-xl" />
        <span className="text-white font-semibold text-sm lg:text-2xl">
          Discipline
        </span>
      </div>
      {/* <RiTailwindCssFill className="text-orange-500 text-xl"/> */}
    </section>
  );
};

export default Tag;
