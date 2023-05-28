import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./components/container/container.jsx";
import App from "./components/app/app.jsx";
import { StrictMode } from "react";
import "./styles/main.scss"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Container component={<App />} />
  </StrictMode>
);
