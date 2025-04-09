"use client";

import * as React from "react";
import "./style.css";

interface SubmitButtonProps {
  onClick: () => void;
  isDisabled: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  isDisabled,
}) => {
  return (
    <>
      <button
        id="btn"
        className="w-fit h-fit flex justify-center items-center py-3 px-6 text-sm text-white bg-black font-bold"
        onClick={onClick}
        disabled={isDisabled}
      >
        <p id="btnText">ENVIAR</p>
        <div className="check-box !w-[28%] !h-full"></div>
      </button>
    </>
  );
};
