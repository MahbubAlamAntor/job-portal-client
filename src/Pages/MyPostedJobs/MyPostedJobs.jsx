import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Application Count</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        jobs.map((job, index) => <tr key={job._id}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.name}</td>
                            <td>{job.applicationCount}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPostedJobs;