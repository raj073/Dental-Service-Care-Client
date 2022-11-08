import React from 'react';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';

const Home = () => {

    return (

        <div>

            <div className=''>

                <div className="carousel carousel-end rounded-box w-full h-3/5 mx-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={image1} alt='Slider Image1' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={image2} alt='Slider Image2' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={image3} alt=' Slider Image3' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>

            <div>

                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={image2} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Why RR Dental Care Services</h1>
                            <p className="py-6">
                                <div className='mb-4'>
                                    <kbd className="kbd">⌘</kbd> &nbsp; &nbsp;
                                    <span className='text-xl font-bold'>Highest-rated dentistry in Dhaka, Bangladesh</span>
                                </div>
                                <div className='mb-4'>
                                    <kbd className="kbd">⌘</kbd> &nbsp; &nbsp;
                                    <span className='text-xl font-bold'>Clean, Comfortable, and Modern Studios</span>
                                </div>
                                <div>
                                    <kbd className="kbd">⌘</kbd> &nbsp; &nbsp;
                                    <span className='text-xl font-bold'>Transparent Care and Pricing</span>
                                </div>
                            </p>
                            <button className="btn btn-primary">Get Appointment</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>




    );
};

export default Home;