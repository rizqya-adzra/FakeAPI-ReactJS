import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddForm from "./Pages/AddForm";

export const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/product/new', element: <AddForm/>}
])