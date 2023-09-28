import { Outlet, Link } from "react-router-dom";

export const Root = () => {
  return (
    <div className="mx-auto p-4 max-w-screen-lg">
      <div className="navbar">
        <ul className="flex gap-4 font-bold text-xl mb-4 pb-1 border-b-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <Link to="/onboard">Get Started</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
