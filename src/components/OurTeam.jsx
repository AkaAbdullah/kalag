import { mediaData } from "../utils/mediaData";

// OurTeam component, which renders a list of team members
export const OurTeam = () => {
  return (
    <section className="space-y-5">
      <h1 className="mb-5 font-bold text-3xl text-start lg:text-center">
        A word From our Team members
      </h1>
      <hr />
      <div className="flex flex-wrap gap-6 justify-around">
        {teamMembersData.map((member) => (
          <TeamMemberCard key={member.id} data={member} />
        ))}
      </div>
    </section>
  );
};

// TeamMemberCard component, which renders individual team member details
export const TeamMemberCard = ({ data }) => {
  return (
    <div className="w-full md:w-[300px] rounded-xl bg-white shadow-lg">
      <img
        src={data?.image}
        alt={data?.name}
        className="rounded-xl w-full object-cover md:w-[300px]"
      />
      <div className="p-3 space-y-3">
        <h1 className="text-lg font-bold">{data.name}</h1>
        <h3 className="text-gray-800 font-semibold">{data.role}</h3>
        <hr />
        <p className="text-sm text-gray-400">
          {data.words || "No words available"}
        </p>
      </div>
    </div>
  );
};

// Team members data
export const teamMembersData = [
  {
    id: 1,
    name: "Danish Bilal",
    image: mediaData.danish,
    role: "CEO and Co-founder",
    words:
      "Leading with passion and innovation to create solutions that make a difference.",
  },
  {
    id: 2,
    name: "Talat Hussain",
    image: mediaData.talat,
    role: "CEO and Co-founder",
    words: "Empowering teams to push boundaries and achieve the impossible.",
  },
  {
    id: 3,
    name: "Awais Anwar",
    image: mediaData.placeholderImage,
    role: "Project Manager",
    words:
      "Turning visionary ideas into reality and inspiring others along the way.",
  },
  {
    id: 3,
    name: "Awais Anwar",
    image: mediaData.placeholderImage,
    role: "PPC Expert",
    words:
      "Technology is the bridge between dreams and reality. I'm here to make that bridge stronger.",
  },
];
