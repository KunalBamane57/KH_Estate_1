"use client";

import { useRouter } from "next/navigation";
import React, { useState, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faGlobe,
  faCaretDown,
  faCircleUser,
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faMoon,
  faSun,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Airbnb_Logo from "../Assets/Airbnb_Logo.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface Guests {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const Navbar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const updateGuests = (
    type: keyof Guests,
    operation: "increment" | "decrement",
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]:
        operation === "increment" ? prevGuests[type] + 1 : prevGuests[type] - 1,
    }));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getTotalGuests = () => {
    const { adults, children, infants, pets } = guests;
    const totalGuests = adults + children + infants + pets;
    return totalGuests > 0
      ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
      : "Add guests";
  };

  return (
    <>
      <div
        className={`outernav border-b pb-8 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="innernav_1">
          <div
            className={`nav flex justify-between items-center px-4 py-2 md:px-8 md:py-4 ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div className="logo flex-shrink-0">
              <Image
                src={Airbnb_Logo}
                alt="Airbnb Logo"
                className="h-8 w-24 md:h-12 md:w-36"
              />
            </div>
            <div className="hidden md:flex flex-grow justify-center space-x-5 list-none pl-20 text-xl">
              <li className="font-bold cursor-pointer">Stays</li>
              <li className="cursor-pointer text-slate-700">Experiences</li>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog>
                <DialogTrigger>
                  <div className="language_change hidden md:flex items-center border border-slate-500 rounded-full px-4 py-2">
                    <span className="text-xl">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        style={{ color: darkMode ? "#e0e0e0" : "#676565" }}
                      />
                    </span>{" "}
                    &#160; &#160;
                    <h4 className="text-md">
                      English &#160;{" "}
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{ color: darkMode ? "#e0e0e0" : "#676565" }}
                      />
                    </h4>
                  </div>
                </DialogTrigger>
                <DialogContent className="lg:max-w-[1000px] h-[600px] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-normal text-md">
                      <div className="options flex flex-row border-b-2 pb-2">
                        <div className="language">Language & Region</div> &nbsp;
                        &nbsp;
                        <div className="Currency text-neutral-500">
                          Currency
                        </div>
                      </div>
                    </DialogTitle>
                    <DialogHeader className="text-2xl pt-5">
                      Suggested Languages & Regions
                    </DialogHeader>
                    <DialogDescription className="suggested_lang">
                      <div className="sugg_lang flex gap-[100px] py-5 pb-10">
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          United Kingdom
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          United States
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">हिंदी</span>
                          <br />
                          भारत
                        </div>
                      </div>
                    </DialogDescription>
                    <DialogHeader className="text-2xl">
                      Choose a Language and Region
                    </DialogHeader>
                    <DialogDescription className="choose_lang">
                      <div className="sugg_lang grid grid-cols-5 gap-4 py-5 max-h-[600px]">
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          India
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Azərbaycanca</span>
                          <br />
                          Azərbaycan
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Bahasa Indonesia</span>
                          <br />
                          Indonesia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Bosanski</span>
                          <br />
                          Bosna i Hercegovina
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Català</span>
                          <br />
                          Espanya
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Česky</span>
                          <br />
                          Česká republika
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Crnogorski</span>
                          <br />
                          Crna Gora
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Dansk</span>
                          <br />
                          Danmark
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Deutsch</span>
                          <br />
                          Deutschland
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Deutsch</span>
                          <br />
                          Österreich
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Deutsch</span>
                          <br />
                          Schweiz
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Deutsch</span>
                          <br />
                          Luxemburg
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Eesti</span>
                          <br />
                          Eesti
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          Australia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          Canada
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          Ireland
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          New Zealand
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">English</span>
                          <br />
                          Singapore
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Argentina
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Bolivia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Chile
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Colombia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Costa Rica
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Ecuador
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          El Salvador
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          España
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Estados Unidos
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Guatemala
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Honduras
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          México
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Nicaragua
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Panamá
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Paraguay
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Perú
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Uruguay
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Español</span>
                          <br />
                          Venezuela
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          Belgique
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          Canada
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          France
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          Luxembourg
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Français</span>
                          <br />
                          Suisse
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Italiano</span>
                          <br />
                          Italia
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Italiano</span>
                          <br />
                          Svizzera
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Magyar</span>
                          <br />
                          Magyarország
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Nederlands</span>
                          <br />
                          België
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Nederlands</span>
                          <br />
                          Nederland
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Norsk</span>
                          <br />
                          Norge
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Polski</span>
                          <br />
                          Polska
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Português</span>
                          <br />
                          Brasil
                        </div>
                        <div className="sugg_1">
                          <span className="text-black">Português</span>
                          <br />
                          Portugal
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="loginbtn text-4xl">
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      style={{ color: darkMode ? "#e0e0e0" : "#676565" }}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col items-center mt-3">
                  <DropdownMenuLabel className="font-normal hover:bg-gray-50">
                    Signup
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="font-normal hover:bg-gray-50">
                    Login
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>KH_Estates Your home</DropdownMenuItem>
                  <DropdownMenuItem>Host an experience</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/destination-page">
                    <button>Help center</button>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="darkmode text-4xl" onClick={toggleDarkMode}>
                <FontAwesomeIcon
                  icon={darkMode ? faSun : faMoon}
                  style={{ color: darkMode ? "#FFD700" : "#676565" }}
                />
              </div>
              <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`innernav_2 ${
            mobileMenuOpen ? "block" : "hidden"
          } md:flex ${darkMode ? "bg-gray-800" : "bg-white"} ${
            darkMode ? "text-white" : "text-black"
          } rounded-full w-full md:w-[80%] lg:w-[80%] xl:w-[50%] mx-auto`}
        >
          <div
            className={`flex items-center rounded-full w-full bg-transparent border ${
              darkMode ? "border-gray-600" : "border-gray-300"
            } shadow-lg`}
          >
            <div className="flex-1 px-3 py-2 flex flex-col justify-center ml-3">
              <label className="text-sm">Where</label>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full text-sm focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex-1 px-3 py-2 border-l flex flex-col justify-center">
              <label className="text-sm">Check in</label>
              <input
                type="text"
                placeholder="Add dates"
                className="w-full text-sm focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex-1 px-3 py-2 border-l flex flex-col justify-center">
              <label className="text-sm">Check out</label>
              <input
                type="text"
                placeholder="Add dates"
                className="w-full text-sm focus:outline-none bg-transparent"
              />
            </div>
            <div
              className="whosec flex-1 px-3 py-2 border-l flex items-center relative"
              onClick={toggleDropdown}
            >
              <div className="who flex-1">
                <label className="text-sm">Who</label> <br />
                <label className="add_guests text-sm text-slate-400">
                  {getTotalGuests()}
                </label>
              </div>
              <div className="search ml-4">
                <button className="bg-[#FF385C] text-white px-3 py-2 rounded-full">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
              {dropdownVisible && (
                <div
                  className={`absolute top-full right-0 ${
                    darkMode ? "bg-gray-900" : "bg-white"
                  } p-6 rounded-xl shadow-lg mt-2 w-[350px] md:w-[400px] lg:w-[450px]`}
                >
                  {["Adults", "Children", "Infants", "Pets"].map(
                    (category, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center border-b pb-2 m-8 ${
                          darkMode ? "border-slate-400" : "border-gray-300"
                        }`}
                      >
                        <div className="px-4">
                          <h4 className="font-medium text-lg">{category}</h4>
                          <p className="text-sm">
                            {category === "Adults" && "Ages 13 or above"}
                            {category === "Children" && "Ages 2–12"}
                            {category === "Infants" && "Under 2"}
                            {category === "Pets" &&
                              "Bringing a service animal?"}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <button
                            className={`bg-gray-100 px-3 py-1 rounded-full ${
                              darkMode ? "bg-gray-700" : "bg-gray-100"
                            }`}
                            onClick={(e) =>
                              updateGuests(
                                category.toLowerCase() as keyof Guests,
                                "decrement",
                                e
                              )
                            }
                            disabled={
                              guests[category.toLowerCase() as keyof Guests] ===
                              0
                            }
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="mx-2 text-lg">
                            {guests[category.toLowerCase() as keyof Guests]}
                          </span>
                          <button
                            className={`bg-gray-100 px-3 py-1 rounded-full ${
                              darkMode ? "bg-gray-700" : "bg-gray-100"
                            }`}
                            onClick={(e) =>
                              updateGuests(
                                category.toLowerCase() as keyof Guests,
                                "increment",
                                e
                              )
                            }
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
