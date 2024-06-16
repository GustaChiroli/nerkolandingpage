interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return (
        <div className="flex justify-center w-full h-full mb-[60px] lg:mb-20">
            <h2 className="xl:w-[600px] xl:text-7xl lg:text-6xl md:text-6xl sm:text-46xl text-6xl font-PowerGrotesk font-bold">{title}</h2>
        </div>
    );
}

export default Title;