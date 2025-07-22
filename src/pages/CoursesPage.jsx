import React from 'react'
import CourseCard from '../components/CourseCard'
import allInImage from '../assets/CourseCard.jpg'
import thumbImg from '../assets/CoursesPic.png'
const CoursesPage = () => {
  return (
    <section className='w-full bg-white py-16'>
      <img src={thumbImg} alt="thumbPic" className='mt-3.5 h-120 w-full' />
      <div className='max-w-7xl mx-auto px-6 mt-4'>
        <h2 className='text-blue-600 text-sm font-semibold text-center mb-2 uppercase'>pOPuLAR COURSES</h2>
        <h3 className='text-3xl font-bold text-center mb-3'>Choose Our Top Courses</h3>
        <p className='text-center text-gray-500 mb-10 max-w-2xl mx-auto'>Discover a world of knowledge and opportunities with our online education platform. Pursue a new career.</p>

        <div className='flex justify-center flex-wrap gap-4 mb-12'>
          {[ 'Treding', 'All Categories', 'Web Development', 'Marketing', 'Programing', 'Design'].map((cat, i) => (
            <button key={i} 
            className={`px-4 py-1.5 rounded-full border text-sm 
              ${i === 0 ? 'bg-blue-600 text-white' : 'text-gray-700 border-gray-300'} 
              hover:to-blue-600 hover:text-white transition`}>{cat}</button>
          ))}
        </div>
        
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
          {[...Array(18)].map((_, i) => (
            <CourseCard key={i} image={allInImage} />
          ))}
        </div>

        <div className='text-center mt-12'>
          <button className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Explore All Courses</button>
        </div>
      </div>
    </section>
  )
}

export default CoursesPage
