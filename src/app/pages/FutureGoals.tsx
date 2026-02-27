import { motion } from "motion/react";
import { Target, TrendingUp, Users, Award, BookOpen, Brain, Lightbulb, Heart, Sparkles, GraduationCap } from "lucide-react";

export function FutureGoals() {
  const studentGoals = [
    {
      icon: TrendingUp,
      title: "Academic Growth at Individual Pace",
      description: "We aim to help every child achieve their personal academic potential through individualized learning plans",
      color: "#7A9B3A"
    },
    {
      icon: Sparkles,
      title: "Confidence & Independence",
      description: "Develop self-confidence, independence, and decision-making skills from an early age",
      color: "#8BB8E8"
    },
    {
      icon: Heart,
      title: "Emotional & Social Development",
      description: "Help children build emotional regulation, positive behavior, communication skills, and social interaction abilities",
      color: "#E8A87C"
    },
    {
      icon: GraduationCap,
      title: "Strong Foundation for Primary Education",
      description: "Prepare Montessori students for smooth transition into mainstream primary schooling",
      color: "#F4C430"
    },
    {
      icon: Users,
      title: "Special Support Students Integration",
      description: "Gradually support children with learning difficulties to improve focus, strengthen academic skills, and integrate into regular classroom settings where possible",
      color: "#A67C52"
    },
    {
      icon: Lightbulb,
      title: "Life Skills Development",
      description: "Teach problem solving, responsibility, respect, and teamwork",
      color: "#7A9B3A"
    }
  ];

  const schoolGoals = [
    {
      icon: Award,
      title: "Become a Leading Inclusive Montessori Center",
      description: "To be recognized as a trusted early childhood and Therapy Session support learning center in the region",
      timeline: "3-5 Years"
    },
    {
      icon: Brain,
      title: "Professional Development",
      description: "Continuously train teachers in Montessori methods, special education strategies, and child psychology",
      timeline: "Ongoing"
    },
    {
      icon: Heart,
      title: "Expand Therapy Services",
      description: "Add certified speech therapists, occupational therapy room, and child counseling services",
      timeline: "2-3 Years"
    },
    {
      icon: BookOpen,
      title: "Establish Primary Section",
      description: "Gradually expand to Grade 1-5 inclusive education model",
      timeline: "5-7 Years"
    },
    {
      icon: Users,
      title: "Parent Education Programs",
      description: "Conduct parenting workshops, awareness sessions about ADHD & learning difficulties, and home support training",
      timeline: "1-2 Years"
    },
    {
      icon: Target,
      title: "Digital & Smart Learning",
      description: "Introduce smart boards, digital progress tracking, and parent communication portal",
      timeline: "2-4 Years"
    }
  ];

  const longTermVision = [
    {
      title: "Fully Inclusive School",
      description: "Montessori to Middle School",
      icon: "🏫"
    },
    {
      title: "Certified Therapy Center",
      description: "Professional support services",
      icon: "🏥"
    },
    {
      title: "Training Center",
      description: "For Montessori teachers",
      icon: "🎓"
    },
    {
      title: "Scholarship Program",
      description: "For deserving children",
      icon: "💝"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Future Goals</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Our vision for growth, excellence, and expanded impact
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
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At The Willow Village, our future goals reflect our commitment to growth, inclusion, professional standards, and long-term expansion. We envision a future where every child has access to quality education that honors their unique journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Student Goals */}
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
              🎓 Future Goals for Our Students
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every child's success is our priority
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentGoals.map((goal, index) => (
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
                  style={{ backgroundColor: `${goal.color}20` }}
                >
                  <goal.icon className="w-7 h-7" style={{ color: goal.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#6B7A3A] mb-3">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Vision Goals */}
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
              🌱 Future Goals for The Willow Village
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building a brighter future through strategic growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schoolGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-[#F9F7F3] rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#E8DCC4] overflow-hidden hover:scale-105"
              >
                <div className="bg-gradient-to-r from-[#7A9B3A] to-[#6B7A3A] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <goal.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{goal.title}</h3>
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {goal.timeline}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe & Calm Campus */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#7A9B3A]"
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-6xl mb-6">🌳</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B7A3A] mb-6">
                Safe & Calm Learning Campus
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision developing a nature-based campus environment inspired by the "Willow" concept—peaceful, strong, and flexible. A place where children feel connected to nature while learning in a secure, nurturing environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10-Year Vision */}
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
              🌟 Long-Term Dream (10-Year Vision)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our aspirational goals for the next decade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {longTermVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#7A9B3A] to-[#6B7A3A] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 text-center hover:scale-105"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Based on Maria Montessori */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#E8DCC4]"
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B7A3A] mb-6">
                Rooted in Montessori Principles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "The child is both a hope and a promise for mankind."
              </p>
              <p className="text-gray-600 mb-6">— Dr. Maria Montessori</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                All our future goals are grounded in the timeless principles introduced by Maria Montessori—respect for the child, hands-on learning, and the belief that every child has incredible potential waiting to be unlocked.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#7A9B3A] to-[#8BB8E8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us as we work towards creating a brighter future for all children. Together, we can make a lasting difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/admissions"
                className="bg-white text-[#7A9B3A] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#E8DCC4] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Enroll Your Child
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#7A9B3A] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
