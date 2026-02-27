import { Link } from "react-router";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

<img src="logo.png" alt="logo" />
export function Footer() {
  return (
    <footer className="bg-[#6B7A3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img src="/logo.png" alt="The Willow Village" className="h-20 w-auto mb-4" />
            <div className="font-bold text-[#F4E5C7] text-lg">The Willow Village</div>
              <div className="text-sm text-[#A67C52] italic">Shaping Independent Thinkers</div>
            <p className="text-sm text-white/90 leading-relaxed">
              A nurturing Montessori environment for early learners and children requiring special support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-[#F4E5C7] transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-sm hover:text-[#F4E5C7] transition-colors">Programs</Link></li>
              <li><Link to="/therapy" className="text-sm hover:text-[#F4E5C7] transition-colors">Therapy & Support</Link></li>
              <li><Link to="/admissions" className="text-sm hover:text-[#F4E5C7] transition-colors">Admissions</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>🌸 Montessori (2.5-6 years)</li>
              <li>🌿 Therapy Center</li>
              <li>🎯 Individual Learning Plans</li>
              <li>💬 Speech Therapy</li>
              <li>🧩 Behavior Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+92 322 0277871</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>thewillovillage@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>House# B, 8, Federal B Area Block 12 Gulberg Town, Karachi, 75950</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for every child's unique journey
          </p>
          <p className="mt-2 text-white/70">
            © 2026 The Willow Village. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
