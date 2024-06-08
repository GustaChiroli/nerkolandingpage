import Image from "next/image";

const Background = () => {
    return (
        <div>
            <div className="w-full h-full pointer-events-none select-none bg-center bg-cover z-0">
                <Image src='/images/background.png' alt="background" fill className=" object-cover opacity-20" />
            </div>
        </div>
    );
}

export default Background;