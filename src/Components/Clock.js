
import './clockApp.css';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';

const ClockApp = ()=> {

    const [btnText, setBtnText] = useState(true);
    const onClickClockBtn = ()=> {
        setBtnText(!btnText)
    }

    const [date, setDate] = useState(new Date());
    useEffect(()=> {
        setInterval(()=> {
            setDate(new Date())
        }, 1000)
    })

    return(
        <div className='d-flex justify-content-center'>
            <div className='clock-app-container'>
                <h3 className='mb-4'>Clock App</h3>
                <Button variant="info" onClick={onClickClockBtn}>
                    {btnText? 'Show Clock' : 'Hide Clock'}
                </Button>
                <div className={btnText? 'd-none' : 'clock-container mt-4'}>
                    <h4>Clock</h4>
                    <p>{date.toLocaleTimeString()}</p>
                </div>
            </div>
      </div>
       
    )
}

export default ClockApp;