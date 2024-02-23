"use client"

import {Toaster} from "react-hot-toast"


interface ToastProviderProps {
}
    
 
const ToastProvider: React.FunctionComponent<ToastProviderProps> = () => {
    return (
        <Toaster />
    );
}
 
export default ToastProvider;