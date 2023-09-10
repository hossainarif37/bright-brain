import About from "./About";
import Blogs from "./Blogs";
import Clients from "./Clients";
import ContactForm from "./ContactForm";
import Counts from "./Counts";
import FAQ from "./FAQ";
import Features from "./Features";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Services from "./Services/Services";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Values from "./Values/Values";

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