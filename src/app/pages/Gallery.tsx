import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- DATA CONFIGURATION ---
const categories = ["All", "Staff & Awareness", "Therapeutic Learning", "Sensory Play", "Early Development", "Creative Arts"];

const generateGalleryData = () => {
  const data = [];

  // 1. Staff Image
  data.push({
    url: "./staff.jpeg",
    title: "Our Dedicated Team",
    description: "Celebrating World Autism Awareness Month with the hearts behind The Willow Village.",
    category: "Staff & Awareness"
  });

  // 2. Dynamic Image Generation for im1 - im23
  for (let i = 1; i <= 23; i++) {
    let category = "Therapeutic Learning";
    let title = "";
    let description = "";

    // Specific mapping based on the visual activities in your photos
    switch (i) {
      case 1:
        category = "Therapeutic Learning";
        title = "Fine Motor Precision";
        description = "Developing focus and coordination through guided tabletop therapy.";
        break;
      case 2:
      case 3:
        category = "Creative Arts";
        title = "Artistic Expression";
        description = "Encouraging self-expression and sustained attention through color and drawing.";
        break;
      case 4:
        category = "Therapeutic Learning";
        title = "Logical Reasoning";
        description = "Building structural understanding and problem-solving skills with tactile blocks.";
        break;
      case 5:
        category = "Early Development";
        title = "Foundational Literacy";
        description = "Interactive letter recognition and tactile puzzles for early communication.";
        break;
      case 6:
      case 8:
        category = "Sensory Play";
        title = "Tactile Discovery";
        description = "Exploring textures and sensory inputs to support environmental processing.";
        break;
      case 7:
        category = "Sensory Play";
        title = "Rhythmic Learning";
        description = "Using sound and music to encourage hand-eye coordination and joy.";
        break;
      case 9:
        category = "Creative Arts";
        title = "Mastering Patterns";
        description = "Hands-on sponge painting to explore shapes, colors, and creative flow.";
        break;
      case 10:
        category = "Early Development";
        title = "Group Socialization";
        description = "Fostering parallel play and social boundaries in a safe, communal space.";
        break;
      case 11:
        category = "Early Development";
        title = "Focus & Concentration";
        description = "Individualized tasks designed to increase task-completion and attention spans.";
        break;
      case 12:
        category = "Early Development";
        title = "Interactive Busy Boards";
        description = "Engaging with multi-sensory wall boards to refine daily life motor skills.";
        break;
      case 13:
        category = "Early Development";
        title = "Guided Mentorship";
        description = "One-on-one sessions that provide the emotional safety to explore new concepts.";
        break;
      case 14:
        category = "Early Development";
        title = "Color Categorization";
        description = "Sorting and stacking exercises to build cognitive classification skills.";
        break;
      case 15:
        category = "Therapeutic Learning";
        title = "Puppet Storytelling";
        description = "Using imaginative play to build social-emotional understanding and empathy.";
        break;
      case 16:
        category = "Sensory Play";
        title = "Texture Painting";
        description = "Engaging the senses through art to improve tactile tolerance.";
        break;
      case 17:
        category = "Sensory Play";
        title = "Collaborative Exploration";
        description = "Shared sensory experiences that build peer connection and teamwork.";
        break;
      case 18:
        category = "Sensory Play";
        title = "Mindful Reading";
        description = "A quiet corner for literacy and visual processing of stories.";
        break;
      case 19:
        category = "Sensory Play";
        title = "Active Coordination";
        description = "Gross motor activities that promote balance, strength, and physical confidence.";
        break;
      case 20:
        category = "Sensory Play";
        title = "Creative Puppetry";
        description = "Developing communication through roleplay and character interaction.";
        break;
      default:
        category = "Therapeutic Learning";
        title = "Empowered Learning";
        description = "Every moment at Willow Village is a step toward independence and growth.";
    }

    data.push({
      url: `./im${i}.jpeg`,
      title,
      description,
      category
    });
  }
  return data;
};
const galleryImages = generateGalleryData();

// --- COMPONENT ---
export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 bg-[#F9F7F3] min-h-screen">
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

      {/* Main Program Sections (Top Cards) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* The Willow Village School Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-[#F9F7F3] rounded-3xl p-6 shadow-sm border border-gray-100"
            >
              <div className="relative h-72 w-full overflow-hidden rounded-2xl group mb-6">
                <img 
                  src="banner1.jpeg" 
                  alt="The Willow Village School" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">The Willow Village School</h2>
                <p className="text-[#7A9B3A] font-semibold mb-4">Inclusive Education</p>
                <p className="text-gray-700 leading-relaxed">
                  Our main campus offers a holistic, inspired education where children develop independence, 
                  critical thinking, and a lifelong love for learning in a beautifully prepared environment.
                </p>
              </div>
            </motion.div>

            {/* Therapy Programs Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-[#F9F7F3] rounded-3xl p-6 shadow-sm border border-gray-100"
            >
              <div className="relative h-72 w-full overflow-hidden rounded-2xl group mb-6">
                <img 
                  src="im15.jpeg" 
                  alt="Therapy Programs" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Therapy Programs</h2>
                <p className="text-[#7A9B3A] font-semibold mb-4">Developmental Support</p>
                <p className="text-gray-700 leading-relaxed">
                  Providing individualized therapeutic support, our programs focus on occupational, speech, 
                  and developmental growth, ensuring every child receives the specific attention they need to thrive.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Community Gallery</h3>
          <motion.div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[#7A9B3A] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-[#E8DCC4] shadow-sm border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl bg-white cursor-pointer flex flex-col"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white border-2 border-white px-6 py-2 rounded-full font-semibold tracking-wider">
                        VIEW IMAGE
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-[#7A9B3A] text-xs font-bold uppercase tracking-wide mb-2">{image.category}</p>
                    <h3 className="text-gray-900 font-bold text-xl mb-3">{image.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white text-4xl transition-colors"
              >
                &times;
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery Fullscreen" 
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}