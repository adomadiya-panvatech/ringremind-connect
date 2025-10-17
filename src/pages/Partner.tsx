import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingUp, Megaphone, Wrench, Award } from "lucide-react";
import { toast } from "sonner";

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

export default function Partner() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    partnershipTypes: [] as string[],
    message: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    partnershipTypes: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: string, value: string | string[]) => {
    let error = "";

    switch (field) {
      case "companyName":
      case "contactName":
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
      case "companySize":
        if (!value) error = "Please select company size";
        break;
      case "partnershipTypes":
        if (Array.isArray(value) && value.length === 0)
          error = "Please select at least one partnership type";
        break;
      case "message":
        if (typeof value === "string" && value.trim().length < 10)
          error = "Message must be at least 10 characters";
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

  const handlePartnershipTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked
      ? [...formData.partnershipTypes, type]
      : formData.partnershipTypes.filter((t) => t !== type);

    setFormData((prev) => ({ ...prev, partnershipTypes: newTypes }));
    validateField("partnershipTypes", newTypes);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field as keyof typeof formData]);
    });

    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (hasErrors || formData.partnershipTypes.length === 0) {
      toast.error("Please fill in all fields correctly");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(
        "Partnership inquiry submitted! Our team will contact you within 24 hours."
      );
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        companySize: "",
        partnershipTypes: [],
        message: "",
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
                Become a Partner Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleChange("companyName", e.target.value)}
                      onBlur={(e) => validateField("companyName", e.target.value)}
                      className={errors.companyName ? "border-destructive" : ""}
                    />
                    {errors.companyName && (
                      <p className="text-sm text-destructive mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleChange("contactName", e.target.value)}
                      onBlur={(e) => validateField("contactName", e.target.value)}
                      className={errors.contactName ? "border-destructive" : ""}
                    />
                    {errors.contactName && (
                      <p className="text-sm text-destructive mt-1">{errors.contactName}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
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
                    <Label htmlFor="companySize">Company Size *</Label>
                    <Select
                      value={formData.companySize}
                      onValueChange={(value) => handleChange("companySize", value)}
                    >
                      <SelectTrigger className={errors.companySize ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.companySize && (
                      <p className="text-sm text-destructive mt-1">{errors.companySize}</p>
                    )}
                  </div>

                  <div>
                    <Label>Partnership Type * (Select at least one)</Label>
                    <div className="space-y-3 mt-2">
                      {["Reseller", "Integration Partner", "Referral Partner"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            checked={formData.partnershipTypes.includes(type)}
                            onCheckedChange={(checked) =>
                              handlePartnershipTypeChange(type, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={type}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.partnershipTypes && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.partnershipTypes}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
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
