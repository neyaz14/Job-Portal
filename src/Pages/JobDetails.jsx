import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaIndustry, FaDollarSign, FaSuitcase, FaUserTie, FaRegCalendarAlt, FaMapMarkerAlt, FaRegClock, FaEdit } from 'react-icons/fa';

const JobDetails = () => {
    const job = useLoaderData();
    // console.log(job);
    const { _id, title, company, applicationDeadline, location, jobType, category, salaryRange, description, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;
    // const deadLine = new Date(applicationDeadline);
    return (
        <div className='w-10/12 mx-auto space-y-3'>

            <div className='m-10 space-y-3 flex mx-auto text-center'>

                <div className='flex-1 space-y-3'>
                    <h2 className='text-5xl font-bold'>Job details for {title}</h2>
                    <p>Apply for: {company}</p>
                    <p>Deadline: {applicationDeadline}</p>
                </div>


            </div>

            <div>
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <div className="mb-6"> <h2 className="text-2xl font-bold mb-4 flex items-center"> <FaEdit className="mr-2" /> Employment Information </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* <div className='flex justify-center'>
                                <figure>
                                    <img src={company_logo} alt="" />
                                </figure>
                            </div> */}

                            <div className="flex items-center">
                                <FaIndustry className="mr-2 text-gray-600" />
                                <p><strong>Industry:</strong>{company}</p>
                            </div>

                            <div className="flex items-center">
                                <FaDollarSign className="mr-2 text-gray-600" /> <p><strong>Salary:</strong> {salaryRange.min} - {salaryRange.max}</p>
                            </div>

                            <div className="flex items-center">
                                <FaSuitcase className="mr-2 text-gray-600" /> <p><strong>Job type:</strong> {jobType}</p>
                            </div>

                            <div className="flex items-center">
                                <FaUserTie className="mr-2 text-gray-600" /> <p><strong>Job level:</strong> Experienced (Non - Manager)</p>
                            </div>

                            {/* <div className="flex items-center"> <FaRegCalendarAlt className="mr-2 text-gray-600" /> <p><strong>Experience:</strong> 1 - 2 years</p>
                            </div> */}

                            {/* <div className="flex items-center"> <FaRegClock className="mr-2 text-gray-600" /> <p><strong>Updated:</strong> 10/07/2022</p>
                            </div> */}

                            <div className="flex items-center">         <FaRegCalendarAlt className="mr-2 text-gray-600" /> <p><strong>Deadline:</strong> {applicationDeadline}</p>
                            </div>

                            {/* <div className="flex items-center"> <FaMapMarkerAlt className="mr-2 text-gray-600" /> <p><strong>Location:</strong> Dallas, Texas Remote Friendly</p>
                            </div> */}

                        </div>

                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <FaEdit className="mr-2" /> Welcome to {company} </h2>
                        <p className="mb-4">
                            {description}
                        </p>
                        <div className='flex justify-center'>
                            <Link to={`/jobApply/${_id}`}>
                                <button className='btn btn-wide  btn-primary '>Apply Now</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;