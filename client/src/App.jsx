import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Home from "./pages/HomePage/Home";
import Login from "./pages/login/Login";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/signup/signup";
import Gigs from "./pages/Gigs/Gigs";
import AddGig from "./pages/Add Gig/AddGig";
import Order from "./pages/orders/Order";
import Messages from "./pages/Messages/Messages";
import Gig from "./pages/gig/Gig";
import Message from "./pages/Message/Message";
import MyGigs from "./pages/myGigs/myGigs";
import Success from "./pages/success/success";
import Pay from "./pages/pay/pay";

const Layout = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "gigs",
        element: <Gigs />,
      },
      {
        path: "addgig",
        element: <AddGig />,
      },
      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "/gigs/:id",
        element: <Gig />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "/mygigs",
        element: <MyGigs />,
      },
      {
        path: "/pay/:id",
        element: <Pay />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
