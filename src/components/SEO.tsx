import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  noindex,
  ogImage,
  structuredData
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.includes("RingRemind") ? title : `${title} | RingRemind`;
    
    // Update title (limit to 60 chars for SEO)
    const truncatedTitle = fullTitle.length > 60 ? fullTitle.substring(0, 57) + "..." : fullTitle;
    document.title = truncatedTitle;

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

    // Update description (limit to 160 chars)
    const truncatedDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
    updateMetaTag("description", truncatedDescription);

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
    const robotsContent = noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
    updateMetaTag("robots", robotsContent);

    // Update Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", truncatedDescription, true);
    updateMetaTag("og:url", canonical || window.location.href, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:site_name", "RingRemind", true);
    const ogImageUrl = ogImage || "https://ringremind.com/og-image.jpg";
    updateMetaTag("og:image", ogImageUrl, true);

    // Update Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", truncatedDescription);
    updateMetaTag("twitter:image", ogImageUrl);

    // Add structured data
    if (structuredData) {
      // Remove existing page-specific structured data scripts (keep base ones from index.html)
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach((script, index) => {
        // Keep the first two (Organization and LocalBusiness from index.html)
        if (index >= 2) {
          script.remove();
        }
      });

      // Add new structured data
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach((data) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonical, noindex, ogImage, structuredData]);

  return null;
};
