import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import { useState } from "react"
import Sidebar from "../User/Sidebar"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)

  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-bluebg-200">
       {/* Toggle Button */}
       <button
        className=" top-80 left-0 p-[2px] z-50 text-white text-2xl bg-richblack-800 rounded"
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? <FaArrowAltCircleLeft /> : <FaArrowAltCircleRight />}
      </button>

      {/* Sidebar */}
      {isSidebarVisible && <Sidebar />}
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-5 md:py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard