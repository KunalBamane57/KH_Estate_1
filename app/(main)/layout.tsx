import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Container_1 from "@/components/container/Container_1";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/navbar"
import '@fortawesome/fontawesome-svg-core/styles.css';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full relative">
        <div className="">
          <Navbar />
        </div>
        <main className="child">{children}</main>
        <Container_1 />
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default MainLayout;
