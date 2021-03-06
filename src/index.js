import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';

const APP = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
	hydrate(APP, rootElement);
} else {
	render(APP, rootElement);
}




