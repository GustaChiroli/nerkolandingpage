import Navbar from "./_components/Navbar";
import FirstSession from "./sessions/FirstSession";
import SecondSession from "./sessions/SecondSession";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>

        <FirstSession />
      </div>
      <SecondSession />
    </>
  );
};

export default Home;
