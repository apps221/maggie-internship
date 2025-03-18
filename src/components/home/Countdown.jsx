import React, { useEffect, useState } from 'react'

const Countdown = ({expiryDate}) => {
    useEffect(() => {
        updateTimer();
    }, [])
    let cancelId;
    const [time, setTime] = useState("")
    function updateTimer() {
        let countdownStart = expiryDate - Date.now()
        if (countdownStart < 0) {
            countdownStart = 0;
            cancelAnimationFrame(cancelId)
            cancelId = null;
        }
        let secondsLeft = countdownStart / 1000;
        let secondsText = Math.floor(secondsLeft) % 60;
        let minutesLeft = secondsLeft / 60;
        let hoursLeft = minutesLeft / 60;
        let minutesText = Math.floor(minutesLeft % 60);
        let hoursText = Math.floor(hoursLeft);
     setTime(`${hoursText}h ${minutesText}m ${secondsText}s`)
        if (cancelId) {
            cancelId=requestAnimationFrame(updateTimer)
        }
    }
    return (
        <div className="de_countdown">{time}</div>
      )
}

export default Countdown