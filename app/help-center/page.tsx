import Languagebar from "@/components/ui/languagebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import helpcare_1 from "./helpcare_assets/helpcare_1.jpg";
import helpcare_2 from "./helpcare_assets/helpcare_2.jpg";
import helpcare_3 from "./helpcare_assets/helpcare_3.jpg";
import helpcare_4 from "./helpcare_assets/helpcare_4.jpg";

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
            <h2 className="text-3xl font-semibold">
              Guides for getting started
            </h2>
            <a href="#">
              Browse all topics{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#000000" }}
              />
            </a>
          </div>
          <div className="inner_con_2_box2 flex gap-6 text-center py-10">
            <div className="w-[300px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={helpcare_1}
                  alt="Image"
                  className="rounded-md object-cover"
                />
                <p className="pt-3">Getting started with KH_Estates</p>
              </AspectRatio>
            </div>
            <div className="w-[300px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={helpcare_2}
                  alt="Image"
                  className="rounded-md object-cover"
                />
                <p className="pt-3">Access and manage your account</p>
              </AspectRatio>
            </div>
            <div className="w-[300px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={helpcare_3}
                  alt="Image"
                  className="rounded-md object-cover"
                />
                <p className="pt-3">Help with a reservation</p>
              </AspectRatio>
            </div>
            <div className="w-[300px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={helpcare_4}
                  alt="Image"
                  className="rounded-md object-cover"
                />
                <p className="pt-3">AirCover for guests</p>
              </AspectRatio>
            </div>
          </div>
        </div>
        <div className="inner_con_2_box3 mt-10 pt-10">
          <h1 className="text-3xl font-semibold">Top articles</h1>
        </div>
        <div className="inner_con_2_box4 flex flex-wrap gap-3">
          <div className="small_box1 w-[355px] py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-1 text-lg font-semibold">
              Cancelling your reservation for a stay
            </h2>
            <p>
              Your plans have changed and now you need to cancel your
              reservation. No problem.
            </p>
          </div>
          <div className="small_box1 w-[360px] py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-1 text-lg font-semibold">
              Change the date or time of your Experience reservation
            </h2>
            <p>
              You booked an Experience, but the date or time no longer works for
              you? Don’t worry, you...
            </p>
          </div>
          <div className="small_box1 w-[355px] py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-1 text-lg font-semibold">
              If your Host cancels your reservation
            </h2>
            <p>
              While it’s rare, sometimes a Host may need to cancel a
              reservation. We understand this can...
            </p>
          </div>
          <div className="small_box1 w-[355px] py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-1 text-lg font-semibold">
              Payment methods accepted
            </h2>
            <p>
              KH_Estates supports different payment methods, depending on the
              country your payment...
            </p>
          </div>
          <div className="small_box1 w-[355px] py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-1 text-lg font-semibold">
              Editing, removing, or adding a payment method
            </h2>
            <p>
              If an existing payment method on your account is incorrect (e.g.
              an expired credit...
            </p>
          </div>
          <div className="small_box1 w-[355px] py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-1 text-lg font-semibold">
              When you’ll pay for your reservation
            </h2>
            <p>
              You just made a reservation – congrats! So, what happens next?
              Your payment method
            </p>
          </div>
        </div>
      </div>
      <div className="con_3 h-[400px] bg-black text-white">
        <div className="inner_1 mx-48">
          <div className="inner_con_3_box1 my-10 pt-10">
            <h1 className="text-3xl font-semibold">Explore More</h1>
          </div>
          <div className="inner_con_3_box2 flex gap-5">
            <div className="smallbox_1 w-[350px] bg-gray-700">
                <Image
                  src={helpcare_4}
                  alt="Image"
                  className="rounded-md object-cover"
                />
                <p className="pt-3 text-white">AirCover for guests</p>
            </div>
            <div className="smallbox_1 w-[350px]">
                <Image
                  src={helpcare_4}
                  alt="Image"
                  className="rounded-md object-cover"
                />
                <p className="pt-3">AirCover for guests</p>
            </div>
            <div className="smallbox_1 w-[350px]"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpCenter;
