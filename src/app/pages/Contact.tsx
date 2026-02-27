import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              We're here to answer your questions and welcome you to our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A] mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you have questions about our programs, want to schedule a visit, or need information about admissions, we're here to help.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-gradient-to-br from-white to-[#F9F7F3] p-6 rounded-2xl shadow-lg border-2 border-[#E8DCC4]"
                >
                  <div className="w-14 h-14 bg-[#7A9B3A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#7A9B3A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6B7A3A] mb-2">Phone</h3>
                    <a href="tel:+923220277871" className="text-lg text-gray-700 hover:text-[#7A9B3A] transition-colors">
                      +92 322 0277871
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Call us for immediate assistance</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-gradient-to-br from-white to-[#F9F7F3] p-6 rounded-2xl shadow-lg border-2 border-[#E8DCC4]"
                >
                  <div className="w-14 h-14 bg-[#8BB8E8]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#8BB8E8]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6B7A3A] mb-2">Email</h3>
                    <a href="mailto:info@willowvillage.edu.pk" className="text-lg text-gray-700 hover:text-[#7A9B3A] transition-colors">
                      thewillovillage@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Send us a detailed message</p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-gradient-to-br from-white to-[#F9F7F3] p-6 rounded-2xl shadow-lg border-2 border-[#E8DCC4]"
                >
                  <div className="w-14 h-14 bg-[#F4C430]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#F4C430]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6B7A3A] mb-2">Location</h3>
                    <p className="text-gray-700 leading-relaxed">
                      House# B, 8, Federal B Area Block 12 Gulberg Town, Karachi, 75950<br />
                      <br />
          
                    </p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-gradient-to-br from-white to-[#F9F7F3] p-6 rounded-2xl shadow-lg border-2 border-[#E8DCC4]"
                >
                  <div className="w-14 h-14 bg-[#E8A87C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-[#E8A87C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6B7A3A] mb-2">School Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 2:00 PM</p>
                    <p className="text-sm text-gray-600 mt-1">Visit by appointment recommended</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F9F7F3] to-white rounded-3xl shadow-2xl p-8 border-4 border-[#E8DCC4]"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B7A3A] mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCC4] focus:border-[#7A9B3A] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCC4] focus:border-[#7A9B3A] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCC4] focus:border-[#7A9B3A] focus:outline-none transition-colors"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCC4] focus:border-[#7A9B3A] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your child and any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7A9B3A] text-white py-4 rounded-full font-bold text-lg hover:bg-[#6B7A3A] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-3xl p-8 md:p-12 shadow-2xl text-center"
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Chat with Us on WhatsApp
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              For quick questions or to book an appointment, message us on WhatsApp
            </p>
            <a
              href="https://wa.me/923220277871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#25D366] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Open WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A] mb-8 text-center">
              Find Us Here
            </h2>
            <div className="bg-gradient-to-br from-[#F9F7F3] to-[#E8DCC4] rounded-3xl shadow-xl p-12 text-center border-4 border-[#7A9B3A]">
              <MapPin className="w-20 h-20 text-[#7A9B3A] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#6B7A3A] mb-4">Visit Our Campus</h3>
              <p className="text-lg text-gray-700 mb-2">House# B, 8, Federal B Area Block 12 Gulberg Town,</p>
              <p className="text-lg text-gray-700 mb-6">Karachi, 75950</p>
              <p className="text-gray-600">
                We recommend calling ahead to schedule a visit so we can give you our full attention
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
