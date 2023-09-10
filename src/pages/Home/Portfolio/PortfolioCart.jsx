
const PortfolioCart = ({ portfolioInfo }) => {
    const { img, title, subTitle, portfolioClass } = portfolioInfo;
    return (
        <div className={`col-lg-4 col-md-6 portfolio-item ${portfolioClass}`}>
            <div className="portfolio-wrap">
                <img src={img} className="img-fluid" alt="" />
                <div className="portfolio-info">
                    <h4>{title}</h4>
                    <p>{subTitle}</p>
                    <div className="portfolio-links">
                        <a href={img} data-gallery="portfolioGallery" className="portfokio-lightbox" title={title}><i className="bi bi-plus"></i></a>
                        <a href="/portfolio" title="More Details"><i className="bi bi-link"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCart;