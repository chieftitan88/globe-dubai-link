
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  itemNumber: string;
  rating: number;
  reviews: number;
  category: string;
  imageStyle: string;
}

interface ProductCardProps {
  product: Product;
  language: 'en' | 'ar';
}

const ProductCard = ({ product, language }: ProductCardProps) => {
  const content = {
    en: {
      addToCart: "Add to Cart"
    },
    ar: {
      addToCart: "أضف للسلة"
    }
  };

  const currentContent = content[language];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {/* Product Image Placeholder */}
        <div className={`h-48 ${product.imageStyle} rounded-lg mb-4 flex items-center justify-center`}>
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📦</div>
            <p className="text-sm">{product.name}</p>
            <p className="text-xs opacity-70">Image Placeholder</p>
          </div>
        </div>

        {/* Product Info */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        {/* Price */}
        <div className="text-2xl font-bold text-gray-900 mb-2">{product.price}</div>
        
        {/* Item Number */}
        <p className="text-sm text-gray-500 mb-3">{product.itemNumber}</p>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
        
        {/* Add to Cart Button */}
        <button className="w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700 transition-colors">
          {currentContent.addToCart}
        </button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
