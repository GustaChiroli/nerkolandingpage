import Image from 'next/image';
const Card = () => {
    return ( 
        <div className='flex justify-center w-[25%]'>
            <div className=" flex flex-col flex-wrap justify-center w-[25%]">
                <Image src="/images/card1.jpg" alt="Nerko" width={250} height={250} />
            </div>
        </div>
    );
}
 
export default Card;