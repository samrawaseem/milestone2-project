import AboutPage from "./about/page";
import ContactPage from "./contact/page";

export default function HomePage() {
  return (
    <section className="container">
      <h1>👋 Hi, I'm Samra Waseem</h1>
      <p className="subtitle">
        A <span className="highlight">Pharmacist</span>, <span className="highlight">Front-End Developer</span>, and <span className="highlight">Lecturer</span>  
        blending healthcare, technology, and education.
      </p>
      <AboutPage />
      <ContactPage />
    </section>
  );
}
