"use client"
import {useEffect, useState} from 'react'

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        function getScreenSize(){
            return window.innerWidth;
        }
        function handleResize(){
            setScreenSize(getScreenSize());
        }
        handleResize()
        window.addEventListener("resize",handleResize);

        return () => window.addEventListener("resize", handleResize);
    }, []);
    
    return screenSize
}

export default useScreenSize