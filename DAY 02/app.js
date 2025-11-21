// -----------------------------
// ⭐ React + JSX Example with Detailed Hinglish Comments
// Note: Jo code aapne share kiya tha, usi ko maine bilkul 그대로 rakha hai — sirf har line/section pe
// expressive aur helpful Hinglish comments add kiye hain taaki koi bhi padh kar sab kuch samajh jaaye.
// -----------------------------

// Example short usages (commented out examples kept for reference)
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

// const element2 = React.createElement('div',null, 
//     React.createElement('h1',null,"Hello"), 
//     React.createElement('h2',null,"hi"));


// JSX: JavaScript XML — JSX dikhega jaise HTML, lekin Babel ke through ye transpile hokar
// React.createElement() ban jaata hai, phir React Element (JS object) banta hai, aur finally real DOM.
// Flow: JSX --(Babel)--> React.createElement() --> React Element (JS object) --> Real DOM (HTML element)

// Example transformation:
// <h1 id="title">Hello Coder Army</h1> 
//   --> React.createElement('h1',{id:'title'},"Hello Coder Army") 
//   --> {type:"h1", props:{id:"title", children:"Hello Coder Army"}} 
//   --> <h1 id="title">Hello Coder Army</h1>

// JSX examples (kept as comments for reference)
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");
// const element = <h1 id="title" className="first">Hello Coder Army</h1>;
// console.log(element);

// const element2 = (<div>
//     <h1>Hell</h1>
//     <h2>hi</h2>
// </div>);

// React.createElement('div',null,
//     React.createElement("h1",null,"Hello Coder Army"),
//     React.createElement("h2",null,"Kaise ho")
// )

// React Element example using JSX (kept as comment)
// const element3 = (<div>
//     <h1>Hello Coder Army</h1>
//     <h2>Kaise ho</h2>
//     </div>
// )

// -----------------------------
// ⭐ React Component basics (function components)
// -----------------------------
// A component ek function hota hai jo JSX return karta hai.
// Components props (properties) receive karte hain — yeh read-only hote hain.

// Example: Function component jo props se value le raha hai (commented)
// function App(name){
//     return (
//         <h1>Hello Coder Army {10+20}</h1>
//     );
// }

// Note about what can be rendered inside JSX:
// - Number, string, array -> render ho jayega as expected
// - true/false/null/undefined -> render to honge lekin kuch display nahi hoga (useful for conditional rendering)
// - Object -> directly render karenge to error milega (object ko string/array/JSX me convert karo pehle)

// Example of conditional rendering using ternary (commented)
// const age= 10;
// const isLoggedIn = true;
// const element = <h1>Hello Coder {isLoggedIn ? <h2>Logged In</h2> : <h2>Kindly SignIn</h2>}</h1>

// Example: mapping array to list items (commented)
// const courses = ["HTML","CSS","Javascript","React"];
// const element = (
// <ul>
//     {courses.map(course => <li>{course}</li>)}
// </ul>
// )

// Inline style example (commented)
// const ab = {backgroundColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={{backgroundColor:"orange", color:"white"}}>Hello Coder Army</h1>

// Example component with props (commented)
// function App(props){
//     return (
//         <h1>Hello Coder Army {props.name} {props.age}</h1>
//     )
// }

// props example object (commented)
// {
//     name:"Rohit",
//     age:30
// }

// JSX element of component (commented)
// const element = <App  name="Rohit" age={30}></App>


// -----------------------------
// ⭐ COMPONENTS FROM YOUR SHARED CODE (MAIN PART)
// -----------------------------
// Main goal: preserve your exact components and logic, add detailed Hinglish comments so kuch bhi miss na ho.

// Header component: destructured props ({name})
function Header({name}){
    // Yeh component ek <h1> return karta hai jo prop se name dikhata hai.
    // Note: JSX me braces {} se JS expression likh sakte ho.
    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}

// Main component: accepts a 'user' object prop
function Main({user}){
    // Fragment <> </> use kiya gaya hai taaki multiple sibling elements return kar sake bina extra wrapper DOM node ke.
    // user.name, user.age, user.city — yeh user object ke properties hain.
    // Conditional (ternary) check: agar age > 18 ho to eligible message dikhao warna not eligible.
    return (
        <>
            <h2>Hi {user.name}</h2>
            {/* Yaha ternary operator use hua hai for conditional rendering */}
            <h3>{user.age > 18 ? "You are eligible for vote" : "You are not eligible for vote"}</h3>
            {/* user.city display kar rahe hain */}
            <p>Your city is {user.city}</p>
        </>
        
    )
}

// Footer component: simple presentation component
function Footer(){
    // Footer me gratitude message show kar rahe hain.
    return (
        <h3>Thanks for visiting our website</h3>
    )
}

// (Optional) Card component placeholder commented out in original
// function Card(){
// }


// App component: Root component jo Header, Main, Footer ko compose karta hai
function App(){
    // Fragment use karke teen child components ko wrap kiya gaya hai.
    // Header ko name prop pass ho raha hai ("Rohit")
    // Main ko user object pass ho raha hai with name, age, city
    return (
        <>
            <Header name="Rohit"></Header>
            {/* user prop ek object literal pass kiya gaya hai */}
            <Main user={{name:"Rohit", age:30, city:"Kotdwar"}}></Main>
            {/* Footer ko self-closing tag se render kiya */}
            <Footer />
        </>
    )
}

// -----------------------------
// ⭐ RENDERING (ReactDOM)
// -----------------------------
// React 18 style: createRoot + root.render
// Yeh line DOM se root element find karke React root create karta hai.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Finally App component ko render kar rahe hain.
// JSX me <App/> likhna equivalent hai React.createElement(App, null)
root.render(<App/>);

// -----------------------------
// ⭐ NOTES / TIPS (Quick Sanity Checks)
// -----------------------------
// 1) Ensure 'root' element HTML me exist karta ho: <div id="root"></div>
// 2) React + ReactDOM libraries properly loaded (agar CDN use kar rahe ho) ya bundler configured ho (create-react-app / Vite).
// 3) Props are read-only: App component se Main/ Header ko sirf data bhejte ho, change nahi karte directly.
// 4) Fragment <> </> sirf ek invisible wrapper hai — DOM me extra node create nahi hota.
// 5) Conditional rendering: use ternary ya logical && depending on requirement.
// 6) Debugging tip: Agar JSX me error aaye to console me transform error dekhoge — usually missing closing tag ya wrong expression hota hai.

// -----------------------------
// ⭐ Final: Ye code bilkul wahi logic rakhta hai jo aapne diya tha — maine sirf explanatory Hinglish comments add kiye hain.
// -----------------------------
