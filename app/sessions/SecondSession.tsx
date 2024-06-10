import Card from "../_components/SecondSession/Card";
import styles from "../styles/Home.module.css";
const FirstSession = () => {
  return (
    <div className="flex flex-row justify-center" >

      <div className=" flex flex-row flex-wrap justify-center pt-[60px] pb-[80px] max-w-[1200px]">
        <Card />
        <Card />    
        <Card />    
        <Card />    
        <Card />    
        <Card />    
        <Card /> 
        <Card />                 
      </div>
    </div>
  );
};

export default FirstSession;
