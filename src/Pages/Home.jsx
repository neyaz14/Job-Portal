import React from 'react';
import Banner from '../HomeComponents/Banner';
import JobsSectins from '../HomeComponents/JobsSectins';

const Home = () => {
    return (
        <div className='mx-auto '>
            <Banner></Banner>
            <JobsSectins></JobsSectins>
        </div>
    );
};

export default Home;