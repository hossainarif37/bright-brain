
const BlogCard = ({ blogInfo }) => {
    const { img, date, title } = blogInfo;
    return (
        <div className="col-lg-4">
            <div className="post-box">
                <div className="post-img"><img src={img} className="img-fluid" alt="" /></div>
                <span className="post-date">{date}</span>
                <h3 className="post-title">{title}</h3>
                <a href="/blog" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
    );
};

export default BlogCard;