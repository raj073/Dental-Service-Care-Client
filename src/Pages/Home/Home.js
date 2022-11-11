import React from 'react';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import teeth from '../../assets/white-teeth.jpg';
import toast from 'react-hot-toast';
import Gallery from './Gallery/Gallery';
import HomeServices from './HomeServices/HomeServices'
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('home');

    const handleGetAppoint = (event) => {
        event.preventDefault();
        toast.success('Congratulations! Your Appointment Has Been Confirmed.', {
            position: "top-center"
        });
        event.target.reset();
    }

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

                <div className='mt-12'>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row mx-20">
                            <div className="text-center lg:text-left mx-10">
                                <h1 className="text-5xl font-bold">Why RR Dental Care Services</h1>
                                <p className="py-8 text-xl">
                                    <div className='mb-4'>
                                        <kbd className="kbd text-white bg-warning">⌘</kbd> &nbsp; &nbsp;
                                        <span className='text-xl font-bold'>Highest-rated dentistry in Dhaka, Bangladesh</span>
                                    </div>
                                    <div className='mb-4'>
                                        <kbd className="kbd text-white bg-warning">⌘</kbd> &nbsp; &nbsp;
                                        <span className='text-xl font-bold'>Clean, Comfortable, and Modern Studios</span>
                                    </div>
                                    <div>
                                        <kbd className="kbd text-white bg-warning">⌘</kbd> &nbsp; &nbsp;
                                        <span className='text-xl font-bold'>Transparent Care and Pricing</span>
                                    </div>
                                </p>
                            </div>
                            <form className="card w-1/2 shadow-xl bg-base-100" onSubmit={handleGetAppoint}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-cyan-600">Patient Name</span>
                                        </label>
                                        <input type="text" placeholder="Patient Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-cyan-600">Disease</span>
                                        </label>
                                        <input type="text" placeholder="Disease" className="input input-bordered w-full" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-cyan-600">Appointment Date</span>
                                        </label>
                                        <input type="datetime-local" className="input input-bordered" required />
                                    </div>

                                    <input className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500
                                     hover:bg-gradient-to-r border-0 mt-5' type="submit"
                                        value="Get Appointment" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div >

            </div>

            <div>
                <HomeServices></HomeServices>
            </div>

            <div className='container mx-auto mt-8'>
                <Gallery></Gallery>
            </div>

        </div>




    );
};

export default Home;