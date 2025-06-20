import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { useMemo } from 'react';

interface ProductGridProps {
  language: 'en' | 'ar';
  selectedCategory: string;
}

const ProductGrid = ({ language, selectedCategory }: ProductGridProps) => {
  const content = {
    en: {
      categories: {
        all: "All",
        beauty: "Beauty",
        wellness: "Wellness",
        healthBeverages: "Health Beverages"
      },
      products: {
        maxdiet: {
          title: "MAXDIET",
          description: "Feeling sluggish or weighed down? Unleash Your In",
          price: "224 AED",
          itemNumber: "Item # 107890"
        },
        pparPlus: {
          title: "PPAR Plus +",
          description: "Unlock the ocean's power for optimal health with",
          price: "200 AED",
          itemNumber: "Item # 107890"
        },
        maxiwhite: {
          title: "MAXIWHITE",
          description: "A powerful ingredient combination for your daily supplement designed",
          price: "226 AED",
          itemNumber: "Item # 107890"
        },
        maxcee: {
          title: "MAX-CEE",
          description: "Boost your immune system with our vitamin C supplement",
          price: "189 AED",
          itemNumber: "Item # 107890"
        },
        maxigold: {
          title: "MAXIGOLD",
          description: "Premium gold-infused wellness supplement",
          price: "79 AED",
          itemNumber: "Item # 107890"
        },
        vertSoap: {
          title: "VERT SOAP",
          description: "Your 8-in-1 All-Natural Green Oasis for Glowing S",
          price: "34 AED",
          itemNumber: "Item # 107890"
        },
        rougeSoap: {
          title: "ROUGE SOAP",
          description: "Embrace a visibly brighter and healthier complexi",
          price: "34 AED",
          itemNumber: "Item # 107890"
        },
        kogenSoap: {
          title: "KOGEN SOAP",
          description: "Unveil your most radiant skin with Kogen Soap, th",
          price: "34 AED",
          itemNumber: "Item # 107890"
        },
        glutagenSoap: {
          title: "GLUTAGEN SOAP",
          description: "Reveal a luminous, even-toned you with M88 Glutag",
          price: "34 AED",
          itemNumber: "Item # 107890"
        }
      }
    },
    ar: {
      categories: {
        all: "الكل",
        beauty: "الجمال",
        wellness: "العافية",
        healthBeverages: "المشروبات الصحية"
      },
      products: {
        maxdiet: {
          title: "ماكس دايت",
          description: "هل تشعر بالخمول أو الثقل؟ أطلق حيويتك الداخلية",
          price: "224 درهم",
          itemNumber: "رقم المنتج # 107890"
        },
        pparPlus: {
          title: "بي بار بلس +",
          description: "اكتشف قوة المحيط للصحة المثلى مع",
          price: "200 درهم",
          itemNumber: "رقم المنتج # 107890"
        },
        maxiwhite: {
          title: "ماكسي وايت",
          description: "مزيج قوي من المكونات لمكمل الغذائي اليومي",
          price: "226 درهم",
          itemNumber: "رقم المنتج # 107890"
        },
        maxcee: {
          title: "ماكس سي",
          description: "عزز جهازك المناعي مع مكمل فيتامين سي",
          price: "189 درهم",
          itemNumber: "رقم المنتج # 107890"
        },
        maxigold: {
          title: "ماكسي جولد",
          description: "مكمل عافية متميز مدعم بالذهب",
          price: "79 درهم",
          itemNumber: "رقم المنتج # 107890"
        },
        vertSoap: {
          title: "صابون فيرت",
          description: "واحتك الخضراء الطبيعية 8 في 1 للبشرة المتوهجة",
          price: "34 درهم",
          itemNumber: "رقم المنتج # 107890"
        },
        rougeSoap: {
          title: "صابون روج",
          description: "احتضن بشرة أكثر إشراقاً وصحة بشكل واضح",
          price: "34 درهم",
          itemNumber: "رقم المنتج # 107890"
        },
        kogenSoap: {
          title: "صابون كوجين",
          description: "اكشف عن بشرتك الأكثر إشراقاً مع صابون كوجين",
          price: "34 درهم",
          itemNumber: "رقم المنتج # 107890"
        },
        glutagenSoap: {
          title: "صابون جلوتاجين",
          description: "اكشف عن إطلالة مضيئة ومتجانسة مع جلوتاجين",
          price: "34 درهم",
          itemNumber: "رقم المنتج # 107890"
        }
      }
    }
  };

  const currentContent = content[language];

  // Memoize products array to prevent unnecessary re-renders
  const products = useMemo(() => [
    {
      id: 1,
      name: currentContent.products.maxdiet.title,
      description: currentContent.products.maxdiet.description,
      price: currentContent.products.maxdiet.price,
      itemNumber: currentContent.products.maxdiet.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Wellness",
      imageUrl: "/lovable-uploads/5b0acd46-151f-4e8c-b71b-a57f95677705.png"
    },
    {
      id: 2,
      name: currentContent.products.pparPlus.title,
      description: currentContent.products.pparPlus.description,
      price: currentContent.products.pparPlus.price,
      itemNumber: currentContent.products.pparPlus.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Health Beverages",
      imageUrl: "/lovable-uploads/44e1bbaf-4cf2-47e4-87fc-634ad3b30f35.png"
    },
    {
      id: 3,
      name: currentContent.products.maxiwhite.title,
      description: currentContent.products.maxiwhite.description,
      price: currentContent.products.maxiwhite.price,
      itemNumber: currentContent.products.maxiwhite.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageUrl: "/lovable-uploads/2517ea63-4483-48df-b1ec-367c4d474107.png"
    },
    {
      id: 4,
      name: currentContent.products.maxcee.title,
      description: currentContent.products.maxcee.description,
      price: currentContent.products.maxcee.price,
      itemNumber: currentContent.products.maxcee.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Wellness",
      imageUrl: "/lovable-uploads/dac645cc-d441-4770-aec5-cd1b64f71e89.png",
      imageStyle: "object-contain scale-125"
    },
    {
      id: 5,
      name: currentContent.products.maxigold.title,
      description: currentContent.products.maxigold.description,
      price: currentContent.products.maxigold.price,
      itemNumber: currentContent.products.maxigold.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Wellness",
      imageUrl: "/lovable-uploads/b70cc08e-2dc8-4e4d-bf24-910cd4f18700.png"
    },
    {
      id: 6,
      name: currentContent.products.vertSoap.title,
      description: currentContent.products.vertSoap.description,
      price: currentContent.products.vertSoap.price,
      itemNumber: currentContent.products.vertSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageUrl: "/lovable-uploads/0da2312e-3045-43b6-aa43-958b2d3ae9f0.png"
    },
    {
      id: 7,
      name: currentContent.products.rougeSoap.title,
      description: currentContent.products.rougeSoap.description,
      price: currentContent.products.rougeSoap.price,
      itemNumber: currentContent.products.rougeSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageUrl: "/lovable-uploads/055fc351-856e-4ad5-986d-6d7be51a6327.png"
    },
    {
      id: 8,
      name: currentContent.products.kogenSoap.title,
      description: currentContent.products.kogenSoap.description,
      price: currentContent.products.kogenSoap.price,
      itemNumber: currentContent.products.kogenSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageUrl: "/lovable-uploads/4b5cb476-7e5d-4197-a3a1-2c3f7a7870b5.png"
    },
    {
      id: 9,
      name: currentContent.products.glutagenSoap.title,
      description: currentContent.products.glutagenSoap.description,
      price: currentContent.products.glutagenSoap.price,
      itemNumber: currentContent.products.glutagenSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageUrl: "/lovable-uploads/f2b9dcca-b9dc-4c1b-adf6-a8b3031ca206.png"
    }
  ], [currentContent]);

  // Memoize filtered products to prevent unnecessary filtering
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All' || selectedCategory === currentContent.categories.all) {
      return products;
    }
    
    return products.filter(product => {
      if (selectedCategory === currentContent.categories.beauty) return product.category === 'Beauty';
      if (selectedCategory === currentContent.categories.wellness) return product.category === 'Wellness';
      if (selectedCategory === currentContent.categories.healthBeverages) return product.category === 'Health Beverages';
      return true;
    });
  }, [products, selectedCategory, currentContent.categories]);

  return (
    <div className="flex-1">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="gpu-accelerated"
          >
            <ProductCard product={product} language={language} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
