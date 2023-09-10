import { portfolioData } from "../../../assets/data";
import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8, portfolio9 } from "../../../assets/image";
import PortfolioCart from "./PortfolioCart";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Portfolio</h2>
                    <p>Check our latest work</p>
                </header>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    {
                        portfolioData.map((portfolioInfo, i) => <PortfolioCart key={i} portfolioInfo={portfolioInfo} />)
                    }

                </div>

            </div>

        </section>
    );
};

export default Portfolio;