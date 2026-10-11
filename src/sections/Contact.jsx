import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: "https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra%2C%20India",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
        const body = encodeURIComponent(
          `${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`
        );
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setSubmitStatus({
          type: "success",
          message: "Opening your email app so you can send the message.",
        });
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary";

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently looking for opportunities where I can learn, contribute,
          and grow as a full-stack developer. If you have an opportunity or
          would simply like to connect, feel free to send me a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <a
                      href={item.href}
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={
                        item.label === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">{profile.availability}</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {profile.availabilityNote}
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hello, I'd like to talk about..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-md ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-500"
                      : "bg-red-500/10 border border-red-500/20 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
