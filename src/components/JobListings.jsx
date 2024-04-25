import React from 'react';

const JobListings = () => {
  return (
    <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                Browse Jobs
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white rounded-xl shadow-md relative'>
                    <div className='p-4'>
                        <div className='mb-6'>
                            <div className='text-gray-600 my-2'>Full-Time</div>
                            <h3 className='text-xl font-bold'>Senior React Developer</h3>
                        </div>
                        <div>
                            We are seeking a talented frontend developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS and Javascript...
                        </div>
                        <h3>$70 - $80 / Year</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default JobListings