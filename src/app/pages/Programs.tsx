import { motion } from "motion/react";
import { BookOpen, Palette, Calculator, Globe, Heart, Brain, ClipboardList, TrendingUp } from "lucide-react";

export function Programs() {
  const montessoriAreas = [
    {
      icon: Heart,
      title: "Practical Life",
      description: "Activities that develop independence, coordination, and care for self and environment",
      examples: ["Pouring", "Dressing frames", "Food preparation", "Cleaning activities"]
    },
    {
      icon: Palette,
      title: "Sensorial",
      description: "Materials that refine the five senses and develop perceptual awareness",
      examples: ["Color tablets", "Sound cylinders", "Geometric shapes", "Texture boards"]
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Concrete materials that introduce mathematical concepts through hands-on exploration",
      examples: ["Number rods", "Golden beads", "Spindle boxes", "Addition & subtraction"]
    },
    {
      icon: BookOpen,
      title: "Language",
      description: "Progressive activities that build literacy skills naturally and joyfully",
      examples: ["Sandpaper letters", "Moveable alphabet", "Phonetic reading", "Writing exercises"]
    },
    {
      icon: Globe,
      title: "Cultural Studies",
      description: "Introduction to geography, science, history, and the world around us",
      examples: ["Continent maps", "Nature studies", "Cultural celebrations", "Science experiments"]
    }
  ];

  const specialSupportServices = [
    {
      icon: ClipboardList,
      title: "Initial Assessment",
      description: "Comprehensive evaluation to understand each child's strengths and areas needing support",
      color: "#8BB8E8"
    },
    {
      icon: Brain,
      title: "Individual Education Plan (IEP)",
      description: "Customized learning plan tailored to meet specific goals and developmental milestones",
      color: "#7A9B3A"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Regular monitoring and documentation of academic, social, and emotional growth",
      color: "#F4C430"
    },
    {
      icon: Heart,
      title: "Parent Counseling",
      description: "Ongoing support and guidance for families navigating their child's learning journey",
      color: "#E8A87C"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive educational approaches designed for diverse learning needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Montessori Curriculum */}
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
              🌸 Montessori Curriculum
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on the proven methodology of Dr. Maria Montessori, our curriculum supports natural development through hands-on learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {montessoriAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-[#F9F7F3] rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#E8DCC4] p-6 hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#7A9B3A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-7 h-7 text-[#7A9B3A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#6B7A3A] mb-2">{area.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{area.description}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 mt-4">
                  <p className="text-sm font-semibold text-[#7A9B3A] mb-2">Examples:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {area.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#7A9B3A] rounded-full"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#7A9B3A] to-[#6B7A3A] text-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Age Group: 2.5 – 6 Years</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Our Montessori program provides a carefully prepared environment where children develop at their own pace, building confidence, independence, and a lifelong love of learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Education Support */}
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
              🌿 Special Education Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized programs designed to support children with diverse learning needs
            </p>
          </motion.div>

          {/* Who We Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#8BB8E8] mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#6B7A3A] mb-6 text-center">
              We Support Children With:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Learning difficulties",
                "Slow learners",
                "ADHD",
                "Mild autism",
                "Speech delay",
                "Developmental delays"
              ].map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#8BB8E8]/10 to-[#7A9B3A]/10 rounded-xl p-4 text-center"
                >
                  <p className="text-lg font-semibold text-[#6B7A3A]">{condition}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialSupportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#E8DCC4] p-6 hover:scale-105"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#6B7A3A] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#7A9B3A] to-[#8BB8E8] text-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Our Special Support Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📝</div>
                <p className="font-semibold">Individual Learning Plans</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <p className="font-semibold">One-on-One Sessions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🤝</div>
                <p className="font-semibold">Small Group Therapy</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎓</div>
                <p className="font-semibold">Trained Educators</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Montessori Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#F9F7F3] rounded-3xl p-8 md:p-12 border-4 border-[#E8DCC4]"
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B7A3A] mb-6">
                Based on the Method of Maria Montessori
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Maria Montessori revolutionized education by recognizing that children learn best through hands-on exploration in a prepared environment. Her method emphasizes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-[#7A9B3A] mb-2">Child-Centered Learning</h3>
                  <p className="text-sm text-gray-600">Following the child's natural interests and pace</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-[#7A9B3A] mb-2">Hands-On Materials</h3>
                  <p className="text-sm text-gray-600">Concrete experiences that build understanding</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-[#7A9B3A] mb-2">Independence</h3>
                  <p className="text-sm text-gray-600">Fostering self-reliance and confidence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
