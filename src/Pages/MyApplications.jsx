import React, { useEffect, useState } from 'react';

import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import axios from 'axios';
import { withOptions } from 'tailwindcss/plugin';

const MyApplications = () => {
    // const { user } = useAuth();
    const {user} = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

// we will use axios isnted of fetch 
        // fetch(`http://localhost:5000/job-applications?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        axios.get(`http://localhost:5000/job-applications?email=${user.email}`, {withCredentials:true})
        .then(res=> console.log(setJobs(res.data)))

    }, [user.email])

    return (
        <div>
            <h2 className="text-3xl">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Job</th>
                            
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                     {job.applicant_email}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job.title}</span>
                                </td>
                                
                                <th>
                                    <button className="btn btn-ghost btn-xs">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;