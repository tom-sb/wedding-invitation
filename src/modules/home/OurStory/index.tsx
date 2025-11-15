"use client"

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const timelines = [
    {
        title: "El día que nos conocimos",
        description: "Aquel día, cuando el peligro la sorprendió, él apareció como un valiente protector."
    },
    {
        title: "Que teníamos en común",
        description: "Compartimos la misma pasión por descubrir nuevos caminos; reír y soñar sin medida, porque en nuestra locura encontramos la felicidad."
    },
    {
        title: "Empezamos a ser una pareja oficial.",
        description: "El 15 de octbre 2021, empezamos nuestra historia de amor"
    },
    {
        title: "Te invitamos a celebrar",
        description: "El 31 de enero del 2026, queremos que seas parte de este día tan especial."
    }
]

const anim = (variants: Variants) => ({
    variants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true
    }
})

export default function OurStory() {

    const stagger: Variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.2,
                staggerChildren: 0.5,
                type: "spring"
            },
        }
    }

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
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                delay: 0.4
            }
        }
    }


    return (
        <section className="container-box2 mt-betweenSectionMd xl:mt-betweenSection">
            <motion.h2
                className="px-4 md:px-0 heading-4 md:heading-3 xl:heading-2 font-dancing-script font-bold origin-left"
                {...anim(bluryEffect)}
            >
                Nuestra Historia
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-betweenBoxMd xl:mt-betweenBox gap-14 md:gap-6 lg:gap-[4.75rem] xl:gap-[10.4375rem]">
                <motion.div className="px-4 md:px-0 space-y-4 md:space-y-[2.375rem] col-span-1" {...anim(stagger)}>
                    {timelines.map((timeline, i) => (
                        <Timeline
                            key={i}
                            title={timeline.title}
                            description={timeline.description}
                            delay={0.2 * (i + 1)}
                        />
                    ))}
                </motion.div>
                <motion.div className="w-full xl:w-[527px] h-[461px]" {...anim(fadeIn)}>
                    <Image
                        src="/photos/our-story.jpg"
                        width={1200}
                        height={1200}
                        alt="our-story-photo"
                        quality={100}
                        className="size-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    )
}



type Props = {
    title: string;
    description: string;
    delay: number
}

function Timeline({ title, description, delay }: Props) {

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
        <motion.div
            className="flex justify-start gap-2 md:gap-x-4"
            {...anim(variants)}
        >
            <GoDotFill className="text-base md:text-lg lg:text-xl translate-y-1" />
            <div className="space-y-2 lg:space-y-4">
                <h4 className="text-base md:heading-4 font-dancing-script font-bold">{title}</h4>
                <p className="text-[0.7rem] md:text-base font-roboto-slab">{description}</p>
            </div>
        </motion.div>
    )
}