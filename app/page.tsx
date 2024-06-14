import Navbar from "./_components/Navbar";
import FirstSession from "./sessions/FirstSession";
import SecondSession from "./sessions/SecondSession";
import { ScrollProvider } from "./_components/ScrollContext";
import Image from "next/image";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThirdSession from "./sessions/ThirdSession";

const Home = () => {
  return (
    <ScrollProvider>
      <Navbar />
      <FirstSession />
      <SecondSession />
      <div className="flex justify-center">
        <Image
          className="mt-[50px] mb-[50px]"
          src="/images/divider.svg"
          alt="divider"
          width={80}
          height={20}
        />
      </div>
      <ThirdSession />
      <div className="flex justify-center">
        <Image
          className="mt-[50px] mb-[50px]"
          src="/images/divider.svg"
          alt="divider"
          width={80}
          height={20}
        />
      </div>
    </ScrollProvider>
  );
};

export default Home;
