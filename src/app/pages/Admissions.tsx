
export function Admissions() {
  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      {/* Hero */}
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Admissions</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Begin your child's journey at The Willow Village
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-14">

        {/* ── Both Banners Side by Side ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#7A9B3A] rounded-full" />
            <h2 className="text-3xl font-bold text-[#6B7A3A]">Admissions Open</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E8DCC4] hover:shadow-xl transition-shadow">
              <img src="/montessori-admission.jpeg" alt="Montessori Admission" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E8DCC4] hover:shadow-xl transition-shadow">
              <img src="/admissionbanner.png" alt="Admission Open — The Willow Village" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/admissions/apply" className="inline-block bg-[#7A9B3A] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#6B7A3A] transition-colors text-base">
              Apply Now →
            </a>
          </div>
        </section>

        {/* ── Montessori Admission Section ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#7A9B3A] rounded-full" />
            <h2 className="text-3xl font-bold text-[#6B7A3A]">Montessori Admission</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E8DCC4]">
              <img
                src="/montessori-admission.jpeg"
                alt="Montessori Admission — The Willow Village"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4]">
                <h3 className="text-xl font-bold text-[#6B7A3A] mb-1">Age Group</h3>
                <p className="text-3xl font-bold text-[#A67C52]">2.5 – 5 Years</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4]">
                <h3 className="text-xl font-bold text-[#6B7A3A] mb-3">Why Montessori?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Give your child the foundation for a lifetime of success. In our nurturing and
                  stimulating environment, every learning moment is designed to spark curiosity,
                  build independence, and develop a lifelong love of learning.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4]">
                <h3 className="text-xl font-bold text-[#6B7A3A] mb-4">What We Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: "🙌", label: "Hands-On Learning" },
                    { icon: "💚", label: "Caring Teachers" },
                    { icon: "📖", label: "Engaging Curriculum" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 bg-[#F9F5EE] rounded-xl px-3 py-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-[#6B7A3A]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="/admissions/apply"
                className="block text-center bg-[#7A9B3A] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6B7A3A] transition-colors text-base"
              >
                Apply for Montessori
              </a>
            </div>
          </div>
        </section>

        {/* ── Admissions Overview ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#7A9B3A] rounded-full" />
            <h2 className="text-3xl font-bold text-[#6B7A3A]">Admissions Overview</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "🎓", title: "Montessori Program", age: "Ages 2.5 – 6", desc: "A child-led learning environment fostering independence, creativity, and a love for learning through hands-on activities.", link: "/admissions/apply" },
              { icon: "💙", title: "Special Support Program", age: "Ages 3 – 12", desc: "Personalized learning plans for children with learning differences including ADHD, mild autism, speech delay, and slow learners.", link: "/admissions/apply" },
              { icon: "🗣️", title: "Speech Therapy", age: "All Ages", desc: "Professional speech-language therapy for children with speech delays, articulation issues, and language development challenges.", link: "/admissions/apply" },
              { icon: "🖐️", title: "Occupational Therapy", age: "All Ages", desc: "Helping children develop fine motor skills, sensory processing, and daily life skills through structured therapy sessions.", link: "/admissions/apply" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4] hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#6B7A3A] mb-1">{item.title}</h3>
                <span className="inline-block bg-[#E8DCC4] text-[#6B7A3A] text-xs font-semibold px-3 py-0.5 rounded-full mb-3">{item.age}</span>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <a href={item.link} className="text-[#7A9B3A] text-sm font-semibold hover:underline">Apply Now →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "📋 Requirements", link: "/admissions/requirements" },
            { label: "💰 Fees & Scholarships", link: "/admissions/fees" },
            { label: "📝 Apply Now", link: "/admissions/apply" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="bg-[#7A9B3A] text-white text-center font-semibold py-4 rounded-2xl hover:bg-[#6B7A3A] transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </section>

        {/* ── Contact ── */}
        <section className="bg-[#E8DCC4] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-2">Have Questions?</h2>
          <p className="text-gray-600 mb-1 text-sm">📞 +92-322-0277871</p>
          <p className="text-gray-600 mb-1 text-sm">✉️ thewillovillage@gmail.com</p>
          <p className="text-gray-600 text-sm">📍 House# B-8 Block 12, Federal B Area, Gulberg Town, Karachi</p>
        </section>

      </div>
    </div>
  );
}