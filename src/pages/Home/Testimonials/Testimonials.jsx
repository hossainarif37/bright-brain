import { testimonialsData } from "../../../assets/data";
import TestimonialCart from "./TestimonialCart";

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Testimonials</h2>
                    <p>What they are saying about us</p>
                </header>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
                    <div className="swiper-wrapper">

                        {
                            testimonialsData.map((testimonialInfo, i) => <TestimonialCart key={i} testimonialInfo={testimonialInfo} />)
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>

        </section>
    );
};

export default Testimonials;