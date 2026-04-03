import { motion } from "motion/react";
import { Link } from "react-router";
import Slider from "react-slick";
import { Heart, Users, Award, Sparkles, BookOpen, Brain } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroImages = [
  "https://images.unsplash.com/photo-1763310225537-f7161d5c93e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzE2NzI2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBraWRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcxNjc0Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1586512803683-bdc3f85b15a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwbWF0ZXJpYWxzJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTY3NDI5OXww&ixlib=rb-4.1.0&q=80&w=1080",
];

const drawerImages = [
  '/neuro-physio.jpg',
  '/exciting-news.jpg',
  '/inclusive-school.jpg',
  '/autism-invitation.jpg',
  '/world-autism-day.jpg'
];

const drawerSettings = {
  dots: true,
  infinite: true,
  speed: 800, // Faster transition speed
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500, // Slides automatically every 2.5 seconds
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
        slidesToShow: 1, // Fixes the "three tiny squashed images" issue
        centerMode: false, // Turned off to prevent cropping
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
      {/* Hero Section */}
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

        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                The Willow Village
              </h1>
              <p className="text-2xl md:text-3xl text-[#F4E5C7] mb-4 font-medium italic">
                Shaping Independent Thinkers
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/admissions" className="bg-[#7A9B3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6B7A3A] transition-all">
                  Apply Now
                </Link>
                <Link to="/contact" className="bg-white text-[#7A9B3A] px-8 py-4 rounded-full font-semibold transition-all">
                  Book Assessment
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* CEO Message Section */}
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
              <p style={{color: '#555', lineHeight: '1.8', marginBottom: '20px'}}>I am committed to creating a community where differences are celebrated, kindness is lived every day, and every child truly belongs.</p>
              <div style={{borderLeft: '4px solid #7A9B3A', background: '#F9F5EE', padding: '16px', borderRadius: '0 12px 12px 0', marginBottom: '20px'}}>
                <p style={{color: '#6B7A3A', fontWeight: 'bold', textAlign: 'right', fontSize: '18px'}}>"ہر بچہ ایک روشنی ہے، بس اُسے چمکنے کا موقع چاہیے۔"</p>
                <p style={{color: '#888', fontSize: '13px', fontStyle: 'italic', marginTop: '8px'}}>"Every child is a light — they just need the chance to shine."</p>
              </div>
              <div style={{borderTop: '1px solid #E8DCC4', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{width: '48px', height: '48px', background: '#7A9B3A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>U</div>
                <div>
                  <p style={{fontWeight: 'bold', color: '#6B7A3A'}}>Urooj Shehzad</p>
                  <p style={{fontSize: '13px', color: '#A67C52'}}>CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Announcement Slider Section */}
      <section className="py-12 bg-[#fdfdf7] border-y border-[#e8e8d5]">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#6b7c3f]">Latest Announcements</h3>
            <div className="h-1 flex-grow mx-4 bg-[#6b7c3f]/10 rounded-full" />
          </div>

          <div className="announcement-drawer">
            <Slider {...drawerSettings}>
              {drawerImages.map((src, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex items-center justify-center">
                    <img 
                      src={src} 
                      alt={`Announcement ${index + 1}`} 
                      className="w-full h-auto max-h-[500px] md:max-h-[600px] object-contain" 
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6B7A3A] mb-12">
            Why Choose The Willow Village?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-[#E8DCC4]">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}20` }}>
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#6B7A3A] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}