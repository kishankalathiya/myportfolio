import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/routes";
function App() {
  return (
    <div className="mainContainer">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
