import { Scan, SquareDashedMousePointer } from "lucide-react";
import Image from "next/image";

const FourthSession = () => {
  return (
    <div
      id="third-session"
      className="pb-[80px] pt-[70px] flex justify-center px-[15px]"
    >
      <div className="container flex justify-center max-w-[1230px] flex-wrap">
        <div className="flex justify-center w-[100%]">
          <div className="columns-8 flex justify-center">
            <div className="mb-[80px] text-center">
              <h2 className=" xl:text-7xl lg:text-6xl md:text-6xl sm:text-46xl text-6xl font-PowerGrotesk font-bold">
                About the plataform
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[100%] md:flex-nowrap justify-center flex-wrap items-center">
          <div className="flex-col mx-[15px] md:w-[50%] ">
            <Image
              className="object-fill overflow-hidden"
              src="/images/FourthSession/presentes.png"
              alt="Nerko"
              width={535}
              height={451}
            />
          </div>
          <div className="flex-col mx-[15px] md:w-[50%] md:pl-[40px] mt-10 md:mt-0 items-center">
            <div className="flex flex-col justify-center w-[100%] md:text-justify text-center">
              <div className="flex flex-col md:justify-start justify-center mb-[20px]">
                <h2 className="mb-[10px] font-mabry-pro font-semibold sm:text-lg text-lg text-gradient">
                  CREATE AND INVEST
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-PowerGrotesk font-extrabold">
                  Create your <br /> own NFT
                </h1>
              </div>
              <div className="md:justify-start justify-center">
                <h3 className="text-lg text-[#7b7583]">
                  Multiple Chains, One Home. Stack up all your NFTs from <br />{" "}
                  across blockchains.
                </h3>
              </div>
              <div className="flex flex-row mt-[50px] justify-between">
                <div className="flex  flex-col">
                  <h2 className="mb-[10px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-PowerGrotesk font-extrabold">
                    4,500+
                  </h2>
                  <span className="text-[#7b7583]">
                    Collections Indexed <br /> every 5mins.
                  </span>
                </div>
                <div className="flex  flex-col">
                  <h2 className="mb-[10px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-PowerGrotesk font-extrabold">
                    2.5x
                  </h2>
                  <span className="text-[#7b7583]">
                    Difference in Floor & Estimated <br /> BFT Value
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse w-[100%] md:flex-nowrap justify-center flex-wrap items-center mt-[120px]">
          <div className="flex-col mx-[15px] md:w-[50%] ">
            <Image
              className="object-fill overflow-hidden"
              src="/images/FourthSession/features.png"
              alt="Nerko"
              width={535}
              height={451}
            />
          </div>
          <div className="flex-col mx-[15px] md:w-[50%] md:pr-[40px] mt-10 md:mt-0 items-center">
            <div className="flex flex-col justify-center w-[100%] md:text-justify text-center">
              <div className="flex flex-col md:justify-start justify-center mb-[20px]">
                <h2 className="mb-[10px] font-mabry-pro font-semibold sm:text-lg text-lg text-gradient">
                  SYNC AND TRACK
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-PowerGrotesk font-extrabold">
                  Multiple Chains, <br /> One Home
                </h1>
              </div>
              <div className="md:justify-start justify-center">
                <h3 className="text-lg text-[#7b7583]">
                  We make it easy to Discover, Invest and manage all your <br />{" "}
                  NFTs at one place, looked up one of the more obscure.Find{" "}
                  <br /> the right NFT collections to buy within the platform.
                </h3>
              </div>
              <div className="flex sm:flex-row flex-col mt-[50px] justify-center lg:justify-between">
                <div className="flex items-center sm:flex-row flex-col">
                  <div className="flex mx-0 sm:mr-[15px] justify-center items-center w-[65px] h-[65px] rounded-3xl bg-gradient-to-tr from-[#2600fc] to-[#ff00ea]">
                    <Scan width={28} height={28} className="text-white"/>
                  </div>
                  <span className="my-5">
                    Collections Indexed <br /> every 5mins.
                  </span>
                </div>
                <div className="flex items-center sm:flex-row flex-col">
                  <div className="flex mx-[15px] justify-center items-center w-[65px] h-[65px] rounded-3xl bg-gradient-to-tr from-[#2600fc] to-[#ff00ea]">
                    <SquareDashedMousePointer width={28} height={28} className="text-white"/>
                  </div>
                  <span className="my-5">
                    Difference in Floor <br/> & Estimated BFT Value
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSession;
