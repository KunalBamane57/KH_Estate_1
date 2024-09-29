import Languagebar from "@/components/ui/languagebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import helpcare_1 from "./helpcare_assets/helpcare_1.jpg";
import helpcare_2 from "./helpcare_assets/helpcare_2.jpg";
import helpcare_3 from "./helpcare_assets/helpcare_3.jpg";
import helpcare_4 from "./helpcare_assets/helpcare_4.jpg";
import helpcare_5 from "./helpcare_assets/helpcare_5.png";
import helpcare_6 from "./helpcare_assets/helpcare_6.png";

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
import LowerFooter from "@/components/footer/Lowerfooter";

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

      <div className="con_2 mx-4 md:mx-16 lg:mx-48 py-8 md:py-12 lg:py-16">
        <div className="inner_con_1 flex flex-wrap gap-2 md:gap-4 border-b-2 pb-2 list-none">
          <li>Guest</li>
          <li>Host</li>
          <li>Experience Host</li>
          <li>Travel admin</li>
        </div>

        <div className="inner_con_2 py-8 md:py-10">
          <div className="inner_con_2_box1 flex flex-col md:flex-row items-start md:items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Guides for getting started
            </h2>
            <a href="#" className="mt-4 md:mt-0">
              Browse all topics{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#000000" }}
              />
            </a>
          </div>

          <div className="inner_con_2_box2 flex flex-wrap gap-4 md:gap-6 text-center py-8 md:py-10">
            <div className="w-full md:w-[263px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={helpcare_1}
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <p className="pt-10 mt-2">Getting started with KH_Estates</p>
            </div>
            <div className="w-full md:w-[263px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={helpcare_2}
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <p className="pt-10 mt-2">Access and manage your account</p>
            </div>
            <div className="w-full md:w-[263px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={helpcare_3}
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <p className="pt-10 mt-2">Help with a reservation</p>
            </div>
            <div className="w-full md:w-[263px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={helpcare_4}
                  alt="Image"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <p className="pt-10 mt-2">AirCover for guests</p>
            </div>
          </div>
        </div>

        <div className="inner_con_2_box3 mt-8 md:mt-10 pt-8 md:pt-10">
          <h1 className="text-2xl md:text-3xl font-semibold">Top articles</h1>
        </div>

        <div className="inner_con_2_box4 flex flex-wrap gap-3">
          <div className="small_box1 w-full md:w-[350px] py-6 md:py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-2 text-lg font-semibold">
              Cancelling your reservation for a stay
            </h2>
            <p>
              Your plans have changed and now you need to cancel your
              reservation. No problem.
            </p>
          </div>
          <div className="small_box1 w-full md:w-[350px] py-6 md:py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-2 text-lg font-semibold">
              Change the date or time of your Experience reservation
            </h2>
            <p>
              You booked an Experience, but the date or time no longer works for
              you? Don’t worry, you...
            </p>
          </div>
          <div className="small_box1 w-full md:w-[350px] py-6 md:py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-2 text-lg font-semibold">
              If your Host cancels your reservation
            </h2>
            <p>
              While it’s rare, sometimes a Host may need to cancel a
              reservation. We understand this can...
            </p>
          </div>
          <div className="small_box1 w-full md:w-[350px] py-6 md:py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-2 text-lg font-semibold">
              Payment methods accepted
            </h2>
            <p>
              KH_Estates supports different payment methods, depending on the
              country your payment...
            </p>
          </div>
          <div className="small_box1 w-full md:w-[350px] py-6 md:py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-2 text-lg font-semibold">
              Editing, removing, or adding a payment method
            </h2>
            <p>
              If an existing payment method on your account is incorrect (e.g.
              an expired credit...
            </p>
          </div>
          <div className="small_box1 w-full md:w-[350px] py-6 md:py-10 mb-2 border-b-2 cursor-pointer">
            <h2 className="underline underline-offset-2 text-lg font-semibold">
              When you’ll pay for your reservation
            </h2>
            <p>
              You just made a reservation – congrats! So, what happens next?
              Your payment method
            </p>
          </div>
        </div>
      </div>

      <div className="con_3 h-auto md:h-[470px] bg-black text-white py-8">
        <div className="inner_1 mx-4 md:mx-16 lg:mx-48">
          <div className="inner_con_3_box1 mb-6 md:mb-10">
            <h1 className="text-2xl md:text-3xl font-semibold">Explore More</h1>
          </div>
          <div className="inner_con_3_box2 flex flex-wrap gap-4 md:gap-5">
            <div className="smallbox_1 w-full md:w-[344px] bg-zinc-800 text-center pb-3 rounded-xl">
              <Image
                src={helpcare_5}
                alt="Image"
                className="rounded-t-xl object-cover"
              />
              <p className="pt-3">
                Our community policies How we build a foundation of trust.
              </p>
            </div>
            <div className="smallbox_1 w-full md:w-[344px] bg-zinc-800 text-center pb-3 rounded-xl">
              <Image
                src={helpcare_6}
                alt="Image"
                className="rounded-t-xl object-cover"
              />
              <p className="pt-3">
                Safety tips and guidelines Resources to help travellers stay
                safe.
              </p>
            </div>
            <div className="smallbox_1 w-full md:w-[350px] text-xl text-center py-6 bg-transparent">
              <h2 className="text-2xl md:text-2xl font-bold py-2">
                Need to get in touch?
              </h2>
              <p className="pb-5">
                We’ll start with some questions and get you to the right place.
              </p>
              <button className="bg-white text-black rounded-lg w-[90%] py-3 my-2">
                Contact us
              </button>
              <p className="py-3">
                You can also{" "}
                <span className="underline underline-offset-2">
                  give us feedback.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="con_4">
        <LowerFooter />
      </div>
    </main>
  );
};

export default HelpCenter;
