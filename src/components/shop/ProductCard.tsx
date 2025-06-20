
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  
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

  const handleProductClick = () => {
    navigate(`/uae/shop/product/${product.id}`);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer" onClick={handleProductClick}>
      <CardContent className="p-6">
        {/* Product Image */}
        <div className="h-48 rounded-lg mb-4 flex items-center justify-center bg-gray-50">
          {product.imageUrl ? (
            <img 
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-contain rounded-lg"
            />
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
        
        {/* View Product Button */}
        <button className="w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700 transition-colors">
          {currentContent.viewProduct}
        </button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
