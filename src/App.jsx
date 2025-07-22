import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import CourseCard from './components/CourseCard'
import PopularCourses from './components/PopularCourses'
import PartnerLogos from './components/PartnerLogos'
import AboutSection from './components/AboutSection'
import BlogSection from './components/BlogSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import CoursesPage from './pages/CoursesPage';
import Blog from './pages/Blog'
import Contact from './pages/Contact'
// import CourseCard from './components/CourseCard'

function App() {

  return (
    <div className ="font-sans">
      <Navbar />

      <Routes>
        {/* HomePage Route */}
        <Route 
          path="/"
           element={
            <>
               <Hero />
               <PartnerLogos />
               <PopularCourses />
               <AboutSection />
               <BlogSection />
               <TestimonialsSection />
            </>
           }
           />

           {/* Courses Page */}
           <Route path="/courses" element={< CoursesPage />} />
           <Route path="Blog" element={ < Blog />} />
           <Route path="contact" element={ < Contact />} />
      </Routes>

      <Footer />
  </div>
  )
}

export default App
