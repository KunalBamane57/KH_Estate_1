import { redirect } from "next/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <main className="child">{children}</main>
    </div>
  );
};

export default MainLayout;
