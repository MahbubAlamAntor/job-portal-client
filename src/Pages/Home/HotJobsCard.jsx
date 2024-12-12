import { FaDollarSign } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
    const { _id,title, location, salaryRange, description, requirements, company_logo, company } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="flex gap-2 p-2">
                <figure>
                    <img
                        className="w-16"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h2 className="text-2xl">{company}</h2>
                    <p className="flex gap-1 items-center"><MdLocationPin></MdLocationPin> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {requirements?.map((skills, idx) => <p className="p-2 rounded-xl text-center bg-blue-100/50 hover:text-blue-500 " key={idx}>{skills}</p>)}
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className="flex items-center">Salary: <FaDollarSign></FaDollarSign> {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}</p>
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;