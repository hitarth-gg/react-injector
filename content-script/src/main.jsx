import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import styles from "../main.css?inline";

const body = document.querySelector("body");

const appContainer = document.createElement("div");
appContainer.id = "react-injector";

if (body) {
  body.prepend(appContainer);
}

// Check blank.org to see the extension in action
// Create a Shadow DOM on the app container
const shadow = appContainer.attachShadow({ mode: "open" });

// Create an element to mount your React app
const reactApp = document.createElement("div");
shadow.appendChild(reactApp);

const root = createRoot(reactApp);

root.render(
  <React.StrictMode>
    <style type="text/css">{styles}</style>
    <div>
      <App />
    </div>
  </React.StrictMode>
);
