import {atom, selector} from "recoil";
import axios from "axios";
export const notificationAtom = atom({
    key: 'notificationAtom',
    default: selector({
        key: 'notificationAtomSelector',
        get: async ()=>{
            const res = await axios.get('https://sum-server.100xdevs.com/notifications');
            return res.data;
        }
    })
})

export const totalNotification = selector({
    key:'totalNotification',
    get :({get})=>{
        const total = get(notificationAtom);
        return total.network+total.jobs+total.messaging+total.notifications;
    }
})