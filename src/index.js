import * as React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {RecoilRoot} from 'recoil';
import App from "./App";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>
);
