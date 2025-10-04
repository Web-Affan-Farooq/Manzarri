import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const RecentOrders = () => {
  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 3299,
      items: [
        {
          name: "Diamond Solitaire Ring",
          image:
            "https://images.unsplash.com/photo-1633092925902-2ccfad179aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVuZ2FnZW1lbnQlMjB3ZWRkaW5nfGVufDF8fHx8MTc1OTA1MDAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          quantity: 1,
        },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Processing",
      total: 899,
      items: [
        {
          name: "Gold Chain Necklace",
          image:
            "https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTkwNTAwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          quantity: 1,
        },
      ],
    },
  ];

  return (
    <Card className="border-manzarri-black/10">
      <div className="p-6 border-b border-manzarri-black/10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-manzarri-black">
            Recent Orders
          </h2>
          <Button
            variant="ghost"
            className="text-manzarri-reddish-brown hover:text-manzarri-reddish-brown/80"
          >
            View All
          </Button>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-start gap-4 p-4 bg-manzarri-skin/10 rounded-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  src={order.items[0].image}
                  alt={order.items[0].name}
                  width={300}
                  height={300}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-manzarri-black">
                      Order #{order.id}
                    </h3>
                    <p className="text-sm text-manzarri-black/70">
                      {order.items[0].name}
                    </p>
                  </div>
                  <Badge
                    className={
                      order.status === "Delivered"
                        ? "bg-manzarri-green text-manzarri-white"
                        : order.status === "Processing"
                          ? "bg-manzarri-faun text-manzarri-white"
                          : "bg-manzarri-black text-manzarri-white"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-manzarri-black/60">
                    {order.date}
                  </span>
                  <span className="font-semibold text-manzarri-reddish-brown">
                    ${order.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
export default RecentOrders;
