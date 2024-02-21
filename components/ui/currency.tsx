"use client"

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency:"USD"
})

interface CurrencyProps {
    value?: string | number;
}
 
const Currency: React.FunctionComponent<CurrencyProps> = ({value}) => {

    const [isMaunted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMaunted){
        return null
    }

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}
 
export default Currency;