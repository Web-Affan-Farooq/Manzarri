import sanityClient from "@/lib/sanity";
import { Package } from "@/@types/order";

interface IOrderPlacement {
    order_id: string;
}

export default class OrderPlacement implements IOrderPlacement {

    /* ___ Get order id for performing operations ... */
    order_id: string;

    private GetRequiredOrder = async () => {
        try {
            const requiredOrder = await sanityClient.fetch(`*[_type == "Orders" && _id == "${this.order_id}"] {
  userId,
  amountPayable,
  status,
  weightageInGrams,
  _id,
  _updatedAt,
  packages,
      }`);
            return {
                success: true,
                order: requiredOrder[0]
            }
        } catch (err) {
            console.log("Error : ",err);
            
            return {
                success: false,
                order: []
            }
        }
    }

    private fetchedOrder = this.GetRequiredOrder();

    constructor(order_id: string) {
        console.log("utils/OrderPlacement  line:39  Initialized OrderPlacement instance : ", this);

        this.order_id = order_id;
        this.fetchedOrder = this.GetRequiredOrder();
    }

    updateStocks = async () => {
        console.log("utils/OrderPlacement  line:46  Called updateStocks : ");
        // 1. Get the order which is fetched earlier ... 
        const packagedProducts = (await this.fetchedOrder).order.packages;
        console.log("utils/OrderPlacement  line:49  1. Get packages from requiredOrder : ", packagedProducts);

        // 2. Get product stock info ...
        const productIds: string[] = packagedProducts.map((item: Package) => item.productId);

        console.log("utils/OrderPlacement  line:54  Get all ids of packages : ", productIds);

        const productsFetched = await sanityClient.fetch(
            `*[_type == "Product" && _id in $ids]{ _id, stockQuantity }`,{
                ids:productIds
            }
        );

        console.log("utils/OrderPlacement  line:60  Fetch details of all packages from catalog : ", productsFetched);

        // 3. Update each product's stock quantity
        for (const item of packagedProducts) {
            const product = productsFetched.find((p: { _id: string; stockQuantity: number }) => p._id === item.productId);
            if (product) {
                await sanityClient
                    .patch(product._id)
                    .set({ stockQuantity: product.stockQuantity - item.quantity })
                    .commit();
                console.log(`utils/OrderPlacement  line:70  Updated quantity of product ${item.productId} from ${product.stockQuantity}  to ${product.stockQuantity - item.quantity}: `);
            }
        }

    }

    updateActivity = async () => {

        // 1. Get the userId from order which is fetched earlier ... 
        const userAccountId = (await this.fetchedOrder).order.userId;
        console.log("utils/OrderPlacement  line:82  Id of user from which order belongs to : ", userAccountId);

        // 2. Get _id for updating account activity ...
        const requiredAccountActivity = await sanityClient.fetch(`*[_type == "AccountActivity" && userId == "${userAccountId}"]{_id,}`);

        const activityId = requiredAccountActivity[0]._id;
        console.log("utils/OrderPlacement  line:86  Id of activity document from which user belongs to : ", userAccountId);

        // 3. Create patch request for referencing new order

        const updatedAccountActivity = await sanityClient.patch(activityId)
            .setIfMissing({
                orders: []
            })
            .append(
                "orders", [
                {
                    _type: "reference",
                    _ref: this.order_id
                }
            ]
            )
            .commit({ autoGenerateArrayKeys: true })

        console.log("utils/OrderPlacement  line:106  Updated account activity : ", updatedAccountActivity);


    }

}