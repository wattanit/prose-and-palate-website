# Website Technical Specifications

version 0.3

## **Core Framework & Stack**
- **Framework:** Astro.js (Static Site Generator)
- **Base Template:** Bookworm Light Astro (MIT License)
- **CMS:** TinaCMS integration for content management
- **Styling:** Tailwind CSS (already included in template)
  - **IMPORTANT Configuration Note:** This project uses a custom Tailwind CSS plugin system, loading plugins (e.g., `src/tailwind-plugin/tw-theme.mjs`) via `@plugin` directives in `src/styles/main.css`. **DO NOT introduce a standard `tailwind.config.js` or `tailwind.config.mjs` file.** Doing so will break the existing theme and dark mode implementation, which relies on CSS variables defined and overridden through this custom plugin structure and direct CSS in `src/styles/base.css`. All theme color definitions and dark mode logic are managed via `src/config/theme.json`, `src/tailwind-plugin/tw-theme.mjs`, and `src/styles/base.css`.
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

- **Default Homepage:** Mixed feed showing latest from all categories
- **Category Filter System:** Dynamic category filter tabs/buttons based on existing categories
- **URL Structure:**
  - `/` - All categories mixed
  - `/category/[category-name]` - Filtered by specific category (e.g., `/category/bars`, `/category/spirits`, `/category/books`)
- **Visual Indicators:** Category badges/labels on each post preview
- **Implementation Note:** Categories should be implemented as a standard taxonomy system. While the business currently focuses on bars, spirits, and books, the system should be flexible to accommodate any categories defined in the CMS.

### **2. Enhanced Taxonomy System**
**Flexible category and subcategory system:**
- **Primary Categories:** Implemented as standard categories (currently: bars, spirits, books)
- **Sub-categories (tags):** 
  - Examples for bars: rooftop, cocktail-bar, hotel-bar, local-spot
  - Examples for spirits: whiskey, gin, rum, vodka
  - Examples for books: fiction, non-fiction, biography
- **Rating System:** Configurable rating criteria per category
- **Implementation Note:** The system should treat all categories equally. The three main categories (bars, spirits, books) are business priorities but should not require special technical implementation.

## **Content Structure Specifications**

### **Universal Review Post Schema (MDX/Markdown)**
```yaml
---
# Basic Meta
title: "Review Title"
slug: "review-slug"
date: 2025-05-28
author: "Author Name"
draft: false

# Category System (Standard Implementation)
category: "category-name" # Any category (e.g., bars, spirits, books, etc.)
subcategory: "subcategory-name" # Optional subcategory/tag
tags: ["tag1", "tag2", "tag3"]

# Flexible Ratings System
ratings:
  criterion1: 4  # Rating criteria should be configurable per category
  criterion2: 4
  criterion3: 4
  overall: 4

# SEO & Social
description: "Review description"
featured_image: "/images/review-main.jpg"
og_image: "/images/review-og.jpg"

# Optional Category-Specific Fields
price_point: "Price" # Optional, can be used for any category
location: "Location" # Optional
additional_info: "Any additional structured data"
---
```

**Category-Specific Examples:**

**Bar Review Example:**
```yaml
category: "bars"
tags: ["bangkok", "hotel-bar", "premium", "cocktails"]
ratings:
  ambience: 4
  taste: 4
  service: 4
  overall: 4
location: "Bangkok, Thailand"
```

**Spirit Review Example:**
```yaml
category: "spirits"
tags: ["whiskey", "scottish", "premium"]
ratings:
  complexity: 4
  balance: 4
  value: 3
  overall: 4
price_point: "฿2,500"
additional_info: "43% ABV, Scotland"
```

**Book Review Example:**
```yaml
category: "books"
tags: ["fiction", "contemporary"]
ratings:
  writing_quality: 4
  engagement: 5
  originality: 3
  overall: 4
additional_info: "Author Name"
```

## **TinaCMS Integration Specifications**

### **Content Management Setup**
- **Infrastructure:** Using TinaCloud 
- **Admin Interface:** `/admin` route for content editing
- **Authentication:** GitHub-based authentication
- **Real-time Editing:** Visual editing for homepage and static pages
- **Media Management:** Image upload and management for review photos

### **TinaCMS Schema Configuration**
- **Collections:** Single "posts" collection with category field (not separate collections per category)
- **Category Management:** Categories managed as standard taxonomy in CMS
- **Rich Text Editor:** Support for review content with custom components
- **Flexible Rating System:** Configurable rating input fields that can vary by category
- **Media Fields:** Multiple image uploads per review
- **SEO Fields:** Meta description, og:image, etc.
- **Implementation Note:** Avoid hardcoding specific categories in the CMS schema. Use a flexible approach that allows any categories to be created and managed through the CMS interface.

## **Homepage Layout Specifications**

### **Header Section**
- **Brand Logo:** "Prose & Palate" with tagline "Bars, Spirits & Books"
- **Navigation:** Home, About, Contact, Categories dropdown
- **Search:** FuseJS-powered search (already in template)

### **Dynamic Category Filter Section** (New Addition)
- **Filter Tabs:** Generated dynamically from existing categories (All | [Category 1] | [Category 2] | etc.)
- **Active State:** Visual indication of selected category
- **JavaScript:** Client-side filtering without page reload
- **URL Updates:** Browser history support for direct category links
- **Implementation Note:** Category filters should be dynamically generated from the actual categories in use, not hardcoded for specific categories.

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
