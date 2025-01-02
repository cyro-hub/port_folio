import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimatedButton from "../components/AccentButton";
import Section from "../components/Section";

function Warehouse() {
  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <Nav />

      {/* Hero Section */}
      <Section>
        <div className="relative flex flex-col items-center justify-center text-center p-8 lg:p-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Warehouse Work Experience
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mb-12">
            Over 4 years of hands-on experience in warehouse management,
            logistics, and operations, with expertise in streamlining inventory
            workflows and leveraging WMS technology.
          </p>
          <AnimatedButton
            buttonText="Contact Me for Opportunities"
            cn="px-6 py-3 bg-blue-600 text-white"
          />
        </div>
      </Section>

      {/* About Experience Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 p-8 lg:p-16">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              4+ Years in Warehouse Operations
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              My journey in warehouse management began with a passion for
              optimizing processes and ensuring seamless logistics. From
              handling inventory to overseeing shipments, I’ve developed
              expertise in:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>Inventory tracking and stock accuracy</li>
              <li>Team supervision and training</li>
              <li>Efficient pallet management</li>
              <li>Order processing and shipping coordination</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-64 lg:h-96">
            <img
              src="/images/warehouse.jpg" // Replace with a warehouse-related image
              alt="Warehouse Experience"
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </Section>

      {/* WMS Software Showcase */}
      <Section>
        <div className="p-8 lg:p-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Showcasing My WMS Software
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Software Image */}
            <div className="relative w-full h-64 lg:h-96">
              <img
                src="/images/wms-software.jpg" // Replace with an actual screenshot of your WMS
                alt="WMS Software"
                className="object-contain w-full h-full rounded-lg shadow-md"
              />
            </div>

            {/* Software Features */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 text-lg mb-4">
                My custom-built WMS software is designed to revolutionize
                inventory workflows with features like:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Real-time inventory updates</li>
                <li>Barcode and QR code scanning</li>
                <li>Order and shipment tracking</li>
                <li>Custom reporting tools</li>
              </ul>
              <AnimatedButton
                buttonText="Learn More About My Software"
                cn="px-6 py-3 bg-blue-600 text-white mt-4"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <div className="p-8 lg:p-16 bg-gradient-to-b from-gray-50 to-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Testimonials from Colleagues
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="border rounded-lg shadow-md p-6 text-left bg-white">
              <p className="text-gray-700 mb-4">
                "An amazing warehouse professional! Always dependable and
                efficient with any task."
              </p>
              <h4 className="text-gray-800 font-semibold">- John Doe</h4>
            </div>

            {/* Testimonial 2 */}
            <div className="border rounded-lg shadow-md p-6 text-left bg-white">
              <p className="text-gray-700 mb-4">
                "A true problem-solver with a keen eye for optimizing
                inventory."
              </p>
              <h4 className="text-gray-800 font-semibold">- Jane Smith</h4>
            </div>

            {/* Testimonial 3 */}
            <div className="border rounded-lg shadow-md p-6 text-left bg-white">
              <p className="text-gray-700 mb-4">
                "Their WMS implementation transformed our operations
                completely!"
              </p>
              <h4 className="text-gray-800 font-semibold">- Sarah Johnson</h4>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default Warehouse;
