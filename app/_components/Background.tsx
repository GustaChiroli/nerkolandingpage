import Image from "next/image";

const Background = () => {
    return (
        <div>
            <div className="w-full pointer-events-none select-none bg-center bg-cover">
                <Image src='/images/background.png' alt="background" fill className="object-cover opacity-20 z-[-1]" />
            </div>
        </div>
    );
}

export default Background;