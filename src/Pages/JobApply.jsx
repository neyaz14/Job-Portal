import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';

const JobApply = () => {
    const job = useLoaderData();
    const navigate = useNavigate();
    const { _id, title, company, applicationDeadline, category, requirements, status, hr_email, hr_name, company_logo } = job;
    const { user } = useContext(AuthContext);
    // console.log(user)
    const {id}= useParams();
    // console.log(id, _id);



    const handleSubmitJobApply = e=>{
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success')
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })

    }
    return (
        <div className='my-7 space-y-5'>


            <div>
                
            </div>

            <div className='text-center mx-auto space-y-3'>
                    <h2 className='text-5xl font-bold'>Apply for {title}</h2>
                    <p>Apply for: {company}</p>
                    <p>Deadline: {applicationDeadline}</p>
                </div>




            <div className="card mx-auto bg-base-100 w-full  shrink-0 shadow-2xl">
                <div>
                    <h1 className='text-center font-semibold mt-4 text-xl'>Applicant info</h1>
                </div>
                <form onSubmit={handleSubmitJobApply} className="card-body">
        {/* Linkd in url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Linked In URL</span>
                        </label>
                        <input type="url"
                        name='linkedIn' placeholder="LinkedIn URL" className="input input-bordered" required />
                    </div>
        {/* GitHub url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">GitHub Url</span>
                        </label>
                        <input type="url" 
                        name='github'
                        placeholder="GitHub Url" className="input input-bordered" required />
                        
                    </div>
        {/* \resume Url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" 
                        name='resume'
                        placeholder="Resume Url" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default JobApply;