import Navbar from "./_components/Navbar";
import SessionSeparator from "./_components/SessionSeparator";
import FirstSession from "./sessions/FirstSession";
import SecondSession from "./sessions/SecondSession";
import { ScrollProvider } from "./_components/ScrollContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThirdSession from "./sessions/ThirdSession";
import FourthSession from "./sessions/FourthSession";

const Home = () => {
  return (
    <ScrollProvider>
      <Navbar />
      <FirstSession />
      <SecondSession />
      <SessionSeparator />
      <ThirdSession />
      <SessionSeparator />
      <FourthSession />
      <SessionSeparator />
    </ScrollProvider>
  );
};

export default Home;
