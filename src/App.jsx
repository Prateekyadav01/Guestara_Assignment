import './App.css'
import Calendr from './components/Calendar'
import Month from './components/Month'
import User from './components/User'
function App() {
//  const data = new Date.now()
const dateData = {
  year: 2024,
  month: 5, // May
  events: {
    '2024-05-01': ['Event 1', 'Event 2'],
    '2024-05-15': ['Event 3'],
    // Add more events as needed...
  },
};


  return (
    <>
         <Month/>
         <div className='flex'>
          <User/>
          <Calendr dateData={dateData}/>
         </div>
    </>
  )
}

export default App
