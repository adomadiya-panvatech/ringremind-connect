import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: string, value: string) => {
    let error = "";

    switch (field) {
      case "name":
        if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!validateEmail(value)) error = "Please enter a valid email address";
        break;
      case "phone":
        if (!validatePhone(value)) error = "Please enter a valid 10-digit phone number";
        break;
      case "message":
        if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    if (field === "phone") {
      value = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field as keyof typeof formData]);
    });

    const hasErrors = Object.values(errors).some((error) => error !== "");
    const hasEmptyFields = Object.values(formData).some((value) => value.trim() === "");

    if (hasErrors || hasEmptyFields) {
      toast.error("Please fill in all fields correctly");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const isFormValid =
    formData.name.trim().length >= 2 &&
    validateEmail(formData.email) &&
    validatePhone(formData.phone) &&
    formData.message.trim().length >= 10 &&
    !Object.values(errors).some((error) => error !== "");

  return (
    <Layout>
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Form - 60% width */}
              <div className="lg:col-span-3 bg-card rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={(e) => validateField("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={(e) => validateField("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={(e) => validateField("phone", e.target.value)}
                      placeholder="(XXX) XXX-XXXX"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Comment / Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={(e) => validateField("message", e.target.value)}
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Info Cards - 40% width */}
              <div className="lg:col-span-2 space-y-6">
                {/* Call Us Card */}
                <div className="bg-card rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <a
                        href="tel:1-800-916-2459"
                        className="text-accent font-bold text-xl hover:opacity-80 transition-opacity"
                      >
                        1-800-916-2459
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Available 24/7 for support
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visit Us Card */}
                <div className="bg-card rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                      <address className="not-italic text-sm text-muted-foreground">
                        14269 Danielson St, Suite 400<br />
                        Poway, CA 92064
                      </address>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=14269+Danielson+St,+Suite+400,+Poway,+CA+92064"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-sm font-medium hover:underline inline-flex items-center mt-2"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Us Card */}
                <div className="bg-card rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">Email Us</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            Support & General Inquiries
                          </p>
                          <a
                            href="mailto:support@panvatech.com"
                            className="text-accent font-medium hover:underline"
                          >
                            support@panvatech.com
                          </a>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            Sales & Partnerships
                          </p>
                          <a
                            href="mailto:sales@panvatech.com"
                            className="text-accent font-medium hover:underline"
                          >
                            sales@panvatech.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-card rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-success/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p>Saturday - Sunday: Closed</p>
                        <p className="text-accent font-semibold mt-2">
                          *24/7 Phone Support Available*
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-12 bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              </div>
              <div className="relative w-full h-[450px] md:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.0123456789!2d-117.0357969!3d32.9629361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf0d4c5c5c5c5%3A0x1234567890abcdef!2s14269%20Danielson%20St%20%23400%2C%20Poway%2C%20CA%2092064!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RingRemind Office Location"
                />
              </div>
              <div className="p-4 text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=14269+Danielson+St,+Suite+400,+Poway,+CA+92064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline inline-flex items-center"
                >
                  View Larger Map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
