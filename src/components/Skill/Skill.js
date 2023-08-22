import React from 'react'
import Heading from '../Heading';

const Skill = () => {
  return (
    <> 
     <section className='skill-sec-wrp py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                   <Heading className='text-white' title='My Skills' />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='skill-wrp d-flex align-items-center justify-content-between'>
                        <div className='skill-dsc'>
                            <h5 className='text-white'>My Skills</h5>
                            <h2 className='text-white'>You Can Imagine <br/> I Can Do</h2>
                            <p className='text-white'>I’m with broad technical skill-set, very strong attention to detail, and 3 years of experience in web Design & UI/UX Design. Able to multitask and juggle multiple pressing projects simultaneously. On top of the latest trends and technologies. Ability to improvise, troubleshoot, take ownership, and most importantly learn new skills on the job.</p>
                        </div>
                        <div className='skill-bar'>
                           
                            <h5>PHP</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                            <h5>Frontend Developer</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                            <h5>Javascript</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                            <h5>React Js</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
export default Skill;