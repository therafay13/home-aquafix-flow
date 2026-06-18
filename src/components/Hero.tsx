import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import heroGrid1 from "@/assets/hero-grid-1.jpg";
import heroGrid2 from "@/assets/hero-grid-2.jpg";
import heroGrid3 from "@/assets/hero-grid-3.jpg";
import heroGrid4 from "@/assets/hero-grid-4.jpg";
import heroGrid5 from "@/assets/hero-grid-5.jpg";
import heroGrid6 from "@/assets/hero-grid-6.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const FlipButton = ({
  children,
  variant = "light"
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) => {
  const bgClass = variant === "light"
    ? "bg-tertiary text-primary hover:bg-tertiary/90"
    : "bg-primary text-white border border-accent text-accent";
  return (
    <Button size="default" className={`group relative overflow-hidden font-semibold rounded-full px-6 ${bgClass}`}>
      <span className="flex items-center gap-2 font-bold transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        {children}
      </span>
      <span className="absolute inset-0 flex font-bold items-center justify-center gap-2 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        {children}
      </span>
    </Button>
  );
};
const Hero = () => {
  const leftColumnImages = [{
    src: heroGrid1,
    alt: "Spray painter applying matte finish to kitchen cabinet door",
    className: "rounded-2xl"
  }, {
    src: heroGrid3,
    alt: "Spray painter in PPE inside spray booth",
    className: "rounded-full"
  }, {
    src: heroGrid5,
    alt: "HVLP spray gun atomising ember-coloured paint",
    className: "rounded-2xl"
  }];
  const rightColumnImages = [{
    src: heroGrid2,
    alt: "Freshly resprayed anthracite uPVC window frame",
    className: "rounded-full"
  }, {
    src: heroGrid4,
    alt: "Resprayed charcoal garage door on a UK home",
    className: "rounded-2xl"
  }, {
    src: heroGrid6,
    alt: "Painter masking uPVC fascias and soffits on-site",
    className: "rounded-full"
  }];
  return <section className="relative bg-primary overflow-hidden">
    {/* Content */}
    <div className="container-custom section-padding relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 relative items-center min-h-[calc(100vh-8rem)]">
        {/* Left Content */}
        <div className="max-w-7xl lg:min-w-[700px] relative z-10">
          <div className="animate-fade-up">
            <h1 className="text-white font-bold mb-6 text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-[800px] text-left xl:text-7xl">
              Spray Painting Specialists
              <br />
              Cheshire &amp; Ellesmere Port,
              <br />
              <span className="text-tertiary">Reborn, Not Replaced.</span>
            </h1>
          </div>

          <p style={{
            animationDelay: "0.1s"
          }} className="text-white text-lg mb-8 max-w-[800px] animate-fade-up md:text-base">
            Kitchen resprays, uPVC windows and doors, fascias, garage doors and commercial
            coatings — flawless factory-grade finishes applied on-site or in our workshop
            for a fraction of the cost of replacement.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
            <Link to="/quote">
              <FlipButton>Get A Quote</FlipButton>
            </Link>
            <Link to="/services">
              <FlipButton variant="dark">
                See All Services
              </FlipButton>
            </Link>
          </div>

          {/* Client Stats */}
          <div className="flex items-center gap-4 animate-fade-up" style={{
            animationDelay: "0.3s"
          }}>
            <div className="flex items-center">
              <div className="flex -space-x-3">
                <img src={avatar1} alt="Client 1" className="w-12 h-12 rounded-full border-2 border-secondary object-cover" />
                <img src={avatar2} alt="Client 2" className="w-12 h-12 rounded-full border-2 border-secondary object-cover" />
                <img src={avatar3} alt="Client 3" className="w-12 h-12 rounded-full border-2 border-secondary object-cover" />
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-primary text-sm font-bold border-2 border-secondary">
                  1.2k
                </div>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-xl">1,200+</p>
              <p className="text-white/60 text-sm">Projects Sprayed Across Cheshire</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image Grid with Marquee */}
        <div style={{
          width: '432px'
        }} className="hidden lg:flex gap-7 justify-end absolute right-0 top-0 bottom-0 overflow-hidden z-0">
          {/* Left Column - slides down continuously */}
          <div className="flex flex-col gap-4 animate-marquee-down">
            {[...leftColumnImages, ...leftColumnImages].map((image, index) => <div key={index} className="overflow-hidden flex-shrink-0">
              <img src={image.src} alt={image.alt} className={`w-50 h-50 object-cover ${image.className}`} />
            </div>)}
          </div>

          {/* Right Column - slides up continuously */}
          <div className="flex flex-col gap-4 animate-marquee-up mt-8">
            {[...rightColumnImages, ...rightColumnImages].map((image, index) => <div key={index} className="overflow-hidden flex-shrink-0">
              <img src={image.src} alt={image.alt} className={`w-50 h-50 object-cover ${image.className}`} />
            </div>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;