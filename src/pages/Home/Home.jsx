import About from "./About";
import Blogs from "./Blogs";
import Clients from "./Clients";
import ContactForm from "./ContactForm";
import Counts from "./Counts";
import FAQ from "./FAQ/FAQ";
import Features from "./Features";
import Hero from "./Hero";
import Services from "./Services/Services"
import Pricing from "./Pricing/Pricing"
import Team from "./Team";
import Testimonials from "./Testimonials/Testimonials";
import Values from "./Values/Values";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {

    return (
        <>
            <Hero />
            <About />
            <Values />
            <Counts />
            <Features />
            <Services />
            <Pricing />
            <FAQ />
            <Portfolio />
            <Testimonials />
            <Team />
            <Clients />
            <Blogs />
            <ContactForm />
        </>
    );
};

export default Home;