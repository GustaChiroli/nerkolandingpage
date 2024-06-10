import Background from "./_components/Background";
import Navbar from "./_components/Navbar";
import FirstSession from "./sessions/FirstSession";
import SecondSession from "./sessions/SecondSession";

const Home = () => {
    return (
        <>
            <Background/>
            <Navbar/>
            <FirstSession/>
            <SecondSession/>
        </>

    );
}

export default Home;