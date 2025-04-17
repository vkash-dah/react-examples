import './App.css'
import { NavLink, NavLinkRenderProps, Outlet, Route, Routes } from 'react-router';



/**
 * App component which act as a root component, following things are configured to implement simple routing example
 * 1. Navigation component is placed which is responsible for setting links for navigation (user will click on this links to perform navigation)
 * 2. The Routes component is used for providing routing configurations, it can be arranged in a nested fashion for creating wrapper layout and nested routes. 
 *    This provides information on which components need to be opened on which path
 * 3. The layout component is used to provide common layout wrapper to the nested routes.
 */
const App = () => {
  return (
    <>
      <h1>React Router Example</h1>
      <Navigation/>
      <Routes>
        <Route element={<Layout/>}>
          {/* Below route is Index route which automatically navigates to the given route if user open base route (/)  */}
          <Route index element={<Home />} /> 
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

const Navigation = () => {

  const style = ({ isActive }: NavLinkRenderProps) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      {/* NavLinks are used to provide styling to links */}
      <NavLink to="/" style={style}>Home</NavLink>
      <NavLink to="/users" style={style}>Users</NavLink>

    </nav>
  );
};


const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const Users = () => {
  return (
    <>
      <h2>Users</h2>
    </>
  );
};


const NoMatch= () => {
  return (
    <>
      <h2>404 Not Found</h2>
    </>
  );
};



/**
 * This creates component for common layout that can be applied to routes
 * The outlet component is used to link
 */
const Layout = () => {
  return (
    <>
      <main style={{ padding: '1rem 0', margin: '1rem', border: '1px solid blue'  }}>
        <Outlet />
      </main>
    </>
  );
};


export default App