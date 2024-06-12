import Image from "next/image";
const FirstSession = () => {
  return (
    <div className="w-full h-full justify-center text-center pb-[40px] mt-[82px] mb-[80px] overflow-hidden">
        <div>
            <div className="w-full pointer-events-none select-none bg-center bg-cover">
                <Image src='/images/background.png' alt="background" fill className=" object-cover opacity-20 z-[-1]" />
            </div>
        </div>
      <div className=" flex justify-center">
        <div className=" flex w-64 justify-center">
          <div className=" flex top-[15%] left-[45%] absolute">
              <Image src='/images/firstSession/ethereum-01.png' alt="Ethereum" className="z-20" width={44} height={43.5} />
          </div>
          <div className=" flex top-[50%] left-[20%] absolute">
              <Image src='/images/firstSession/circle-01.png' alt="Circle" width={16} height={16.58} />
          </div>
          <div className=" flex top-[50%] right-[20%] absolute">
              <Image src='/images/firstSession/x.png' alt="X" width={24} height={23.48} />
          </div>
          <div className=" flex bottom-[-10%] left-[34%] absolute">
              <Image src='/images/firstSession/bitcoin-01.png' alt="Bitcoin" width={44} height={44.41} />
          </div>
          <div className=" flex bottom-[-10%] right-[34%] absolute">
              <Image src='/images/firstSession/circle-03.png' alt="Circle 3" width={24} height={25.78} />
          </div>
          <h1 className=" text-8xl font-sans font-bold">
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
