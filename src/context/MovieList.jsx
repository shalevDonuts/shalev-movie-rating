import React, { createContext, useState } from 'react'

export const movisContext = createContext()

function MovisContextProvider({ children }) {
    const [movis, setMovis] = useState([
        {
            name: "Bulets9",
            image: "/imeges/bulets 9.jpg",
            description: "",
            rating: [],
            avrage:0
        },
        {
            name: "Absolution",
            image: "/imeges/Absolution.jpg",
            description: "An aging gangster decides to retire from crime and reunite with his children. The underworld won't let him leave his past behind.",
            rating: [],
            avrage:0
        },
        {
            name: "HowtoSurviveWithoutMom",
            image: "/imeges/HowtoSurviveWithoutMom.jpg",
            description: "",
            rating: [],
            avrage:0
        },
        {
            name: "ItEndsWithUs",
            image: "/imeges/ItEndsWithUs.jpg",
            description: "",
            rating: [],
            avrage:0
        },
        {
            name: "SevenBlessings",
            image: "/imeges/SevenBlessings.jpg",
            description: "",
            rating: [],
            avrage:0
        }

    ])

    

    

    return (
        <movisContext.Provider value={[movis, setMovis]}>
            {children}
        </movisContext.Provider>
    )


}
export default MovisContextProvider
