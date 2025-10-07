const offersQuery = `*[_type == "Offers"]{
  _id,
  _createdAt,
  discountPercentage,
  offerName,
  offerValidity,
  products,
  promoCode
}`


const dynamicOfferQuery = (
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

  const q = `*[_type == "Offers" ${string}]{
  _id,
  _createdAt,
  discountPercentage,
  offerName,
  offerValidity,
  products,
  promoCode
}`;

  return q;
};

export {
    dynamicOfferQuery,
    offersQuery,
}