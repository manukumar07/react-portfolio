import React from 'react'

const Contact = () => {
  return (
    <>
        <section id='contact' className='pb-16'>
        <div className='container'>
        <div className='md:flex justify-between item-center'>
        <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
        {/* add goggle embed in location  */}
        <iframe  title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27605.383519215407!2d77.24961253464052!3d30.132170942255925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef99b8b19ea25%3A0xfc76e2b1f391902!2sYamuna%20Nagar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1684811765229!5m2!1sen!2sin" className='border-0 w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>

        </div>
        </section>
    </>
  )
}

export default Contact
