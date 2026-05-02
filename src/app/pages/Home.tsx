import { motion } from "motion/react";
import { Link } from "react-router";
import Slider from "react-slick";
import { Heart, Users, Award, Sparkles, BookOpen, Brain, HandHeart, School, Ribbon, GraduationCap, BriefcaseBusiness, BadgeCheck } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const heroImages = [
  "banner1.jpeg",
  "banner2.jpeg",
  "banner3.jpeg",
];
// Add these to your image array or a new one
const drawerImages = [
  '/neuro-physio.jpg',
  '/exciting-news.jpg',
  '/inclusive-school.jpg',
  '/autism-invitation.jpg',
  '/world-autism-day.jpg'
];
const drawerSettings = {
  dots: false,
  infinite: true,
  speed: 600, // Faster slide animation
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // Faster auto-slide
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { 
        slidesToShow: 2 
      }
    },
    {
      breakpoint: 640,
      settings: { 
        slidesToShow: 1, // Strictly one slide
        slidesToScroll: 1,
        centerMode: false, // Disabling this prevents the "squashed" look
        arrows: false
      }
    }
  ]
};
const features = [
  {
    icon: Heart,
    title: "Safe & Nurturing Environment",
    description: "A peaceful, inclusive space where every child feels valued and protected",
    color: "#7A9B3A"
  },
  {
    icon: Users,
    title: "Individual Attention",
    description: "Small class sizes ensure personalized care and focused learning",
    color: "#A67C52"
  },
  {
    icon: Award,
    title: "Professional Support",
    description: "Trained Montessori teachers and special education professionals",
    color: "#F4C430"
  },
  {
    icon: Sparkles,
    title: "Small Class Size",
    description: "Limited seats for quality education and meaningful interactions",
    color: "#8BB8E8"
  },
  {
    icon: Brain,
    title: "Therapy / Support Sessions",
    description: "Specialized programs including speech, occupational, and behavioral therapy",
    color: "#E8A87C"
  },
];

const signaturePrograms = [
  {
    icon: School,
    title: "Care Bridge Initiative",
    description: "We collaborate with mainstream schools to make classrooms more inclusive for children with special needs.",
    color: "#7A9B3A",
    points: [
      "Teacher guidance for inclusive classroom strategies",
      "Parent meetings to build practical home-school support",
      "Child observation, recommendations, and follow-up plans",
      "Awareness sessions that encourage empathy and acceptance"
    ],
    link: "/programs#care-bridge"
  },
  {
    icon: Ribbon,
    title: "Aanchal Circle",
    description: "Inspired by a mother's protective care, this circle gives mothers a safe space for emotional support and mental health.",
    color: "#A67C52",
    points: [
      "Support circles for mothers and caregivers",
      "Mental health guidance in a warm, private environment",
      "Stress management, self-care, and confidence building",
      "Professional listening support for families"
    ],
    link: "/programs#aanchal-circle"
  },
  {
    icon: HandHeart,
    title: "Together We Care",
    description: "Our community service program provides free workshops and camps for parents who want to support and empower their children.",
    color: "#8BB8E8",
    points: [
      "Free parent workshops and awareness camps",
      "Guidance on child development and behavior support",
      "Family empowerment through practical tools",
      "Community outreach led by The Willow Village team"
    ],
    link: "/programs#together-we-care"
  }
];

const internshipHighlights = [
  "Paid 3-month internship program",
  "Opportunities across education, therapy, administration, media, and community outreach",
  "Hands-on experience with a leading inclusive school environment",
  "Certificate provided after successful completion"
];

const whatsappInternshipLink =
  "https://wa.me/923220277871?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20apply%20for%20the%203-month%20paid%20internship%20program%20at%20The%20Willow%20Village.";

