import { motion } from "motion/react";
import { MessageCircle, Hand, Heart, BookOpen, Users, Brain, TrendingUp, Shield } from "lucide-react";

export function TherapySupport() {
  const therapyServices = [
    {
      icon: MessageCircle,
      title: "Speech Therapy",
      description: "Professional support for children experiencing speech delays, articulation difficulties, or language development challenges",
      benefits: [
        "Articulation improvement",
        "Language development",
        "Communication skills",
        "Confidence building"
      ],
      color: "#8BB8E8"
    },
    {
      icon: Hand,
      title: "Occupational Therapy",
      description: "Helping children develop fine motor skills, sensory processing, and daily living skills",
      benefits: [
        "Fine motor development",
        "Sensory integration",
        "Self-care skills",
        "Coordination improvement"
      ],
      color: "#7A9B3A"
    },
    {
      icon: Heart,
      title: "Behavior Support",
      description: "Positive behavior strategies to help children develop emotional regulation and social skills",
      benefits: [
        "Emotional regulation",
        "Social skills",
        "Positive behavior",
        "Self-control"
      ],
      color: "#E8A87C"
    },
    {
      icon: BookOpen,
      title: "Remedial Classes",
      description: "Targeted academic support to strengthen foundational skills in reading, writing, and mathematics",
      benefits: [
        "Academic strengthening",
        "Confidence building",
        "Learning strategies",
        "Progress tracking"
      ],
      color: "#F4C430"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of child's needs and strengths",
      icon: Brain
    },
    {
      step: "2",
      title: "Individual Plan",
      description: "Customized therapy plan with specific goals",
      icon: BookOpen
    },
    {
      step: "3",
      title: "Regular Sessions",
      description: "Consistent one-on-one or small group sessions",
      icon: Users
    },
    {
      step: "4",
      title: "Progress Monitoring",
      description: "Ongoing tracking and adjustment of strategies",
      icon: TrendingUp
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#8BB8E8] to-[#7A9B3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Therapy & Support Services</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Specialized support designed to help every child reach their full potential
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At The Willow Village, we understand that some children need extra support to thrive. Our comprehensive therapy and support services are carefully designed to address individual needs with compassion, professionalism, and proven methods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#7A9B3A] to-[#6B7A3A] text-white rounded-3xl p-8 md:p-12 shadow-2xl text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-4 text-[#F4E5C7]" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Professional & Confidential Support
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Parents of children with special needs seek trust and emotional safety. We provide a secure environment with trained professionals who understand each child's unique journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Therapy Services */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A] mb-4">
              Our Therapy Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert support across multiple areas of development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {therapyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#E8DCC4] overflow-hidden hover:scale-105"
              >
                <div
                  className="p-6"
                  style={{ background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)` }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}30` }}
                  >
                    <service.icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#6B7A3A] mb-3">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="bg-white rounded-xl p-4">
                    <p className="font-semibold text-[#6B7A3A] mb-3">Benefits:</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }}></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A] mb-4">
              Our Support Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure effective support for every child
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white to-[#F9F7F3] rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#E8DCC4] p-6 h-full hover:scale-105">
                  <div className="w-12 h-12 bg-[#7A9B3A] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <step.icon className="w-10 h-10 text-[#7A9B3A] mb-4" />
                  <h3 className="text-xl font-bold text-[#6B7A3A] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#E8DCC4]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#8BB8E8]"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#6B7A3A] mb-8 text-center">
              What Makes Our Support Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Individual Learning Plans", desc: "Customized to each child's needs", emoji: "📝" },
                { title: "One-on-One Sessions", desc: "Focused individual attention", emoji: "👤" },
                { title: "Small Group Therapy", desc: "Social learning opportunities", emoji: "👥" },
                { title: "Trained Educators", desc: "Certified and experienced staff", emoji: "🎓" },
                { title: "Parent Communication", desc: "Regular updates and guidance", emoji: "💬" },
                { title: "Progress Reports", desc: "Detailed tracking of development", emoji: "📊" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#F9F7F3] to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-[#6B7A3A] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#7A9B3A] to-[#8BB8E8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Support for Your Child?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Every child deserves the right support to thrive. Let us help your child reach their full potential with our specialized therapy and support services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+923220277871"
                className="bg-white text-[#7A9B3A] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8DCC4] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Call: +92 322 0277871
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#7A9B3A] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
