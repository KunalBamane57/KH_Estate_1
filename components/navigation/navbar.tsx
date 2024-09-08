"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const onhclick = () => {
    router.push(`/`);
  };

  const onclick = () => {
    router.push(`/about`);
  };

  return (
    <>
      <button onClick={onhclick}>Home</button>
      <button onClick={onclick}>About</button>
    </>
  );
};

export default Navbar;
