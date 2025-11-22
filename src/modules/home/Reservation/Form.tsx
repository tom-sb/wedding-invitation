"use client";

import React from "react";
import z from "zod"
import { toast } from "sonner";
import { db_firestore } from "@/configs/firebase";
import { doc, setDoc } from "firebase/firestore";
import { uniqueId } from "@/lib/utils";

const initialForm = { present: "0" }

type Errors = {
    [field: string]: string[]
}

export default function Form() {

    let [form, setForm] = React.useState(initialForm)
    let [formErrors, setFormErrors] = React.useState({} as Errors)

    // transform present become boolean
    async function addReservation(value: Omit<typeof form, "present"> & { present: boolean }) {
        const collectionName = "reservations"
        const id = uniqueId(collectionName)

        await setDoc(doc(db_firestore, collectionName, id), {
            present: value.present,
            created_at: Date.now()
        });
    }

    function handleChange<T extends HTMLInputElement | HTMLTextAreaElement>(e: React.ChangeEvent<T>) {
        const name = e.target.name
        const value = e.target.value

        const sanitized = value.replace(/\D/g, '')

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }


    async function submit(e: React.SyntheticEvent) {
        e.preventDefault()

        setFormErrors({})

        try {
            // transform present become boolean
            const transformValue = { present: Boolean(Number(form.present))  }

            await addReservation(transformValue)

            toast.success('Submitting successful')
            setForm(initialForm)

        } catch (err) {
            if (err instanceof z.ZodError) {
                const fieldErrors = err.flatten().fieldErrors
                setFormErrors(fieldErrors as unknown as Errors)
            }
        }
    }

    return (
        <form onSubmit={submit} className="space-y-3 mt-10 max-w-xl mx-auto px-5 md:px-0">        
            <div className="space-y-4 md:space-y-2 pt-2">
                <p className="font-roboto-slab text-sm md:text-base font-medium">Confirma tu presecia </p>
                <div className="flex items-center gap-3">
                    <input
                        id="yes"
                        type="radio"
                        className="form-checkbox rounded bg-gray-200 border-transparent focus:border-transparent
                        focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                        name="present"
                        onChange={handleChange}
                        value="1"
                    />
                    <label htmlFor="yes" className="font-roboto-slab text-sm md:text-base">Sí, asistiré</label>
                </div>
                <div className="flex items-center gap-3">
                    <input
                        id="no"
                        type="radio"
                        className="form-checkbox rounded bg-gray-200 border-transparent focus:border-transparent
                        focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                        name="present"
                        onChange={handleChange}
                        value="0"
                        defaultChecked
                    />
                    <label htmlFor="no" className="font-roboto-slab text-sm md:text-base"> No, no asistiré</label>
                </div>
            </div>
            <div className="flex justify-end pt-4 md:pt-0">
                <button className="w-max ml-auto mr-0 bg-black text-ivory rounded-md px-10 py-2 text-sm md:text-base
                outline-gray-500 active:outline-double active:outline-2 outline-offset-2 font-roboto-slab">
                    Enviar
                </button>
            </div>
        </form>
    )
}

