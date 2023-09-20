import { useRef } from "react";

function UseRef(){
    //create a ref
    const ref1 = useRef();
    const ref2 = useRef();
    //styling
    const handleClick =()=>{
        ref1.current.style.backgroundColor = 'black';
        ref1.current.style.padding = '3rem';
        ref1.current.style.color = 'red ';  
        ref1.current.style.width = '100px';
        ref1.current.style.height = '100px';
        ref1.current.style.margin = 'auto';
        ref1.current.style.borderRadius = '10px';

    };
    const handleClicks =()=>{
        ref1.current.style.backgroundColor = 'white';
        ref1.current.style.padding = '3rem';
        ref1.current.style.color = 'red ';
        ref1.current.style.width = '100px';
        ref1.current.style.height = '100px';
        ref1.current.style.margin = 'auto';
        ref1.current.style.borderRadius = '10px';
        ref1.current.style.border = '2px solid black';

    };
    return(
        <div>
            <h2>this is hook</h2>
            <button onClick={handleClick}>Enable dark mode</button>
            <button onClick={handleClicks}>Enable light mode</button>
            <br/>
            {/* passing the ref to the DOM elements */}
            <div ref={ref1} style={{color:'red'}}>Styling an element using useRef hook in react</div>
            <div ref0={ref2} style={{color:'red'}}>Styling an element using useRef hook in react</div>

        </div>
    );

};

export default UseRef;