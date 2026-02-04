import { useEffect } from "react";
import Hero from "../sections/Hero";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;
