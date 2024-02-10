import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { "id": "heading"}, 'Namaste React');

// Jsx is not html inside javascript or react . It is html or xml like syntax

const title = (
  <h1 className="head" tabIndex="5">
  
    Namste React !
  </h1>
);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namste Recat functional component !
  </h1>
)

// React element
// you can write javascript inside jsx
const HeadingComponent = () => (
  <div id="container">
    {title}
    { Title() } 
    <Title/>
    <h1 className="heading">Namaste react functional component again</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
