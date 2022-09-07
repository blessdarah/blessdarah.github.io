import * as React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import { ModalProvider } from "./contexts/ModalProvider";
import App from "./App";
import 'boxicons';

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <ModalProvider>
                    <App />
                </ModalProvider>
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>
);
