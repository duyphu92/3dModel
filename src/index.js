// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./app";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <>anc</> */}
//     <App />
//   </React.StrictMode>
// );

import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import App from "./app";


// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))