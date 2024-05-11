import React from "react";
import LoadingIcon from "../../components/icons/loading.svg?react";

const Loading: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center text-center items-center animate-fadeIn">
      <div role="status mx-auto flex items-center block text-center">
        <LoadingIcon className="mx-auto w-8" />
        <span className="block my-4">Loading</span>
      </div>
    </div>
  );
};

export default Loading;
