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
    { name: "Ms. UROOJ SHEHZAD", role: "Founder & Principal", bio: "With over 15 years in Montessori and special education, Ms. Ayesha founded The Willow Village to create an inclusive space where every child can thrive. She holds certifications in Montessori education and special needs teaching.", initial: "A" },
    { name: "Ms. ALEENA", role: "Assistant Teacher", bio: "A certified teacher and behavioral teacher with 10+ years Best school experience. Ms. Aleena leads our teacher team and develops personalized plans for each child.", initial: "U" },
    { name: "Ms. BUSHRA", role: "Lead Montessori Teacher", bio: "AMI certified with a decade of classroom experience. Ms. Sara creates engaging, child-led learning environments that nurture curiosity and independence.", initial: "S" },
    { name: "Ms. KIRAN AKBER", role: "Special Education Coordinator", bio: "Expert in Individual Learning Plan (ILP) development and inclusive education strategies. Ms. Hina ensures each child in our Special Support Program receives tailored attention.", initial: "H" },
    { name: "Ms. AMNA", role: "Behavioral Therapist", bio: "Specialist in ABA therapy and behavioral intervention for children with ADHD, autism spectrum, and other behavioral challenges.", initial: "B" },
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
              <div className="w-16 h-16 bg-[#7A9B3A] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">{member.initial}</span>
              </div>
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