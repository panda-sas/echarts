import React from "react";
import GradientAreaChart from "../Charts/GradientAreaChart";
import { Card } from "primereact/card";

const Landing = () => {
  return (
    <div className="card">
      <div className="flex flex-row flex-wrap card-container blue-container align-items-center">
        <div className="flex align-items-center justify-content-center w-12rem h-12rem bg-blue-500 font-bold text-white border-round m-2">
          <div class="w-full align-items-center justify-content-center">
            <h4>Gradient Area Chart</h4>
          </div>
        </div>
        <div className="flex align-items-center justify-content-center w-12rem h-12rem bg-blue-500 font-bold text-white border-round m-2">
          <div class="w-full align-items-center justify-content-center">
          <h4>Another Type Chart</h4>
          </div>
        </div>
        <div className="flex align-items-center justify-content-center w-12rem h-12rem bg-blue-500 font-bold text-white border-round m-2">
          <div class="w-full align-items-center justify-content-center">
          <h4>Someother Type Chart</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
