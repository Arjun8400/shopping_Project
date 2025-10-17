import React from 'react'

const About = () => {
  return (
  
    <div className='min-h-screen  flex flex-col bg-gradient-to-b from-white to-gray-50'>
      <main className='flex-1 max-w-6xl mx-auto px-6 py-20'>
        {/* Hero */}
        <section className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800 mb-4'>About GIFT Shop</h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>We build delightful shopping experiences — curated products, honest prices, and fast delivery. Learn who we are, what we believe in, and how we work.</p>
        </section>

        {/* Company story */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12'>
          <div>
            <h2 className='text-2xl font-bold mb-3 text-gray-800'>Our Story</h2>
            <p className='text-gray-600 mb-4'>Founded with a small team and a big idea, GIFT Shop started as a weekend market stall and quickly grew into a trusted online marketplace. We focus on quality, sustainability, and great customer service.</p>
            <p className='text-gray-600'>Over the years we've partnered with local artisans and global brands to bring a broad selection of products while keeping our community-first values.</p>
          </div>
          <div>
            <div className='bg-purple-50 border border-purple-100 p-6 rounded-lg shadow-sm'>
              <h3 className='font-semibold text-gray-800 mb-2'>Fast Delivery</h3>
              <p className='text-gray-600'>Same-day dispatch and reliable shipping across regions.</p>
            </div>
            <div className='bg-white mt-4 p-6 rounded-lg shadow-sm border'>
              <h3 className='font-semibold text-gray-800 mb-2'>Handpicked Products</h3>
              <p className='text-gray-600'>Products are curated by our buying team to ensure quality and value.</p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className='mb-12'>
          <h2 className='text-2xl font-bold mb-6 text-gray-800'>Mission & Values</h2>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            <div className='p-6 bg-white rounded-lg shadow-sm border'>
              <h4 className='font-semibold mb-2'>Customer First</h4>
              <p className='text-gray-600 text-sm'>We put customers at the center of every decision.</p>
            </div>
            <div className='p-6 bg-white rounded-lg shadow-sm border'>
              <h4 className='font-semibold mb-2'>Integrity</h4>
              <p className='text-gray-600 text-sm'>Transparent pricing and honest product descriptions.</p>
            </div>
            <div className='p-6 bg-white rounded-lg shadow-sm border'>
              <h4 className='font-semibold mb-2'>Sustainability</h4>
              <p className='text-gray-600 text-sm'>We work to reduce waste and support sustainable makers.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className='mb-12'>
          <h2 className='text-2xl font-bold mb-6 text-gray-800'>Meet the Team</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

            {
                [
              { name: 'Arjun', role: 'Founder' },
              { name: 'Priya', role: 'Product Lead' },
              { name: 'Rahul', role: 'Head of Ops' },].map((member) => (
              <div key={member.name} className='p-6 bg-white rounded-lg shadow-sm border text-center'>
                <div className='h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4' />
                <h5 className='font-semibold'>{member.name}</h5>
                <p className='text-sm text-gray-600'>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className='text-center my-12'>
          <h3 className='text-xl font-bold mb-3 text-gray-800'>Want to work with us?</h3>
          <p className='text-gray-600 mb-4'>We're always looking for talented people and partners. Reach out via the contact page.</p>
          <a href='/quary' className='inline-block bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700'>Contact Us</a>
        </section>
      </main>
    </div>
  )
}

export default About