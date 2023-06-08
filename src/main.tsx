import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "./application/Application";
import "./index.scss";

const root = document.getElementById("root");
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <Application />
        </React.StrictMode>
    );
}
