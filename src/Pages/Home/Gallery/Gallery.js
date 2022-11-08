import React from 'react';
import G1 from '../../../assets/Gallery/G1.jpg';
import G2 from '../../../assets/Gallery/G2.jpg';
import G3 from '../../../assets/Gallery/G3.jpg';
import G4 from '../../../assets/Gallery/G4.jpg';
import G5 from '../../../assets/Gallery/G5.jpg';
import G6 from '../../../assets/Gallery/G6.jpg';

const Gallery = () => {

    return (
        <div>

            <h1 className='text-4xl mb-10 text-center font-bold'>Gallery (Our Activities)</h1>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                <img
                    className="object-cover w-full border" alt='Image1'
                    src={G1}
                />
                <img
                    className="object-cover w-full border" alt='Image2'
                    src={G2}
                />
                <img
                    className="object-cover w-full border" alt='Image3'
                    src={G3}
                />
                <img
                    className="object-cover w-full border" alt='Image4'
                    src={G4}
                />
                <img
                    className="object-cover w-full border" alt='Image5'
                    src={G5}
                />
                <img
                    className="object-cover w-full border" alt='Image6'
                    src={G6}
                />
            </div>

        </div>
    );
};

export default Gallery;