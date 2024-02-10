import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { "id": "heading"}, 'Namaste React');

// Jsx is not html inside javascript or react . It is html or xml like syntax
const jsxheading = <h1 id="heading">Namaste React</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
