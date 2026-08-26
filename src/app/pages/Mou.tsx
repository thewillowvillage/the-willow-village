import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Building2, CheckCircle2, Clock, Handshake, MessageCircle, Users } from "lucide-react";

const mouPhotos = [
  { src: "/mou-signing1.jpg", alt: "The Willow Village and Sohail University partnership signing" },
  { src: "/mou-signing2.jpg", alt: "Representatives celebrating the MOU partnership" },
  { src: "/mou-signing3.jpg", alt: "The Willow Village team during the MOU ceremony" },
  { src: "/mou-signing4.jpg", alt: "Education leaders joining the partnership celebration" },
];

const collaborationPoints = [
  "Meaningful learning and practical exposure for university students",
  "Shared knowledge between inclusive education and higher education teams",
  "Opportunities for research, internships, training, and community initiatives",
  "A stronger support network for children and families",
];

export function Mou() {
  return (
    <div className="pt-16 bg-[#F9F7F3] text-gray-800">
      <section className="relative min-h-[620px] overflow-hidden bg-[#31452a] sm:min-h-[clamp(560px,56.25vw,720px)]">
        <img
          src="/mou-signing.jpg"
          alt="The Willow Village and Sohail University signing ceremony"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#182217]/90 via-[#24341f]/65 to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-16 sm:min-h-[clamp(560px,56.25vw,720px)] sm:px-8 sm:py-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-white"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F4C430]">A partnership with purpose</p>
            <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-6xl">Building a stronger future for inclusive education</h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
              The Willow Village and Sohail University have joined hands through a Memorandum of Understanding to expand learning, training, and support opportunities for children and the people who care for them.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collaboration"
                className="inline-flex items-center gap-2 rounded-full bg-[#F4C430] px-6 py-3 font-bold text-[#24341f] transition-transform hover:scale-105"
              >
                Explore the partnership <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="mailto:thewillovillage@gmail.com?subject=Partnership%20with%20The%20Willow%20Village&body=Hello%2C%20I%20would%20like%20to%20discuss%20becoming%20a%20partner%20with%20The%20Willow%20Village."
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 font-bold text-white transition-colors hover:bg-white hover:text-[#24341f]"
              >
                <MessageCircle className="h-5 w-5" /> Collaborate with us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="collaboration" className="scroll-mt-20 bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#A67C52]">The MOU</p>
            <h2 className="mb-5 text-3xl font-bold text-[#526b2d] sm:text-5xl">When expertise meets compassion</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              This collaboration brings together Sohail University&apos;s academic community and The Willow Village&apos;s hands-on experience in Montessori and therapeutic support. Together, we can turn shared knowledge into practical action.
            </p>
            <div className="mt-8 flex items-center gap-4 border-l-4 border-[#F4C430] bg-[#F9F7F3] px-5 py-4">
              <Clock className="h-6 w-6 shrink-0 text-[#A67C52]" />
              <p className="font-semibold text-[#526b2d]">School timing: Monday to Friday, 9:00 AM to 9:00 PM</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {collaborationPoints.map((point) => (
              <div key={point} className="border border-[#E8DCC4] bg-[#F9F7F3] p-5">
                <CheckCircle2 className="mb-3 h-7 w-7 text-[#7A9B3A]" />
                <p className="font-semibold leading-relaxed text-[#526b2d]">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#A67C52]">A shared commitment</p>
            <h2 className="text-3xl font-bold text-[#526b2d] sm:text-5xl">More than a signing ceremony</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The photographs capture the beginning of a relationship built around access, dignity, and better opportunities for every learner.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mouPhotos.map((photo, index) => (
              <motion.figure
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden bg-white shadow-md"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="border border-t-0 border-[#E8DCC4] px-4 py-3 text-sm font-semibold text-[#526b2d]">
                  Partnership moment {index + 1}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#526b2d] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#F4C430]">Open doors, shared impact</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Want to collaborate with The Willow Village?</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              We welcome universities, schools, therapists, organizations, and community groups who want to create meaningful opportunities for children and families.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#526b2d] hover:bg-[#F4C430]">
              <Users className="h-5 w-5" /> Contact our team
            </Link>
            <a
              href="mailto:thewillovillage@gmail.com?subject=Partnership%20with%20The%20Willow%20Village&body=Hello%2C%20I%20would%20like%20to%20discuss%20becoming%20a%20partner%20with%20The%20Willow%20Village."
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 font-bold hover:bg-white hover:text-[#526b2d]"
            >
              <Handshake className="h-5 w-5" /> WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
