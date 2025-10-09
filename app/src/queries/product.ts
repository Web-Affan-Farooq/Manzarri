const productQuery = `*[_type == "Product"]{
_id,
availableSizes,
dimensions,
  discountPercentage,
images,
jewelleryType,
material,
ocassions,
price,
ratings,
productDescription,
productName,
stockKeepingUnit,
stockQuantity,
tags,
addedToCartBy,
addedToWishlistBy,
weightInGrams,
    "images": images[].asset->url
  }`;

const dynamicProductQuery = (
  params: {
    name: string;
    value: string | boolean | string[] | number;
  }[]
) => {
  let string = "";
  params.map((param) => {
    if (typeof param.value === "string") {
      string += `&& ${param.name} == "${param.value}"`;
    } else if (
      typeof param.value === "number" ||
      typeof param.value === "boolean"
    ) {
      string += `&& ${param.name} == ${param.value}`;
    }
  });

  const q = `*[_type == "Product" ${string}]{
_id,
availableSizes,
dimensions,
  discountPercentage,
images,
jewelleryType,
material,
ocassions,
price,
ratings,
productDescription,
productName,
stockKeepingUnit,
stockQuantity,
tags,
addedToCartBy,
addedToWishlistBy,
weightInGrams,
    "images": images[].asset->url
  }`;
  return q;
};

export {
    productQuery,
    dynamicProductQuery,
}