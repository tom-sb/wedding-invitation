"use client"

import React from "react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion"
import { FiGift } from "react-icons/fi";
import Modal from "@/components/Modal";

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

const anim = (variants: Variants) => ({
    variants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true
    }
})

export default function BankATM() {
    let [open, setOpen] = React.useState(false)

    return (
        <section className="container-box2 mt-betweenSectionMd xl:mt-betweenSection">
            <motion.div
                className="py-14 xl:py-20 flex flex-col justify-center items-center gap-10"
                aria-label="wrapper"
                {...anim(bluryEffect)}
            >
                <h3 className="heading-4 md:heading-3 font-dancing-script text-center font-bold px-4 md:px-0">
                    Su presencia es el mejor regalo, 
                    pero si no puede venir y aún así desea contribuir a nuestro futuro, 
                    nuestros datos bancarios se encuentran a continuación.
                </h3>
                <Modal open={open} setOpen={setOpen}>
                    <Modal.Button>
                        <div className="flex items-center justify-center gap-3 bg-black text-white rounded-md px-4 py-2 outline-gray-500 active:outline-double active:outline-2 outline-offset-2">
                            <FiGift className="text-2xl" />
                            <p className="font-light">Envia un regalo aqui</p>
                        </div>
                    </Modal.Button>
                    <Modal.Content>
                        <div className="flex flex-col justify-center items-center pt-8 pb-4 gap-3">
                            <ATM name="Maribel" number="1750674999" cci='' />
                            <p className="text-gray-500">or</p>
                            <ATM name="Fernando" number="898 3392461371" cci='00389801339246137143' />
                        </div>
                    </Modal.Content>
                </Modal>
            </motion.div>
        </section>
    )
}


function ATM({ name, number, cci }: { name: string, number: string, cci: string }) {
    let [copied, setCopied] = React.useState(false)
    let [copiedCci, setCopiedCci] = React.useState(false)

    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(number);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500)
        } catch (err) {
            setCopied(false)
        }
    }

    const copyTextCci = async () => {
        try {
            await navigator.clipboard.writeText(cci);
            setCopiedCci(true);
            setTimeout(() => setCopiedCci(false), 1500)
        } catch (err) {
            setCopiedCci(false)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <p className="font-medium">{`${name}`}</p>
            <Image src="/ibk.png" alt="bca-icon" width={70} height={70} />
            <p className="font-medium">{`${number}`}</p>
            <button className="bg-ivory rounded-md" onClick={copyText}>
                <div className="px-3 py-[0px] flex items-center justify-center gap-x-2 text-white">
                    <FaRegCopy className="text-black" />
                    <p className="text-sm text-black">{copied ? "Copiado!" : "Copiar nro de cuenta"}</p>
                </div>
            </button>
            <p className="font-medium">{`${cci}`}</p>
            <button className="bg-ivory rounded-md" onClick={copyTextCci}>
                <div className="px-3 py-[0px] flex items-center justify-center gap-x-2 text-white">
                    <FaRegCopy className="text-black" />
                    <p className="text-sm text-black">{copiedCci ? "Copiado!" : "Copian cci"}</p>
                </div>
            </button>
        </div>
    )
}