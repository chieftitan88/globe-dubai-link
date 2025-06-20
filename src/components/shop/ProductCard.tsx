
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  itemNumber: string;
  rating: number;
  reviews: number;
  category: string;
  imageUrl?: string;
  imageStyle?: string;
}

interface ProductCardProps {
  product: Product;
  language: 'en' | 'ar';
}

const ProductCard = ({ product, language }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const content = {
    en: {
      viewProduct: "View Product"
    },
    ar: {
      viewProduct: "عرض المنتج"
    }
  };

  const currentContent = content[language];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {/* Product Image */}
        <div className="h-48 rounded-lg mb-4 flex items-center justify-center bg-gray-50 relative overflow-hidden">
          {product.imageUrl && !imageError ? (
            <>
              {/* Loading skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Loading...</div>
                </div>
              )}
              <img 
                src={product.imageUrl}
                alt={product.name}
                className={`w-full h-full object-contain rounded-lg transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } ${product.imageStyle || ''}`}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
                decoding="async"
              />
            </>
          ) : (
            <div className={`w-full h-full ${product.imageStyle || 'bg-gray-100'} rounded-lg flex items-center justify-center`}>
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📦</div>
                <p className="text-sm">{product.name}</p>
                <p className="text-xs opacity-70">Image Placeholder</p>
              </div>
            </div>
          )}
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
        
        {/* View Product Button - Disabled */}
        <button 
          className="w-full bg-gray-400 text-white py-3 rounded font-medium cursor-not-allowed"
          disabled
        >
          {currentContent.viewProduct}
        </button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
