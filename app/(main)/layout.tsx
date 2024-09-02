import { redirect } from "next/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-no-repeat relative dark:bg-gradient-to-t dark:from-[#1e1f21] dark:from-10% dark:via-[#292a2d] dark:via-50% dark:to-[#36373a] ">
      <main className="md:pl-[72px] h-full relative z-10">{children}</main>
    </div>
  );
};

export default MainLayout;
