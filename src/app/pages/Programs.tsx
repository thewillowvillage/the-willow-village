import { motion } from "motion/react";
import { Link } from "react-router";
import { BadgeCheck, BriefcaseBusiness, GraduationCap, HandHeart, Heart, Ribbon, School, Users } from "lucide-react";

export function Programs() {
  const programs = [
    {
      id: "care-bridge",
      icon: School,
      title: "Care Bridge Initiative",
      subtitle: "Inclusive support for mainstream schools",
      description:
        "Care Bridge Initiative helps mainstream schools welcome and support children with special needs through teacher guidance, parent collaboration, and practical classroom strategies.",
      color: "#7A9B3A",
      points: [
        "Teacher training on inclusion, behavior support, and classroom adjustments",
        "Parent guidance sessions so families and schools work as one team",
        "Child observation notes with practical recommendations",
        "Awareness workshops that build empathy among staff and students",
        "Follow-up support to help schools apply strategies confidently"
      ]
    },
    {
      id: "aanchal-circle",
      icon: Ribbon,
      title: "Aanchal Circle",
      subtitle: "A caring space for mothers",
      description:
        "Aanchal Circle is named for a mother's protective care. It supports mothers with a calm, respectful space for mental health, emotional strength, and shared understanding.",
      color: "#A67C52",
      points: [
        "Mother support circles led with privacy and compassion",
        "Stress management, self-care, and emotional wellbeing guidance",
        "Practical parenting support for children with different learning needs",
        "Confidence-building conversations for mothers and caregivers",
        "A safe place to feel heard, supported, and connected"
      ]
    },
    {
      id: "together-we-care",
      icon: HandHeart,
      title: "Together We Care",
      subtitle: "Community service for families",
      description:
        "Together We Care provides free workshops and camps for parents, helping families understand, support, and empower their children with confidence.",
      color: "#8BB8E8",
      points: [
        "Free workshops for parents and caregivers",
        "Community camps focused on awareness and early support",
        "Guidance on behavior, communication, learning, and daily routines",
        "Empowering families through support, tools, and encouragement",
        "Outreach programs conducted by The Willow Village team"
      ]
    }
  ];

  const programDetails = [
    {
      id: "care-bridge",
      icon: School,
      title: "Care Bridge Initiative",
      eyebrow: "For mainstream schools, teachers, and parents",
      color: "#7A9B3A",
      intro:
        "Care Bridge Initiative creates a gentle bridge between mainstream schools and children who need additional support. The goal is to help schools understand the child, guide teachers with practical tools, and reassure parents that their child can be included with dignity.",
      experience:
        "Parents and school leaders experience a clear, professional support pathway: observation, guidance, classroom strategies, parent communication, and follow-up. Instead of confusion, families receive direction; instead of pressure, teachers receive support.",
      outcomes: [
        "Teachers learn how to respond to behavior, sensory needs, attention challenges, and learning differences with patience and structure.",
        "Parents receive realistic guidance they can use at home and in school meetings.",
        "Schools become more confident in welcoming special needs children into everyday classroom life.",
        "Children feel safer, understood, and more accepted in their learning environment."
      ],
      clientNote:
        "This program shows parents that The Willow Village is not only a school, but a trusted inclusion partner for the wider education community."
    },
    {
      id: "aanchal-circle",
      icon: Ribbon,
      title: "Aanchal Circle",
      eyebrow: "Mental health support and care for mothers",
      color: "#A67C52",
      intro:
        "Aanchal Circle is inspired by the warmth and protection of a mother's care. It gives mothers a respectful space to breathe, speak, feel supported, and understand that they are not alone in their parenting journey.",
      experience:
        "The experience is calm, private, and emotionally safe. Mothers can talk about stress, guilt, worry, school struggles, behavior concerns, and family pressure while receiving compassionate guidance from The Willow Village team.",
      outcomes: [
        "Mothers feel emotionally supported instead of isolated.",
        "Families gain practical strategies for daily routines, communication, and child behavior.",
        "Caregivers learn how to protect their own wellbeing while supporting their children.",
        "The home environment becomes calmer, more informed, and more connected."
      ],
      clientNote:
        "This program leaves a strong impression because it cares for the mother as much as it cares for the child."
    },
    {
      id: "together-we-care",
      icon: HandHeart,
      title: "Together We Care",
      eyebrow: "Community service, workshops, and parent empowerment",
      color: "#8BB8E8",
      intro:
        "Together We Care is The Willow Village's community service program. Through free workshops, camps, awareness sessions, and parent guidance, we help families understand how to support and empower their children.",
      experience:
        "Parents attend practical, welcoming sessions where complex topics are explained in simple language. They leave with confidence, awareness, and tools they can use immediately with their children at home and in school life.",
      outcomes: [
        "Parents understand child development, behavior, communication, and learning needs more clearly.",
        "Families receive free guidance from a caring professional team.",
        "Workshops create awareness around autism, inclusion, therapy support, and early intervention.",
        "The community becomes more informed, accepting, and ready to support every child."
      ],
      clientNote:
        "This program gives parents visible proof of The Willow Village's heart for community, inclusion, and family empowerment."
    }
  ];

  const internshipHighlights = [
    "Unpaid 3-month internship program",
    "Open for education, therapy, administration, media, and outreach domains",
    "Professional school environment with practical learning",
    "Certificate awarded after successful completion",
    "Mentorship from The Willow Village team"
  ];

  const whatsappInternshipLink =
    "https://wa.me/923220277871?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20apply%20for%20the%203-month%20unpaid%20internship%20program%20at%20The%20Willow%20Village.";

  return (
    <div className="pt-24 pb-16">
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
              Meaningful programs for children, mothers, schools, interns, and the community around them.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-[#F9F7F3] rounded-3xl shadow-xl border-2 border-[#E8DCC4] overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="p-7 text-white" style={{ backgroundColor: program.color }}>
                  <program.icon className="w-12 h-12 mb-4" />
                  <p className="text-white/80 font-semibold mb-2">{program.subtitle}</p>
                  <h2 className="text-2xl md:text-3xl font-bold">{program.title}</h2>
                </div>
                <div className="p-7">
                  <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-gray-700">
                        <BadgeCheck className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: program.color }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52] font-bold mb-3">Learn More</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#6B7A3A] mb-4">Program Experience for Parents and Clients</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each program is designed to feel warm, professional, and purposeful, so families understand exactly how The Willow Village supports children beyond the classroom.
            </p>
          </div>

          {programDetails.map((program, index) => (
            <motion.div
              id={program.id}
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="scroll-mt-28 bg-white rounded-3xl shadow-xl border-2 border-[#E8DCC4] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="p-8 md:p-10 text-white" style={{ backgroundColor: program.color }}>
                  <program.icon className="w-14 h-14 mb-6" />
                  <p className="uppercase tracking-[0.18em] text-sm text-white/75 font-bold mb-3">{program.eyebrow}</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-5">{program.title}</h3>
                  <p className="text-white/90 leading-relaxed text-lg">{program.intro}</p>
                </div>

                <div className="p-8 md:p-10">
                  <h4 className="text-2xl font-bold text-[#6B7A3A] mb-4">What parents experience</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">{program.experience}</p>

                  <h4 className="text-xl font-bold text-[#6B7A3A] mb-4">Key benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {program.outcomes.map((item) => (
                      <div key={item} className="flex items-start gap-3 bg-[#F9F7F3] rounded-xl p-4">
                        <BadgeCheck className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: program.color }} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl p-5 border-l-4 bg-[#F9F5EE]" style={{ borderColor: program.color }}>
                    <p className="text-gray-700 font-semibold leading-relaxed">{program.clientNote}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border-2 border-[#E8DCC4] p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div>
                <div className="w-16 h-16 bg-[#7A9B3A]/15 rounded-full flex items-center justify-center mb-5">
                  <GraduationCap className="w-9 h-9 text-[#7A9B3A]" />
                </div>
                <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52] font-bold mb-3">Career Growth</p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#6B7A3A] mb-4">Unpaid Internship Program</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide a 3-month unpaid internship program with certification for candidates who want to learn inside a caring, inclusive, and professional school setting.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#6B7A3A] mb-5 flex items-center gap-3">
                  <BriefcaseBusiness className="w-7 h-7" />
                  Internship domains
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {internshipHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-[#F9F7F3] rounded-xl p-4">
                      <BadgeCheck className="w-5 h-5 text-[#7A9B3A] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={whatsappInternshipLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#7A9B3A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6B7A3A] transition-all"
                >
                  Apply for Internship
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-14 h-14 text-[#A67C52] mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A] mb-4">Learning Meets Individual Care</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Alongside these programs, The Willow Village continues to provide Montessori learning, therapy support, individual plans, and family guidance for children who need extra care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/therapy" className="bg-[#8BB8E8] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#7A9B3A] transition-all">
              Explore Therapy Support
            </Link>
            <Link to="/contact" className="bg-[#7A9B3A] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#6B7A3A] transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
