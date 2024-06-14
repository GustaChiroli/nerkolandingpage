import ThirdCard from "../_components/ThirdSerssion/ThirdCard";

const ThirdSession = () => {
    const alignbot = "mt-[29px]"
    return (
        <div id="third-session" className="pb-[80px] pt-[70px] flex justify-center">
            <div className="container flex justify-center max-w-[1230px] flex-wrap">
                <div className="flex justify-center w-[100%]">
                    <div className="columns-8 flex justify-center">
                        <div className="mb-[80px] text-center">
                            <h2 className="xl:w-[600px] xl:text-7xl lg:text-6xl md:text-6xl sm:text-46xl text-6xl font-sans font-bold">
                                Why choose us?
                            </h2>
                            
                        </div>
                    </div>
                </div>
                <div id="second-session" className="flex justify-center" >
                    <div className="flex flex-wrap justify-center gap-8 pt-[60px] pb-[80px]">

                                <ThirdCard
                                    number="01."
                                    title={<span>Huge <br/> collection </span>}
                                    sub="A collection of 5,000 unique Nerkos built to go beyond the digital space that will unlock numerous benefits for our community."
                                    align=""
                                />
                                <ThirdCard
                                    number="02."
                                    title={<span>High<br />quality</span>}
                                    sub="The nerko’s collection includes dozens of rare heads, costumes, and colorways of the artist's palette. They are drawn with great care."
                                    align={alignbot}
                                />
                                <ThirdCard
                                    number="03."
                                    title={<span>Top <br/> resource</span>}
                                    sub="Tasty design resources made with care for each pixel. Tokens, metaverse and game resources NFTs. Access additional drops."
                                    align=""
                                />
                                <ThirdCard
                                    number="04."
                                    title={<span>Big <br/> community</span>}
                                    sub="Be part of a community of nerko owners and create user generated items. Rent, advertise, lounch stores, create items. We make it easy to discover."
                                    align={alignbot}
                                />
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default ThirdSession;