import * as FiIcon from "react-icons/fi";

const Loading = () => {
  return (
    <div className="fixed top-10 right-1/2 rounded-full text-indigo-600">
      <FiIcon.FiLoader size={38} className="animate-spin"/>
    </div>
  );
};

export default Loading;
