import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MessengerCustomerChat pageId="100088664633733" appId="182749174512489" />,
  </React.StrictMode>,
  document.getElementById("root")
);
