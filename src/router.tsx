import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/layouts/AppLayout";
import CenterLayout from "./components/layouts/CenterLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import MyLayout from "./components/layouts/MyLayout";

import HomePage from "./components/pages/HomePage";
import CoursesPage from "./components/pages/CoursesPage";
import NotFound from "./components/pages/NotFound";

import AdminHomePage from "./components/pages/admin/AdminHomePage";
import AdminTeacherPage from "./components/pages/admin/AdminTeachersPage";
import AdminCoursesPage from "./components/pages/admin/AdminCoursesPage";
import AdminCourseEventPage from "./components/pages/admin/AdminCourseEventPage";
import AdminLocationPage from "./components/pages/admin/AdminLocationsPage";

import MyBookingPage from "./components/pages/my/MyBookingsPage";
import MyProfilePage from "./components/pages/my/MyProfilePage";
import MySettingsPage from "./components/pages/my/MySettingsPage";
import CourseDetailsPage from "./components/pages/CourseDetailsPage";
import ContactPage from "./components/pages/ContactPage";
import OffersPage from "./components/pages/OffersPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", handle: { title: "Home" }, element: <HomePage /> },
      {
        path: "/courses",
        handle: { title: "Courses" },
        element: <CoursesPage />,
      },
      {
        path: "/courses/:id",
        handle: { title: "Course Details" },
        element: <CourseDetailsPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, handle: { title: "Admin" }, element: <AdminHomePage /> },
      {
        path: "teachers",
        handle: { title: "Teachers" },
        element: <AdminTeacherPage />,
      },
      {
        path: "courses",
        handle: { title: "Courses" },
        element: <AdminCoursesPage />,
      },
      {
        path: "course-events",
        handle: { title: "Course Events" },
        element: <AdminCourseEventPage />,
      },
      {
        path: "locations",
        handle: { title: "Locations" },
        element: <AdminLocationPage />,
      },
    ],
  },

  {
    path: "/my",
    element: <MyLayout />,
    children: [
      {
        index: true,
        handle: { title: "My bookings" },
        element: <MyBookingPage />,
      },
      {
        path: "profile",
        handle: { title: "My profile" },
        element: <MyProfilePage />,
      },
      {
        path: "settings",
        handle: { title: "Settings" },
        element: <MySettingsPage />,
      },
    ],
  },

  {
    element: <CenterLayout />,
    children: [
      { path: "*", handle: { title: "Not found" }, element: <NotFound /> },
    ],
  },

  {
  element: <AppLayout />,
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/courses", element: <CoursesPage /> },
    { path: "/contact", element: <ContactPage /> }, 
    { path: "/offers", element: <OffersPage /> },   
  ],
},
]);
