import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { "id": "heading"}, 'Namaste React');

// Jsx is not html inside javascript or react . It is html or xml like syntax
// React element
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
