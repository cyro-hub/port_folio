import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaAward, FaLinkedin } from "react-icons/fa";

const testimonials = [
  {
    award: "Letter of Appreciation Black Friday sales",
    manager: "Yehia El Zomor",
    year: 2023,
    image:
      "https://www.pexels.com/photo/thank-you-lettering-on-white-surface-4439457/",
    managerPhoto:
      "https://media.licdn.com/dms/image/v2/D4D03AQE8PDJ057fjaQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709379422173?e=1744243200&v=beta&t=uWVM6ylnvz6QkxXCTVi8y2F129-m0ob1PeZBMBJFbKM",
    linkedin: "https://www.linkedin.com/in/yehia-el-zomor-a8234b29/",
  },
  {
    award: "Letter of Appreciation Summer sales",
    manager: "Yehia El Zomor",
    year: 2024,
    image:
      "https://www.pexels.com/photo/thank-you-lettering-on-white-surface-4439457/",
    managerPhoto:
      "https://media.licdn.com/dms/image/v2/D4D03AQE8PDJ057fjaQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709379422173?e=1744243200&v=beta&t=uWVM6ylnvz6QkxXCTVi8y2F129-m0ob1PeZBMBJFbKM",
    linkedin: "https://www.linkedin.com/in/yehia-el-zomor-a8234b29/",
  },
  {
    award: "Certificate of Appreciation End of Year sales",
    manager: "Yehia El Zomor",
    year: 2024,
    image:
      "https://www.pexels.com/photo/thank-you-lettering-on-white-surface-4439457/",
    managerPhoto:
      "https://media.licdn.com/dms/image/v2/D4D03AQE8PDJ057fjaQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709379422173?e=1744243200&v=beta&t=uWVM6ylnvz6QkxXCTVi8y2F129-m0ob1PeZBMBJFbKM",
    linkedin: "https://www.linkedin.com/in/yehia-el-zomor-a8234b29/",
  },
];

const TestimonialSection = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center text-center p-8 pt-20 lg:p-16">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Testimonials & Awards
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Recognizing excellence in coffee craftsmanship.
      </motion.p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl overflow-y-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="border rounded-lg shadow-md p-6 bg-gray-800 text-white flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* <LazyLoadImage
              alt={testimonial.award}
              src={testimonial.image}
              className="w-full h-64 object-cover rounded-lg mb-4"
            /> */}

            <FaAward size={100} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">{testimonial.award}</h3>
            <p className="text-gray-300 mb-4">Awarded in {testimonial.year}</p>
            <div className="flex items-center gap-4 mt-4">
              <LazyLoadImage
                alt={testimonial.manager}
                src={testimonial.managerPhoto}
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div className="flex flex-col items-start">
                <p className="text-gray-200">
                  Managed by {testimonial.manager}
                </p>
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 flex items-center gap-1 hover:text-blue-500"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
