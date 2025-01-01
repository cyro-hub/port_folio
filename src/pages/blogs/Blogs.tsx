import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Section from "../home/components/Section";
import AnimatedButton from "../components/AccentButton";
import SearchBox from "../components/SearchBox";

function Blog() {
  function onSubmit(query: string) {
    console.log(query);
    // setIsLoading(true);
    // toast("Event has been created", {
    //   description: "Sunday, December 03, 2023 at 9:00 AM",
    //   action: {
    //     label: "Undo",
    //     onClick: () => console.log("Undo"),
    //   },
    // });
  }

  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <Nav />
      <Section>
        <div className="flex flex-col items-center justify-center mt-20 text-center p-8 lg:p-16">
          <div className="w-[300px] mb-6">
            <SearchBox submit={onSubmit} />
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl max-h-[calc(100vh-200px)] overflow-y-auto">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="border border-white/20 rounded-[4px] shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                </div>
                <AnimatedButton
                  buttonText="Read More"
                  cn="py-2 px-4 text-white"
                  onClick={() => (window.location.href = post.link)}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

const blogPosts = [
  {
    title: "5 Tips for Writing Scalable APIs with Express.js",
    date: "December 20, 2024",
    excerpt:
      "Discover best practices for designing scalable and performant APIs using Express.js, TypeScript, and MongoDB.",
    link: "#",
  },
  {
    title: "Mastering Tailwind CSS for Responsive Design",
    date: "December 15, 2024",
    excerpt:
      "Learn how to use Tailwind CSS effectively to create stunning and responsive user interfaces.",
    link: "#",
  },
  {
    title: "Integrating Odoo with Node.js: A Step-by-Step Guide",
    date: "December 10, 2024",
    excerpt:
      "A detailed tutorial on how to integrate Odoo's ERP features with your Node.js applications.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
  {
    title: "Getting Started with Blockchain Development",
    date: "December 5, 2024",
    excerpt:
      "A beginner-friendly guide to understanding blockchain technology and creating smart contracts.",
    link: "#",
  },
];

export default Blog;
