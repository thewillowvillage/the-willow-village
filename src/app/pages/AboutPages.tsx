import { BadgeCheck, CalendarHeart, HandHeart, Images, Megaphone, Users } from "lucide-react";

export function OurStory() {
  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Our Story</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">How a dream to serve every child became The Willow Village</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-14 space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-4">How It All Began</h2>
          <p className="text-gray-700 leading-relaxed mb-4">The Willow Village was born from a mother's frustration and a teacher's determination. Our founder, after years of watching children with unique learning needs being left behind in traditional classrooms, decided to create a space where <strong>every child is seen, heard, and celebrated.</strong></p>
          <p className="text-gray-700 leading-relaxed">Starting with just a small classroom in Federal B Area, Karachi, we welcomed our first group of students with open arms and a simple promise — no child would ever feel "less than" within these walls.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-4">Growing Together</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Word spread quickly among Karachi families searching for an inclusive, nurturing environment. What began as a Montessori classroom soon expanded to include a Special Support Program, therapy services, and a dedicated team of educators and therapists.</p>
          <p className="text-gray-700 leading-relaxed">Today, The Willow Village serves children aged 2.5 to 12 years, offering Montessori education, individualized learning plans, speech therapy, occupational therapy, behavioral therapy, and much more — all under one roof.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-6">Our Journey</h2>
          <div className="space-y-5">
            {[
              { year: "2025 MAR", event: "Founded with one Montessori classroom and 12 students" },
              { year: "2025 MAY", event: "Launched Special Support Program for children with learning differences" },
              { year: "2025 JULY", event: "Added Speech Therapy and Occupational Therapy services" },
              { year: "2025 NOV", event: "Introduced behavioral therapy and psychotherapy services" },
              { year: "2026 JAN", event: "Expanded to a larger campus to serve more families" },
              { year: "2026 FEB", event: "Partnered with national organizations for inclusive education" },
            ].map((item) => (
              <div key={item.year} className="flex gap-4 items-start">
                <div className="w-16 shrink-0 bg-[#7A9B3A] text-white text-sm font-bold rounded-full px-2 py-1 text-center">{item.year}</div>
                <p className="text-gray-700 pt-1">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#7A9B3A] rounded-2xl p-8 text-white text-center">
          <p className="text-2xl font-bold italic mb-2">"Where Learning Meets Individual Care."</p>
          <p className="text-white/80">— The Willow Village</p>
        </div>
      </div>
    </div>
  );
}

export function OurTeam() {
  const team = [
    { name: "Ms. Urooj Shehzad", role: "CEO & Founder", bio: "Ms. Urooj Shehzad is the CEO and Founder of The Willow Village. Through her vision and leadership, she has built a compassionate, inclusive, and child-centered environment focused on development, independence, and well-being.", image: "/ceo-urooj.jpeg" },
    { name: "Ms. Maliha Sajid", role: "Head of Occupational Therapy", bio: "Ms. Maliha Sajid holds a Doctor of Occupational Therapy degree from Ziauddin University and is currently pursuing an MBA in Healthcare Management. She brings valuable expertise in evidence-based care and research.", image: "/msmaliha.png" },
    { name: "Ms. Urooj Anees", role: "HR", bio: "Ms. Urooj Anees supports employee coordination, recruitment, staff support, and smooth workplace operations. Her people-focused approach helps maintain a positive and professional work environment.", image: "/hr-msurooj.png" },
    { name: "Sir Mustafa", role: "Occupational Therapist", bio: "Sir Mustafa supports functional development, independence, and overall well-being through a patient-centered approach. His commitment and compassion make him a valuable member of the occupational therapy team.", image: "/sirmustufa.png" },
    { name: "Ms. Amna Qamar", role: "Head of the Behaviour Department", bio: "Ms. Amna Qamar supports children’s emotional, behavioural, and social development through a compassionate and individualized approach that builds confidence and essential life skills.", image: "/msamnaqamar.png" },
    { name: "Syed Manzar Naqvi", role: "Head of the Therapeutic Department - Afternoon", bio: "Syed Manzar Naqvi leads the afternoon therapeutic department with a commitment to professional, compassionate, and individualized care that helps individuals work toward their developmental goals.", image: "/sirmazhernaqvi.png" },
    { name: "Syed Naushad Shaukat", role: "Head of the Speech Department", bio: "Syed Naushad Shaukat supports individuals in developing effective communication and speech skills through compassionate, individualized care and a patient-centered approach.", image: "/sirnaushad.png" },
  ];
  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Our Team</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">Passionate professionals dedicated to every child's growth</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4] hover:shadow-lg transition-shadow">
              <img src={member.image} alt={member.name} className="w-full aspect-[4/5] object-cover rounded-xl mb-5" />
              <h3 className="text-lg font-bold text-[#6B7A3A]">{member.name}</h3>
              <p className="text-[#A67C52] text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 bg-[#E8DCC4] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-2">Join Our Team</h2>
          <p className="text-gray-600 mb-5">We're always looking for passionate educators and therapists to join The Willow Village family.</p>
          <a href="/contact" className="inline-block bg-[#7A9B3A] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#6B7A3A] transition-colors">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}

export function OurMission() {
  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Our Mission</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">The values and vision that drive everything we do</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-14 space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#7A9B3A] rounded-full flex items-center justify-center text-white text-lg">🎯</div>
            <h2 className="text-2xl font-bold text-[#6B7A3A]">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">To provide every child with a safe, inclusive, and stimulating learning environment that celebrates their individuality, nurtures their strengths, and empowers them to become independent, confident thinkers — regardless of their learning needs or abilities.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#7A9B3A] rounded-full flex items-center justify-center text-white text-lg">🌱</div>
            <h2 className="text-2xl font-bold text-[#6B7A3A]">Our Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">A Pakistan where every child — regardless of ability, background, or learning style — has access to quality, compassionate education and the therapeutic support they need to reach their full potential and contribute meaningfully to society.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { value: "Inclusion", desc: "Every child belongs here, no exceptions.", icon: "🤝" },
              { value: "Compassion", desc: "We lead with empathy in everything we do.", icon: "💚" },
              { value: "Excellence", desc: "We hold ourselves to the highest standards of education and care.", icon: "⭐" },
              { value: "Respect", desc: "Every child, family, and team member is treated with dignity.", icon: "🙏" },
              { value: "Innovation", desc: "We constantly evolve our methods to serve children better.", icon: "💡" },
              { value: "Family", desc: "We partner with parents as essential members of every child's journey.", icon: "🏡" },
            ].map((item) => (
              <div key={item.value} className="flex gap-3 items-start p-4 bg-[#F9F5EE] rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[#6B7A3A]">{item.value}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#7A9B3A] rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="text-white/90 leading-relaxed">We combine the proven Montessori philosophy with modern therapeutic practices to create a truly holistic learning experience. Every child who walks through our doors receives an individualized plan, a caring team, and a community that roots for their success — every single day.</p>
        </div>
      </div>
    </div>
  );
}

export function CommunityService() {
  const autismPamphlets = [
    "/community-service/autismworkshop1.jpeg",
    "/community-service/autismworkshop2.jpeg",
    "/community-service/autismworkshop3.jpeg",
    "/community-service/autismworkshop4.jpeg",
    "/community-service/autismworkshop5.jpeg",
    "/community-service/autismworkshop6.jpeg",

  ];

  const autismWorkshopPhotos = [
    "/community-service/aaaa.jpeg",
    "/community-service/aacc.jpeg",
    "/community-service/aadd.jpeg",
    "/community-service/aaee.jpeg",
    "/community-service/abab.jpeg"
  ];

  const workshops = [
    "Parent guidance workshops on supporting children at home",
    "Free awareness camps for early support and intervention",
    "Family empowerment sessions with practical daily routines",
    "Community conversations around inclusion and acceptance"
  ];

  const impact = [
    "Free learning opportunities for parents and caregivers",
    "Guidance for families who need direction but may not know where to begin",
    "A respectful space to ask questions about development, behavior, and learning",
    "Support that connects school, home, and community"
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <HandHeart className="w-14 h-14 mx-auto mb-4" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Community Service</h1>
        <p className="text-white/90 text-lg max-w-3xl mx-auto">
          Together We Care is our community service program for parents, caregivers, and families who want to support and empower their children.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <p className="uppercase tracking-[0.18em] text-sm text-[#A67C52] font-bold mb-3">Together We Care</p>
          <h2 className="text-3xl font-bold text-[#6B7A3A] mb-4">Free Workshops and Parent Camps</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            The Willow Village conducts free workshops and camps for parents to guide them on how to understand, support, and empower their children. These sessions are designed to be practical, warm, and easy to apply at home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
            <div className="w-12 h-12 bg-[#7A9B3A]/15 rounded-full flex items-center justify-center mb-5">
              <CalendarHeart className="w-7 h-7 text-[#7A9B3A]" />
            </div>
            <h2 className="text-2xl font-bold text-[#6B7A3A] mb-5">Workshops Conducted at The Willow Village</h2>
            <ul className="space-y-4">
              {workshops.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <BadgeCheck className="w-5 h-5 text-[#7A9B3A] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
            <div className="w-12 h-12 bg-[#A67C52]/15 rounded-full flex items-center justify-center mb-5">
              <Users className="w-7 h-7 text-[#A67C52]" />
            </div>
            <h2 className="text-2xl font-bold text-[#6B7A3A] mb-5">Our Community Impact</h2>
            <ul className="space-y-4">
              {impact.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <BadgeCheck className="w-5 h-5 text-[#A67C52] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#E8DCC4]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <div className="w-12 h-12 bg-[#7A9B3A]/15 rounded-full flex items-center justify-center mb-5">
                <Megaphone className="w-7 h-7 text-[#7A9B3A]" />
              </div>
              <p className="uppercase tracking-[0.18em] text-sm text-[#A67C52] font-bold mb-3">Conducted Workshop</p>
              <h2 className="text-3xl font-bold text-[#6B7A3A] mb-3">Autism Awareness and Inclusive Workshop</h2>
              <p className="text-gray-700 leading-relaxed max-w-3xl">
                The Willow Village conducted an autism awareness and inclusive workshop to guide families, educators, and community members with expert voices, practical understanding, and compassionate support.
              </p>
            </div>
            <div className="bg-[#F9F5EE] border border-[#E8DCC4] rounded-2xl px-5 py-4 text-[#6B7A3A] font-bold">
              21 April, 2026
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Expert speaker sessions",
              "Inclusive education guidance",
              "Parent and teacher awareness",
              "Neurodiversity acceptance",
              "Community learning and support",
              "Practical strategies for daily care"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#F9F5EE] rounded-xl p-4">
                <BadgeCheck className="w-5 h-5 text-[#7A9B3A] mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#E8DCC4]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#A67C52]/15 rounded-full flex items-center justify-center">
              <Images className="w-7 h-7 text-[#A67C52]" />
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-sm text-[#A67C52] font-bold mb-1">Workshop Pamphlets</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B7A3A]">Speakers and Awareness Posters</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {autismPamphlets.map((src, index) => (
              <div key={src} className="bg-[#F9F5EE] rounded-2xl overflow-hidden border border-[#E8DCC4] shadow-sm hover:shadow-lg transition-shadow">
                <img
                  src={src}
                  alt={`Autism awareness workshop pamphlet ${index + 1}`}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#E8DCC4]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#7A9B3A]/15 rounded-full flex items-center justify-center">
              <CalendarHeart className="w-7 h-7 text-[#7A9B3A]" />
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-sm text-[#A67C52] font-bold mb-1">Workshop Images</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B7A3A]">Moments from the Autism Workshop</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {autismWorkshopPhotos.map((src, index) => (
              <div key={src} className="bg-[#F9F5EE] rounded-2xl overflow-hidden border border-[#E8DCC4] shadow-sm hover:shadow-lg transition-shadow">
                <img
                  src={src}
                  alt={`Autism awareness workshop moment ${index + 1}`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#7A9B3A] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Empowering Families Through Support and Guidance</h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            This page can be used to showcase every workshop conducted by The Willow Village, including photos, dates, topics, and parent feedback.
          </p>
        </div>
      </div>
    </div>
  );
}
