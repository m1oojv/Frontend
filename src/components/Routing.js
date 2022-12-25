import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import AppBar from "./AppBar";
import Dashboard from "../layout/dashboardLayout";

function Routing() {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route
            path="/404"
            element={
              <div>
                <h1>404 Error</h1>
              </div>
            }
          />
        </Routes>
      </Dashboard>
    </Router>
  );
}

export default Routing;

// const routes =[
//   {
//     path:'/',
//     component: Login
//   },
//   {
//     path:'/dashboard',
//     component: Dashboard
//   },
//   {
//     path:'/*',
//     component: PageNotFound
//   },
// ]

// export default routes

// function App() {
//   return (
//     <Router>
//       <Switch>
//         {routes.map((route) => (
//           <Route
//             key={route.path}
//             path={route.path}
//             component={route.component}
//           />
//         ))}
//       </Switch>
//     </Router>
//   );
// }
