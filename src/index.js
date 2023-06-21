import { createRoot } from "react-dom/client";
import { Container } from "./components/container/container.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

import "./languages/i18n.js";

import App from "./components/app/app.jsx";
import "./styles/main.scss"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <StrictMode>
      <Container component={<App />} />
    </StrictMode>
  </Provider>

);
