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
            className="text-3xl md:text-4xl font-bold text-center text-[#6B7A3A] mb-12"
          >
            Our Programs
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Montessori Program */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-[#E8DCC4] hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-r from-[#7A9B3A] to-[#A67C52] p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  🌸 Montessori Program
                </h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-4 font-semibold">Age group: 2.5 – 6 years</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#7A9B3A] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Practical life activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#7A9B3A] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Sensory learning experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#7A9B3A] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Language & numeracy development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#7A9B3A] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Social skills building</span>
                  </li>
                </ul>
                <Link
                  to="/programs"
                  className="mt-6 inline-block bg-[#7A9B3A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6B7A3A] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Therapy Session*/}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-[#E8DCC4] hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-r from-[#8BB8E8] to-[#7A9B3A] p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  🌿 Therapy Session
                </h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-4 font-semibold">For children with:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#8BB8E8] rounded-full"></span>
                    Learning difficulties
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#8BB8E8] rounded-full"></span>
                    Slow learners
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#8BB8E8] rounded-full"></span>
                    ADHD
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#8BB8E8] rounded-full"></span>
                    Mild autism
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#8BB8E8] rounded-full"></span>
                    Speech delay
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#8BB8E8] rounded-full"></span>
                    Down syndrome
                  </li>
                </ul>
                <div className="bg-[#F9F7F3] p-4 rounded-xl mb-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Individual Learning Plans (ILP)</li>
                    <li>✓ One-on-one sessions</li>
                    <li>✓ Small group therapy</li>
                    <li>✓ Trained educators</li>
                  </ul>
                </div>
                <Link
                  to="/therapy"
                  className="inline-block bg-[#8BB8E8] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7A9B3A] transition-all"
                >
                  Explore Support
                </Link>
              </div>
            </motion.div>
          </div>
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
  );
}
