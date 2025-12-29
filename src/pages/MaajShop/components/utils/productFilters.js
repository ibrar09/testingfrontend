// utils/productFilters.js
export const filterProducts = (products, filters = {}) => {
  let filtered = [...products];
  
  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(p => 
      p.category_id == filters.category || 
      p.category?.id == filters.category
    );
  }
  
  // Filter by flags (from your database)
  if (filters.isNewRelease) {
    filtered = filtered.filter(p => p.is_new_release === true);
  }
  if (filters.isBestSeller) {
    filtered = filtered.filter(p => p.is_best_seller === true);
  }
  if (filters.isHotDeal) {
    filtered = filtered.filter(p => p.is_hot_deal === true);
  }
  
  // Filter by discount (has oldprice > price)
  if (filters.hasDiscount) {
    filtered = filtered.filter(p => p.oldprice > p.price);
  }
  
  // Price range
  if (filters.minPrice) {
    filtered = filtered.filter(p => p.price >= filters.minPrice);
  }
  if (filters.maxPrice) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice);
  }
  
  return filtered;
};

export const sortProducts = (products, sortBy = 'newest') => {
  const sorted = [...products];
  
  switch(sortBy) {
    case 'newest':
      return sorted.sort((a, b) => 
        new Date(b.createdAt || b.created_at || 0) - new Date(a.createdAt || a.created_at || 0)
      );
    case 'price-low':
      return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
    case 'price-high':
      return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
    case 'name-asc':
      return sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    case 'name-desc':
      return sorted.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
    case 'popular':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    default:
      return sorted;
  }
};