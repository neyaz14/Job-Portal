import React, { useEffect, useState } from 'react';
import JobsCard from './JobsCard';
import { motion } from "motion/react"
const JobsSectins = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])
    return (
        <div className='my-6 space-y-4'>
            <div>
                <motion.h1 
                className='text-5xl font-bold text-center my-4'
                // initial={{ scale: 0 }} 
                // animate={{ scale: 1.5 ,
                //     transition: { duration: 2 }
                // }}
                >
                    Jobs of the day
                    </motion.h1>
                <p className='font-medium opacity-75  text-xl text-center '>Search and connect with the right candidates faster.</p>
            </div>
            <div>
                {/* jobs category */}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default JobsSectins;