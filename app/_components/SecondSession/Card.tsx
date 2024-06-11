import Image from "next/image";

interface CardProps {
    imag: string;
    title: String;
    sub: String;
    align: string;
}

const Card: React.FC<CardProps> = ({ imag, title, sub, align}) => {
  return (
    <>
      <div className={`flex justify-center ${align} h-[405px]`}>
        <div className={`flex flex-col rounded-cardBorderRadius bg-white shadow-lg `}>
          <Image
            className="object-cover mb-4 p-4 rounded-lg overflow-hidden"
            style={{borderRadius: 30}}
            src={imag}
            alt="Nerko"
            width={250}
            height={250}
          />
          <h1 className="text-center font-bold text-2xl mb-1">{title}</h1>
          <h5 className="text-center text-sm text-[#8F8A96] mb-6">{sub}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
