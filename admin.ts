import { create } from "zustand";

import { Account } from "@/@types/accounts";
import { Product } from "@/@types/product";
import { Order } from "@/@types/order";
import FormSubmission from "@/@types/FormSubmissions";

interface OrdersState {
    orders: Order[];
    deleteOrder: (order_id: string) => void;
    feedOrders: (array: Order[]) => void;
}
interface InventoryState {
    inventory: Product[];
    feedInventory: (list: Product[]) => void;
}
interface FormsubmissionState {
    formSubmissions: FormSubmission[];
    feedFormSubmissions: (list: FormSubmission[]) => void;
}
interface AccountsState {
    accounts: Omit<Account , "userPassword">[];
    feedAccounts: (accounts: Account[]) => void;
    deleteAccount: (id: string) => void;
    blockAccount: (id: string, newBlockStatus: boolean) => void;
}
interface DashboardCache extends OrdersState, InventoryState, FormsubmissionState, AccountsState { }

const useDashboardCache = create<DashboardCache>()(
        (set) => (
        {
            /* _____ Accounts ... */

            accounts:[
        {
          _id: "KmnbQZZm9OkV3zxRYvf9YL",
          isAdmin: false,
          isBlocked: false,
          userEmail: "farhanaqib345@gmail.com",
          userName: "muhammad farhan"
        },
        {
          _id: "ac2Ke2xR9k3hM26xEFoUhJ",
          isAdmin: true,
          isBlocked: false,
          userEmail: "affanamir903@gmail.com",
          userName: "muhammad affan"
        }
      ],

            feedAccounts: (accounts) => set({ accounts }),

            deleteAccount: (id) =>
                set((state) => ({
                    accounts: state.accounts.filter((acc) => acc._id !== id),
                })),

            blockAccount: (id, newBlockStatus) =>
                set((state) => ({
                    accounts: state.accounts.map((acc) =>
                        acc._id === id ? { ...acc, isBlocked: newBlockStatus } : acc
                    ),
                })),

            /* _____ Inventory ... */

            inventory:  [
        {
          _id: "187f2d0c-6049-4dd1-97ed-e55cadac21f2",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "12 inch silver chain with gem 7cm radius ",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552.jpg"
              }
            },
            {
              asset: {
                _id: "image-c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552.jpg"
              }
            }
          ],
          jewelleryType: "Necklace",
          material: "gold",
          ocassions: [
            "Weddings",
            "Party and gatherings"
          ],
          price: 400,
          productDescription: [
            {
              children: [
                {
                  _key: "9150b9ce02f8",
                  _type: "span",
                  text: "A dazzling crystal pendant that catches the light beautifully. Perfect for evening wear or special occasions, this elegant necklace adds a touch of sparkle and sophistication to any outfit."
                }
              ]
            }
          ],
          productName: "Aurora Crystal Pendant Necklace",
          ratings: 4,
          stockKeepingUnit: "#1",
          stockQuantity: 47,
          tags: [
            "necklace",
            "gold necklace"
          ],
          weightInGrams: 80
        },
        {
          _id: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "earrings with 1cm radius ball",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736.jpg"
              }
            },
            {
              asset: {
                _id: "image-ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736.jpg"
              }
            }
          ],
          jewelleryType: "Earrings",
          material: "platinum",
          ocassions: [
            "Party and gatherings"
          ],
          price: 23,
          productDescription: [
            {
              children: [
                {
                  _key: "88280c928528",
                  _type: "span",
                  text: "Timeless and graceful, these pearl drop earrings blend classic beauty with modern charm. Ideal for formal events or daily elegance, they enhance any look with pure, understated style., normal"
                }
              ]
            }
          ],
          productName: "Elegant Pearl Drop Earrings",
          ratings: 4,
          stockKeepingUnit: "#2",
          stockQuantity: 22,
          tags: [
            "earrings",
            "platinum earrings",
            "pearl drop earrings"
          ],
          weightInGrams: 80
        },
        {
          _id: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "12 inch silver chain with gem 7cm radius ",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552.jpg"
              }
            },
            {
              asset: {
                _id: "image-c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552.jpg"
              }
            }
          ],
          jewelleryType: "Necklace",
          material: "platinum",
          ocassions: [
            "Party and gatherings",
            "Daily wear"
          ],
          price: 20,
          productDescription: [
            {
              children: [
                {
                  _key: "80b9bc8aa2d5",
                  _type: "span",
                  text: "A dazzling crystal pendant that catches the light beautifully. Perfect for evening wear or special occasions, this elegant necklace adds a touch of sparkle and sophistication to any outfit."
                }
              ]
            }
          ],
          productName: "Aurora Crystal Pendant Necklace",
          ratings: 3,
          stockKeepingUnit: "#1",
          stockQuantity: 38,
          tags: [
            "necklace",
            "platinum necklace"
          ],
          weightInGrams: 200
        },
        {
          _id: "714e74aa-fe03-4c56-8724-57edea9e14ef",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "12 inch silver chain with gem 7cm radius ",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552.jpg"
              }
            },
            {
              asset: {
                _id: "image-c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552.jpg"
              }
            }
          ],
          jewelleryType: "Necklace",
          material: "plastic",
          ocassions: [
            "Weddings",
            "Party and gatherings",
            "Daily wear"
          ],
          price: 2,
          productDescription: [
            {
              children: [
                {
                  _key: "dd65a882fde6",
                  _type: "span",
                  text: "A dazzling crystal pendant that catches the light beautifully. Perfect for evening wear or special occasions, this elegant necklace adds a touch of sparkle and sophistication to any outfit."
                }
              ]
            }
          ],
          productName: "Aurora Crystal Pendant Necklace",
          ratings: 3,
          stockKeepingUnit: "#1",
          stockQuantity: 46,
          tags: [
            "necklace",
            "artificial necklace"
          ],
          weightInGrams: 30
        },
        {
          _id: "76bb5af6-ec4d-4407-a4ca-e11e45afa36f",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "earrings with 1cm radius ball",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736.jpg"
              }
            },
            {
              asset: {
                _id: "image-ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736.jpg"
              }
            }
          ],
          jewelleryType: "Earrings",
          material: "gold",
          ocassions: [
            "Weddings",
            "Party and gatherings",
            "Daily wear"
          ],
          price: 500,
          productDescription: [
            {
              children: [
                {
                  _key: "5cebee4ba2e3",
                  _type: "span",
                  text: "Timeless and graceful, these pearl drop earrings blend classic beauty with modern charm. Ideal for formal events or daily elegance, they enhance any look with pure, understated style."
                }
              ]
            }
          ],
          productName: "Elegant Pearl Drop Earrings",
          ratings: 4,
          stockKeepingUnit: "#2",
          stockQuantity: 50,
          tags: [
            "earrings",
            "gold earrings",
            "pearl drop earrings"
          ],
          weightInGrams: 60
        },
        {
          _id: "988c3fe1-bf38-4572-bc37-5943c099275c",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "12x12 mm flower",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-28a241423844e21e3cd8dbdd082ed8647d452f0d-384x384-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/28a241423844e21e3cd8dbdd082ed8647d452f0d-384x384.jpg"
              }
            },
            {
              asset: {
                _id: "image-28a241423844e21e3cd8dbdd082ed8647d452f0d-384x384-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/28a241423844e21e3cd8dbdd082ed8647d452f0d-384x384.jpg"
              }
            }
          ],
          jewelleryType: "Earrings",
          material: "plastic and paper",
          ocassions: [
            "Party and gatherings"
          ],
          price: 7,
          productDescription: [
            {
              children: [
                {
                  _key: "5cebee4ba2e3",
                  _type: "span",
                  text: "Timeless and graceful, these pearl drop earrings blend classic beauty with modern charm. Ideal for formal events or daily elegance, they enhance any look with pure, understated style."
                }
              ]
            }
          ],
          productName: "Colorado blue earrings",
          ratings: 3.5,
          stockKeepingUnit: "#3",
          stockQuantity: 20,
          tags: [
            "blue earrings",
            "flower earrings"
          ],
          weightInGrams: 3
        },
        {
          _id: "9a66537a-d255-4e07-87bd-36c36d03a45f",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "earrings with 1cm radius ball",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736.jpg"
              }
            },
            {
              asset: {
                _id: "image-ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736.jpg"
              }
            }
          ],
          jewelleryType: "Earrings",
          material: "silver",
          ocassions: [
            "Weddings",
            "Party and gatherings"
          ],
          price: 10,
          productDescription: [
            {
              children: [
                {
                  _key: "4984131887b8",
                  _type: "span",
                  text: "Timeless and graceful, these pearl drop earrings blend classic beauty with modern charm. Ideal for formal events or daily elegance, they enhance any look with pure, understated style."
                }
              ]
            }
          ],
          productName: "Elegant Pearl Drop Earrings",
          ratings: 4,
          stockKeepingUnit: "#2",
          stockQuantity: 50,
          tags: [
            "earrings",
            "silver earrings",
            "pearl drop earrings"
          ],
          weightInGrams: 40
        },
        {
          _id: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "12 inch silver chain with gem 7cm radius ",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552.jpg"
              }
            },
            {
              asset: {
                _id: "image-c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/c6c32190f853fc85d313e7d05a9ce035ae4a0356-736x552.jpg"
              }
            }
          ],
          jewelleryType: "Necklace",
          material: "silver",
          ocassions: [
            "Weddings",
            "Party and gatherings"
          ],
          price: 10,
          productDescription: [
            {
              children: [
                {
                  _key: "12f4c75c0fc3",
                  _type: "span",
                  text: "A dazzling crystal pendant that catches the light beautifully. Perfect for evening wear or special occasions, this elegant necklace adds a touch of sparkle and sophistication to any outfit."
                }
              ]
            }
          ],
          productName: "Aurora Crystal Pendant Necklace",
          ratings: 3,
          stockKeepingUnit: "#1",
          stockQuantity: 14,
          tags: [
            "silver jewellery",
            "necklace"
          ],
          weightInGrams: 50
        },
        {
          _id: "ed1307c8-6051-41b0-ad88-57e4b94d008a",
          applicableOffers: [],
          availableSizes: [
            "sm",
            "md",
            "lg"
          ],
          dimensions: "earrings with 1cm radius ball",
          discountPercentage: 0,
          images: [
            {
              asset: {
                _id: "image-ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736.jpg"
              }
            },
            {
              asset: {
                _id: "image-ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736-jpg",
                url: "https://cdn.sanity.io/images/fy8fosvw/production/ed9f509cbcf5acf1d4be433cefc1c7346079380e-736x736.jpg"
              }
            }
          ],
          jewelleryType: "Earrings",
          material: "plastic",
          ocassions: [
            "Party and gatherings",
            "Daily wear"
          ],
          price: 2,
          productDescription: [
            {
              children: [
                {
                  _key: "8edc4b9fa707",
                  _type: "span",
                  text: "Timeless and graceful, these pearl drop earrings blend classic beauty with modern charm. Ideal for formal events or daily elegance, they enhance any look with pure, understated style., normal"
                }
              ]
            }
          ],
          productName: "Elegant Pearl Drop Earrings",
          ratings: 4,
          stockKeepingUnit: "#2",
          stockQuantity: 46,
          tags: [
            "earrings",
            "artificlal earrings",
            "pearl drop earrings"
          ],
          weightInGrams: 20
        }
      ],

            feedInventory: (list) => {
                return set({
                    inventory: list,
                });
            },

            /* _____ Form submissions ... */
            formSubmissions: [
        {
          _id: "zCDYGVqzOlzRr60sDDtSJF",
          _updatedAt: "2025-06-12T15:17:25Z",
          customerEmail: "amir465affan@gmail.com",
          customerMessage: "fuihghfigu fdughuf guifdhuighfiughidfuhg uifhguf gufhguifhigufhiug hufhguihfiu ghifuhguihdfughdufghuifdhughdifughufgihfiughdf",
          customerName: "muhammad ahmed",
          userPhonenumber: "03312861014"
        },
        {
          _id: "EJWbNZ6QA41b2p9CvJs7fq",
          _updatedAt: "2025-06-05T16:57:10Z",
          customerEmail: "affanamir903@gmail.com",
          customerMessage: "sjhsdjhjfhkfkjshdfkjshdlfjkshdfsdfs",
          customerName: "Muhammad Affan",
          userPhonenumber: "03312861014"
        }
      ],
            feedFormSubmissions: (list) => set(() => (
                {
                    formSubmissions: list,
                }
            )),

            /* _____ Orders ... */

            orders:  [
        {
          _id: "GQhF175dQBVIHKLQQiu8Qe",
          _updatedAt: "2025-06-18T20:15:32Z",
          amountPayable: 232,
          packages: [
            {
              _key: ")JYfT;S[L}~^RWJ9j6)cyQJny&Q0,MIhS^MY7h\"B'O@Q\\A)ic0d_2+CbsBK5",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "p:Ne!o}-Uj~.}_P5n-B6U^D%TO,$5h(<BOgQ)I-h~\"MM/&)4CW0ah#*heo$n",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "I{q3/Z+i`/`\\SQMSsw,(^)VcUZ)Qeqh[%/5:I;Sbz]yoM.s\"G@nFOey!1]+J",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xEFoUhJ",
          weightageInGrams: 1420
        },
        {
          _id: "GQhF175dQBVIHKLQR6wCG4",
          _updatedAt: "2025-06-21T11:41:25Z",
          amountPayable: 232,
          packages: [
            {
              _key: "0AT0bacPZi2t[DGBg1'v7:<T!q2\\./$DEiv]HP#-f!?wE=zhl*~c;$0iU\".?",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: ".\\\"0/\\5`Tv~mx6SFVF9ED$ZxJzARd&Igr8j:MxS{xIH:|A`6H.kg6X~`!h6T",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: ":3pkpo.s}`tw?*o`RUbe6zPUJ\\3O`+iIUDTK7X1j]9`x8]?\\7|5@9/i:O,[;",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xF3IReh",
          weightageInGrams: 1420
        },
        {
          _id: "GQhF175dQBVIHKLQRH3qts",
          _updatedAt: "2025-06-22T17:42:04Z",
          amountPayable: 232,
          packages: [
            {
              _key: "3>P?KDru%=RGP$/b.1+^X\\r{*as[ROm^qeT}4,=A?F.v^C34bRAS/fX=c*S(",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "@wCRrgVn<r.ANxs9e5$Jg8p]lv!eGd]?u+\";t`r,4o2gm6TXI%E~H\"!O*3AM",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "%$qttsw0K[ar%a%#z,ompq;>Ncqoi7)%[^7B7egBq>}PZ?l&gcdbAY:t`FW^",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "GQhF175dQBVIHKLQR70e88",
          weightageInGrams: 1420
        },
        {
          _id: "KIb8ZQL6oBEw9mHP9DzADO",
          _updatedAt: "2025-06-20T19:48:17Z",
          amountPayable: 232,
          packages: [
            {
              _key: "TgEn1^}LW,U]ZXz{_BPfQ(Z2ewroQH{\\]|m<)[i@+'K!d!'rLK*9ee{.<)Fw",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "L9P<-~X^kUGQ8Ke'LUZGq\\Cf9G]@Yd%|!BgYl623M<+UG7{XY#F1/6%l8JTI",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "o}xQRV5T~rd\"NAEhpNshUGW);ob*$]?V(FETU(QU804+3]NS:bUSoI5e(ZGv",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xEFoUhJ",
          weightageInGrams: 1420
        },
        {
          _id: "KmnbQZZm9OkV3zxRYdtDlj",
          _updatedAt: "2025-07-01T07:37:03Z",
          amountPayable: 34,
          packages: [
            {
              _key: "Wjj7u}wcLO4e-G7u){6e4V/%KFIn@@ZH=<I\\^ONoP\\!L$MSCgGFBa]l%M*b",
              productId: "714e74aa-fe03-4c56-8724-57edea9e14ef",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 2,
              size: "md"
            },
            {
              _key: ".Wz%3dANG)1c:M#nVf^q)<(},DBr6G*OaAcQsdW)0&gwsN-<F\\u6oYe]}zl=",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 3,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xEFoUhJ",
          weightageInGrams: 210
        },
        // {
        //   _id: "LawdNTrvHHM4It46HZsl6r",
        //   _updatedAt: "2025-07-02T12:26:55Z",
        //   amountPayable: 34,
        //   packages: [
        //     {
        //       _key: "}2J|>kN_^i`,5OR_^ka*`n=$r9,_a(*^wTDWUh<;S@k^A2,MZp#GYeMhIT|[",
        //       productId: "714e74aa-fe03-4c56-8724-57edea9e14ef",
        //       productName: "Aurora Crystal Pendant Necklace",
        //       productSKU: "#1",
        //       quantity: 2,
        //       size: "md"
        //     },
        //     {
        //       _key: ".nEpQe]@@nwT4+t&u&T5!xRE?V-Ee>]hBom?G0Y~=&)Z}sbcMfWk%lQG2wz",
        //       productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
        //       productName: "Aurora Crystal Pendant Necklace",
        //       productSKU: "#1",
        //       quantity: 3,
        //       size: "lg"
        //     }
        //   ],
        //   status: "Paid",
        //   userId: null,
        //   weightageInGrams: 210
        // },
        {
          _id: "LawdNTrvHHM4It46INmitF",
          _updatedAt: "2025-07-06T10:28:11Z",
          amountPayable: 1200,
          packages: [
            {
              _key: "lCdUMms:Gw-YC<]LJYl,r'0j%\"l&-ALE#])7?W5m;t7#\"nd:u~EM)uN<_MzX",
              productId: "187f2d0c-6049-4dd1-97ed-e55cadac21f2",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 3,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "nLHtB0TtMQKkgpVU5WZogd",
          weightageInGrams: 240
        },
        {
          _id: "ac2Ke2xR9k3hM26xF48rN0",
          _updatedAt: "2025-06-21T11:24:22Z",
          amountPayable: 232,
          packages: [
            {
              _key: "@l~StxQ;aUzvE/T?IA,?}2hl;dYBD/^=*m*Kc%.Jy?7^=jp{{Tvbm(RN$iS/",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "o%PM>:_ZK1u@<r!55R2vJPJ~/a]Imo5m!:`fH;gfkibWR^nLZ|@b043k_aTM",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "@^d`J:+N:qDs!gmI.L2_'t7Nz6$M8a>b=_`Bnde`Aqad?pO<})2=Jw^hLu]k",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xF3IReh",
          weightageInGrams: 1420
        },
        {
          _id: "ac2Ke2xR9k3hM26xF49z5b",
          _updatedAt: "2025-06-21T11:34:38Z",
          amountPayable: 232,
          packages: [
            {
              _key: "4V}9n%yn[w#8:Ar^V$*'^16:hVN'5V.s<acm>jfjkKfH_cUc,^ns-[aXEO9",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "(cy6N7_nh%O[0CwnYQA*>b9GllH,We;?.*8K'h!*q6F7+ty]ky[%XC6rQ%ap",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "g\"9osb2IS:Tg_r^;dGh>A%m+[0~c%d7C0%jjR3llwx8VMG&m<h+>CYYK\"mUp",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xF3IReh",
          weightageInGrams: 1420
        },
        {
          _id: "nLHtB0TtMQKkgpVU542Fcf",
          _updatedAt: "2025-07-04T11:32:23Z",
          amountPayable: 1890,
          packages: [
            {
              _key: "_oh-{T|CC;gR(;iKjm,tYH%?s}bSULoz}NZ]y'\\Jk(MYpidS&,OH1.zR66DX",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 8,
              size: "lg"
            },
            {
              _key: "cp`f84$q6yKR_q$qgg:ItgF@|^C67DdtCzX,a^nrziAwZ\\DNZ|W~C*bn)Jzr",
              productId: "187f2d0c-6049-4dd1-97ed-e55cadac21f2",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "lg"
            },
            {
              _key: "FRA^n&DX_(RkHw\"dnRn(gukF8Ijr5v9sO4>E<O\\Kt+4#n6^}Qv_P-Qd)|!YX",
              productId: "ed1307c8-6051-41b0-ad88-57e4b94d008a",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 3,
              size: "sm"
            },
            {
              _key: "P|n9c]UM^!~1/^pI-`\\^wdj2\\%:s(rDMezh57kJ<WgVcH/$>7SOFz>i:m5JD",
              productId: "ed1307c8-6051-41b0-ad88-57e4b94d008a",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "MKaG*gb9n'`V:D+YhAd_EsP0NBqd*PM&rR@1A6G3)>*$lhw4MZ>{q[Vy3nHN",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            }
          ],
          status: "Paid",
          userId: "nLHtB0TtMQKkgpVU541QIR",
          weightageInGrams: 1420
        },
        {
          _id: "wxB7uk8FGYxHkkCUV1LHC2",
          _updatedAt: "2025-06-18T19:59:25Z",
          amountPayable: 232,
          packages: [
            {
              _key: "$a*`P0MV_I=Oz.<nz$.~?1t1-e6Io/w|CBgWT:)E[#\\(z2(_UXUeo'1*<hjp",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "^q`d?}|xW+2[m/1VhUFs>C>+0t`xHXrc^ePmI9+;WHyq(%`3Sqf\"Q8z4-0%)",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "6).@I~H=Iz^oDJRbLmD/0*ubECpwq%5G3NSlMku0VdLTswDl+BI7$0sI:g%v",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xEFoUhJ",
          weightageInGrams: 1420
        },
        {
          _id: "wxB7uk8FGYxHkkCUVeGjL8",
          _updatedAt: "2025-06-21T11:36:57Z",
          amountPayable: 232,
          packages: [
            {
              _key: "}8]I|3SdH_OY%#bTAAl57GL*)*BM3bN-`n;$O3k-7X9R2_YSDTep7YLVzz\"C",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "n$?}(TzH_STy7Fe)yz]Kzfq'Ls5;<.\"pw!*_VG@66;ucbRi1vcpv1j{5m7^Z",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "i8JqLt$$7\"q%H$Uj*WExm16QUM=K*CPavlHgr-SlkfYk#V#|wuPRiB(a=[p0",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xF3IReh",
          weightageInGrams: 1420
        },
        {
          _id: "wxB7uk8FGYxHkkCUVeHgfe",
          _updatedAt: "2025-06-21T11:47:41Z",
          amountPayable: 232,
          packages: [
            {
              _key: "0f!'q%4W<)g+23#KsuTI^1nkx'^^&&Y%'<b[HvU/UNGim(i\\x!oY]'/>|>>K",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "Rri/PB]*Xt]Dwthwyt1-OTu./:{4:tTIc]M0<Q?~~aaVqzegj4LwsurA4~S1",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "#H,0SY]erBc;A_d[J?bPaV}>ONEm<H!F9$A='?UyqX#`h1eV#zHfP2JEr:WA",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "ac2Ke2xR9k3hM26xF3IReh",
          weightageInGrams: 1420
        },
        {
          _id: "wxB7uk8FGYxHkkCUVeUtwI",
          _updatedAt: "2025-06-21T12:26:40Z",
          amountPayable: 232,
          packages: [
            {
              _key: "|\"vtB}OrbV&X8q4)6J^yNneS>M&d/p3[T^]2L>&g>hBjkl$o\\$mE?#t{3ikL",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "hS^^]BKl/u.,5kwRgKGDTjl(K19'j|G,5XOf-}-%0ZlW^4a?l5B<4(70EBg-",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "$**|yu#VM9e8U3]X%mzAGz14KSXx-h\"_qB\"r0FAT1=fbmFqj/j7RKOU;D.b_",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "GQhF175dQBVIHKLQR70e88",
          weightageInGrams: 1420
        },
        {
          _id: "wxB7uk8FGYxHkkCUVeXfnS",
          _updatedAt: "2025-06-21T12:50:56Z",
          amountPayable: 232,
          packages: [
            {
              _key: "7tuztid*\\$R<y5^sf9*sjz:%N\"L3En\\1U3+2BsI2V-n\\[@r(ga]S?=rF;VUr",
              productId: "44fe2acf-6fba-48e5-9732-bb9e6650386d",
              productName: "Elegant Pearl Drop Earrings",
              productSKU: "#2",
              quantity: 4,
              size: "md"
            },
            {
              _key: "_$.|_O6]Wa5T*BzWWaO0.fgG:Se}d?kmnfQl>|Y#$'9Jp7hZ<SEv`4$AnOi`",
              productId: "50fe87dd-45a9-4a2c-9b5b-6e685036e9ca",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 4,
              size: "sm"
            },
            {
              _key: "u5Py=IPc29ag<yh$jbJU@KIT^vq#%F4~b;0=ZJae=(CL/bhN<3#5nS^^=)^?",
              productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
              productName: "Aurora Crystal Pendant Necklace",
              productSKU: "#1",
              quantity: 6,
              size: "lg"
            }
          ],
          status: "Paid",
          userId: "GQhF175dQBVIHKLQR70e88",
          weightageInGrams: 1420
        }
      ],
            feedOrders: (array) => set(() => (
                {
                    orders: array
                }
            )),
            deleteOrder: (order_id) => set((state) => (
                {
                    orders: state.orders.filter((order: Order) => order._id !== order_id)
                }
            )),
        }
    )
)

export default useDashboardCache;
