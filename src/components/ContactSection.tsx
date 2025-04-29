
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-vr-purple/30 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-vr-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vr-purple/10 border border-vr-purple/20 mb-6">
            <Mail className="h-4 w-4 text-vr-purple" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have Questions? <span className="vr-gradient-text">Contact Us</span>
          </h2>
          
          <p className="text-gray-300">
            We'd love to hear from you! Reach out for inquiries about our games, 
            partnership opportunities, or just to say hello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="vr-card p-6">
              <div className="flex items-start">
                <div className="bg-vr-purple/20 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-vr-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Our friendly team is here to help
                  </p>
                  <a href="mailto:contact@vrgamestudio.com" className="text-vr-purple hover:underline">
                    contact@vrgamestudio.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="vr-card p-6">
              <div className="flex items-start">
                <div className="bg-vr-purple/20 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-vr-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Mon-Fri from 9am to 5pm
                  </p>
                  <a href="tel:+11234567890" className="text-vr-purple hover:underline">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
            
            <div className="vr-card p-6">
              <div className="flex items-start">
                <div className="bg-vr-purple/20 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-vr-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Come say hello at our office
                  </p>
                  <p className="text-gray-300">
                    123 VR Street, Tech Hub<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="vr-card p-8">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-vr-dark/50 border-vr-purple/20 focus:border-vr-purple"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-vr-dark/50 border-vr-purple/20 focus:border-vr-purple"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-vr-dark/50 border-vr-purple/20 focus:border-vr-purple min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="vr-button w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
