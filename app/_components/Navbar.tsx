import Image from "next/image";

const Navbar = () => {
    return (
        <div className=" flex justify-center h-20  py-[10px] mt-[10px]">
            <div className=" flex justify-center w-[92.5%]">
                <div className=" flex justify-between w-full" >
                    <div className=" content-center">
                        <Image src="/logo.jpeg" alt="Nerko" width={120} height={36} />
                    </div>
                    <div className="flex justify-evenly">
                        <h1 className=" text-[#741FF5] px-4 content-center text-xl font-bold font-MabryPro-Regular">Home</h1>
                        <h1 className=" hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">Choose</h1>
                        <h1 className=" hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">About</h1>
                        <h1 className=" hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">Team</h1>
                        <h1 className=" hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">Road Map</h1>
                        <h1 className=" hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">Blog</h1>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Navbar;