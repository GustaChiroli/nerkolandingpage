import Image from "next/image";
const FirstSession = () => {
  return (
    <div className="w-full h-full justify-center text-center mt-[82px]">
      <div className=" flex justify-center">
        <div className=" flex w-64 justify-center">
          <div className=" flex top-[-20%] left-[50%] absolute">
              <Image src='/images/ethereum-01.jpeg' alt="Ethereum" width={44} height={43.5} />
          </div>
          <div className=" flex top-[16%] left-[-16%] absolute">
              <Image src='/images/circle-01.jpeg' alt="Circle" width={16} height={16.58} />
          </div>
          <div className=" flex top-[20%] right-[-20%] absolute">
              <Image src='/images/x.jpeg' alt="X" width={24} height={23.48} />
          </div>
          <div className=" flex bottom-[-16%] left-[16%] absolute">
              <Image src='/images/bitcoin-01.jpeg' alt="Bitcoin" width={44} height={44.41} />
          </div>
          <div className=" flex bottom-[-16%] right-[16%] absolute">
              <Image src='/images/circle-03.jpeg' alt="Circle 3" width={24} height={25.78} />
          </div>
          <h1 className=" text-8xl font-sans">
            Buy & Sell Nerko&apos;s Collection
          </h1>
        </div>
      </div>
      <div className="justify-center my-5">
        <h1 className=" font-MabryPro-Medium text-2xl">
          Invest and manage all your NFTs at one place.
        </h1>
      </div>
      <div className=" hover:brightness-110 w-full justify-center flex">
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
