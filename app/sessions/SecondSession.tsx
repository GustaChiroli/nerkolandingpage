"use client";
import Card from "../_components/SecondSession/Card";
import { useScroll } from "../_components/ScrollContext";

const alignbot = "mt-[29px]"
const SecondSession = () => {
  const { isScrolled } = useScroll();
  return (
    <div id="second-session" className="flex justify-center pt-[60px]" >

      <div className="flex flex-wrap justify-center gap-8 pt-[60px] pb-[80px] max-w-[1200px]">
        <Card align={alignbot} imag="/images/secondSession/06.jpg" title="#Metaverse" sub="By TheSalvare" />
        <Card align="" imag="/images/secondSession/07.jpg" title="#PollyDoll" sub="By TheNative" />    
        <Card align={alignbot} imag="/images/secondSession/16.jpg" title="#Alec Art" sub="By GeorgZvic" />    
        <Card align="" imag="/images/secondSession/11.jpg" title="#Toxic Poeth" sub="By YazoiLup" />    
        <Card align={alignbot} imag="/images/secondSession/01.jpg" title="#Saphyre" sub="By CryptoX" />    
        <Card align="" imag="/images/secondSession/13.jpg" title="#Charcuterie" sub="By Texira" />    
        <Card align={alignbot} imag="/images/secondSession/12.jpg" title="#Paradise" sub="By CryptoX" /> 
        <Card align="" imag="/images/secondSession/10.jpg" title="#HighTown" sub="By TheSalvare" />                 
      </div>
    </div>
  );
};

export default SecondSession;
