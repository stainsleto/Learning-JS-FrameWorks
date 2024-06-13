import { useRecoilValue, RecoilRoot } from 'recoil'
import './App.css'
import { notification,totalNotificationSelector } from './recoil/atoms/atoms'

function App() {

  return (
    <>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>

      
    </>
  )
}

function MainApp(){
  const networkCount = useRecoilValue(notification) 
  
  const totalNotification = useRecoilValue(totalNotificationSelector)
  return(
    <>
      <button>Home</button>

      <button>My network ({networkCount.network} )</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotification})</button>
    </>
  )
}

export default App
