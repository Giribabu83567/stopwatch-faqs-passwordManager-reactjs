
import './App.css';
import ClockApp from './Components/Clock';
import Stopwatch from './Tasks/stopwatch';
import Faqs from './Tasks/FaqsApp';
import PasswordManager from './Tasks/PasswordManager';

function App() {
  return (
    <div>
        <ClockApp/>
        <Stopwatch/>
        <Faqs/>
        <PasswordManager/>
    </div>
  );
}

export default App;
