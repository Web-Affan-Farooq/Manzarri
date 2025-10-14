export default {
  name: 'Offers',
  type: 'document',
  title: 'Offers',
  fields: [
    {
      name: 'offerName',
      type: 'string',
      title: 'Offer name',
      initialValue: '',
    },
    {
      name:"offerDescription",
      type:"string",
      title:"Offer description",
      initialValue:"",
    },
    {
      name: 'offerValidity',
      type: 'date',
      title: 'Offer valid till ',
    },
    {
      name: 'products',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: [],
    },
    {
      name: 'promoCode',
      type: 'string',
      title: 'Promo code',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount percentage',
    },
    {
      name: 'bannerImage',
      type: 'image',
      title: 'Banner Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active status',
      initialValue: false,
    },
    {
      name: 'engagementCount',
      type: 'number',
      title: 'Offer engagement count',
      initialValue: 0,
    },
  ],
}
