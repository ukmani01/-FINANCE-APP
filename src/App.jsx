import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../src/assets/components/layout/Sidebar";
import Header from "../src/assets/components/layout/Header";
import Dashboard from "../src/assets/pages/Dashboard";
import Profile from "../src/assets/pages/Profile";
import "./App.css"

export default function App() {

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>

        <div className="left-side inline-block">
          <Sidebar />
          <div className="right-side ">
            <Header />
            <main className="main-area">
              <Routes >
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />

              </Routes >
            </main>

          </div>

        </div>

      </BrowserRouter>




    </>
  )
}