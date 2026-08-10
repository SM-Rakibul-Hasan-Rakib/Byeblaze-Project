import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/70 backdrop-blur-sm"
      role="status"
      aria-label="Loading page"
    >
      <ClockLoader size={56} color="#8b5cf6" speedMultiplier={0.9} />
    </div>
  );
};

export default Loader;
