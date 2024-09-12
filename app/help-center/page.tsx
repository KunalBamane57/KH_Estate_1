import Languagebar from "@/components/ui/languagebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const HelpCenter = async () => {
  return (
    <main>
      <div className="con_1">
        <div className="navbar flex justify-between p-4 px-20">
          <div className="logo">loogo</div>
          <div className="lang_signup flex items-center gap-4">
            <div className="lang">
              <Languagebar />
            </div>
            <div className="signup">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="loginbtn text-4xl">
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
      <div className="con_2">
        <div className="heading text-5xl font-semibold text-center">
          Hi, how can i help you?
        </div>
        <div className="search_bar w-[300px] hover:bg-stone-100">
          <input
            type="email"
            placeholder="Search how-tos and more"
            className="hover:bg-stone-100 p-5"
          />
          <button>
            <FontAwesomeIcon
                      icon={faCircleUser}
                      style={{ color: "#676565" }}
                      className=""
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default HelpCenter;
