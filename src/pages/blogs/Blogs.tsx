import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimatedButton from "../components/AccentButton";
import SearchBox from "../components/SearchBox";
import Section from "../components/Section";
import { useEffect, useRef, useState } from "react";
import useGetDocs from "@/hooks/useGetDocs";
import { useLoading } from "@/contextApi/LoadingContext";
import { toast } from "sonner";
import convertFirebaseTimeToNormalTime from "@/utils/convertFirebaseTimeToNormalTime";
import clsx from "clsx";

type Category = "developer" | "barista" | "warehouse" | "all";

type Blog = {
  id: string;
  title: string;
  description: string;
  category: Category;
  date: {
    seconds: number;
    nanoseconds: number;
  };
};

function Blog() {
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { docs: blogs, loading, error } = useGetDocs<Blog>("Blogs");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    "all",
  ]);
  const { setLoading } = useLoading();

  const categories: Category[] = ["developer", "barista", "warehouse", "all"];

  // Update loading state
  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  // Handle errors
  useEffect(() => {
    if (error instanceof Error) {
      toast.error("An error occurred", {
        description: error.message || "Something went wrong.",
      });
    }
  }, [error]);

  // Initialize filtered blogs
  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  // Handle search
  const searchFn = (query: string) => {
    let filtered = blogs;

    // Apply category filter
    if (!selectedCategories.includes("all")) {
      filtered = filtered.filter((blog) =>
        selectedCategories.includes(blog.category)
      );
    }

    // Apply search query filter
    if (query.trim() !== "") {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  };

  // Toggle category selection
  const toggleCategory = (category: Category) => {
    if (category === "all") {
      setSelectedCategories(["all"]);
      setFilteredBlogs(blogs);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev.filter((c) => c !== "all"), category]
      );
    }
  };

  // Apply category filter when selectedCategories change
  useEffect(() => {
    if (selectedCategories.includes("all")) {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter((blog) => selectedCategories.includes(blog.category))
      );
    }
  }, [selectedCategories, blogs]);

  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <Nav refFooter={scrollToFooter} />
      <Section>
        <div className="flex flex-col items-center justify-center mt-20 text-center p-8 lg:p-16">
          <div className="w-[300px] mb-6">
            <SearchBox submit={searchFn} />
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={clsx(
                  "px-4 py-1 rounded-[4px] capitalize transition-all",
                  selectedCategories.includes(category)
                    ? "bg-yellow-500 text-white"
                    : "rounded shadow-lg bg-slate-700/30 backdrop-blur-md"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog List */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl max-h-[calc(100vh-170px)] overflow-y-auto">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post) => (
                <div
                  key={post.id}
                  className="border border-white/20 rounded-[4px] shadow-md p-6 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-400 mb-2">
                      {convertFirebaseTimeToNormalTime(post.date)}
                    </p>
                    <p className="text-gray-200 mb-4">{post.description}</p>
                  </div>
                  <AnimatedButton
                    buttonText="Read More"
                    cn="py-2 px-4 text-white"
                    onClick={() => (window.location.href = "#")}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No blogs found.</p>
            )}
          </div>
        </div>
      </Section>
      <Footer ref={footerRef} />
    </div>
  );
}

export default Blog;
