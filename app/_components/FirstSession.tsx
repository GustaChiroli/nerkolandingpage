import styles from "../styles/Home.module.css";
const FirstSession = () => {
  return (
    <div className="w-full h-full justify-center text-center py-[150px]">
      <div className=" flex justify-center">
        <div className=" flex w-64 justify-center">
          <h1 className="text-8xl font-sans">
            Buy & Sell Nerko&apos;s Collection
          </h1>
        </div>
      </div>
      <div className="justify-center my-5">
        <h1 className=" font-MabryPro-Medium text-2xl">
          Invest and manage all your NFTs at one place.
        </h1>
      </div>
      <div className=" w-full bg-orange-300 justify-center flex">
        <a
          className=" text-white font-mabry-pro text-lg bg-gradient-to-tr from-buttomBlue to-buttomPink mt-[30px] py-4 px-[40px] rounded-full"
          href="#"
        >
          <span>Browse collection</span>
        </a>
        
      </div>
    </div>
  );
};

export default FirstSession;
