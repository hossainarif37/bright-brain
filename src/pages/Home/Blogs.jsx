import { blog1, blog2, blog3 } from "../../assets/image";

const Blogs = () => {
    return (
        <section id="recent-blog-posts" className="recent-blog-posts">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Blog</h2>
                    <p>Recent posts form our Blog</p>
                </header>

                <div className="row">

                    <div className="col-lg-4">
                        <div className="post-box">
                            <div className="post-img"><img src={blog1} className="img-fluid" alt="" /></div>
                            <span className="post-date">Tue, September 15</span>
                            <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
                            <a href="/blog" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="post-box">
                            <div className="post-img"><img src={blog2} className="img-fluid" alt="" /></div>
                            <span className="post-date">Fri, August 28</span>
                            <h3 className="post-title">Et repellendus molestiae qui est sed omnis voluptates magnam</h3>
                            <a href="/blog" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="post-box">
                            <div className="post-img"><img src={blog3} className="img-fluid" alt="" /></div>
                            <span className="post-date">Mon, July 11</span>
                            <h3 className="post-title">Quia assumenda est et veritatis aut quae</h3>
                            <a href="/blog" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                </div>

            </div>

        </section >
    );
};

export default Blogs;