import React from 'react';

type ButtonsProps = {
    count: number
    maxNumber: number
    addToCounter: () => void
    removeToCounter: () => void

}


export function Buttons(props: ButtonsProps) {
    return (
        <div>
            <button className={props.count === props.maxNumber ? "noinc" : "inc"}
                    onClick={props.addToCounter}>inc
            </button>

            <button className={props.count === props.maxNumber ?   "reset":"stopReset"}
                    onClick={props.removeToCounter}>reset
            </button>
        </div>


    )
}




