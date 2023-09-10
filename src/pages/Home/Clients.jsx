import { client1, client2, client3, client4, client5, client6, client7, client8 } from "../../assets/image";

const Clients = () => {
    return (
        <section id="clients" className="clients">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Our Clients</h2>
                    <p>Temporibus omnis officia</p>
                </header>

                <div className="clients-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><img src={client1} className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={client2} className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={client3} className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={client4} className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={client5} className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={client6} className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={client7} className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src={client8} className="img-fluid" alt="" /></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>

        </section>
    );
};

export default Clients;