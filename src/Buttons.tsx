import React from 'react';

type CounterDisplayProps = {
    count: number
    addToCounter: () => void
    removeToCounter: () => void
    maxNumber: number
}


export function CounterDisplay(props: CounterDisplayProps) {
    return (
        <div className="count">
            <h1 className={props.count === props.maxNumber ? "endCount" : ""}>{props.count}</h1>

            <button className={props.count === props.maxNumber ? "noinc" : "inc"}
                    onClick={props.addToCounter}>inc
            </button>

            <button className={props.count === props.maxNumber ?   "reset":"stopReset"}
                    onClick={props.removeToCounter}>reset
            </button>
        </div>


    )
}




