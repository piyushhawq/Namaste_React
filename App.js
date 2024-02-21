import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading = React.createElement(
// "h1",
// {id :"heading",xyz:"abc"},
// "hello World from React"
// );

// const parent  = React.createElement("div",{id:"parent"},
// [React.createElement("h1",{},"i am an h1 tag"),React.createElement("h2",{},"i am an h2 tag")]


// );

// JSX
// const jsxHeading = <h1 id="heading">Namste React using JSX 😊</h1>
const Title = ()=>(
<h1>Namaste React</h1>
);

let num =1000;
const HeadingComponent = () => (
 <div>
 <Title/>
 <h1 id="heading">Namste React using Functionl Component 😊</h1>
 <h2>{num + 100}</h2>
 </div>  
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);      
