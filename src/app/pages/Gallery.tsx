import { motion } from "motion/react";
import { useState } from "react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1763310225537-f7161d5c93e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2xhc3Nyb29tJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzcxNjc0NjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Montessori Classroom",
    category: "Classroom"
  },
  {
    url: "https://images.unsplash.com/photo-1770807188136-6c90c0859f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwYWN0aXZpdGllc3xlbnwxfHx8fDE3NzE2NDkyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Learning Activities",
    category: "Activities"
  },
  {
    url: "https://images.unsplash.com/photo-1565425518476-3229123699c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMGVkdWNhdGlvbmFsJTIwZ2FtZXN8ZW58MXx8fHwxNzcxNjY1MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Educational Games",
    category: "Activities"
  },
  {
    url: "https://images.unsplash.com/photo-1770096679916-2cd9c720d400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzE2NzQ2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Individual Attention",
    category: "Teaching"
  },
  {
    url: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFydCUyMGNsYXNzfGVufDF8fHx8MTc3MTY2NzYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Creative Arts",
    category: "Activities"
  },
  {
    url: "https://images.unsplash.com/photo-1758624723522-7e9f9313386e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTY3NDYyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Outdoor Learning",
    category: "Environment"
  },
  {
    url: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBraWRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcxNjc0Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Focused Learning",
    category: "Classroom"
  },
  {
    url: "https://images.unsplash.com/photo-1586512803683-bdc3f85b15a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwbWF0ZXJpYWxzJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTY3NDI5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Montessori Materials",
    category: "Materials"
  },
  {
    url: "https://images.unsplash.com/photo-1597075958693-75173d1c837f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwdGhlcmFweSUyMHNlc3Npb258ZW58MXx8fHwxNzcxNjc0Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Support Sessions",
    category: "Therapy"
  }
];

const categories = ["All", "Classroom", "Activities", "Teaching", "Environment", "Materials", "Therapy"];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A glimpse into our nurturing learning environment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore our carefully designed spaces, discover our engaging activities, and see how we create a calm, supportive environment where every child can flourish at their own pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[#7A9B3A] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-[#E8DCC4] shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-square">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-[#6B7A3A] w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl hover:bg-[#E8DCC4] transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#7A9B3A] to-[#6B7A3A] text-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              What You'll See in Our Environment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-bold mb-2">Classroom Setup</h3>
                <p className="text-sm text-white/80">Carefully organized spaces for focused learning</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-bold mb-2">Learning Materials</h3>
                <p className="text-sm text-white/80">Montessori-inspired hands-on resources</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-bold mb-2">Activity-Based Learning</h3>
                <p className="text-sm text-white/80">Engaging experiences for every child</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌿</div>
                <h3 className="font-bold mb-2">Calm Environment</h3>
                <p className="text-sm text-white/80">Peaceful spaces that promote focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
