import { FaMedal } from "react-icons/fa";

const MembershipMedal = ({ membershipType }) => {
  const getMedalDetails = (type) => {
    if (typeof type !== "string") {
      return null;
    }

    switch (type.toLowerCase()) {
      case "basic":
        return { color: "#cd7f32" };
      case "premium":
        return { color: "#c0c0c0"};
      case "vip":
        return { color: "#ffd700" };
      default:
        return { color: "gray"};
    }
  };

  const details = getMedalDetails(membershipType);

  if (!details) return null;

  const { color } = details;

  return (
    <div className="flex items-center gap-2 mt-4">
      <FaMedal className="text-2xl md:text-3xl lg:text-4xl" color={color} />
      {/* <span className="text-base font-semibold text-gray-700">{label}</span> */}
    </div>
  );
};

export default MembershipMedal;
