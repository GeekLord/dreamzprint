
# 🎨 DreamzPrint - AI-Powered Custom Printing Platform

DreamzPrint is a revolutionary custom printing platform that combines cutting-edge AI technology with premium-quality printing services. Transform your ideas into stunning designs and bring them to life on high-quality products.

## 🌟 Features

### 🤖 AI-Powered Design Studio
- **Smart Prompt Enhancement**: Transform simple ideas into professional-grade design prompts
- **Product-Specific Optimization**: AI tailors designs based on selected product type and dimensions
- **Real-time Generation**: Create unique designs in seconds using advanced AI models
- **Background Removal**: Automatic background removal for perfect product placement

### 🎯 Product Catalog
- **T-Shirts & Apparel**: Custom t-shirts, hoodies, and sweatshirts
- **Wall Art**: Canvas prints, photo prints, and framed artwork
- **Accessories**: Phone cases, mugs, and tote bags
- **Premium Quality**: All products use high-grade materials and professional printing

### 🛒 Seamless Ordering Experience
- **Design Preview**: See your design on the actual product before ordering
- **Size & Color Options**: Multiple variants for each product
- **Instant Ordering**: One-click ordering with design integration
- **Order Management**: Track and manage your custom orders

### 🔧 Advanced Tools
- **Image Editor**: Built-in tools for design refinement
- **Download Options**: Save your designs for future use
- **Responsive Design**: Works perfectly on all devices
- **Fast Performance**: Optimized for speed and reliability

## 🏗️ Technical Architecture

### Frontend Technologies
- **React 18** with TypeScript for type-safe development
- **Vite** for fast development and building
- **Tailwind CSS** for responsive styling
- **Shadcn/UI** for consistent component library
- **React Router** for navigation
- **Zustand/Context** for state management

### Backend Services
- **Supabase** for database and authentication
- **Runware API** for AI image generation
- **Google Gemini** for prompt enhancement
- **Edge Functions** for serverless backend logic

### Key Components
```
src/
├── components/
│   ├── design-studio/          # AI design tools
│   ├── products/               # Product catalog
│   ├── ui/                     # Reusable UI components
│   └── Navigation.tsx          # Main navigation
├── pages/
│   ├── DesignStudio.tsx        # AI design interface
│   ├── Products.tsx            # Product showcase
│   └── Index.tsx               # Landing page
├── services/
│   ├── runware.ts              # AI image generation
│   └── api-keys.ts             # API configuration
└── types/
    ├── product.ts              # Product type definitions
    └── productTypes.ts         # Product categories
```

## 🔄 User Journey Flow

```
Landing Page → Design Studio → AI Generation → Product Selection → Order
     ↓              ↓              ↓              ↓             ↓
  Browse         Create          Generate       Choose        Place
 Products       Prompt          Design         Product       Order
```

### Detailed Workflow

#### 1. **Design Creation Flow**
```
User Input → Prompt Enhancement → AI Generation → Design Preview
    ↓              ↓                   ↓             ↓
Enter idea → Gemini API optimizes → Runware creates → Display result
```

#### 2. **Product Selection Flow**
```
Design Ready → Browse Products → Select Item → Configure Options
     ↓              ↓              ↓           ↓
Auto-navigate → View catalog → Choose size → Set preferences
```

#### 3. **Order Processing Flow**
```
Design + Product → Order Dialog → Payment → Confirmation
      ↓               ↓           ↓         ↓
  Combination → Enter details → Process → Email receipt
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (`#9b87f5` to `#6E59A5`)
- **Secondary**: Multi-color gradient (`#D946EF`, `#F97316`)
- **Accent**: Soft pastels (`#E5DEFF`, `#FFDEE2`, `#FDE1D3`)
- **Neutral**: Carefully balanced grays for readability

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable sans-serif
- **UI Elements**: Consistent sizing and spacing

### Components
- **Cards**: Elevated with hover effects
- **Buttons**: Gradient backgrounds with smooth transitions
- **Forms**: Clean inputs with validation states
- **Navigation**: Responsive with mobile optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or bun package manager
- Supabase account (for backend features)
- Runware API key (for AI generation)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/dreamzprint.git
cd dreamzprint
```

2. **Install dependencies**
```bash
npm install
# or
bun install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Add your API keys:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
RUNWARE_API_KEY=your_runware_api_key
```

4. **Start development server**
```bash
npm run dev
# or
bun dev
```

Visit `http://localhost:8080` to see the application.

### Production Deployment

1. **Build the application**
```bash
npm run build
```

2. **Deploy to your preferred platform**
- Vercel (recommended)
- Netlify
- Railway
- Any static hosting service

## 🔌 API Integration

### Runware AI Integration
```typescript
// Example AI generation call
const response = await fetch('https://api.runware.ai/v1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      taskType: "authentication",
      apiKey: RUNWARE_API_KEY
    },
    {
      taskType: "imageInference",
      positivePrompt: "enhanced prompt here",
      model: "runware:100@1",
      width: 1024,
      height: 1024
    }
  ])
});
```

### Supabase Integration
```typescript
// Database operations
const { data, error } = await supabase
  .from('orders')
  .insert({
    user_id: userId,
    product_id: productId,
    design_url: designUrl,
    status: 'pending'
  });
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Mobile Optimizations
- Touch-friendly interface
- Optimized image loading
- Simplified navigation
- Fast performance on mobile networks

## 🔒 Security Features

- **API Key Protection**: Secure storage in environment variables
- **Input Validation**: All user inputs are validated and sanitized
- **CORS Configuration**: Proper cross-origin resource sharing
- **Error Handling**: Graceful error handling and user feedback

## 🎯 Performance Optimizations

- **Lazy Loading**: Components and images load on demand
- **Code Splitting**: Optimized bundle sizes
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Intelligent caching strategies
- **CDN Integration**: Fast global content delivery

## 🧪 Testing

### Test Coverage
- Component unit tests
- Integration tests for API calls
- End-to-end user flow tests
- Performance testing

### Running Tests
```bash
npm run test
npm run test:coverage
npm run test:e2e
```

## 📈 Analytics & Monitoring

- **User Journey Tracking**: Monitor design-to-order conversion
- **Performance Metrics**: Page load times and API response times
- **Error Tracking**: Comprehensive error logging and reporting
- **Usage Analytics**: Feature usage and user behavior insights

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.dreamzprint.com](https://docs.dreamzprint.com)
- **Discord Community**: [Join our Discord](https://discord.gg/dreamzprint)
- **Email Support**: support@dreamzprint.com
- **GitHub Issues**: Report bugs and feature requests

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ AI-powered design generation
- ✅ Product catalog with ordering
- ✅ Responsive web interface

### Phase 2 (Coming Soon)
- 🔄 User accounts and order history
- 🔄 Advanced design editing tools
- 🔄 Bulk ordering capabilities

### Phase 3 (Future)
- 📱 Mobile app (iOS/Android)
- 🤖 Advanced AI features
- 🌍 International shipping

---

**Built with ❤️ by the DreamzPrint Team**

Transform your ideas into reality with AI-powered custom printing!
