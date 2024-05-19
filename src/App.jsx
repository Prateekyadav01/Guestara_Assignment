import './App.css'
import Calendr from './components/Calendar'
import Footer from './components/Footer';
import Month from './components/Month'
import User from './components/User'
function App() {
//  const data = new Date.now()
const dateData = {
  year: 2024,
  month: 5, // May
  
};


  return (
    <>
         <Month/>
         <div className='flex'>
          <User/>
          <Calendr dateData={dateData}/>
         </div>
         <Footer/>
    </>
  )
}

export default App
