export function OurPartners() {
  const partners = [
    {
      name: "Ministry of Education Pakistan",
      category: "Government",
      desc: "We align our curriculum with national educational standards and work closely with the Ministry to advocate for inclusive education policies across Pakistan.",
      icon: "MOE",
    },
    {
      name: "Montessori International Association",
      category: "Education",
      desc: "Providing certified Montessori training, quality learning materials, and ongoing professional development for our Montessori educators.",
      icon: "MIA",
    },
    {
      name: "Sohail University",
      category: "Academic Collaboration",
      desc: "The Willow Village has signed an MOU with Sohail University to create opportunities for inclusive education, student learning, internships, research, training, and community initiatives.",
      icon: "SU",
      link: "/mou",
    },
    {
      name: "Karachi Speech Therapy Network",
      category: "Healthcare",
      desc: "A consortium of certified speech-language pathologists supporting our therapy team with specialist consultations, referrals, and continued education.",
      icon: "STN",
    },
    {
      name: "Community Health Center - Federal B Area",
      category: "Healthcare",
      desc: "Providing accessible healthcare screenings, medical support, and referrals for our students and their families within the local community.",
      icon: "CHC",
    },
    {
      name: "Beebinders by Heebal",
      category: "Collaborative Partner",
      desc: "A valued creative partner supporting The Willow Village community. Connect with Beebinders by Heebal through their social channels.",
      icon: "BH",
      instagram: "https://www.instagram.com/beebindersbyheebal?igsh=MXRwNWtzMTIxZXE5Yg==",
      whatsapp: "03132431876",
      email: "Beebindersbyheebal@gmail.com",
    },
    {
      name: "AJ Studio",
      category: "Collaborative Partner",
      desc: "A creative collaborative partner supporting The Willow Village with visual storytelling, media support, and professional presentation of our school events and community work.",
      icon: "AJ",
      instagram: "https://www.instagram.com/ajstudioofficial",
      facebook: "https://www.facebook.com/ajstudio.com.pk/",
      whatsapp: "923008229414",
      phoneDisplay: "0300 8229414",
      location: "19C, Stadium Lane 1, Phase V, DHA, Karachi, Pakistan",
    },
  ];

  const categories = [...new Set(partners.map((p) => p.category))];

  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Our Partners</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Trusted organizations and institutions we collaborate with to give every child the best possible care and education
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4] mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-3">Stronger Together</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At The Willow Village, we believe no school can do it alone. We have built meaningful relationships
            with leading healthcare providers, educational institutions, government bodies, advocacy groups, and creative collaborators
            to ensure our students receive holistic support at every step of their journey.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-lg font-bold text-[#A67C52] uppercase tracking-wide mb-4 pl-1">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {partners
                .filter((p) => p.category === category)
                .map((partner) => (
                  <div key={partner.name} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4] hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-[#7A9B3A]/15 text-[#6B7A3A] font-bold flex items-center justify-center mb-4">
                      {partner.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#6B7A3A] mb-1">{partner.name}</h3>
                    <span className="inline-block bg-[#E8DCC4] text-[#6B7A3A] text-xs font-semibold px-3 py-0.5 rounded-full mb-3">{partner.category}</span>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{partner.desc}</p>
                    {((partner as any).instagram || (partner as any).facebook || (partner as any).whatsapp || (partner as any).email || (partner as any).location || (partner as any).link) && (
                      <div className="space-y-1.5 mt-2 border-t border-gray-100 pt-3">
                        {(partner as any).link && (
                          <a href={(partner as any).link} className="flex items-center gap-2 text-xs text-[#6B7A3A] hover:text-[#7A9B3A] font-bold">
                            View MOU details →
                          </a>
                        )}
                        {(partner as any).instagram && (
                          <a href={(partner as any).instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-pink-500 hover:text-pink-600 font-medium">
                            <span>Instagram:</span> Open Profile
                          </a>
                        )}
                        {(partner as any).facebook && (
                          <a href={(partner as any).facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700 font-medium">
                            <span>Facebook:</span> Open Page
                          </a>
                        )}
                        {(partner as any).whatsapp && (
                          <a href={`https://wa.me/${(partner as any).whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-green-600 hover:text-green-700 font-medium">
                            <span>WhatsApp:</span> {(partner as any).phoneDisplay || (partner as any).whatsapp}
                          </a>
                        )}
                        {(partner as any).email && (
                          <a href={`mailto:${(partner as any).email}`} className="flex items-center gap-2 text-xs text-[#6B7A3A] hover:text-[#7A9B3A] font-medium">
                            <span>Email:</span> {(partner as any).email}
                          </a>
                        )}
                        {(partner as any).location && (
                          <p className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                            <span className="text-[#A67C52]">Location:</span> {(partner as any).location}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="bg-[#7A9B3A] rounded-2xl p-10 text-white text-center mt-6">
          <h2 className="text-3xl font-bold mb-3">Become a Partner</h2>
          <p className="text-white/90 mb-2 max-w-xl mx-auto leading-relaxed">
            Are you an organization, clinic, studio, or institution that shares our commitment to inclusive, compassionate education?
            We'd love to explore how we can work together to make a greater impact.
          </p>
          <p className="text-white/70 text-sm mb-6">We welcome partnerships from healthcare providers, educational institutions, NGOs, studios, and community organizations.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#6B7A3A] font-semibold px-10 py-3 rounded-full hover:bg-[#E8DCC4] transition-colors text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
