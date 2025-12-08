"use client"

import { GoDotFill } from "react-icons/go";
import { IoCalendarClearOutline, IoPeople, IoPerson, IoPersonOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { PiMapPin } from "react-icons/pi";
import { motion, Variants } from 'framer-motion'

const bluryEffect: Variants = {
    initial: {
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.95
    },
    animate: {
        opacity: 1,
        filter: "blur(0)",
        scale: 1,
        transition: {
            duration: 1
        }
    }
}

const fadeIn: Variants = {
    initial: {
        opacity: 0,
        y: "40px",
    },
    animate: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: "spring",
            delay
        }
    })
}

const stagger: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.2,
            staggerChildren: 1,
            type: "spring"
        },
    }
}

const anim = (variants: Variants) => ({
    variants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true
    }
})

export default function GodParents() {

    return (
        <section className="container-box2 mt-14 pb-14 md:mt-betweenSectionMd 
            xl:mt-betweenSection flex flex-col justify-center gap-0 md:gap-0" >
            <motion.h2
                className="heading-3 justify-center md:heading-3 xl:heading-2 font-dancing-script font-bold px-2 md:px-0 my-5"
                {...anim(bluryEffect)}
            >
                Nuestros Padrinos de Matrimonio
            </motion.h2>
            <p className="text-xl md:text-2xl font-dancing-script m-5">“ Con la bendición de nuestros padres y la guía amorosa de nuestros padrinos, cuyo ejemplo inspira y cuya sabiduría ilumina nuestro camino, emprendemos este nuevo capítulo de nuestras vidas.”</p>
            <div className="relative w-full flex flex-col md:flex-row">
                
                <div className="md:w-1/2 xl:w-1/2 h-auto md:h-auto xl:h-auto p-5">
                    <motion.h2
                        className="heading-4 md:heading-4 xl:heading-3 font-dancing-script font-bold px-2 md:px-0"
                        {...anim(bluryEffect)}
                    >
                        Religioso
                    </motion.h2>
                    <div className="flex justify-start gap-x-2 md:gap-x-4 mt-betweenBoxMd xl:mt-betweenBox px-4 md:px-0">
                        <div className="ml-5 space-y-1 md:space-y-1">
                            <motion.ul
                                className="mt-betweenBoxMd flex flex-col items-center text-center space-y-3"
                                {...anim(stagger)}
                            >
                                <Li delay={0.2}>
                                <p className="text-xl md:text-2xl font-dancing-script">Flavio D. Puma Mamani</p>
                                </Li>

                                <Li delay={0.3}>
                                <p className="text-xl md:text-2xl font-dancing-script">&</p>
                                </Li>

                                <Li delay={0.4}>
                                <p className="text-xl md:text-2xl font-dancing-script">Justina Villanueva Echarri</p>
                                </Li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 xl:w-1/2 h-auto md:h-auto xl:h-auto p-5">
                    <motion.h2
                        className="heading-4 md:heading-4 xl:heading-3 font-dancing-script font-bold px-2 md:px-0"
                        {...anim(bluryEffect)}
                    >
                        Civil
                    </motion.h2>
                    <div className="flex justify-start gap-x-2 md:gap-x-4 mt-betweenBoxMd xl:mt-betweenBox px-4 md:px-0">
                        <div className="space-y-4 md:space-y-6">
                            <motion.ul
                                className="mt-betweenBoxMd flex flex-col items-center text-center space-y-3"
                                {...anim(stagger)}
                            >
                                <Li delay={0.2}>
                                <p className="text-xl md:text-2xl font-dancing-script">Wiliam C. Huaman Machaca</p>
                                </Li>

                                <Li delay={0.3}>
                                <p className="text-xl md:text-2xl font-dancing-script">&</p>
                                </Li>

                                <Li delay={0.4}>
                                <p className="text-xl md:text-2xl font-dancing-script">Virginia Barazorda Gonzales</p>
                                </Li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </section >
    )
}


const Li = ({ delay, children }: { children: React.ReactNode, delay: number }) => {

    const variants: Variants = {
        initial: {
            opacity: 0,
            x: "-50px"
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay,
                type: "spring",
                bounce: 0
            }
        }
    }

    return (
        <motion.li className="flex items-start gap-4 md:gap-6" {...anim(variants)}>
            {children}
        </motion.li>
    )
}