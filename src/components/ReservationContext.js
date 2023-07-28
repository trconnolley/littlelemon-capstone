import {createContext, useContext, useState } from "react";

const ReservationContext = createContext(undefined)

export const ReservationProvider = ({children}) => {
    const [reservation, setReservation] = useState({
        date: "",
        time: "",
        people: "",
        occasion: "",
        details: "",
        name: "",
        phone: "",
        email: "",
        status:"",
        holdStart:"",
    })

    const value = {
        reservation,
        setDate: (v) => setReservation({ ...reservation, date:v}),
        setTime: (v) => setReservation({ ...reservation, time:v}),
        setPeople: (v) => setReservation({ ...reservation, people:v}),
        setOccasion: (v) => setReservation({ ...reservation, occasion:v}),
        setDetails: (v) => setReservation({ ...reservation, details:v}),
        setName: (v) => setReservation({ ...reservation, name:v}),
        setPhone: (v) => setReservation({ ...reservation, phone:v}),
        setEmail: (v) => setReservation({ ...reservation, email:v}),
        setStatus:(v) => setReservation({ ...reservation, status:v}),
        setHoldStart: (v) => setReservation({ ...reservation, holdStart:v})
    }

    return <ReservationContext.Provider value={{value}}></ReservationContext.Provider>
}

export const useReservation = () => useContext(ReservationContext);