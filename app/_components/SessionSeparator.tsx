import Image from "next/image";
const SessionSeparator = () => {
    return (
        <div className="flex justify-center">
            <Image
            className="mt-[50px] mb-[50px]"
            src="/images/divider.svg"
            alt="divider"
            width={80}
            height={20}
            />
      </div>
    );
}
 
export default SessionSeparator;