const afterSchoolTherapies = [
  {
    icon: Brain,
    title: "Behavioral Therapy",
    description: "Support for attention, emotional regulation, behavior routines, social skills, and confidence."
  },
  {
    icon: BookOpen,
    title: "Remedial Therapy",
    description: "Academic support for reading, writing, concepts, learning gaps, and school readiness."
  },
  {
    icon: Users,
    title: "Physio Support",
    description: "Movement-based support that helps children improve strength, posture, balance, and coordination."
  },
  {
    icon: Heart,
    title: "Speech Therapy",
    description: "Language, communication, articulation, expression, and confidence-building support."
  }
];

export function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <div className="pt-16">
    <div className="pt-4">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Slider {...sliderSettings} className="h-full">
          {heroImages.map((image, index) => (
            <div key={index} className="relative h-[600px] md:h-[700px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              >
                The Willow Village
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl text-[#F4E5C7] mb-4 font-medium italic"
              >
                Shaping Independent Thinkers
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              >
                Montessori + Therapy Session
                <br />
                <span className="text-[#E8DCC4]">Where Learning Meets Individual Care</span>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/admissions"
                  className="bg-[#7A9B3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6B7A3A] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-[#7A9B3A] px-8 py-4 rounded-full font-semibold hover:bg-[#E8DCC4] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Assessment
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Short Intro */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A] mb-6">
              Welcome to The Willow Village
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The Willow Village is a nurturing Montessori environment designed for early learners and children who require additional academic support. We believe every child grows at their own pace, and we are committed to providing a safe, inclusive space where individual potential is celebrated and nurtured with care.
            </p>
          </motion.div>
        </div>
      </section>
      {/* CEO Message */}
<section style={{padding: '60px 20px', background: '#F9F5EE'}}>
  <div style={{maxWidth: '900px', margin: '0 auto'}}>
    <p style={{textAlign: 'center', color: '#6B7A3A', fontWeight: 'bold', fontSize: '14px', marginBottom: '8px'}}>A Message from Our Founder</p>
    <h2 style={{textAlign: 'center', color: '#6B7A3A', fontSize: '32px', fontWeight: 'bold', marginBottom: '40px'}}>CEO & Founder's Message</h2>
    <div style={{background: 'white', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexWrap: 'wrap'}}>
      <div style={{flex: '1', minWidth: '300px', position: 'relative'}}>
        <img src="/ceo-urooj.jpeg" alt="Urooj Shehzad" style={{width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', objectPosition: 'top'}} />
      </div>
      <div style={{flex: '1', minWidth: '300px', padding: '40px'}}>
        <p style={{fontSize: '80px', color: '#7A9B3A', opacity: 0.3, lineHeight: 1, marginBottom: '10px'}}>"</p>
        <p style={{color: '#555', lineHeight: '1.8', marginBottom: '20px'}}>I am committed to creating a community where differences are celebrated, kindness is lived every day, and every child truly belongs. Inclusion is not just my mission — it is my heart.</p>
        <div style={{borderLeft: '4px solid #7A9B3A', paddingLeft: '16px', marginBottom: '20px', background: '#F9F5EE', padding: '16px', borderRadius: '0 12px 12px 0'}}>
          <p style={{color: '#6B7A3A', fontWeight: 'bold', textAlign: 'right', direction: 'rtl', fontSize: '18px'}}>"ہر بچہ ایک روشنی ہے، بس اُسے چمکنے کا موقع چاہیے۔"</p>
          <p style={{color: '#888', fontSize: '13px', fontStyle: 'italic', marginTop: '8px'}}>"Every child is a light — they just need the chance to shine."</p>
        </div>
        <p style={{color: '#555', lineHeight: '1.8', marginBottom: '24px'}}>Together, we are building a place where every child can shine. 🌿</p>
        <div style={{borderTop: '1px solid #E8DCC4', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
          <div style={{width: '48px', height: '48px', background: '#7A9B3A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '18px'}}>U</div>
          <div>
            <p style={{fontWeight: 'bold', color: '#6B7A3A'}}>Urooj Shehzad</p>
            <p style={{fontSize: '13px', color: '#A67C52'}}>CEO & Founder, The Willow Village</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  


{/* Auto-Sliding Announcement Drawer */}
<section className="py-12 bg-[#fdfdf7] border-y border-[#e8e8d5]">
  <div className="container mx-auto px-4">
    <div className="mb-8 flex items-center justify-between">
      <h3 className="text-2xl font-bold text-[#6b7c3f]">Latest Announcements</h3>
      <div className="h-1 flex-grow mx-4 bg-[#6b7c3f]/10 rounded-full" />
    </div>

    <div className="announcement-drawer">
      <Slider {...drawerSettings}>
        {drawerImages.map((src, index) => (
          <div key={index} className="px-3">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-shadow hover:shadow-xl"
            >
              <img 
  src={src} 
  alt={`School Update ${index + 1}`} 
  loading="lazy"
  decoding="async"
  className="w-full h-auto object-contain" // Removed aspect ratio to let image dictate height
/>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#6B7A3A] mb-12"
          >
            Why Choose The Willow Village?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-[#F9F7F3] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#E8DCC4] hover:scale-105"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#6B7A3A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#6B7A3A] mb-4"
          >
            Our Programs
          </motion.h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Purpose-led programs for children, mothers, schools, and the wider community.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {signaturePrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-[#E8DCC4] hover:shadow-2xl transition-all"
              >
                <div className="p-6 text-white" style={{ backgroundColor: program.color }}>
                  <program.icon className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold leading-tight">{program.title}</h3>
                </div>
                <div className="p-7">
                  <p className="text-gray-700 leading-relaxed mb-5">{program.description}</p>
                  <ul className="space-y-3 mb-6">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-gray-700">
                        <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: program.color }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={program.link}
                    className="inline-block text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                    style={{ backgroundColor: program.color }}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* After School Program */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52] font-bold mb-3">Ages 4 to 15 Years</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#6B7A3A] mb-4">After School Program</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A supportive after-school program for children who need extra therapeutic care, learning support, and confidence-building after regular school hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#6B7A3A] to-[#A67C52] rounded-3xl p-8 md:p-10 text-white shadow-xl"
            >
              <Sparkles className="w-14 h-14 mb-6" />
              <h3 className="text-3xl font-bold mb-5">Care Beyond School Hours</h3>
              <p className="text-white/90 leading-relaxed text-lg mb-6">
                Children receive targeted support in a calm, nurturing environment where therapists and educators work on each child's individual goals.
              </p>
              <div className="bg-white/15 rounded-2xl p-5">
                <p className="font-bold mb-2">Best for children who need:</p>
                <p className="text-white/90">Behavior support, academic help, speech development, physical support, social skills, and structured therapeutic guidance.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {afterSchoolTherapies.map((therapy, index) => (
                <motion.div
                  key={therapy.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#F9F7F3] rounded-2xl p-6 border border-[#E8DCC4] shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#7A9B3A]/15 rounded-full flex items-center justify-center mb-4">
                    <therapy.icon className="w-7 h-7 text-[#7A9B3A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#6B7A3A] mb-3">{therapy.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{therapy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#6B7A3A] via-[#7A9B3A] to-[#A67C52] rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-5">
                  <GraduationCap className="w-9 h-9" />
                </div>
                <p className="uppercase tracking-[0.2em] text-sm text-white/75 mb-3">Career Growth Program</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Paid Internship Program</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  The Willow Village offers a 3-month paid internship program for passionate learners who want real experience in a caring, professional school environment.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-gray-700 shadow-xl">
                <h3 className="text-2xl font-bold text-[#6B7A3A] mb-5 flex items-center gap-3">
                  <BriefcaseBusiness className="w-7 h-7" />
                  Open across multiple domains
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {internshipHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-[#F9F7F3] rounded-xl p-4">
                      <BadgeCheck className="w-5 h-5 text-[#7A9B3A] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={whatsappInternshipLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-[#7A9B3A] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#6B7A3A] transition-all"
                >
                  Apply for Internship
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#7A9B3A] to-[#6B7A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Give Your Child a Bright Start!
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Limited seats available. Secure your child's place today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="bg-white text-[#7A9B3A] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#E8DCC4] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Enroll Today
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#7A9B3A] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Schedule Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
  );
}

