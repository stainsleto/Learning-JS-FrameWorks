import { atom, selector } from "recoil";
import axios from 'axios'


const notification = atom( {
    key:'notification',
    default: selector({
        key:"notificationSelector",
        get : async () => {
        const res = await axios.get("https://sum-server.100xdevs.com/notifications")
        return res.data
}})
})



const totalNotificationSelector = selector({
    key:'totalNotificationSelector',
    get : ({get}) => {
        const allNotifications = get(notification)

        return allNotifications.network + allNotifications.jobs + allNotifications.messaging + allNotifications.notifications
    }
})






export { notification, totalNotificationSelector}