import React, { useState, useEffect } from "react";
import styles from './Countdown.module.css'
function Countdown() {

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();


    let interval;

    useEffect(() => {
        startTimer();
    });


    const startTimer = () => {
        const countDownDate = new Date('Aug 22,2023').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                // Update Timer
                setDays(Math.round(days).toFixed(0));
                setHours(hours);
                setMinutes(minutes);
                setSeconds(Math.round(seconds).toFixed(0));
            }
        });
    };


    return (
        <section className="timer-container">
            <section className="timer">
                <div className={styles.clock}>
                    
                        <section className={styles.clock}>
                            <p>{days}</p>
                            <small>Days</small>
                        </section >
                        <span>:</span>
                        <section className={styles.clock}> 
                            <p>{hours}</p>
                            <small>Hours</small>
                        </section  >
                        <span>:</span>
                        <section className={styles.clock}>
                            <p>{minutes}</p>
                            <small>Minutes</small>
                        </section>
                        <span>:</span>
                        <section className={styles.clock}>
                            <p>{seconds}</p>
                            <small>Seconds</small>
                        </section>

                    </div>
            </section>
        </section>

    )
}
export default Countdown;