import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Conmonent1() {
    const [user, setUser] = useState(" Bramha");
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!!!`}</h1>
        </UserContext.Provider>
    );
}


//  function UseContext2(){
//      return(
//             <>
//                 <h1>Components 2</h1>
//                 <Conmonent3/>
//             </>
//         );
// }

//  function UseContext3(){
//      return(
//             <>
//                 <h1>Components 3</h1>
//                 <Conmonent4/>
//             </>
//         );
// }

//  function UseContext4(){
//      return(
//             <>
//                 <h1>Components 4</h1>
//                 <Conmonent5/>
//             </>
//         );
// }


// function Components5() {
//     const user1 = useContext(UserContext);

//     return (
//         <>
//             <h1>Components 5</h1>
//             <h2>`Hello ${user1}again!!!`</h2>
//         </>
//     );
// }
