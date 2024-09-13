import Languagebar from "@/components/ui/languagebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import helpcare_1 from "./helpcare_assets/helpcare_1.jpg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  faCircleUser,
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HelpCenter = async () => {
  return (
    <main>
      <div className="con_1">
        <div className="navbar flex justify-between p-4 px-6 lg:px-20">
          <div className="logo text-xl font-semibold">loogo</div>
          <div className="lang_signup flex items-center gap-4">
            <div className="lang">
              <Languagebar />
            </div>
            <div className="signup">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="loginbtn text-2xl lg:text-4xl">
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      style={{ color: "#676565" }}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col items-center mt-3">
                  <DropdownMenuLabel className="font-normal hover:bg-gray-50">
                    <Link href="/login">Signup</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="font-normal hover:bg-gray-50">
                    <Link href="/login">Login</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>KH_Estates Your home</DropdownMenuItem>
                  <DropdownMenuItem>Host an experience</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/help-center">Help center</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      <div className="con_2 flex flex-col items-center px-4 lg:px-0">
        <div className="heading text-3xl lg:text-5xl font-semibold text-center mt-6 lg:mt-10">
          Hi, how can I help you?
        </div>

        <div className="w-full flex justify-center mt-6 lg:mt-8">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[500px]">
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
      <div className="con_2 mx-48 py-16">
        <div className="inner_con_1 flex list-none gap-4 border-b-2 pb-2">
          <li>Guest</li>
          <li>Host</li>
          <li>Experience Host</li>
          <li>Travel admin</li>
        </div>

        <div className="inner_con_2 py-10">
          <div className="inner_con_2_box1 flex items-center justify-between">
            <h2 className="text-3xl">Guides for getting started</h2>
            <a href="#">
              Browse all topics <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000000", }} />
            </a>
          </div>
          <div className="inner_con_2_box1 flex gap-10 text-center">
            <div className="w-[300px]">
              <AspectRatio ratio={16/9}>
                <Image src={helpcare_1} alt="Image" className="rounded-md object-cover" />
                <p>Getting started with KH_Estates</p>
              </AspectRatio>
            </div>
            <div className="w-[300px]">
              <AspectRatio ratio={16/9}>
                <Image src={helpcare_1} alt="Image" className="rounded-md object-cover" />
                <p>Access and manage your account</p>
              </AspectRatio>
            </div>
            <div className="w-[300px]">
              <AspectRatio ratio={16/9}>
                <Image src={helpcare_1} alt="Image" className="rounded-md object-cover" />
                <p>Help with a reservation</p>
              </AspectRatio>
            </div>
            <div className="w-[300px]">
              <AspectRatio ratio={16/9}>
                <Image src={helpcare_1} alt="Image" className="rounded-md object-cover" />
                <p>AirCover for guests</p>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpCenter;
