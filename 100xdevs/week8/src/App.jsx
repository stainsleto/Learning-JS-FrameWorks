
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <main>
      <section className='grid grid-cols-1 shadow-sm justify-between md:grid-cols-3'>
        <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />

      </section>
    </main>
  )
}

export default App
