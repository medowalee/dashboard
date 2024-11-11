import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Root from "./pages/Root";
import Rootadmin from "./pages/Rootadmin";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Root />}>

    <Route index element={<Home />} />
    
      {/* ... etc. */}
    </Route>
    <Route path="/admin" element={<Rootadmin />} >

    <Route path="panle" element={<Dashboard />} />
    
    </Route>
    </>
        
  )
);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
