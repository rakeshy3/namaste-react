import React from 'react';
import ReactDOM  from 'react-dom/client';

const Parent = React.createElement("div", null, 'Hello React');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Parent);