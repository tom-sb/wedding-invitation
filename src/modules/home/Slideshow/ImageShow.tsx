"use client"

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"

const desktopPhotos = [
    "/photos/slideshow/1.jpg",
    "/photos/slideshow/2.jpeg",
    "/photos/slideshow/3.jpg",
    "/photos/slideshow/4.jpeg",
    "/photos/slideshow/5.jpeg"
]

const mobilePhotos = [
    "/photos/slideshow/mobile/1.jpg",
    "/photos/slideshow/mobile/2.jpeg",
    "/photos/slideshow/mobile/3.jpg",
    "/photos/slideshow/mobile/4.jpeg",
    "/photos/slideshow/mobile/5.jpeg"
];

export default function ImageShow() {

    const INTERVALTIME = 6000
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        // detectar mobile por tamaño real
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);
    
    const photos = isMobile ? mobilePhotos : desktopPhotos;
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => 
                // If the index reaches the last item, reset to 0, else increment
                prevIndex === photos.length - 1 ? 0 : prevIndex + 1
            );
        }, INTERVALTIME)

        return () => {
            clearInterval(interval)
        }

    }, [photos])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                className="w-full h-screen bg-ivory overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    exit={{ scale: 1.1 }}
                    transition={{ duration: 5 }}
                >
                    <Image
                        src={photos[currentIndex]}
                        alt="slideshow-image"
                        fill
                        sizes="100vw"
                        quality={100}
                        priority
                        className="object-cover object-center"
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}