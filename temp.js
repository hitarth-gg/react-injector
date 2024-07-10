// content-script/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const body = document.querySelector('body');

const appContainer = document.createElement('div');
appContainer.id = 'react-injector';

if (body) {
  body.prepend(appContainer);
}

// Create a Shadow DOM on the app container
const shadow = appContainer.attachShadow({ mode: 'open' });

// Inject Tailwind CSS into Shadow DOM
const style = document.createElement('style');
style.textContent = `
  @import url('./dist/content-script.css');
  :host { all: initial; }
  :host {
    display: block; /* Ensure Shadow DOM container behaves like a block */
  }
`;
shadow.appendChild(style);

// Create an element to mount your React app
const reactApp = document.createElement('div');
shadow.appendChild(reactApp);

const root = createRoot(reactApp);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* ------------------------------------------------------ */
/* ------------------------------------------------------ */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import styles from "./main.css?inline";

const body = document.querySelector("body");

const app = document.createElement("div");
app.id = "react-injector";

if (body) {
  body.prepend(app);
}

const container = document.getElementById("react-injector");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <style type="text/css">{styles}</style>
    <div>
      <App />
    </div>
  </React.StrictMode>
);
