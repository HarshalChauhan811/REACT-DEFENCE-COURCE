// -----------------------------
// ⭐ DOM ELEMENT CREATION USING OBJECTS (Concept Building)
// -----------------------------

// Yeh sirf idea samjhane ke liye hai ki hum kaise manually
// ek element ke attributes define kar sakte hain using objects.

// const attributes = {
//     className:"element",
//     id:"first",
//     style:{
//      fontSize:"30px",
//      backgroundColor:"orange",
//      color:"white"
//     }
// };


// const element = {
//     tag:"h1",                  // Kaunsa HTML tag create hoga
//     textContent:"Hello Coder Army", // andar ka text
//     className:"element",
//     id:"first",
//     style:{
//         fontSize:"30px",
//         backgroundColor:"orange",
//         color:"white"
//     }
// };


// -----------------------------
// ⭐ JavaScript se manually h1 create karna (React se pehle ka method)
// -----------------------------

// const element1 = document.createElement('h1');
// element1.textContent = "Hello Coder Army";
// element1.className = 'element';
// element1.id = 'first';
// element1.style.fontSize="30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";


// const element2 = document.createElement('h2');
// element2.textContent = "Strike is Launched";
// element2.className = 'element';
// element2.id = 'second';
// element2.style.fontSize="20px";
// element2.style.backgroundColor = "pink";
// element2.style.color = "green";




// -----------------------------------------------------------
// ⭐ CUSTOM REACT IMPLEMENTATION (Apna khud ka React create karna)
// -----------------------------------------------------------

// const React = {
//     createElement: function(tag, attributes, children){
        
//         // Browser ka actual HTML element create kar rahe hain
//         const element = document.createElement(tag);

//         // children => text content insert kar rahe hain
//         element.textContent = children;

//         // attributes loop karke element me assign kar rahe hain
//         for(const key in attributes){

//             // agar style ka object mila -> multiple style add kar do
//             if(key === 'style'){
//                 Object.assign(element.style, attributes.style);
//             }
//             else{
//                 // baaki attributes direct add kar do (id, className, etc.)
//                 element[key] = attributes[key];
//             }
//         }

//         return element; // final HTML element return
//     }
// };


// // Custom ReactDOM (sirf append karta hai)
// const ReactDOM = {
//     render: function(child, parent){
//         parent.append(child);
//     }
// };




// -----------------------------------------------------------
// ⭐ ORIGINAL REACT KA FUNDAMENTAL WORKING (Virtual DOM concept)
// -----------------------------------------------------------

// const React = {
//     createElement: function(type, props, children){
       
//         // React actual DOM element return nahi karta,
//         // balki ek plain JS OBJECT return karta hai.
//         return {
//             type: type,
//             props: {
//                 ...props,
//                 children: children   // children ko props me daal dete hain
//             }
//         };
//     }
// };


// React element ka manual object structure (Virtual DOM object)
// const reactElement = {
//     type:'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
//         children: "Hello Coder Army"
//     }
// };


// Custom ReactDOM jo Virtual DOM ko real DOM me convert karta hai
// const ReactDOM = {
//     render: function(reactElement, root){
       
//         root.innerHTML = ''; // root ko pehle clean kar do

//         // HTML element create
//         const element = document.createElement(reactElement.type);
        
//         const {props} = reactElement;

//         // props ke through real HTML me convert karna
//         for(const key in props){

//             if(key === 'style'){
//                 Object.assign(element.style, props.style);
//             }
//             else if(key === 'children'){
//                 element.textContent = props[key];
//             }
//             else{
//                 element[key] = props[key];
//             }
//         }

//         root.append(element); // final output browser me show
//     }
// };




// -----------------------------------------------------------
// ⭐ ACTUAL REACT (React.createElement ka real usage)
// -----------------------------------------------------------

// React element using React.createElement
const element1 = React.createElement(
    "h1",
    {
        className:"element",
        id:"first",
        style:{fontSize:"30px",backgroundColor:"orange",color:"white"}
    },
    "Hello Coder Army"
);

const element2 = React.createElement(
    "h2",
    {
        className:"element",
        id:"second",
        style:{fontSize:"20px",backgroundColor:"pink",color:"green"}
    },
    "Strike is launched"
);


// -----------------------------
// ⭐ Multiple elements ko ek parent div ke andar rakhna
// -----------------------------

const div = React.createElement(
    'div',
    null, // koi props nahi
    React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army"),
    React.createElement('h2',{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched"),
);


// -----------------------------
// ⭐ MAIN RENDERING AREA (ReactDOM)
// -----------------------------

// DOM me root element find karo jahan React render karega
const root = ReactDOM.createRoot(document.getElementById('root'));

// div —> iske andar 2 react elements
root.render(div);

// console.log(div);


// Older React method (React 17 and below):
// ReactDOM.render(element1, document.getElementById('root'));
// ReactDOM.render(element2, document.getElementById('root'));

