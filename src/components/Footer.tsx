import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import logo from "@/assets/ringremind-logo.png";

export const Footer = () => {
  const handleLinkClick = () => {
    // Scroll to top when clicking footer links
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <img src={logo} alt="RingRemind" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm mb-4 opacity-90">
              Your Gateway to Seamless Online Communication Solutions
            </p>
            <p className="text-sm mb-2 opacity-90">
              Transform customer support with real-time chat and instant messaging.
            </p>
            <a
              
              className="flex items-center gap-2 text-accent font-bold text-lg hover:opacity-80 transition-opacity"
            >
              <Phone className="h-5 w-5" />
              1-800-916-2459
            </a>
            <p className="text-xs mt-1 opacity-75">Available 24/7</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-sm opacity-90 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/partner" onClick={handleLinkClick} className="text-sm opacity-90 hover:text-accent transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="text-sm opacity-90 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" onClick={handleLinkClick} className="text-sm opacity-90 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" onClick={handleLinkClick} className="text-sm opacity-90 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/accessibility" onClick={handleLinkClick} className="text-sm opacity-90 hover:text-accent transition-colors">
                  Accessibility Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm opacity-90">
              <p>
                14269 Danielson St, Suite 400<br />
                Poway, CA 92064
              </p>
              <div>
                <p className="font-semibold text-primary-foreground mb-1">Support & General:</p>
                <p className="text-accent">
                  support@panvatech.com
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground mb-1">Business Hours:</p>
                <p>Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                <p>Sat-Sun: Closed</p>
                <p className="text-accent font-semibold mt-1">*24/7 Phone Support Available*</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2025 RingRemind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
