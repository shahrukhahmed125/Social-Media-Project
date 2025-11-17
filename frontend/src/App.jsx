import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import MainLayout from "./layouts/MainLayout";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Layout */}
        <Route path="/dashboard" element={<MainLayout />}>
          {/* <Route index element={<Feed />} />       default page */}
          <Route path="feed" element={<Feed />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
