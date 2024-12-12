import { easeOut } from "motion";
import { motion } from "motion/react"
import team1 from '../../assets/Client/team1.jpg'
import team2 from '../../assets/Client/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        animate={{y:[50, 100,50] }}
                        transition={{duration: 13, delay: 2, repeat: Infinity}}
                        src={team1}
                        className="max-w-sm rounded-t-[40px] border-l-[6px] border-b-[6px] border-blue-500 rounded-br-[40px] shadow-2xl" />
                    <motion.img
                        animate={{x:[100, 150,100] }}
                        transition={{duration: 13, delay: 2, repeat: Infinity}}
                        src={team2}
                        className="max-w-sm rounded-t-[40px] border-l-[6px] border-b-[6px] border-blue-500 rounded-br-[40px] shadow-2xl" />
                </div>
                <div className="flex-1">
                    <motion.h1 
                    animate={{x:50}}
                    transition={{ duration: 2, delay: 2, ease: easeOut , repeat: Infinity}}
                    className="text-5xl font-bold">Jobs Latest <motion.span
                    transition={{duration: 1.5, delay: 1, repeat: Infinity}}
                    animate={{color: ['#f27726', '#d1e222','#2891f7']}}
                    >News</motion.span> for you</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;