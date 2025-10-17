import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
}

export const SEO = ({ title, description, keywords, canonical, noindex }: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | RingRemind`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? "property" : "name";
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute("content", content);
    };

    // Update description
    updateMetaTag("description", description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical || window.location.href);

    // Update robots meta
    if (noindex) {
      updateMetaTag("robots", "noindex, follow");
    } else {
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag && robotsTag.getAttribute("content") === "noindex, follow") {
        robotsTag.setAttribute("content", "index, follow");
      }
    }

    // Update Open Graph tags
    updateMetaTag("og:title", `${title} | RingRemind`, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", canonical || window.location.href, true);

    // Update Twitter Card tags
    updateMetaTag("twitter:title", `${title} | RingRemind`);
    updateMetaTag("twitter:description", description);
  }, [title, description, keywords, canonical, noindex]);

  return null;
};
