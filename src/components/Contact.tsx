import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Loader2, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

const InputField = ({ label, id, type = "text", value, onChange, required, disabled, isTextArea = false }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative mb-6 group">
      <motion.label
        initial={false}
        animate={{
          y: isFocused || hasValue ? -28 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? "var(--primary)" : "var(--muted-foreground)",
        }}
        className="absolute left-4 top-4 pointer-events-none origin-left transition-colors font-medium"
      >
        {label}
      </motion.label>
      
      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={5}
          className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 outline-none transition-all resize-none glass-card disabled:opacity-50"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 outline-none transition-all glass-card disabled:opacity-50"
        />
      )}
      
      {/* Focus Shimmer */}
      <motion.div
        initial={false}
        animate={{ opacity: isFocused ? 1 : 0 }}
        className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </div>
  );
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Connecting to server failed. Please ensure the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-mesh overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            CONTACT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create <span className="text-gradient">Together</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you have a specific project in mind or just want to chat about 
            the latest in cybersecurity, I'm always open to new connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-[2rem] space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-xl font-medium">ypd2005@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-xl font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2rem]">
              <h4 className="text-lg font-bold mb-4">Social Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Yashpareshdoshi" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer flex items-center justify-center group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-pointer flex items-center justify-center group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer flex items-center justify-center group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-[2.5rem]">
              <InputField
                label="Full Name"
                value={formData.name}
                onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isSubmitting}
              />
              <InputField
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
              />
              <InputField
                label="Message"
                value={formData.message}
                onChange={(e: any) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={isSubmitting}
                isTextArea
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 group relative overflow-hidden bg-primary text-white py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      Sending message...
                      <Loader2 className="w-6 h-6 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


