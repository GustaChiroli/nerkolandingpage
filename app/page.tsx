import Navbar from "./_components/Navbar";
import FirstSession from "./sessions/FirstSession";
import SecondSession from "./sessions/SecondSession";
import { ScrollProvider } from "./_components/ScrollContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Home = () => {
  return (
    <ScrollProvider>
      <Navbar />
      <FirstSession />
      <SecondSession />
    </ScrollProvider>
  );
};

export default Home;
