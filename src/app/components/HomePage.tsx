import { motion } from 'motion/react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import { Leaf, Users, Heart, Shield, BookOpen, GraduationCap, Phone, Mail } from 'lucide-react';

export default function HomePage() {
  const heroImages = [
    'https://images.unsplash.com/photo-1763310225537-f7161d5c93e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzE2NzI2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758598737882-4d6d61886bde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWR5aW5nJTIwdG9nZXRoZXIlMjBoYXBweXxlbnwxfHx8fDE3NzE1NzY1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1661264052465-91de8e0d0449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsJTIwbmVlZHMlMjBjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHN1cHBvcnR8ZW58MXx8fHwxNzcxNjc0MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1553031883-6eb16f86ac62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMGVkdWNhdGlvbmFsJTIwdG95c3xlbnwxfHx8fDE3NzE1OTQ0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'ease-in-out',
  };

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Safe & Nurturing Environment',
      description: 'A peaceful, inclusive space where every child feels valued and secure',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Individual Attention',
      description: 'Personalized learning plans tailored to each child\'s unique needs',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Professional Support',
      description: 'Trained Montessori teachers and special education specialists',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Small Class Size',
      description: 'Limited seats to ensure quality education and personal care',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Therapy Sessions',
      description: 'Specialized therapy services for holistic development',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Slider {...sliderSettings}>
          {heroImages.map((image, index) => (
            <div key={index} className="relative h-[600px] md:h-[700px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>
            </div>
          ))}
        </Slider>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-2xl text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                The Willow Village
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl mb-2 text-[#f5dc82] italic"
              >
                Shaping Independent Thinkers
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg md:text-xl mb-8"
              >
                Inclusive Montessori + Therapy Center
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-base md:text-lg mb-8 max-w-xl leading-relaxed"
              >
                Nurturing every child at their own pace in a safe, inclusive environment designed for early learners and children who require additional support.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/admissions"
                  className="bg-[#6b7c3f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5a6835] transition-all hover:scale-105 shadow-lg"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-[#6b7c3f] px-8 py-3 rounded-full font-semibold hover:bg-[#f5f5dc] transition-all hover:scale-105 shadow-lg"
                >
                  Book Assessment
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Short Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6b7c3f] mb-6">
              Welcome to The Willow Village
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Willow Village is a nurturing Montessori environment designed for early learners and children who require additional academic support. We believe every child grows at their own pace, and our dedicated team provides individualized care and education to help each child reach their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-[#f5f5dc] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-[#6b7c3f] rounded-full flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#6b7c3f] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#6b7c3f] text-center mb-12"
          >
            Our Programs
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Montessori Program */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#e8f5e9] to-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#6b7c3f] rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#6b7c3f]">
                  Montessori Program
                </h3>
              </div>
              <p className="text-gray-600 mb-4">Age group: 2.5 – 6 years</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b7c3f] mt-1">✓</span>
                  <span>Practical life activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b7c3f] mt-1">✓</span>
                  <span>Sensory learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b7c3f] mt-1">✓</span>
                  <span>Language & numeracy development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b7c3f] mt-1">✓</span>
                  <span>Social skills building</span>
                </li>
              </ul>
            </motion.div>

            {/* Therapy Session */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#fff3e0] to-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#b8860b] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#b8860b]">
                  Therapy Center
                </h3>
              </div>
              <p className="text-gray-600 mb-4">For children with:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#b8860b] mt-1">•</span>
                  <span>Learning difficulties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b8860b] mt-1">•</span>
                  <span>Slow learners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b8860b] mt-1">•</span>
                  <span>ADHD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b8860b] mt-1">•</span>
                  <span>Mild autism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b8860b] mt-1">•</span>
                  <span>Speech delay</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-[#b8860b] mb-2">We provide:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Individual Learning Plans (ILP)</li>
                  <li>• One-on-one sessions</li>
                  <li>• One on one Therapy Session</li>
                  <li>• Trained educators</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              to="/programs"
              className="inline-block bg-[#6b7c3f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5a6835] transition-all hover:scale-105"
            >
              Learn More About Our Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#6b7c3f] to-[#5a6835] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join our nurturing community where every child is valued and supported. Limited seats available.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/admissions"
                className="bg-white text-[#6b7c3f] px-8 py-3 rounded-full font-semibold hover:bg-[#f5f5dc] transition-all hover:scale-105 shadow-lg"
              >
                Apply for Admission
              </Link>
              <a
                href="tel:+923220277871"
                className="bg-[#b8860b] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#996515] transition-all hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
