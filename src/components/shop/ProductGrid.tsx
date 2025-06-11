
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

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
          price: "$50.88",
          itemNumber: "Item # 107890"
        },
        pparPlus: {
          title: "PPAR Plus +",
          description: "Unlock the ocean's power for optimal health with",
          price: "$47.88",
          itemNumber: "Item # 107890"
        },
        maxivitrite: {
          title: "MAXIVITRITE",
          description: "A powerful ingredient combination for your daily supplement designed",
          price: "$53.00",
          itemNumber: "Item # 107890"
        },
        vertSoap: {
          title: "VERT SOAP",
          description: "Your 8-in-1 All-Natural Green Oasis for Glowing S",
          price: "$10.00",
          itemNumber: "Item # 107890"
        },
        rougeSoap: {
          title: "ROUGE SOAP",
          description: "Embrace a visibly brighter and healthier complexi",
          price: "$10.00",
          itemNumber: "Item # 107890"
        },
        kogenSoap: {
          title: "KOGEN SOAP",
          description: "Unveil your most radiant skin with Kogen Soap, th",
          price: "$10.00",
          itemNumber: "Item # 107890"
        },
        glutagenSoap: {
          title: "GLUTAGEN SOAP",
          description: "Reveal a luminous, even-toned you with M88 Glutag",
          price: "$10.00",
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
          price: "$50.88",
          itemNumber: "رقم المنتج # 107890"
        },
        pparPlus: {
          title: "بي بار بلس +",
          description: "اكتشف قوة المحيط للصحة المثلى مع",
          price: "$47.88",
          itemNumber: "رقم المنتج # 107890"
        },
        maxivitrite: {
          title: "ماكسي فيتريت",
          description: "مزيج قوي من المكونات لمكملك الغذائي اليومي",
          price: "$53.00",
          itemNumber: "رقم المنتج # 107890"
        },
        vertSoap: {
          title: "صابون فيرت",
          description: "واحتك الخضراء الطبيعية 8 في 1 للبشرة المتوهجة",
          price: "$10.00",
          itemNumber: "رقم المنتج # 107890"
        },
        rougeSoap: {
          title: "صابون روج",
          description: "احتضن بشرة أكثر إشراقاً وصحة بشكل واضح",
          price: "$10.00",
          itemNumber: "رقم المنتج # 107890"
        },
        kogenSoap: {
          title: "صابون كوجين",
          description: "اكشف عن بشرتك الأكثر إشراقاً مع صابون كوجين",
          price: "$10.00",
          itemNumber: "رقم المنتج # 107890"
        },
        glutagenSoap: {
          title: "صابون جلوتاجين",
          description: "اكشف عن إطلالة مضيئة ومتجانسة مع جلوتاجين",
          price: "$10.00",
          itemNumber: "رقم المنتج # 107890"
        }
      }
    }
  };

  const currentContent = content[language];

  const products = [
    {
      id: 1,
      name: currentContent.products.maxdiet.title,
      description: currentContent.products.maxdiet.description,
      price: currentContent.products.maxdiet.price,
      itemNumber: currentContent.products.maxdiet.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Wellness",
      imageStyle: "bg-gradient-to-br from-blue-100 to-purple-100"
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
      imageStyle: "bg-gradient-to-br from-red-100 to-orange-100"
    },
    {
      id: 3,
      name: currentContent.products.maxivitrite.title,
      description: currentContent.products.maxivitrite.description,
      price: currentContent.products.maxivitrite.price,
      itemNumber: currentContent.products.maxivitrite.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Wellness",
      imageStyle: "bg-gradient-to-br from-pink-100 to-red-100"
    },
    {
      id: 4,
      name: currentContent.products.vertSoap.title,
      description: currentContent.products.vertSoap.description,
      price: currentContent.products.vertSoap.price,
      itemNumber: currentContent.products.vertSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageStyle: "bg-gradient-to-br from-green-100 to-emerald-100"
    },
    {
      id: 5,
      name: currentContent.products.rougeSoap.title,
      description: currentContent.products.rougeSoap.description,
      price: currentContent.products.rougeSoap.price,
      itemNumber: currentContent.products.rougeSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageStyle: "bg-gradient-to-br from-red-100 to-pink-100"
    },
    {
      id: 6,
      name: currentContent.products.kogenSoap.title,
      description: currentContent.products.kogenSoap.description,
      price: currentContent.products.kogenSoap.price,
      itemNumber: currentContent.products.kogenSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageStyle: "bg-gradient-to-br from-orange-100 to-yellow-100"
    },
    {
      id: 7,
      name: currentContent.products.glutagenSoap.title,
      description: currentContent.products.glutagenSoap.description,
      price: currentContent.products.glutagenSoap.price,
      itemNumber: currentContent.products.glutagenSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageStyle: "bg-gradient-to-br from-red-200 to-white"
    }
  ];

  const filteredProducts = selectedCategory === 'All' || selectedCategory === currentContent.categories.all
    ? products
    : products.filter(product => {
        if (selectedCategory === currentContent.categories.beauty) return product.category === 'Beauty';
        if (selectedCategory === currentContent.categories.wellness) return product.category === 'Wellness';
        if (selectedCategory === currentContent.categories.healthBeverages) return product.category === 'Health Beverages';
        return true;
      });

  return (
    <div className="flex-1">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard product={product} language={language} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
