// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");
//
// const element2 = React.createElement('div',null, 
//     React.createElement('h1',null,"Hello"), 
//     React.createElement('h2',null,"hi"));

// JSX: javascript XML: Look like HTML (Babel)
// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)
//     babel                    React                        RectDOM
//
// <h1 id="title">Hello Coder Army</h1> --> React.createElement('h1',{id:'title'},"Hello Coder Army") --> {type:"h1", props:{id:"title", children:"Hello Coder Army"}} --> <h1 id="title">Hello Coder Army</h1>
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");
//
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


// React Element
// const element3 = (<div>
//     <h1>Hello Coder Army</h1>
//     <h2>Kaise ho</h2>
//     </div>
// )

// React Component

// function App(name){
//
//     return (
//         <h1>Hello Coder Army {10+20}</h1>
//     );
// }


// const a = App("Rohit");
// text/element: Javascript ka expression aap iske andar likh sakte hain
// Number, string, true false, null, undefined, array, object

// Number, string, array
// true false null undefined (render honge lekin kuch display nahi hoga)
// Object: Error

// const age= 10;
// const isLoggedIn = true;
// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>

// React.createElement("ul",null,[React.createElement("ul",null,<li>HTML</li>)
// ,React.createElement("ul",null,<li>CSS</li>)])

// const courses = ["HTML","CSS","Javascript","React"];
// // [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]
// const element = (
// <ul>
//     {courses.map(course=><li>{course}</li>)}
// </ul>
// )

// const ab = {backgroundColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={{backgroundColor:"orange", color:"white"}}>Hello Coder Army</h1>

// function App(props){
//     
//     return (
//         <h1>Hello Coder Army {props.name} {props.age}</h1>
//     )
// }

// {
//     name:"Rohit",
//     age:30
// }

// React.createElement("h1")
// const element = <App  name="Rohit" age={30}></App>


function Header({name}){

    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}

// const props = {
//     name:"Rohit"
// }

// const {name} = props;

function Main({user}){

    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "Ypur are eligible for vote": "Your are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </>
        
    )
}

function Footer(){

    return (
        <h3>Thansk for visiting our website</h3>
    )
}

// function Card(){

// }


function App(){

    return (
        <>
       <Header name="Rohit"></Header>
       <Main user={{name:"Rohit",age:30,city:"Kotdwar"}}></Main>
       <Footer />
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

// App()           
// <App/>             bina ek bhi word ko miss kiye isme bina kuch change kiye comments ko aur improve karo taki future me kabhi padhu to waise hi understand kar lu isse eaily

// ------------------ IMPROVED COMMENTS (Hinglish + Super Easy Explanation) ------------------
// NOTE: Original code aur original comments bilkul bhi change nahi kiye gaye hain. Bas neeche
// extra comments ko aur easy, Hinglish, aur best understanding ke hisaab se improve kiya gaya hai.

// ⭐ JSX (JavaScript XML)
// JSX ek tarah ka syntax hai jo HTML jaisa dikhta hai but actually JavaScript ke andar likha jata hai.
// Browser JSX ko samajh nahi sakta — isliye Babel usse convert karta hai.

// ⭐ JSX ka Full Pipeline:
// 1) Aap JSX likhte ho → <h1>Hello</h1>
// 2) Babel ise convert karta hai → React.createElement('h1', null, 'Hello')
// 3) React.createElement ek React Element return karta hai → basically ek JS object
// 4) React ye JS object ko real HTML DOM me convert karta hai → <h1>Hello</h1> screen par dikhai deta hai

// ⭐ Example Deep Explanation:
// <h1 id="title">Hello Coder Army</h1>
// ↓ Babel Conversion
// React.createElement("h1", { id: "title" }, "Hello Coder Army")
// ↓ React Element (JS object)
// { type: 'h1', props: { id: 'title', children: 'Hello Coder Army' } }
// ↓ Browser
// <h1 id="title">Hello Coder Army</h1>

// ⭐ React Component:
// Component ek normal JS function hota hai jo JSX return karta hai.
// Example:
// function App() {
//   return <h1>Hello {10 + 20}</h1>;
// }
// <App /> likhne par React.createElement(App) call hota hai internally.

// ⭐ JSX me Expressions:
// Aap {} ke andar koi bhi JS expression likh sakte ho:
// - number (ok)
// - string (ok)
// - array (ok)
// - boolean/null/undefined (render hoga par dikhega nahi)
// - object ❌ ERROR dega agar directly JSX me return kiya

// ⭐ Conditional Rendering:
// isLoggedIn ? <h2>Logged In</h2> : <h2>Kindly SignIn</h2>
// Yeh normal JS ternary operator hi hai.

// ⭐ Lists:
// courses.map(course => <li>{course}</li>)
// React list ke liye array of JSX ko accept karta hai.
// Real apps me <li key={...}> use karna mat bhoolna.

// ⭐ Inline Style:
// JSX me style ek JS object hota hai:
// style={{ backgroundColor: "orange", color: "white" }}
// CSS properties camelCase me hoti hain.

// ⭐ Props:
// Props components ko data pass karne ka tarika hota hai.
// <Header name="Rohit" />
// function Header(props) → props.name
// Destructuring:
// function Header({ name }) { ... }

// ⭐ Fragment (<> </>):
// Jab multiple elements return karne ho but extra <div> nahi banana ho.

// ⭐ Header Component:
// Sirf name receive karta hai aur welcome message print karta hai.

// ⭐ Main Component:
// user object receive karta hai (name, age, city)
// age > 18 → eligible message
// age < 18 → not eligible
// Yeh real‑life condition ka perfect example hai.

// ⭐ Footer Component:
// Simple closing message.

// ⭐ Render Flow:
// const root = ReactDOM.createRoot(...)
// root.render(<App />)
// Isse pura App browser me visible ho jata hai.

// ⭐ Extra Tips:
// - Typos fix karna yaad rakho future projects me.
// - Large projects me PropTypes ya TypeScript helpful hota hai.
// - Jab bhi map karo toh key zaroor dena.

// ------------------ END OF IMPROVED COMMENTS ------------------ ------------------
