import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import FadeIn from "@/components/FadeIn";

const testimonials = [{
  name: "Sarah J.",
  location: "Chester",
  text: "Our kitchen looks like a brand-new installation for a fraction of the cost. The team were spotless, on time and the finish is unbelievable.",
  avatar: avatar1
}, {
  name: "Mark D.",
  location: "Ellesmere Port",
  text: "Had the whole front of the house uPVC sprayed anthracite grey. Done in a day, no mess, and you genuinely can't tell it wasn't factory.",
  avatar: avatar2
}, {
  name: "Helen R.",
  location: "Neston",
  text: "Fitted wardrobes resprayed in matte black — the bedroom feels completely transformed. Polite, tidy and brilliant attention to detail.",
  avatar: avatar3
}, {
  name: "Tom B.",
  location: "Wirral",
  text: "Garage door looked twenty years old; now it looks better than the day it was fitted. Booked them again for the soffits already.",
  avatar: avatar1
}, {
  name: "Pinnacle Retail Ltd.",
  location: "Cheshire Oaks",
  text: "Resprayed two shop fronts out of hours so we didn't lose a single trading hour. Faultless from quote to completion.",
  avatar: avatar2
}];

const TestimonialCard = ({
  name,
  location,
  text,
  avatar
}: typeof testimonials[0]) => <div className="bg-white rounded-2xl p-6 min-w-[320px] max-w-[320px] flex-shrink-0">
    <div className="flex items-center gap-3 mb-4">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h6 className="font-semibold text-base text-secondary">{name}</h6>
        <p className="text-muted-foreground text-sm">{location}</p>
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
  </div>;

const Testimonials = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  return <section className="py-20 lg:py-32 bg-primary overflow-hidden">
    <div className="container-custom section-padding">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
        <div>
          <FadeIn>
            <p className="text-tertiary font-medium mb-4 uppercase tracking-widest text-sm">Testimonials</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-white">
              What Cheshire
              <br />
              Customers Say
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <p className="text-white max-w-xl mt-6 lg:mt-0">
            Homeowners and businesses across Cheshire, Wirral and Ellesmere Port choose us because we treat every spray job — large or small — with the same workshop-grade care.
          </p>
        </FadeIn>
      </div>
    </div>

    {/* Marquee Row 1 - Slides Left */}
    <FadeIn delay={300}>
      <div className="relative mb-4">
        <div className="flex gap-4 animate-marquee-left">
          {duplicatedTestimonials.map((testimonial, index) => <TestimonialCard key={`row1-${index}`} {...testimonial} />)}
        </div>
      </div>
    </FadeIn>

    {/* Marquee Row 2 - Slides Right */}
    <FadeIn delay={400}>
      <div className="relative">
        <div className="flex gap-4 animate-marquee-right">
          {duplicatedTestimonials.map((testimonial, index) => <TestimonialCard key={`row2-${index}`} {...testimonial} />)}
        </div>
      </div>
    </FadeIn>
  </section>;
};
export default Testimonials;