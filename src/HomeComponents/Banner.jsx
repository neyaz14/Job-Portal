import React from 'react';
import { motion } from "motion/react";
import coadingTeam from '../assets/coading-team.jpg'
import coadingTeam2 from '../assets/coading-team2.jpg'
const Banner = () => {
    return (
        <div className='mx-auto '>
            <div className="hero bg-base-200 min-h-screen mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='flex-1'>
                        <motion.img
                            // whileHover={{ scale: 1.1 }}
                            // initial={{ scale: 1 }}
                            animate={{ y: [50, 100, 50] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            src={coadingTeam}
                            className="max-w-sm  mx-auto rounded-r-2xl shadow-3xl rounded-b-3xl border-l-4 border-blue-950" />
                        <motion.img
                            // whileHover={{ scale: 1.1 }}
                            // initial={{ scale: 1 }}
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 6, delay: 3, repeat: Infinity }}
                            src={coadingTeam2}
                            className="max-w-[280px]  mx-auto rounded-r-2xl shadow-3xl rounded-b-3xl border-l-4 border-blue-950" />
                    </div>
                    <div className='flex-1 ml-5'>
                        <motion.h1
                            animate={{

                                scale: 1,
                                transition: { duration: 1.9 }
                            }}
                            className="text-5xl ml-3 font-bold">Lates Job  News!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary">Get Started</motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;