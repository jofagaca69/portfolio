import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TimerState {
    minutes: number;
    seconds: number;
    isActive: boolean;
    mode: 'pomodoro' | 'short' | 'long';
}

const CARD_COLORS = {
    pomodoro: 'bg-[#c15c5c]',
    short: 'bg-[#4c9196]}',
    long: 'bg-[#4d7fa2]'
};

const BACKGROUND_COLORS = {
    pomodoro: 'bg-gradient-to-br from-[#ba4949] to-[#ba4949]',
    short: 'bg-gradient-to-br from-[#38858a] to-[#38858a]',
    long: 'bg-gradient-to-br from-[#397097] to-[#397097]'
};

const TIMER_MODES = {
    pomodoro: {
        minutes: 25,
        seconds: 0,
    },
    short: {
        minutes: 5,
        seconds: 0,
    },
    long: {
        minutes: 15,
        seconds: 0,
    }
}

const PomodoroTimer: React.FC = () => {
    const [timer, setTimer] = useState<TimerState>({
        minutes: TIMER_MODES.pomodoro.minutes,
        seconds: TIMER_MODES.pomodoro.seconds,
        isActive: false,
        mode: 'long',
    });
    //
    // const timerRef = useRef<HTMLDivElement | null>(null);
    // const intervalRef = useRef<NodeJS.Timeout | null>(null);
    // const backgroundRef = useRef<HTMLDivElement>(null);
    // const cardRef = useRef<HTMLDivElement>(null);
    //
    // const startTimer = () => {
    //     if (timer.isActive){
    //         setTimer( prev => ({ ...timer, isActive: false }));
    //     } else {
    //         setTimer( prev => ({ ...timer, isActive: true }));
    //         gsap.to(timerRef.current, { duration: 1, scale: 1.1, repeat: -1, yoyo: true });
    //     }
    // }
    //
    // const resetTimer = () => {
    //     if(intervalRef.current) clearInterval(intervalRef.current);
    //     setTimer(prev => (
    //         {
    //             ...prev,
    //             minutes: TIMER_MODES[timer.mode].minutes,
    //             seconds: TIMER_MODES[timer.mode].seconds,
    //             isActive: false,
    //         }
    //     ));
    //     gsap.to(timerRef.current, { duration: 1, scale: 1 });
    // };
    //
    // const changeMode = (newMode: TimerState['mode']) => {
    //     setTimer({
    //         mode: newMode,
    //         minutes: TIMER_MODES[newMode].minutes,
    //         seconds: TIMER_MODES[newMode].seconds,
    //         isActive: false,
    //     });
    //
    //     gsap.to(timerRef.current, { duration: 1, scale: 1 });
    //
    //     useEffect(() => {
    //         if (timer.isActive) {
    //             intervalRef.current = setInterval(() => {
    //                 setTimer((prev) => {
    //                     if (prev.seconds === 0) {
    //                         if (prev.minutes === 0) {
    //                             clearInterval(intervalRef.current!);
    //                             return {
    //                                 ...prev,
    //                                 isActive: false,
    //                             };
    //                         }
    //                         return {
    //                             ...prev,
    //                             minutes: prev.minutes - 1,
    //                             seconds: 59,
    //                         };
    //                     }
    //                     return {
    //                         ...prev,
    //                         seconds: prev.seconds - 1,
    //                     };
    //                 });
    //             }, 1000);
    //         }
    //     });
    // }

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${BACKGROUND_COLORS[timer.mode]}`}>
            <div className={`relative overflow-hidden rounded-xl p-8 shadow-2xl max-w-md w-full backdrop-blur-lg transition-colors duration-300 ${CARD_COLORS[timer.mode]} `}>
                {/* Barra de progreso */}
                <div className="absolute top-0 left-0 h-2 bg-gray-700 w-full">
                    <div
                        className={`h-full ${timer.mode === 'pomodoro' ? 'bg-red-500' :
                            timer.mode === 'short' ? 'bg-green-500' : 'bg-blue-500'}`}
                        style={{ width: '100%' }}
                    />

                    <div>

                        <h1 className="text-4xl font-bold text-white text-center mb-8">
                            {timer.mode === 'pomodoro' ? 'Tiempo de Enfoque' :
                                timer.mode === 'short' ? 'Descanso Corto' : 'Descanso Largo'}
                        </h1>

                        <div className="text-7xl font-mono text-white text-center mb-8 font-bold">
                            {String(timer.minutes).padStart(2, '0')}:
                            {String(timer.seconds).padStart(2, '0')}
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default PomodoroTimer;