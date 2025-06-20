
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus, Heart, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LanguageToggle from '@/components/LanguageToggle';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const content = {
    en: {
      backToShop: "← Back to Shop",
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      quantity: "Quantity",
      description: "Description",
      benefits: "Benefits",
      ingredients: "Ingredients",
      howToUse: "How to Use",
      reviews: "Reviews",
      specifications: "Specifications",
      inStock: "In Stock",
      outOfStock: "Out of Stock",
      shareProduct: "Share Product",
      addToWishlist: "Add to Wishlist"
    },
    ar: {
      backToShop: "← العودة للمتجر",
      addToCart: "أضف للسلة",
      buyNow: "اشتري الآن",
      quantity: "الكمية",
      description: "الوصف",
      benefits: "الفوائد",
      ingredients: "المكونات",
      howToUse: "طريقة الاستخدام",
      reviews: "التقييمات",
      specifications: "المواصفات",
      inStock: "متوفر",
      outOfStock: "غير متوفر",
      shareProduct: "شارك المنتج",
      addToWishlist: "أضف للمفضلة"
    }
  };

  // Mock product data - in real app this would come from API based on ID
  const products = {
    1: {
      name: { en: "MAXDIET", ar: "ماكس دايت" },
      price: "224 AED",
      itemNumber: "Item # 107890",
      rating: 5,
      reviews: 102,
      inStock: true,
      description: {
        en: "Feeling sluggish or weighed down? Unleash Your Inner Vitality with MAXDIET - the ultimate fusion of nature's most powerful fat-burning and energy-boosting ingredients.",
        ar: "هل تشعر بالخمول أو الثقل؟ أطلق حيويتك الداخلية مع ماكس دايت - المزيج المثالي من أقوى مكونات الطبيعة لحرق الدهون وزيادة الطاقة."
      },
      benefits: {
        en: ["Boosts metabolism", "Increases energy levels", "Supports weight management", "Natural ingredients"],
        ar: ["يعزز الأيض", "يزيد مستويات الطاقة", "يدعم إدارة الوزن", "مكونات طبيعية"]
      },
      ingredients: {
        en: "Green tea extract, Garcinia Cambogia, L-Carnitine, Chromium Picolinate",
        ar: "مستخلص الشاي الأخضر، غارسينيا كامبوجيا، إل-كارنيتين، كروميوم بيكولينات"
      },
      howToUse: {
        en: "Take 2 capsules daily, 30 minutes before meals with a glass of water.",
        ar: "تناول كبسولتين يومياً، قبل الوجبات بـ 30 دقيقة مع كوب من الماء."
      },
      images: [
        "bg-gradient-to-br from-blue-100 to-purple-100",
        "bg-gradient-to-br from-purple-100 to-blue-200",
        "bg-gradient-to-br from-blue-200 to-purple-200"
      ]
    },
    3: {
      name: { en: "MAXIWHITE", ar: "ماكسي وايت" },
      price: "226 AED",
      itemNumber: "Item # 107890",
      rating: 5,
      reviews: 102,
      inStock: true,
      description: {
        en: "Transform your skin with our premium MAXIWHITE - a powerful ingredient combination for your daily supplement designed to support healthy, radiant skin.",
        ar: "حول بشرتك مع ماكسي وايت المتميز - مزيج قوي من المكونات لمكملك الغذائي اليومي المصمم لدعم البشرة الصحية والمتألقة."
      },
      benefits: {
        en: ["Supports skin health", "Promotes radiant complexion", "Antioxidant properties", "Daily wellness support"],
        ar: ["يدعم صحة البشرة", "يعزز البشرة المتألقة", "خصائص مضادة للأكسدة", "دعم العافية اليومية"]
      },
      ingredients: {
        en: "L-Glutathione, Collagen, ALA, CoQ10, Vitamin C, Grapeseed & Rose Hips",
        ar: "إل-جلوتاثيون، كولاجين، أ إل إيه، كو كيو 10، فيتامين سي، بذور العنب ووردة البرية"
      },
      howToUse: {
        en: "Take 1 capsule daily with meals or as directed by healthcare professional.",
        ar: "تناول كبسولة واحدة يومياً مع الوجبات أو حسب توجيهات أخصائي الرعاية الصحية."
      },
      images: [
        "bg-gradient-to-br from-pink-100 to-purple-100",
        "bg-gradient-to-br from-purple-100 to-pink-200",
        "bg-gradient-to-br from-pink-200 to-purple-200"
      ]
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';
  
  // Convert string ID to number and get product, with fallback to product 1
  const productId = id ? parseInt(id, 10) : 1;
  const product = products[productId as keyof typeof products] || products[1];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/uae/shop')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {currentContent.backToShop}
          </button>
          <LanguageToggle language={language} onLanguageChange={setLanguage} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className={`aspect-square ${product.images[selectedImage]} rounded-lg flex items-center justify-center`}>
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">📦</div>
                <p className="text-lg font-medium">{product.name[language]}</p>
                <p className="text-sm opacity-70">Product Image</p>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 ${image} rounded-lg border-2 ${
                    selectedImage === index ? 'border-red-500' : 'border-gray-200'
                  } transition-colors`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name[language]}</h1>
              <p className="text-sm text-gray-500 mb-4">{product.itemNumber}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} {currentContent.reviews})</span>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-gray-900 mb-4">{product.price}</div>
              
              {/* Stock Status */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? currentContent.inStock : currentContent.outOfStock}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{currentContent.quantity}</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">
                {currentContent.addToCart}
              </Button>
              <Button variant="outline" className="w-full py-6 text-lg">
                {currentContent.buyNow}
              </Button>
              
              {/* Secondary Actions */}
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="flex-1">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="flex-1">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="border-b-2 border-red-500 text-red-600 py-4 px-1 text-sm font-medium">
                {currentContent.description}
              </button>
              <button className="text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium">
                {currentContent.benefits}
              </button>
              <button className="text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium">
                {currentContent.ingredients}
              </button>
              <button className="text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium">
                {currentContent.howToUse}
              </button>
            </nav>
          </div>

          <div className="py-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">{currentContent.description}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description[language]}</p>
                
                <h3 className="text-lg font-semibold mb-4 mt-8">{currentContent.benefits}</h3>
                <ul className="space-y-2">
                  {product.benefits[language].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mb-4 mt-8">{currentContent.ingredients}</h3>
                <p className="text-gray-600">{product.ingredients[language]}</p>

                <h3 className="text-lg font-semibold mb-4 mt-8">{currentContent.howToUse}</h3>
                <p className="text-gray-600">{product.howToUse[language]}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
