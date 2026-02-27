import { motion } from "motion/react";
import { Target, Eye, CheckCircle, Users, Award, Heart, Shield, Sparkles } from "lucide-react";

export function AboutUs() {
  const whyChooseUs = [
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Limited enrollment ensures each child receives the attention they deserve"
    },
    {
      icon: Heart,
      title: "Individual Attention",
      description: "Personalized learning plans tailored to each child's unique needs"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "A secure, nurturing space where children feel protected and valued"
    },
    {
      icon: Award,
      title: "Trained Montessori Teachers",
      description: "Certified educators experienced in Montessori methodology"
    },
    {
      icon: Sparkles,
      title: "Therapy Sessions Support",
      description: "Professional staff trained in supporting children with diverse learning needs"
    },
    {
      icon: CheckCircle,
      title: "Proven Methods",
      description: "Based on the time-tested principles of Maria Montessori"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#7A9B3A] to-[#6B7A3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Dedicated to nurturing every child's unique journey of growth and learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#7A9B3A]/20 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-[#7A9B3A]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A]">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide a peaceful, inclusive environment where every child feels valued, respected, and empowered to learn at their own pace. We envision a future where all children, regardless of their learning style or challenges, have access to quality education that celebrates their individuality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1763310225537-f7161d5c93e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzE2NzI2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children learning"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBraWRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcxNjc0Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Teacher with student"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#8BB8E8]/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#8BB8E8]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A]">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To support academic, emotional, and social growth through personalized learning experiences rooted in Montessori principles and specialized support services.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#7A9B3A] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Foster independence and confidence in every child</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#7A9B3A] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Provide individualized learning plans for diverse needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#7A9B3A] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Create a supportive community for families and children</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose The Willow Village?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine the best of Montessori education with specialized support to create an environment where every child can thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-[#F9F7F3] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#E8DCC4] hover:scale-105"
              >
                <div className="w-14 h-14 bg-[#7A9B3A]/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#7A9B3A]" />
                </div>
                <h3 className="text-xl font-bold text-[#6B7A3A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Confidentiality */}
      <section className="py-16 bg-gradient-to-r from-[#7A9B3A] to-[#6B7A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-[#F4E5C7]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built on Trust & Confidentiality
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              We understand that parents of children with special needs seek more than just education—they seek trust, emotional safety, and professional care. At The Willow Village, we maintain strict confidentiality, provide regular progress reports, and ensure open communication with parents every step of the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="font-bold text-2xl mb-2">✓</p>
                <p className="text-sm">Confidentiality Assured</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="font-bold text-2xl mb-2">✓</p>
                <p className="text-sm">Trained Staff</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="font-bold text-2xl mb-2">✓</p>
                <p className="text-sm">Parent Communication</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="font-bold text-2xl mb-2">✓</p>
                <p className="text-sm">Progress Reports</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maria Montessori Tribute */}
      <section className="py-16 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#E8DCC4]"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B7A3A] mb-6">
                Inspired by Maria Montessori
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "The greatest sign of success for a teacher is to be able to say, 'The children are now working as if I did not exist.'"
              </p>
              <p className="text-gray-600 mt-4">— Dr. Maria Montessori</p>
              <p className="text-gray-700 mt-6 leading-relaxed">
                Our approach is built on the foundation of Montessori principles, emphasizing hands-on learning, independence, and respect for each child's natural development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
