import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";

const AddJob = () => {
    const {user} = useAuth();
    const handleAddJob = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData)
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split("\n");
        newJob.description = newJob.description.split('\n');
        // console.log(newJob)
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        // console.log(salaryRange)
    }
    return (
        <div>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                </div>

                {/* Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                </div>

                {/* Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">application Deadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" placeholder="applicationDeadline" className="input input-bordered" required />
                </div>

                {/* Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Filed</span>
                    </label>
                    <select defaultValue='Pick a job type' className="select select-ghost w-full max-w-xs" name="jobFiled">
                        <option disabled>Pick a job type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-Time</option>
                    </select>
                </div>
                {/* Filed */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue='Pick A Job Filed' className="select select-ghost w-full max-w-xs" name="jobType">
                        <option disabled>Pick a job filed</option>
                        <option>Full Engineer</option>
                        <option>Developer</option>
                        <option>Programmer</option>
                        <option>Marketing</option>
                    </select>
                </div>

                {/* Salary Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div>
                        <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div>
                        <select defaultValue='Pick A Currency' className="select select-ghost w-full max-w-xs" name="currency">
                            <option disabled>Pick a Currency</option>
                            <option>Bdt</option>
                            <option>Usdt</option>
                            <option>inr</option>
                            <option>Rupee</option>
                        </select>
                    </div>
                </div>

                {/* Company */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
                </div>

                {/* Company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company logo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Company Logo" className="input input-bordered" required />
                </div>

                {/* Company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="name" placeholder="HR Name" className="input input-bordered" required />
                </div>

                {/* Company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                </div>

                {/* Company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="requirements" placeholder="Requirements Please One Inset and enter a new line" required></textarea>
                </div>

                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" placeholder="Description" required></textarea>
                </div>
                {/* Submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;