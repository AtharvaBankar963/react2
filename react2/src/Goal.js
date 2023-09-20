import React from "react";

function Scored(){
    return(
        <h1>Goal!!!</h1>
    )
}

function NonScore(){
    return(
        <h1>Lost!!!</h1>
    )
}

//conditional render
export default function Goal(props){
    const isGoal1 = props.isGoal;
    if(isGoal){
        return<Scored/>
    }
    return<NonScore/>

}

// export default Goal