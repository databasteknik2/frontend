import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">

        <div className="sidebar-nav-section">
          <h4 className="sidebar-nav-section-title">Overview</h4>
          <ul className="sidebar-nav-links">
            <li><NavLink to="/admin">Dashboard</NavLink></li>
          </ul>
        </div>

        <div className="sidebar-nav-section">
          <h4 className="sidebar-nav-section-title">Course Management</h4>
          <ul className="sidebar-nav-links">
            <li><NavLink to="/admin/courses">Courses</NavLink></li>
            <li><NavLink to="/admin/courses/events">Events</NavLink></li>
            <li><NavLink to="/admin/courses/locations">Locations</NavLink></li>
            <li><NavLink to="/admin/courses/categories">Categories</NavLink></li>
          </ul>
        </div>

        <div className="sidebar-nav-section">
          <h4 className="sidebar-nav-section-title">Users</h4>
          <ul className="sidebar-nav-links">
            <li><NavLink to="/admin/customers">Customers</NavLink></li>
            <li><NavLink to="/admin/teachers">Teacher</NavLink></li>
          </ul>
        </div>

        <div className="sidebar-nav-section">
          <h4 className="sidebar-nav-section-title">Settings</h4>
          <ul className="sidebar-nav-links">
            <li><NavLink to="/admin/site-settings">Site Settings</NavLink></li>
          </ul>
        </div>

      </nav>
    </aside>
  )
}

export default Sidebar