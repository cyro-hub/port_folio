import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ClearButton from "../components/ClearButton";
import Section from "../home/components/Section";

function Services() {
  return (
    <div className="w-full h-[100vh] snap-y snap-mandatory overflow-y-scroll">
      <Nav />
      <Section>
        <div className="flex flex-col items-center justify-center mt-20 text-center p-8 lg:p-16">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12">
            Empowering businesses with cutting-edge technology, seamless web
            applications, and tailored software solutions.
          </p>

          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[calc(100vh-200px)] overflow-y-auto">
            {/* Service 1 */}
            <div className="border border-white/15 rounded-[2px] shadow-md p-6 text-left">
              <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
              <p className="text-gray-400 mb-4">
                Custom websites using modern frameworks like React.js,
                TypeScript, and Tailwind CSS, tailored to your unique business
                needs.
              </p>
              <ClearButton
                buttonText="Get Started"
                cn={`py-2 px-4 text-white`}
              />
            </div>

            {/* Service 2 */}
            <div className="border border-white/15 rounded-[2px] shadow-md p-6 text-left">
              <h2 className="text-2xl font-semibold mb-4">Inventory Systems</h2>
              <p className="text-gray-400 mb-4">
                Streamlined CMS/WMS solutions for efficient inventory tracking
                and seamless operations.
              </p>
              <ClearButton
                buttonText="Learn More"
                cn={`py-2 px-4 text-white`}
              />
            </div>

            {/* Service 3 */}
            <div className="border border-white/15 rounded-[2px] shadow-md p-6 text-left">
              <h2 className="text-2xl font-semibold mb-4">API Development</h2>
              <p className="text-gray-400 mb-4">
                Robust backend solutions using Express.js and MongoDB, designed
                for scalability and performance.
              </p>
              <ClearButton
                buttonText="Contact Me"
                cn={`py-2 px-4 text-white`}
              />
            </div>

            {/* Service 4 */}
            <div className="border border-white/15 rounded-[2px] shadow-md p-6 text-left">
              <h2 className="text-2xl font-semibold mb-4">
                Mobile App Development
              </h2>
              <p className="text-gray-400 mb-4">
                Cross-platform apps with React Native and Expo, offering
                responsive designs and optimal user experiences.
              </p>
              <ClearButton buttonText="Explore" cn={`py-2 px-4  text-white`} />
            </div>

            {/* Service 5 */}
            <div className="border border-white/15 rounded-[2px] shadow-md p-6 text-left">
              <h2 className="text-2xl font-semibold mb-4">SEO Optimization</h2>
              <p className="text-gray-400 mb-4">
                Proven SEO strategies to boost your website traffic and improve
                search engine rankings.
              </p>
              <ClearButton
                buttonText="Optimize Now"
                cn={`py-2 px-4 text-white`}
              />
            </div>

            {/* Service 6 */}
            <div className="border border-white/15 rounded-[2px] shadow-md p-6 text-left">
              <h2 className="text-2xl font-semibold mb-4">
                Integration Services
              </h2>
              <p className="text-gray-400 mb-4">
                Seamless integrations with third-party tools like Odoo, QZ Tray,
                and more for enhanced business operations.
              </p>
              <ClearButton buttonText="Integrate" cn={`py-2 px-4 text-white`} />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default Services;
