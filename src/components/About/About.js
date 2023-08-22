import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className='about-sec-wrp py-5'>
         <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='about-wrp d-flex align-items-center justifiy-content-between'>
                        <div className='about-img'>
                            <img src='images/hm-about-img.jpg' class="img-thumbnail" alt='About Images' />
                        </div>
                        <div className='about-dsc'>
                            <h5>About Me</h5>
                            <h3>I'm <span>Milon</span></h3>
                            <h4><span>Frontend </span> &amp; <span>UI/UX</span> Design</h4>
                            <strong>Based in World Wide</strong>
                            <p>Hi! My name is Milon. I am UI/UX designer, and I'm very passionate and dedicated to my work.</p>
                            <p>With 3 years Plus experience as a professional graphic designer and UI/UX Design, I have acquired the skills and knowledge necessary to make your project a success.</p>
                            <Link className='rounded' href="#">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default About;
