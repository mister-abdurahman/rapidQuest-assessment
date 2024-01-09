import React, { useEffect } from "react";
import { progressFn } from "./../progressBar";

export const ProgressBar = ({
  percent = "20",
  name,
}: {
  percent: string;
  name: string;
}) => {
  useEffect(function () {
    progressFn();
  }, []);

  return (
    <div className="bg-white rounded-full relative">
      <div
        className="circular-progress"
        data-inner-circle-color="#ffffff"
        data-percentage={percent}
        data-progress-color="#19b3a8"
        data-bg-color="#e3f4f3"
      >
        <div className="inner-circle"></div>
        <p className="percentage">0%</p>
      </div>
      <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-center font-semibold text-xs sm:text-[.6rem]">
        {name}
      </p>
    </div>
  );
};
