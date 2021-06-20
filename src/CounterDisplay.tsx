import React from 'react';

type CounterDisplayProps = {
    count: number
    maxNumber:number

}


export function CounterDisplay(props: CounterDisplayProps) {
    return (
        <div className="count">
            <h1 className={props.count === props.maxNumber ? "endCount" : ""}>{props.count}</h1>

        </div>


    )
}




