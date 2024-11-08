import { mediaData } from "../utils/mediaData";

export const OurTeam = () => {
  return (
    <section className=" space-y-5">
      <h1 className="mb-5 font-bold text-3xl text-start lg:text-center">
        A word From our Team members
      </h1>
      <hr />
      <div>
        <TeamMemberCard />
      </div>
    </section>
  );
};

export const TeamMemberCard = () => {
  return (
    <div className=" w-full md:w-[300px]  rounded-xl bg-white shadow-lg ">
      <img src={mediaData.CEO} className=" rounded-xl w-full md:w-[300px]" />
      <div className=" p-3">
        <h1 className=" text-lg font-bold">Parsuttam Malik</h1>
        <h3 className="  text-gray-400">Lumber One CEO</h3>
        <hr />
        <p className=" text-sm text-gray-400">Go and kill the waves</p>
      </div>
    </div>
  );
};

export const teamMembersData = [
  {
    id: 1,
    name: "Parsutam Malik",
    image: "",
    role: "Lumber One CEO",
    words: "",
  },
];
