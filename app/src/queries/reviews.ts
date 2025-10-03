const reviewQuery = `*[_type == "Reviews"]{
  _id,
  personName,
  reviewText,
    productId,
    "date":_updatedAt
}`;

const dynamicReviewQuery = (
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

  const q = `*[_type == "Reviews" ${string}]{
  _id,
  personName,
  reviewText,
    productId,
    "date":_updatedAt
}`;

  return q;
};

export { reviewQuery , dynamicReviewQuery};
