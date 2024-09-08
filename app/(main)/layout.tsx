import { redirect } from "next/navigation";
import Navbar from "@/components/navigation/navbar"
import '@fortawesome/fontawesome-svg-core/styles.css';


const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="">
        <Navbar />
      </div>
      <main className="child">{children}</main>
    </div>
  );
};

export default MainLayout;
