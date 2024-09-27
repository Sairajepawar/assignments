import {useEffect, useState} from "react";

export default function App() {
    const isOnline = useIsOnline()
    return <>
        {isOnline ? <div>You are online</div> : <div>You are offline</div>}
    </>
}

function useIsOnline() {
    const [status,setStatus] = useState(window.navigator.onLine);
    useEffect(()=>{
        setStatus(window.navigator.onLine);
        return ()=>{
            console.log("online");
        }
    },[window.navigator.onLine])
    return status;
}