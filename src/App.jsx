import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages with a common layout */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <CoursesPage />
            </Layout>
          }
        />
        <Route
          path="/pricing"
          element={
            <Layout>
              <PricingPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />

        {/* Dynamic route for course details */}
        <Route
          path="/course-detail/:id"
          element={
            <Layout>
              <CourseDetailPage />
            </Layout>
          }
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
