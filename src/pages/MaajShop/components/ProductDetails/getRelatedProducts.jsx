// src/pages/MaajShop/components/ProductDetails/getRelatedProducts.js
export const getRelatedProducts = (allProducts, currentProduct) => {
  if (!allProducts || !currentProduct) return [];

  return allProducts.filter((p) => {
    if (!p.id || !currentProduct.id) return false;
    if (p.id === currentProduct.id) return false; // exclude current product

    const sameCategory = p.category_id && currentProduct.category_id
      ? p.category_id === currentProduct.category_id
      : false;

    const sameBrand = p.brand_id && currentProduct.brand_id
      ? p.brand_id === currentProduct.brand_id
      : false;

    return sameCategory || sameBrand;
  });
};
