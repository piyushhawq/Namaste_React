import React from "react";
import  ReactDOM  from "react-dom";

const heading = React.createElement(
"h1",
{id :"heading",xyz:"abc"},
"hello World from React"
);

const parent  = React.createElement("div",{id:"parent"},
[React.createElement("h1",{},"i am an h1 tag"),React.createElement("h2",{},"i am an h2 tag")]


);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
