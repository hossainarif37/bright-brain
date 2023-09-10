import { countData } from "../../assets/data";
import CountCard from "./Counts/CountCard";

const Counts = () => {
    return (
        <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">

                    {countData.map((countInfo, i) => <CountCard key={i} countInfo={countInfo} />)}
                </div>

            </div>
        </section>
    );
};

export default Counts;