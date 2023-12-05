import './stopwatch.css';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';

const Stopwatch = ()=> {

    // var [minutes, setMinutes] = useState('00')
    // var [seconds, setSeconds] = useState('00')
    // const [isActive, setIsActive] = useState(false)
    // var [counter, setCounter] = useState(0)

    // useEffect(()=> {
    //     var intervalId;

    //     if(isActive)
    //     {
    //         intervalId = setInterval(()=> {
                
    //             var secondCounter = counter % 60
    //             var minuteCounter = Math.floor(counter / 60)

    //             var formattedSeconds = String(secondCounter).padStart(2, '0')
    //             var formattedMinutes = String(minuteCounter).padStart(2, '0')

    //             setSeconds(formattedSeconds)
    //             setMinutes(formattedMinutes)
    
    //             setCounter((prevCounter) => prevCounter + 1)  
    //         }, 1000)
    //     }
    //     else{
    //         clearInterval(intervalId)
    //     }
    //     return() => clearInterval(intervalId)
    // }, [isActive, counter])

    // const startTimer = ()=> {
    //     setIsActive(true)
    // }

    // const stopTimer = ()=> {
    //     setIsActive(false)
    // }

    // const resetTimer = ()=> {
    //     setIsActive(false)
    //     setCounter(0)
    //     setSeconds('00')
    //     setMinutes('00')
    // }

    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const [timeElapsedInSeconds, setTimeElapsedSeconds] = useState(0)
    var timeInterval;

    const onTimerStart = (timeElapsedInSeconds) => {
        setIsTimerRunning(true)
        const seconds = (timeElapsedInSeconds % 60);
    
        if (seconds < 10) {
            return `0${seconds}`;
        }
    };
    const onStopTimer = () => {
        setIsTimerRunning(false);
    };
    const onResetTimer = () => {
        setIsTimerRunning(false);
        setTimeElapsedSeconds(0);
    };

    useEffect(() => {
        
        if(isTimerRunning){
            timeInterval = setInterval(() => {
                setTimeElapsedSeconds(prevTime => prevTime + 1)
            }, 1000)
        }
        else{
            clearInterval(timeInterval)
        }
        return ()=> {
            clearInterval(timeInterval)
        };
    }, [isTimerRunning])
 
    const renderSeconds = () => {
        const seconds = (timeElapsedInSeconds % 60);
        return seconds < 10 ? `0${seconds}` : seconds;
    };
    const renderMinutes = () => {
        const minutes = Math.floor(timeElapsedInSeconds / 60);
        return minutes < 10 ? `0${minutes}` : minutes;
    };
    const time = `${renderMinutes()}:${renderSeconds()}`;



    return(
        <div className='d-flex justify-content-center my-5'>
            <div className='stopwatch-container'>
                <h3 className='text-center mb-5'>Stop Watch</h3>
                <div className='timer-container'>
                    <div className='my-3'>
                        <img src='https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png' alt='stopwatch timer'></img>
                        <strong>Timer</strong>
                    </div>
                    <div>
                        <h2>{time}</h2>
                    </div>
                    <div className='my-3'>
                        <Button variant="success" onClick={onTimerStart}>Start</Button>
                        <Button variant="danger" className='mx-4' onClick={onStopTimer}>Stop</Button>
                        <Button variant="warning" onClick={onResetTimer}>Reset</Button>
                    </div>
                </div>
            </div>
            <div className='stopwatch-image'>
                <img src='https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png' alt='stopwatch bg'></img>
            </div>
        </div>
    )
}

export default Stopwatch;