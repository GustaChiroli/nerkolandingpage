'use client'
import { ArrowForward } from '@mui/icons-material';
import React from 'react';

interface PrincipalButtonProps {
    text: string;
    onClick: () => void;
}

const PrincipalButton: React.FC<PrincipalButtonProps> = ({ text, onClick }) => {
    console.log('Button text:', text);
    return ( 
        <div 
            className=" hover:brightness-110 w-full justify-center text-justify align-middle flex cursor-pointer"
        >
            <button
                className="flex items-center justify-center text-white font-mabry-pro text-lg bg-gradient-to-tr from-buttomBlue to-buttomPink mt-[30px] py-4 px-[40px] rounded-full"
                onClick={onClick}
            >
            <span className='mr-2'>{text}
            
            </span>
            {text == "View more in OPENSEA" ? <ArrowForward></ArrowForward> : "" }
            
            </button>
        
      </div>
    );
}
 
export default PrincipalButton;