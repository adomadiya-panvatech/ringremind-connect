import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingUp, Megaphone, Wrench, Award } from "lucide-react";
import { toast } from "sonner";
import { CONFIG } from "@/config/webhooks";

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

export default function Partner() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    organizationName: "",
    yourName: "",
    titleRole: "",
    email: "",
    phone: "",
    organizationType: "",
    potentialUsers: "",
    preferredContactMethod: "",
    bestTimeToContact: "",
    partnershipInterest: "",
  });

  const [errors, setErrors] = useState({
    organizationName: "",
    yourName: "",
    titleRole: "",
    email: "",
    phone: "",
    organizationType: "",
    potentialUsers: "",
    preferredContactMethod: "",
    bestTimeToContact: "",
    partnershipInterest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: string, value: string | string[]) => {
    let error = "";

    switch (field) {
      case "organizationName":
      case "yourName":
      case "titleRole":
        if (typeof value === "string" && value.trim().length < 2)
          error = "Must be at least 2 characters";
        break;
      case "email":
        if (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please enter a valid email";
        break;
      case "phone":
        if (typeof value === "string" && value.replace(/\D/g, "").length !== 10)
          error = "Please enter a valid 10-digit phone number";
        break;
      case "organizationType":
      case "potentialUsers":
        if (!value) error = "Please select an option";
        break;
      case "preferredContactMethod":
      case "bestTimeToContact":
        // These are optional, no validation needed
        break;
      case "partnershipInterest":
        if (typeof value === "string" && value.trim().length < 2)
          error = "Partnership interest must be at least 2 characters";
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

    if (hasErrors) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    // Prepare lead data for webhook
    const leadData = {
      organizationName: formData.organizationName,
      yourName: formData.yourName,
      titleRole: formData.titleRole,
      email: formData.email,
      phone: formData.phone,
      organizationType: formData.organizationType,
      potentialUsers: formData.potentialUsers,
      preferredContactMethod: formData.preferredContactMethod || "",
      bestTimeToContact: formData.bestTimeToContact || "",
      partnershipInterest: formData.partnershipInterest,
      timestamp: new Date().toISOString(),
      website_source: "RingRemind Marketing Website",
    };

    try {
      console.log("Sending n8n webhook notification...");
      const webhookPayload = {
        formType: "Partner",
        timestamp: leadData.timestamp,
        source: leadData.website_source,
        data: {
          organization: leadData.organizationName,
          name: leadData.yourName,
          titleRole: leadData.titleRole,
          email: leadData.email,
          phone: leadData.phone,
          organizationType: leadData.organizationType,
          potentialUsers: leadData.potentialUsers,
          preferredContactMethod: leadData.preferredContactMethod || null,
          bestTimeToContact: leadData.bestTimeToContact || null,
          message: leadData.partnershipInterest,
          source: "RingRemind Marketing Website",
        }
      };
      console.log("n8n payload:", JSON.stringify(webhookPayload, null, 2));
      
      const webhookResponse = await fetch(CONFIG.WEBHOOKS.PARTNER_FORM, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload)
      });
      
      console.log("n8n response status:", webhookResponse.status);
      console.log("n8n response:", await webhookResponse.text());
    } catch (webhookError) {
      console.warn("n8n webhook notification failed:", webhookError);
      // Don't fail the form submission if webhook notification fails
    }

    setTimeout(() => {
      toast.success(
        "Partnership inquiry submitted! Our team will contact you within 24 hours."
      );
      setFormData({
        organizationName: "",
        yourName: "",
        titleRole: "",
        email: "",
        phone: "",
        organizationType: "",
        potentialUsers: "",
        preferredContactMethod: "",
        bestTimeToContact: "",
        partnershipInterest: "",
      });
      setErrors({
        organizationName: "",
        yourName: "",
        titleRole: "",
        email: "",
        phone: "",
        organizationType: "",
        potentialUsers: "",
        preferredContactMethod: "",
        bestTimeToContact: "",
        partnershipInterest: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Competitive commission structures and recurring revenue opportunities",
    },
    {
      icon: Megaphone,
      title: "Marketing Support",
      description: "Co-branded materials and dedicated marketing resources",
    },
    {
      icon: Wrench,
      title: "Technical Assistance",
      description: "Comprehensive integration support and technical documentation",
    },
    {
      icon: Award,
      title: "Training & Certification",
      description: "Partner training programs and certification opportunities",
    },
  ];

  const partnerTypes = [
    {
      title: "Reseller Partners",
      description: "Sell RingRemind solutions to your customer base with attractive margins",
    },
    {
      title: "Integration Partners",
      description:
        "Build integrations and extensions that enhance the RingRemind platform",
    },
    {
      title: "Referral Partners",
      description:
        "Earn commissions by referring customers to RingRemind solutions",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Partner With RingRemind - Communication Platform Partnerships"
        description="Join RingRemind's partner program. Become a reseller, integration partner, or referral partner and grow your business with our communication platform."
        keywords="partnership program, reseller partner, integration partner, referral partner, business partnership, communication platform partnership"
        canonical="https://ringremind.com/partner"
      />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the RingRemind Partner Network
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Grow your business with our industry-leading communication platform
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Why partner with RingRemind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Types</h2>
            <p className="text-lg text-muted-foreground">
              Choose the partnership model that fits your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Become a Partner
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our partnerships team will reach out
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Organization Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                      Organization Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="organizationName" className="block mb-2">Organization Name *</Label>
                        <Input
                          id="organizationName"
                          value={formData.organizationName}
                          onChange={(e) => handleChange("organizationName", e.target.value)}
                          onBlur={(e) => validateField("organizationName", e.target.value)}
                          placeholder="Your Organization"
                          className={errors.organizationName ? "border-destructive" : ""}
                        />
                        {errors.organizationName && (
                          <p className="text-sm text-destructive mt-1">{errors.organizationName}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="organizationType" className="block mb-2">Organization Type *</Label>
                        <Select
                          value={formData.organizationType}
                          onValueChange={(value) => handleChange("organizationType", value)}
                        >
                          <SelectTrigger className={errors.organizationType ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="healthcare-provider" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Healthcare Provider</SelectItem>
                            <SelectItem value="healthcare-system" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Healthcare System</SelectItem>
                            <SelectItem value="technology-company" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Technology Company</SelectItem>
                            <SelectItem value="consulting-firm" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Consulting Firm</SelectItem>
                            <SelectItem value="government-agency" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Government Agency</SelectItem>
                            <SelectItem value="non-profit" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Non-Profit Organization</SelectItem>
                            <SelectItem value="other" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.organizationType && (
                          <p className="text-sm text-destructive mt-1">{errors.organizationType}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="potentialUsers" className="block mb-2">Potential Users *</Label>
                        <Select
                          value={formData.potentialUsers}
                          onValueChange={(value) => handleChange("potentialUsers", value)}
                        >
                          <SelectTrigger className={errors.potentialUsers ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">1-10 users</SelectItem>
                            <SelectItem value="11-50" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">11-50 users</SelectItem>
                            <SelectItem value="51-200" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">51-200 users</SelectItem>
                            <SelectItem value="201-500" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">201-500 users</SelectItem>
                            <SelectItem value="501-1000" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">501-1,000 users</SelectItem>
                            <SelectItem value="1000+" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">1,000+ users</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.potentialUsers && (
                          <p className="text-sm text-destructive mt-1">{errors.potentialUsers}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="yourName" className="block mb-2">Your Name *</Label>
                        <Input
                          id="yourName"
                          value={formData.yourName}
                          onChange={(e) => handleChange("yourName", e.target.value)}
                          onBlur={(e) => validateField("yourName", e.target.value)}
                          placeholder="Your Full Name"
                          className={errors.yourName ? "border-destructive" : ""}
                        />
                        {errors.yourName && (
                          <p className="text-sm text-destructive mt-1">{errors.yourName}</p>
                        )}
                      </div>

                    <div>
                      <Label htmlFor="titleRole" className="block mb-2">Title/Role *</Label>
                      <Input
                        id="titleRole"
                        value={formData.titleRole}
                        onChange={(e) => handleChange("titleRole", e.target.value)}
                        onBlur={(e) => validateField("titleRole", e.target.value)}
                        placeholder="Chief Medical Officer"
                        className={errors.titleRole ? "border-destructive" : ""}
                      />
                      {errors.titleRole && (
                        <p className="text-sm text-destructive mt-1">{errors.titleRole}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="block mb-2">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={(e) => validateField("email", e.target.value)}
                        placeholder="you@company.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="block mb-2">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={(e) => validateField("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="preferredContactMethod" className="block mb-2">Preferred Contact Method</Label>
                      <Select
                        value={formData.preferredContactMethod}
                        onValueChange={(value) => handleChange("preferredContactMethod", value)}
                      >
                        <SelectTrigger className={errors.preferredContactMethod ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select preferred method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Email</SelectItem>
                          <SelectItem value="phone" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Phone</SelectItem>
                          <SelectItem value="microsoft-teams" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Microsoft Teams</SelectItem>
                          <SelectItem value="any" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Any Method</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.preferredContactMethod && (
                        <p className="text-sm text-destructive mt-1">{errors.preferredContactMethod}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="bestTimeToContact" className="block mb-2">Best Time to Contact</Label>
                      <Select
                        value={formData.bestTimeToContact}
                        onValueChange={(value) => handleChange("bestTimeToContact", value)}
                      >
                        <SelectTrigger className={errors.bestTimeToContact ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select best time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Evening (5 PM - 6 PM)</SelectItem>
                          <SelectItem value="anytime" className="focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.bestTimeToContact && (
                        <p className="text-sm text-destructive mt-1">{errors.bestTimeToContact}</p>
                      )}
                    </div>
                  </div>
                  </div>

                  {/* Partnership Details Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                      Partnership Details
                    </h3>
                    <div>
                      <Label htmlFor="partnershipInterest" className="block mb-2">Partnership Interest *</Label>
                      <Textarea
                        id="partnershipInterest"
                        value={formData.partnershipInterest}
                        onChange={(e) => handleChange("partnershipInterest", e.target.value)}
                        onBlur={(e) => validateField("partnershipInterest", e.target.value)}
                        placeholder="Tell us about your partnership interests..."
                        rows={5}
                        className={errors.partnershipInterest ? "border-destructive" : ""}
                      />
                      {errors.partnershipInterest && (
                        <p className="text-sm text-destructive mt-1">{errors.partnershipInterest}</p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
