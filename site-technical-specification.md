# Website Technical Specifications

version 0.2

## **Core Framework & Stack**
- **Framework:** Astro.js (Static Site Generator)
- **Base Template:** Bookworm Light Astro (MIT License)
- **CMS:** TinaCMS integration for content management
- **Styling:** Tailwind CSS (already included in template)
- **Deployment:** Netlify (pre-configured in template)

## **Branding & Visual Identity**

### **Logo Implementation**
- **Logo Type:** Text-based logo (no image)
- **Logo Text:** "Prose & Palate"
- **Typography:** Uses primary font (Playfair Display)
- **Styling:** 
  - Desktop: `text-3xl` (48px)
  - Mobile: `text-2xl` (32px)
  - Font weight: Bold (700)
  - Color: Dark text with primary color hover effect
  - Letter spacing: Wide tracking for elegance

### Colour Palette
- Primary - Deep Amber : #c87533
- Primary - Cream : #f7f1e3
- Primary - Text : #2a3b4c
- Accent - Copper : #b87333
- Accent - Sage Green : #7d9178
- Accent - Burgundy : #722f37
- White : #fefefe
- Logo : #6c3f22

### **Typography System**
**Font Pairing:** Sophisticated serif + clean sans-serif combination

#### **Primary Font (Headings): Playfair Display**
- **Usage:** All headings (H1-H6), logo, display text
- **Weights:** 400, 500, 600, 700 (regular and italic)
- **Character:** Elegant serif with high contrast, literary sophistication
- **Rationale:** Reflects the "Prose" aspect of the brand, adds sophistication for luxury content

#### **Secondary Font (Body): Open Sans**
- **Usage:** Body text, navigation, UI elements
- **Weights:** 300, 400, 500, 600, 700 (regular and italic)
- **Character:** Clean, highly readable sans-serif
- **Rationale:** Excellent readability for reviews, modern and minimal aesthetic

#### **Brand Consistency**
- **Canva Integration:** Matches existing Canva brand kit (Playfair Display + Open Sans)
- **Cross-platform:** Ensures consistency across website and marketing materials
- **Accessibility:** High readability contrast between serif headings and sans-serif body

### **Navigation Simplification**
- **Removed:** Contact links from main navigation and footer
- **Current Structure:**
  - Main Nav: Home, About, Pages (dropdown)
  - Footer Nav: About, Elements, Privacy Policy
- **Rationale:** Streamlined navigation focuses on content discovery

## **Major Template Modifications Required**

### **1. Multi-Category Homepage System**
**Current:** Single blog feed
**Required:** Category-filtered homepage views

- **Default Homepage:** Mixed feed showing latest from all categories (bars, spirits, books)
- **Category Filter Tabs/Buttons:** Allow visitors to filter by category
- **URL Structure:**
  - `/` - All categories mixed
  - `/bars` - Bars only
  - `/spirits` - Spirits only  
  - `/books` - Books only
- **Visual Indicators:** Category badges/labels on each post preview

### **2. Enhanced Taxonomy System**
**Expand beyond basic tags/categories:**
- **Primary Categories:** Bars, Spirits, Books
- **Sub-categories:** 
  - Bars: Rooftop, Cocktail Bar, Hotel Bar, Local Spot
  - Spirits: Whiskey, Gin, Rum, Vodka, etc.
  - Books: Fiction, Non-fiction, Biography, etc.
- **Rating System:** Star ratings per category (different criteria)

## **Content Structure Specifications**

### **Review Post Schema (MDX/Markdown)**
```yaml
---
# Basic Meta
title: "Lennon's at Rosewood Bangkok"
slug: "lennons-rosewood-bangkok"
date: 2025-05-28
author: "Your Name"
draft: false

# Category System
category: "bars" # bars | spirits | books
subcategory: "rooftop-bar"
tags: ["bangkok", "hotel-bar", "premium", "cocktails"]

# Ratings (Different per category)
ratings:
  ambience: 4
  taste: 4
  service: 4
  overall: 4

# SEO & Social
description: "Elevated cocktails with Bangkok skyline views at Lennon's rooftop bar"
featured_image: "/images/lennons-main.jpg"
og_image: "/images/lennons-og.jpg"
---
```

### **Spirit Review Schema**
```yaml
---
title: "Macallan"
category: "spirits"
subcategory: "whiskey"
ratings:
  complexity: 4
  balance: 4
  value: 3
  overall: 4
price_point: "฿2,500"
alcohol_content: "43%"
origin: "Scotland"
---
```

### **Book Review Schema**
```yaml
---
title: "Book Title"
category: "books"
subcategory: "fiction"
ratings:
  writing_quality: 4
  engagement: 5
  originality: 3
  overall: 4
author: "Author Name"
---
```

## **TinaCMS Integration Specifications**

### **Content Management Setup**
- **Infrastucture:** Using TinaCloud 
- **Admin Interface:** `/admin` route for content editing
- **Authentication:** GitHub-based authentication
- **Real-time Editing:** Visual editing for homepage and static pages
- **Media Management:** Image upload and management for review photos

### **TinaCMS Schema Configuration**
- **Collections:** Separate collections for bars, spirits, books
- **Rich Text Editor:** Support for review content with custom components
- **Rating Components:** Custom rating input fields per category
- **Media Fields:** Multiple image uploads per review
- **SEO Fields:** Meta description, og:image, etc.

## **Homepage Layout Specifications**

### **Header Section**
- **Brand Logo:** "Prose & Palate" with tagline "Bars, Spirits & Books"
- **Navigation:** Home, About, Contact, Categories dropdown
- **Search:** FuseJS-powered search (already in template)

### **Category Filter Section** (New Addition)
- **Filter Tabs:** All | Bars | Spirits | Books
- **Active State:** Visual indication of selected category
- **JavaScript:** Client-side filtering without page reload
- **URL Updates:** Browser history support for direct category links

### **Post Grid Layout**
- **Card Design:** Image, title, category badge, rating stars, excerpt
- **Responsive:** 3 columns desktop, 2 tablet, 1 mobile
- **Load More:** Pagination or infinite scroll
- **Star Ratings:** Visual star display (not just numbers)

## **Individual Review Page Enhancements**

### **Review Template Structure**
- **Hero Section:** Large featured image, title, category, overall rating
- **Info Sidebar:** Price, location, practical details
- **Review Content:** Full markdown content with custom components
- **Rating Breakdown:** Visual rating display per category criteria
- **Social Share:** Share buttons for Facebook, Instagram, etc.
- **Related Posts:** Similar category posts

### **Custom Components for Reviews**
- **Rating Display:** Star rating component
- **Info Boxes:** Highlight practical information
- **Image Galleries:** Multiple photos per review
- **Quote Callouts:** Highlight key review quotes

## **SEO & Performance Specifications**

### **Technical SEO** (Template already includes most)
- **Meta Tags:** Category-specific meta descriptions
- **Schema Markup:** Review schema, local business schema for bars
- **Open Graph:** Category-specific OG images
- **Sitemap:** Auto-generated including category pages

### **Performance Targets** (Template already optimized)
- **Core Web Vitals:** Maintain 95+ PageSpeed score
- **Image Optimization:** WebP format, responsive images
- **Code Splitting:** Category-specific JavaScript chunks
