import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyWindow,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import home_image_1 from "./home_assets/home_image_1.png";
import LowerFooter from "@/components/footer/Lowerfooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const page = () => {
  return (
    <div>
      <div className="navbar flex justify-between mx-20 py-5 items-center">
        <div className="leftnav">
          <div className="logo">Logo</div>
        </div>
        <div className="rightnav flex gap-5 items-center text-lg ">
          <h1>Ready to search at KH_estate?</h1>
          <button className="flex items-center gap-1 px-7 py-3 bg-[#FF385C] rounded-lg text-white">
            <FontAwesomeIcon
              icon={faHouseChimneyWindow}
              style={{ color: "#ffffff" }}
            />
            Setup
          </button>
        </div>
      </div>

      <div className="container_1 flex justify-center items-center my-5">
        <div className="leftcon_1 w-[50%] flex flex-col justify-center items-center gap-2">
          <h1 className="text-[#FF385C] text-5xl font-semibold">KH_Estate</h1>
          <h1 className="text-5xl font-semibold">You Could Earn</h1>
          <h1 className="text-6xl font-semibold my-5">&#8377;23,573</h1>
          <p>
            <span className="underline">7 nights</span> at an estimated ₹3,352 a
            night
          </p><br />
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[45%]")}
          />
          <p className="underline my-3 mt-5">Learn how we estimate your earnings</p>
          <div className="w-full flex justify-center mt-6 lg:mt-5">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[400px]">
              <div className="search w-full bg-stone-100 rounded-full hover:bg-stone-200 focus-within:bg-white focus-within:shadow-lg transition-all">
                <input
                  type="email"
                  placeholder="Search how-tos and more"
                  className="bg-stone-100 p-4 lg:p-5 w-full rounded-full text-black focus:outline-none hover:bg-stone-200 focus:bg-white transition-all placeholder:text-black"
                />
              </div>
              <button className="bg-[#FF385C] text-white px-3 py-2 rounded-full absolute top-1/2 transform -translate-y-1/2 right-4">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="rightcon_1 w-[50%]">
          <div className="map border h-[570px]">map</div>
        </div>
      </div>

      <div className="container_2 flex flex-col justify-center items-center my-32 mx-32">
        <div className="image_heading text-center">
          <h1 className="text-4xl font-semibold my-10">KH_Estate it easily with KH_Estate Setup</h1>
          <div className="home_image_1">
            <Image
              src={home_image_1}
              alt="KH_Estate Logo"
              className="w-full"
            />
          </div>
        </div>
        <div className="3box flex my-10 gap-6">
          <div className="box">
            <p>
              <div className="font-semibold text-lg pb-2">One-to-one guidance from a Superhost</div>
              We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.
            </p>
          </div>
          <div className="box">
            <p>
              <div className="font-semibold text-lg pb-2">An experienced guest for your first booking</div>
              For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on KH_Estate.
            </p>
          </div>
          <div className="box">
            <p>
              <div className="font-semibold text-lg pb-2">Specialised support from KH_Estate</div>
              New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.
            </p>
          </div>
        </div>
      </div>

      <div className="container_3 flex justify-center py-20 bg-[#F7F7F7;]">
        <div className="left_con3 w-[40%]">
          <h1 className="text-5xl font-semibold">Your questions, <br /> answered</h1>
        </div>
        <div className="left_con3 w-[40%]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-normal">Is my place right for KH_Estate?</AccordionTrigger>
              <AccordionContent className="text-xl font-normal text-slate-600">
              KH_Estate guests are interested in all kinds of places. We have listings for tiny homes, cabins, tree houses and more. Even a spare room can be a great place to stay.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl font-normal">Do I have to host all the time?</AccordionTrigger>
              <AccordionContent className="text-xl font-normal text-slate-600">
              Not at all – you control your calendar. You can host once a year, a few nights a month or more often.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl font-normal">How much should I interact with guests?</AccordionTrigger>
              <AccordionContent className="text-xl font-normal text-slate-600">
              It’s up to you. Some Hosts prefer to message guests only at key moments – like sending a short note when they check in – while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl font-normal">Any tips on being a great KH_Estate Host?</AccordionTrigger>
              <AccordionContent className="text-xl font-normal text-slate-600">
              Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required.
              Read on for more hosting tips
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-2xl font-normal">What are KH_Estate’s fees?</AccordionTrigger>
              <AccordionContent className="text-xl font-normal text-slate-600">
              KH_Estate typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas KH_Estate also collects and pays sales and tourism taxes automatically on your behalf.
              Learn more about fees
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>



      <div className="footer">
        <LowerFooter />
      </div>
    </div>
  );
};

export default page;
