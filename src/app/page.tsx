"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Gallery",
          id: "gallery",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="DS Flooring & Granite"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "plain",
      }}
      title="Elevate Your Home with DS Flooring & Granite"
      description="Expert room, bathroom, and kitchen remodeling services, custom cabinetry, and premium flooring installations. Quality craftmanship for your dream space."
      buttons={[
        {
          text: "Get a Quote",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/open-drawers-kitchen-ergonomics-functional-space_169016-68869.jpg",
          imageAlt: "Luxurious bathroom",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/open-drawers-kitchen-ergonomics-functional-space_169016-68869.jpg",
          imageAlt: "Custom kitchen",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/open-drawers-kitchen-ergonomics-functional-space_169016-68869.jpg",
          imageAlt: "Hardwood floors",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/open-drawers-kitchen-ergonomics-functional-space_169016-68869.jpg",
          imageAlt: "Granite counters",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/open-drawers-kitchen-ergonomics-functional-space_169016-68869.jpg",
          imageAlt: "Full renovation",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/open-drawers-kitchen-ergonomics-functional-space_169016-68869.jpg",
          imageAlt: "Custom cabinets",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Kitchen Remodeling",
          description: "Custom cabinetry and layout design to maximize efficiency and style.",
          tag: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-working-with-roller_52683-100074.jpg",
        },
        {
          id: "2",
          title: "Flooring Solutions",
          description: "Hardwood, tile, and stone installations tailored to your lifestyle.",
          tag: "Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-tiling-floor_23-2149344001.jpg",
        },
        {
          id: "3",
          title: "Granite & Countertops",
          description: "Precision granite installation for kitchens and bathrooms.",
          tag: "Durable",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-modern-kitchen-with-wooden-details_169016-20193.jpg",
        },
      ]}
      title="Our Expert Services"
      description="Professional craftsmanship for every room in your home."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Modern Bathroom",
          price: "Renovation",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-tiled-mosaic_1194-7521.jpg",
        },
        {
          id: "2",
          name: "Custom Cabinetry",
          price: "Custom Woodwork",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-tiled-mosaic_1194-7521.jpg",
        },
        {
          id: "3",
          name: "Hardwood Floors",
          price: "Premium Flooring",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-tiled-mosaic_1194-7521.jpg",
        },
        {
          id: "4",
          name: "Granite Kitchen",
          price: "Stone Installation",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-tiled-mosaic_1194-7521.jpg",
        },
        {
          id: "5",
          name: "Tile Backsplash",
          price: "Custom Tile",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-tiled-mosaic_1194-7521.jpg",
        },
        {
          id: "6",
          name: "Vanity Upgrade",
          price: "Bathroom Refinement",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-tiled-mosaic_1194-7521.jpg",
        },
      ]}
      title="Our Work Portfolio"
      description="Browse our recent custom remodeling and flooring installations."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Choose DS Flooring & Granite?"
      metrics={[
        {
          label: "Years Experience",
          value: "15+",
        },
        {
          label: "Projects Completed",
          value: "500+",
        },
        {
          label: "Happy Clients",
          value: "100%",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Homeowner",
          testimonial: "Excellent service and craftsmanship on our kitchen cabinets!",
          imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-with-client-fix-kitchen-problems_23-2150990688.jpg",
        },
        {
          id: "2",
          name: "David Smith",
          role: "Homeowner",
          testimonial: "Beautiful floors installed quickly and professionally.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-handling-carpet-together-their-new-home_23-2149086839.jpg",
        },
        {
          id: "3",
          name: "Emily Chen",
          role: "Homeowner",
          testimonial: "The granite countertops look amazing in our updated kitchen.",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-designer-clients-discussing-drawings_74855-2943.jpg",
        },
        {
          id: "4",
          name: "Robert J.",
          role: "Homeowner",
          testimonial: "Very communicative and transparent team. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-family-kitchen-decorated-christmas_93675-131215.jpg",
        },
        {
          id: "5",
          name: "Lisa B.",
          role: "Homeowner",
          testimonial: "Bathroom remodel turned out better than we imagined!",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-holding-roller_23-2148903440.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Trusted by local families for quality home improvement."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to start your home project? Contact DS Flooring & Granite today for a free consultation and estimate on your remodel."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+15550102030",
        },
        {
          text: "Send Email",
          href: "mailto:info@dsflooring.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Kitchen Remodeling",
              href: "#services",
            },
            {
              label: "Bathroom Remodeling",
              href: "#services",
            },
            {
              label: "Custom Cabinets",
              href: "#services",
            },
            {
              label: "Flooring Solutions",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Portfolio",
              href: "#gallery",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="DS Flooring & Granite"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
