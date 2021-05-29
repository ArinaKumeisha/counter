import React from'react';

type CounterDisplayProps ={
count:number
}

export function CounterDisplay(props:CounterDisplayProps){
return (
<h1 className={props.count===5 ? "endCount": ""}>{count}</h1>
</div>
)
}




