import './App.css';
import Calendr from './components/Calendar';
import Footer from './components/Footer';
import Month from './components/Month';
import User from './components/User';

function App() {
  const dayToday = new Date(); 
  const dateData = {
    dayToday: dayToday.getDate(),
    year: dayToday.getFullYear(),
    month: dayToday.getMonth() + 1,
  };

  return (
    <>
      <Month />
      <div className='flex overflow-y-auto'>
        <User />
        <Calendr dateData={dateData} />
      </div>
      <Footer />
    </>
  );
}

export default App;
