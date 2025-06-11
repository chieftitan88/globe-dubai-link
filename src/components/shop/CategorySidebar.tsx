
interface CategorySidebarProps {
  language: 'en' | 'ar';
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySidebar = ({ language, selectedCategory, onCategoryChange }: CategorySidebarProps) => {
  const content = {
    en: {
      categories: {
        all: "All",
        beauty: "Beauty",
        wellness: "Wellness",
        healthBeverages: "Health Beverages"
      }
    },
    ar: {
      categories: {
        all: "الكل",
        beauty: "الجمال",
        wellness: "العافية",
        healthBeverages: "المشروبات الصحية"
      }
    }
  };

  const currentContent = content[language];

  const categories = [
    currentContent.categories.all,
    currentContent.categories.beauty,
    currentContent.categories.wellness,
    currentContent.categories.healthBeverages
  ];

  return (
    <div className="lg:w-80">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-red-600 text-white p-4">
          <h3 className="text-lg font-bold">{currentContent.categories.all}</h3>
        </div>
        <div className="divide-y">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left p-4 hover:bg-red-50 transition-colors ${
                selectedCategory === category ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
