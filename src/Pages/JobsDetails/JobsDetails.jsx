import { Link, useLoaderData } from "react-router-dom";

const JobsDetails = () => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_name,
        company_logo
    } = useLoaderData();
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-6">
                    <img src={company_logo} alt={`${company} logo`} className="w-16 h-16 rounded" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                        <p className="text-gray-600">{company}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Job Details</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li><strong>Location:</strong> {location}</li>
                        <li><strong>Job Type:</strong> {jobType}</li>
                        <li><strong>Category:</strong> {category}</li>
                        <li><strong>Deadline:</strong> {applicationDeadline}</li>
                        <li><strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</li>
                        <li><strong>Status:</strong> {status}</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Description</h2>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Requirements</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                        {requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Responsibilities</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                        {responsibilities.map((res, index) => (
                            <li key={index}>{res}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                    <div>
                        <p className="text-sm text-gray-600">For inquiries, contact:</p>
                        <p className="text-sm font-semibold text-gray-800">{hr_name}</p>
                    </div>

                    <Link to={`/jobApply/${_id}`}><button
                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Apply Now
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobsDetails;