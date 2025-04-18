import { Link, NavLink, NavLinkRenderProps, Outlet, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router';
import { useState } from "react";
import './App.css'

type User = {
  id : string,
  fullName: string
}

type UserProps = {
  users: User[]
}

function App() {
  const navigate = useNavigate(); 
  const [users, setUsers] = useState([
    { id: '1', fullName: 'Vikash Dahiya' },
    { id: '2', fullName: 'Sumit Malik' },
    { id: '3', fullName: 'Shivam Dubey' },
    { id: '4', fullName: 'Ricky Ponting' },
  ] as User[]);

  const handleRemoveUser = (userId: string | undefined)=>{
    setUsers((users) => users.filter(u => u.id !== userId));
    navigate('/users');
  }
  
  return (
    <>
      <h1>React Router Example: Dynamic & Nested Routes</h1>
      <Navigation></Navigation>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            {/* Nested routes can be defined by placing nested Route components  */}
            <Route path="users" element={<Users users={users} />}>
              {/* colon is used to declare dynamic route */}
              <Route path=":userId" element={<User onRemoveUser={handleRemoveUser} />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
      </Routes>
    </>
  )
}

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

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const Users = ({users}: UserProps)=> {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm: string = searchParams.get('name') || '';
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const name : string = event.target.value;
    if(name){
      setSearchParams({name});
    }else{
      setSearchParams({});
    }
  }
  return <>
    <h1>Users</h1>
    <input value={searchTerm} type="text" onChange={handleSearch}></input>
    <ul>
      {users.filter((u) => u.fullName.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.fullName}</Link>
        </li>
      ))}
    </ul>
    {/* Nested routes can be opened inside parent using outlet component */}
    <Outlet></Outlet>
  </>
}

type UserProp = {
  onRemoveUser: (userId: string | undefined) => void
}

const User = ({onRemoveUser}: UserProp) => {
  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>
      <div>
        <button type="button" onClick={()=>onRemoveUser(userId)}>Remove</button>
      </div>
      <div>
        <Link to="/users">Back to Users</Link>
      </div>
    </>
  );
}


const NoMatch = () => {
  return <><h1>Not Found: 404</h1></>
}

export default App
