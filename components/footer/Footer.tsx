import React from "react";
import Upperfooter from './Upperfooter';
import LowerFooter from "./Lowerfooter";

const Footer = () => {
  return (
    <>
      <div className="upperfooter border-b-2">
        <div className="w-full bg-neutral-50 py-12">
          <div className="px-4 md:px-8 lg:px-16 xl:px-[100px]">
            <Upperfooter/>
          </div>
        </div>
      </div>
      <div className="lowerfooter">
        <div className="w-full bg-neutral-50 py-12">
          <LowerFooter/>
        </div>
      </div>
    </>
  );
};

export default Footer;
