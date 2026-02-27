import { useState } from "react";

export function ApplyNow() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    await fetch("https://formspree.io/f/mwvnwdry", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Apply Now</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Take the first step toward your child's brighter future
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14 space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">

          {submitted ? (
            /* ── Thank You Message ── */
            <div className="text-center py-10">
              <div className="text-6xl mb-5">🎉</div>
              <h3 className="text-2xl font-bold text-[#6B7A3A] mb-3">
                Application Submitted!
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
                Thank you for applying to The Willow Village! Our admissions team will
                review your application and contact you within <strong>2 business days</strong>.
              </p>
              <div className="bg-[#F9F5EE] rounded-xl p-5 text-sm text-gray-600 mb-6">
                <p className="mb-1">📞 <strong>+92-322-0277871</strong></p>
                <p>✉️ <strong>Thewillovillage@gmail.com</strong></p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#7A9B3A] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#6B7A3A] transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            /* ── Application Form ── */
            <>
              <h2 className="text-xl font-bold text-[#6B7A3A] mb-2">
                Enrollment Application Form
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form below and our admissions team will contact you within 2 business days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Child Info */}
                <div className="bg-[#F9F5EE] rounded-xl p-4 space-y-4">
                  <h3 className="font-bold text-[#6B7A3A] text-sm uppercase tracking-wide">Child Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Child's Full Name *</label>
                    <input name="child_name" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A]" placeholder="Enter child's full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                    <input name="date_of_birth" type="date" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select name="gender" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A]">
                      <option value="">Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>

                {/* Parent Info */}
                <div className="bg-[#F9F5EE] rounded-xl p-4 space-y-4">
                  <h3 className="font-bold text-[#6B7A3A] text-sm uppercase tracking-wide">Parent / Guardian Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent / Guardian Name *</label>
                    <input name="parent_name" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A]" placeholder="Enter full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                    <input name="phone" type="tel" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A]" placeholder="e.g. 0312 1234567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input name="email" type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A]" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                    <input name="address" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A]" placeholder="Street, Area, Karachi" />
                  </div>
                </div>

                {/* Program */}
                <div className="bg-[#F9F5EE] rounded-xl p-4 space-y-4">
                  <h3 className="font-bold text-[#6B7A3A] text-sm uppercase tracking-wide">Program Details</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest *</label>
                    <select name="program" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A]">
                      <option value="">Select a program</option>
                      <option>Montessori Program (Ages 2.5–6)</option>
                      <option>Special Support Program (Ages 3–12)</option>
                      <option>Speech Therapy</option>
                      <option>Occupational Therapy</option>
                      <option>Behavioral Therapy</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Any Special Needs or Concerns? <span className="text-gray-400">(Optional)</span>
                    </label>
                    <textarea name="special_needs" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B3A] resize-none" placeholder="Briefly describe your child's needs or any concerns..." />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#7A9B3A] text-white font-semibold py-3.5 rounded-full hover:bg-[#6B7A3A] transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </>
          )}
        </div>

        <div className="bg-[#E8DCC4] rounded-2xl p-6 text-center">
          <p className="text-gray-700 text-sm">
            Prefer to contact us directly? Call{" "}
            <strong className="text-[#6B7A3A]">+92 322 0277871</strong> or email{" "}
            <strong className="text-[#6B7A3A]">Thewillovillage@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Requirements() {
  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Admission Requirements</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">Everything you need to know before enrolling your child</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-14 space-y-6">
        {[
          {
            title: "🎂 Age Requirements",
            items: [
              "Montessori Program: Ages 2.5 – 6 years",
              "Special Support Program: Ages 3 – 12 years",
              "Therapy Services: All ages welcome",
            ],
          },
          {
            title: "📄 Required Documents",
            items: [
              "Child's birth certificate (original + 1 copy)",
              "Recent passport-size photographs (x4)",
              "Parent/Guardian CNIC copy",
              "Previous school records or report cards (if applicable)",
              "Medical or psychological assessment reports (if available)",
              "Vaccination record / health card",
            ],
          },
          {
            title: "📋 Admission Process",
            items: [
              "Step 1: Submit the online application form",
              "Step 2: Receive confirmation and schedule a school visit",
              "Step 3: Initial assessment with our education and therapy team",
              "Step 4: Review of assessment results with parents",
              "Step 5: Enrollment confirmation and fee payment",
              "Step 6: Welcome orientation for child and family",
            ],
          },
          {
            title: "ℹ️ Important Notes",
            items: [
              "Admission is open throughout the year subject to seat availability",
              "A trial period of 2 weeks is offered for new students",
              "All assessments are conducted by certified professionals",
              "We welcome children of all abilities and learning styles",
            ],
          },
        ].map((section) => (
          <div key={section.title} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4]">
            <h2 className="text-xl font-bold text-[#6B7A3A] mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#7A9B3A] font-bold mt-0.5 shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-[#7A9B3A] rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Enroll?</h2>
          <p className="text-white/90 mb-5 text-sm">Our admissions team is here to guide you through every step of the process.</p>
          <a href="/admissions/apply" className="inline-block bg-white text-[#6B7A3A] font-semibold px-8 py-3 rounded-full hover:bg-[#E8DCC4] transition-colors">Apply Now</a>
        </div>
      </div>
    </div>
  );
}

export function FeesAndScholarships() {
  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Fees & Scholarships</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">Transparent pricing and financial support for every family</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-14 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-5">Program Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { program: "Admission Fees", fee: "PKR 10,000", period: "one-time", note: "To enroll a child at The Willow Village" },
              { program: "Inclusive Montessori Program (Without Therapy Sessions)", fee: "PKR 10,000", period: "per month", note: "Includes all learning materials & activities" },
              { program: "Inclusive Montessori Program (With Therapy Sessions)", fee: "PKR 20,000", period: "per month", note: "Includes ILP, one-on-one sessions & group therapy" },
              { program: "Stationary", fee: "PKR 6,500", period: "per-child", note: "Initial Stationary fee:(one-time) per year" },

            ].map((item) => (
              <div key={item.program} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4]">
                <h3 className="font-bold text-[#6B7A3A] text-base mb-1">{item.program}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold text-[#7A9B3A]">{item.fee}</span>
                  <span className="text-gray-400 text-sm">{item.period}</span>
                </div>
                <p className="text-gray-500 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-4">What's Included</h2>
          <ul className="space-y-2">
            {[
              "All learning materials and classroom supplies",
              "Monthly progress reports for parents",
              "Parent-teacher meetings every term",
              "Access to school events and community activities",
              "Free initial consultation with our education team",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-[#7A9B3A] font-bold shrink-0">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#7A9B3A] rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">🎓 Scholarship Program</h2>
          <p className="text-white/90 mb-3 leading-relaxed">We firmly believe that financial constraints should never prevent a child from receiving the education and care they deserve. The Willow Village offers need-based scholarships and sibling discounts for qualifying families.</p>
          <ul className="space-y-1 mb-5 text-white/90 text-sm">
            <li>✓ Need-based fee waivers (up to 50%)</li>
            <li>✓ Sibling discount: 15% off second child's fees</li>
            <li>✓ Installment payment plans available</li>
          </ul>
          <a href="/contact" className="inline-block bg-white text-[#6B7A3A] font-semibold px-8 py-3 rounded-full hover:bg-[#E8DCC4] transition-colors">Apply for Scholarship</a>
        </div>
      </div>
    </div>
  );
}

export function ExpansionPlans() {
  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Expansion Plans</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">Our roadmap to reaching more children across Pakistan</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-14 space-y-6">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DCC4]">
          <h2 className="text-2xl font-bold text-[#6B7A3A] mb-4">Why We're Expanding</h2>
          <p className="text-gray-700 leading-relaxed">The demand for inclusive, high-quality education in Karachi — and across Pakistan — far exceeds the current supply. Thousands of children with learning differences have nowhere to go. Our expansion is our commitment to change that.</p>
        </div>
        <div className="space-y-5">
          {[
            { year: "2026", icon: "💻", title: "Digital Learning Center", desc: "Launching a state-of-the-art digital classroom with interactive smart boards, assistive technology for children with special needs, and a dedicated online learning portal for remote students." },
            { year: "2026-DEC", icon: "🏫", title: "Second Campus — DHA, Karachi", desc: "We are actively scouting locations in DHA Phase 6 to open our second campus, designed to serve families in the southern areas of Karachi. The new campus will have expanded therapy suites, a sensory room, and an outdoor Montessori play area." },
            { year: "2027", icon: "🌐", title: "Online Therapy Services", desc: "Extending our therapy services to families outside Karachi through secure, professional online sessions for speech therapy, behavioral therapy, and parent counseling." },
            { year: "2027", icon: "🇵🇰", title: "National Expansion — Lahore & Islamabad", desc: "With a proven model in Karachi, we plan to franchise The Willow Village concept to Lahore and Islamabad, bringing our approach to inclusive education to every major city in Pakistan." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4] flex gap-5 items-start">
              <div className="shrink-0 text-center">
                <div className="w-14 h-14 bg-[#7A9B3A] rounded-full flex items-center justify-center text-2xl mb-1">{item.icon}</div>
                <span className="text-xs font-bold text-[#6B7A3A]">{item.year}</span>
              </div>
              <div>
                <h3 className="font-bold text-[#6B7A3A] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#E8DCC4] rounded-2xl p-6 text-center">
          <p className="text-gray-700 font-medium">Interested in partnering with us on our expansion? <a href="/contact" className="text-[#7A9B3A] font-bold underline">Get in touch →</a></p>
        </div>
      </div>
    </div>
  );
}

export function UpcomingPrograms() {
  return (
    <div className="pt-24 min-h-screen bg-[#F9F5EE]">
      <div className="bg-[#7A9B3A] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Upcoming Programs</h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">Exciting new offerings coming soon to The Willow Village</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-14 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { icon: "🎨", title: "After-School Enrichment", status: "Coming 2026", desc: "Art, music, STEM, and life skills activities for ages 5–10. Designed to complement formal education with creative and practical experiences." },
            { icon: "👨‍👩‍👧", title: "Parent Training Workshops", status: "Coming 2026", desc: "Monthly workshops to equip parents with tools, strategies, and emotional support for raising children with learning differences." },
            { icon: "☀️", title: "Summer Learning Camp", status: "Summer 2026", desc: "A fun-filled summer program combining Montessori-inspired activities, therapy sessions, and recreational outings for all children." },
            { icon: "🧠", title: "Cognitive Development Program", status: "Coming 2026", desc: "A specialized program for children with memory, attention, and executive function challenges, incorporating the latest cognitive training techniques." },
            { icon: "📱", title: "Online Therapy Sessions", status: "Coming 2026", desc: "Professional speech, behavioral, and occupational therapy delivered securely online — accessible to families anywhere in Pakistan." },
            { icon: "🏅", title: "Inclusive Sports Program", status: "Coming 2026", desc: "An adaptive sports and physical activity program designed to build confidence, teamwork, and motor skills in children of all abilities." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DCC4]">
              <div className="text-3xl mb-3">{item.icon}</div>
              <span className="inline-block bg-[#E8DCC4] text-[#6B7A3A] text-xs font-semibold px-3 py-1 rounded-full mb-3">{item.status}</span>
              <h3 className="font-bold text-[#6B7A3A] text-base mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#7A9B3A] rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Stay Updated</h2>
          <p className="text-white/90 mb-5 text-sm">Be the first to know when new programs launch. Contact us to join our notification list.</p>
          <a href="/contact" className="inline-block bg-white text-[#6B7A3A] font-semibold px-8 py-3 rounded-full hover:bg-[#E8DCC4] transition-colors">Notify Me</a>
        </div>
      </div>
    </div>
  );
}