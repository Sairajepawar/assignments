import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import {notificationAtom,totalNotification} from './store/atom/atom.js'
import {useEffect} from "react";
import axios from "axios";
function App(){
    return <RecoilRoot>
        <MainApp></MainApp>
    </RecoilRoot>
}

function MainApp(){
    const [notification,setNotification]=useRecoilState(notificationAtom);
    const  totalNotify = useRecoilValue(totalNotification);
    useEffect(() => {
        axios.get('https://sum-server.100xdevs.com/notifications')
            .then(res=>{
                setNotification(res.data);
            })
    }, []);
    return (
        <>
            <button>Network({notification.network})</button>
            <button>Job({notification.jobs})</button>
            <button>Notification({notification.notifications})</button>
            <button>Messaging({notification.messaging})</button>
            <button>Me({totalNotify})</button>
        </>
    )
}

export default App;