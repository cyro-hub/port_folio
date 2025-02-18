import { motion } from "framer-motion";
import imageUrl from "@/assets/about-me-image.jpg";
import SomeErrorCorrector from "../../components/SomeErrorCorrector";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "@/pages/components/Input";
import FormTextArea from "@/pages/components/TextArea";
import AnimatedButton from "@/pages/components/AccentButton";
import ClearButton from "@/pages/components/ClearButton";
import { forwardRef, useState } from "react";
import useSetDoc from "@/hooks/useSetDoc";
import Message from "@/@types/Message";

export const contactSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(1, {
    message: "Message must be at least 1 character.",
  }),
});

const Contact = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const [message] = useState<Message>({
    loading: "Loading...",
    success: "Thank you for reaching out!",
    error: "Failed to sent",
  });

  const { setDocument } = useSetDoc("contacts", message, form);

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    await setDocument(null, values);
  };

  return (
    <section
      ref={ref}
      className="relative h-screen max-w-[1500px] m-auto flex items-center justify-center scroll-snap-align-start snap-center"
    >
      <div
        className="section-content rounded-2xl bg-cover bg-center bg-no-repeat w-full h-full relative flex items-center justify-center"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(15, 23, 42.5,0.6 ) 0%, rgba(15, 23, 42,0.9) 30%, rgb(15, 23, 42) 60%),url(${imageUrl})`,
        }}
      >
        <motion.div
          className="w-full max-w-2xl p-8 rounded shadow-lg bg-slate-700/30 backdrop-blur-md border border-white/5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg text-yellow-400 text-bold pb-4">Contact Me</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormInput name="name" form={form} type="text" label="Name" />
              <FormInput name="email" form={form} type="text" label="Email" />
              <FormTextArea name="message" form={form} label="Message" />
              <div className="flex justify-between">
                <AnimatedButton buttonText="Send" cn={`py-1 px-4`} />
                <ClearButton buttonText="Clear" cn={`py-1 px-4`} form={form} />
              </div>
            </form>
          </Form>
        </motion.div>
        {/* so funny to close a line with a nasty div hmmm!!!!!!!!!!! */}
        <SomeErrorCorrector />
      </div>
    </section>
  );
});

export default Contact;
