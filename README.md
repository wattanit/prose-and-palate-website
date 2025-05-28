# Prose & Palate Website

A sophisticated review website for bars, spirits, and books built with Astro.js and TinaCMS.

## 🌟 Features

### Multi-Category Review System
- **Bars**: Rooftop bars, cocktail lounges, hotel bars, local spots, wine bars, beer bars
- **Spirits**: Whiskey, gin, rum, vodka, tequila, brandy, liqueurs
- **Books**: Fiction, non-fiction, biography, mystery, romance, sci-fi, fantasy, history, business, self-help

### Category-Specific Rating Systems
- **Bars**: Ambience, Taste, Service, Overall
- **Spirits**: Complexity, Balance, Value, Overall  
- **Books**: Writing Quality, Engagement, Originality, Overall

### Advanced Features
- ⭐ Visual star rating system
- 🏷️ Category badges with icons
- 🔍 Client-side category filtering
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 📝 TinaCMS integration for content management
- 🔗 SEO optimized with meta tags and Open Graph

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prose-and-palate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Start with TinaCMS**
   ```bash
   npm run tina:dev
   ```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── content/
│   ├── bars/           # Bar review content
│   ├── spirits/        # Spirit review content
│   ├── books/          # Book review content
│   ├── authors/        # Author profiles
│   └── pages/          # Static pages
├── layouts/
│   ├── Base.astro      # Base layout
│   └── components/
│       ├── CategoryBadge.astro    # Category badges
│       ├── CategoryFilter.astro   # Filter component
│       ├── ReviewCard.astro       # Review cards
│       └── StarRating.astro       # Star ratings
├── lib/
│   ├── categoryParser.astro       # Multi-category utilities
│   └── utils/                     # Helper functions
├── pages/
│   ├── index.astro               # Homepage
│   ├── bars.astro               # Bars category page
│   ├── spirits.astro            # Spirits category page
│   ├── books.astro              # Books category page
│   ├── bars/[slug].astro        # Individual bar reviews
│   ├── spirits/[slug].astro     # Individual spirit reviews
│   └── books/[slug].astro       # Individual book reviews
└── config/
    └── config.json              # Site configuration
```

## 📝 Content Management

### TinaCMS Setup

1. **Configure TinaCMS**
   - Set up your TinaCMS account at [tina.io](https://tina.io)
   - Add your `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` to environment variables

2. **Access Admin Panel**
   - Visit `/admin` when running the development server
   - Authenticate with GitHub

### Content Schema

#### Bar Reviews
```yaml
---
title: "Bar Name"
slug: "bar-name"
category: "bars"
subcategory: "rooftop-bar"
ratings:
  ambience: 5
  taste: 4
  service: 4
  overall: 4
location:
  name: "Bar Name"
  address: "123 Street"
  city: "Bangkok"
  country: "Thailand"
price_range: "$$$$"
featured_image: "/images/bars/bar-name.jpg"
---
```

#### Spirit Reviews
```yaml
---
title: "Spirit Name"
slug: "spirit-name"
category: "spirits"
subcategory: "whiskey"
ratings:
  complexity: 5
  balance: 5
  value: 3
  overall: 4
price_point: "฿18,500"
alcohol_content: "43% ABV"
origin: "Scotland"
tasting_notes:
  nose: "Rich dried fruits..."
  palate: "Full-bodied with..."
  finish: "Long and warming..."
---
```

#### Book Reviews
```yaml
---
title: "Book Title"
slug: "book-title"
category: "books"
subcategory: "fiction"
ratings:
  writing_quality: 4
  engagement: 5
  originality: 4
  overall: 4
book_author: "Author Name"
publisher: "Publisher"
publication_year: 2023
pages: 400
---
```

## 🎨 Customization

### Adding New Categories

1. **Update Content Schema** (`src/content.config.ts`)
2. **Add to TinaCMS Config** (`tina/config.ts`)
3. **Create Category Page** (`src/pages/new-category.astro`)
4. **Add Dynamic Routes** (`src/pages/new-category/[slug].astro`)
5. **Update Category Filter** (`src/layouts/components/CategoryFilter.astro`)

### Styling

The website uses Tailwind CSS for styling. Key design tokens:

- **Colors**: Primary brand colors defined in Tailwind config
- **Typography**: Responsive typography scale
- **Components**: Modular component system
- **Icons**: Emoji icons for categories (🍸 🥃 📚)

## 🔧 Configuration

### Site Settings (`src/config/config.json`)

```json
{
  "site": {
    "title": "Prose & Palate | Bars, Spirits & Books",
    "base_url": "https://prose-and-palate.netlify.app"
  },
  "settings": {
    "pagination": 6,
    "summary_length": 120
  }
}
```

### Environment Variables

```env
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```

## 📱 Features in Detail

### Homepage
- Hero section with category statistics
- Category filter tabs (All, Bars, Spirits, Books)
- Mixed content grid with client-side filtering
- Responsive design

### Category Pages
- Dedicated pages for each category
- Category-specific headers and descriptions
- Filtered content display
- Empty states for categories without content

### Individual Review Pages
- Category-specific rating displays
- Detailed metadata sections
- Rich content with MDX support
- Related reviews section
- Social sharing optimization

### Components

#### StarRating
- Visual star display (full, half, empty stars)
- Configurable size (sm, md, lg)
- Optional numeric display

#### CategoryBadge
- Color-coded category indicators
- Icon + label format
- Subcategory support

#### ReviewCard
- Responsive card layout
- Category-specific metadata
- Hover effects and transitions
- Tag display with overflow handling

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect Repository**
   - Link your GitHub repository to Netlify

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   - Add TinaCMS credentials in Netlify dashboard

### Vercel

1. **Import Project**
   - Import from GitHub

2. **Configure Build**
   - Framework: Astro
   - Build command: `npm run build`
   - Output directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues and questions:
- Check the [Astro documentation](https://docs.astro.build)
- Review [TinaCMS docs](https://tina.io/docs)
- Open an issue in this repository

---

**Prose & Palate** - Where taste meets literature ✨
