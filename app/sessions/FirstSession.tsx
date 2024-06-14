'use client';

import Image from "next/image";
import PrincipalButton from "../_components/PrincipalButton";
import useMediaQuery from "@mui/material/useMediaQuery";
const FirstSession = () => {
  const handleButtonClick = () => {
    console.log("clicado first session");
  };

  const isMobile = useMediaQuery("(max-width:995px)");

  return (
    <div id="first-session" className="w-full h-full justify-center text-center pb-[40px] mt-[170px] mb-[80px] overflow-hidden">
        <div>
            <div className="w-full pointer-events-none select-none bg-center bg-cover">
                <Image src='/images/background.png' alt="background" fill className=" object-cover opacity-20 z-[-1]" />
            </div>
        </div>
      <div className=" flex justify-center">
        <div className=" flex w-64 justify-center">
          <div className=" flex top-[15%] left-[58%] absolute">
              <Image src='/images/firstSession/ethereum-01.png' alt="Ethereum" className="z-20" width={44} height={43.5} />
          </div>
          {!isMobile ?
            <div>
              <div className=" flex top-[36%] left-[20%] absolute">
                  <Image src='/images/firstSession/circle-01.png' alt="Circle" width={16} height={16.58} />
              </div>
              <div className=" flex top-[36%] right-[20%] absolute">
                  <Image src='/images/firstSession/x.png' alt="X" width={24} height={23.48} />
              </div>

            </div>
            : ''
          
          }
          <div className=" flex bottom-[5%] left-[32%] absolute">
              <Image src='/images/firstSession/bitcoin-01.png' alt="Bitcoin" width={44} height={44.41} />
          </div>
          <div className=" flex bottom-[5%] right-[32%] absolute">
              <Image src='/images/firstSession/circle-03.png' alt="Circle 3" width={24} height={25.78} />
          </div>
          <div  className="w-auto ">

            <h1 className="xl:w-[600px] xl:text-7xl lg:text-6xl md:text-6xl sm:text-46xl text-6xl font-sans font-bold">
              Buy & Sell Nerko&apos;s Collection
            </h1>
          </div>
        </div>
      </div>
      <div className="justify-center my-5 px-4">
        <h1 className=" font-MabryPro-Medium text-2xl ">
          Invest and manage all your NFTs at one place.
        </h1>
      </div>
      <PrincipalButton 
        text="Browse collection"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default FirstSession;
