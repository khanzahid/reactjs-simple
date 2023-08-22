import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
     <section className='hm-banner-sec-wrp py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                   <div className='hm-banner-dsc'>
                      <h4 className='text-white'>HELLO,</h4>
                      <h2 className='text-white'>I'm Sajid</h2>
                      <h5 className='text-white'>FrontEnd Developer</h5>
                      <p className='text-white content-jusitify'>I'm a FullStack Developer focused on crafting 
                      clean & user‑friendly experiences...</p>
                      <Link className='rounded'>Click</Link>
                    </div> 
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
export default Banner;