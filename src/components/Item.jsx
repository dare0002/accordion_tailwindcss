"use client";

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

const Item = ({isOpen, setIsOpen, item}) => {

    return (
        <div className="py-4 px-12 border rounded-xl "> 
            <header>

            <button onClick={() => {
                
              isOpen === item ? setIsOpen(0) : setIsOpen (item);
            }} 
                className="flex items-center justify-between w-full text-left font-semibold py-2">

            <span className = "text-black" > 
                Are there any fees?
                </span>
            <span className="ml-8 self-start">

                {isOpen === item ? (
                <IoCloseOutline className = "text-2xl"/> 
            ) : (
                <IoRemove className = "text-2xl"/>
                )}

                </span>
            </button>
        </header>

        {isOpen === item && (
        
        <section className="text-sm text-slate-600">

            <p className="pb-3">
                Answer is going to be placed here 
            </p>

            </section> )}
        </div>
      );
}
 
export default Item;