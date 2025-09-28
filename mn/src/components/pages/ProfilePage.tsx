import React from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingBag, Heart, Settings, Package, Star, Calendar, CreditCard } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProfilePage() {
  const recentOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 3299,
      items: [
        {
          name: 'Diamond Solitaire Ring',
          image: 'https://images.unsplash.com/photo-1633092925902-2ccfad179aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVuZ2FnZW1lbnQlMjB3ZWRkaW5nfGVufDF8fHx8MTc1OTA1MDAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          quantity: 1
        }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Processing',
      total: 899,
      items: [
        {
          name: 'Gold Chain Necklace',
          image: 'https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTkwNTAwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          quantity: 1
        }
      ]
    }
  ];

  const quickStats = [
    { label: 'Total Orders', value: '12', icon: Package },
    { label: 'Wishlist Items', value: '5', icon: Heart },
    { label: 'Cart Items', value: '2', icon: ShoppingBag },
    { label: 'Member Since', value: '2023', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
      <div className="bg-manzarri-skin/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="bg-manzarri-reddish-brown text-manzarri-white text-2xl">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-manzarri-black mb-2">John Doe</h1>
              <p className="text-manzarri-black/70 mb-4">john.doe@email.com</p>
              <div className="flex items-center gap-4">
                <Badge className="bg-manzarri-faun text-manzarri-white">
                  <Star className="w-3 h-3 mr-1" />
                  Gold Member
                </Badge>
                <Badge variant="outline" className="border-manzarri-green text-manzarri-green">
                  Verified
                </Badge>
              </div>
            </div>
            <Link to="/profile/settings">
              <Button variant="outline" className="border-manzarri-reddish-brown text-manzarri-reddish-brown hover:bg-manzarri-reddish-brown hover:text-manzarri-white">
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center border-manzarri-black/10">
                    <IconComponent className="w-8 h-8 text-manzarri-reddish-brown mx-auto mb-3" />
                    <p className="text-2xl font-bold text-manzarri-black mb-1">{stat.value}</p>
                    <p className="text-sm text-manzarri-black/60">{stat.label}</p>
                  </Card>
                );
              })}
            </div>

            {/* Recent Orders */}
            <Card className="border-manzarri-black/10">
              <div className="p-6 border-b border-manzarri-black/10">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-manzarri-black">Recent Orders</h2>
                  <Button variant="ghost" className="text-manzarri-reddish-brown hover:text-manzarri-reddish-brown/80">
                    View All
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-start gap-4 p-4 bg-manzarri-skin/10 rounded-lg">
                      <div className="flex-shrink-0">
                        <ImageWithFallback
                          src={order.items[0].image}
                          alt={order.items[0].name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-manzarri-black">Order #{order.id}</h3>
                            <p className="text-sm text-manzarri-black/70">{order.items[0].name}</p>
                          </div>
                          <Badge 
                            className={
                              order.status === 'Delivered' ? 'bg-manzarri-green text-manzarri-white' :
                              order.status === 'Processing' ? 'bg-manzarri-faun text-manzarri-white' :
                              'bg-manzarri-black text-manzarri-white'
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-manzarri-black/60">{order.date}</span>
                          <span className="font-semibold text-manzarri-reddish-brown">${order.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Account Activity */}
            <Card className="border-manzarri-black/10">
              <div className="p-6 border-b border-manzarri-black/10">
                <h2 className="text-2xl font-semibold text-manzarri-black">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-manzarri-green rounded-full"></div>
                    <span className="text-manzarri-black/70">Order #ORD-001 was delivered</span>
                    <span className="text-manzarri-black/50 ml-auto">2 days ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-manzarri-faun rounded-full"></div>
                    <span className="text-manzarri-black/70">Added Pearl Drop Earrings to wishlist</span>
                    <span className="text-manzarri-black/50 ml-auto">5 days ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-manzarri-reddish-brown rounded-full"></div>
                    <span className="text-manzarri-black/70">Left a review for Diamond Solitaire Ring</span>
                    <span className="text-manzarri-black/50 ml-auto">1 week ago</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-manzarri-black/10">
              <div className="p-6">
                <h3 className="font-semibold text-manzarri-black mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/profile/cart" className="block">
                    <Button variant="outline" className="w-full justify-start border-manzarri-black/20 hover:bg-manzarri-skin/20">
                      <ShoppingBag className="w-4 h-4 mr-3" />
                      View Cart (2)
                    </Button>
                  </Link>
                  <Link to="/profile/wishlist" className="block">
                    <Button variant="outline" className="w-full justify-start border-manzarri-black/20 hover:bg-manzarri-skin/20">
                      <Heart className="w-4 h-4 mr-3" />
                      Wishlist (5)
                    </Button>
                  </Link>
                  <Link to="/profile/settings" className="block">
                    <Button variant="outline" className="w-full justify-start border-manzarri-black/20 hover:bg-manzarri-skin/20">
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Membership Status */}
            <Card className="border-manzarri-black/10 bg-gradient-to-br from-manzarri-faun/10 to-manzarri-reddish-brown/10">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-manzarri-faun mr-2" />
                  <h3 className="font-semibold text-manzarri-black">Gold Member</h3>
                </div>
                <p className="text-sm text-manzarri-black/70 mb-4">
                  Enjoy exclusive benefits including free shipping, early access to sales, and personalized recommendations.
                </p>
                <div className="space-y-2 text-xs text-manzarri-black/60">
                  <div className="flex justify-between">
                    <span>Progress to Platinum</span>
                    <span>$1,200 / $5,000</span>
                  </div>
                  <div className="w-full bg-manzarri-skin/50 rounded-full h-2">
                    <div className="bg-manzarri-faun h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Support */}
            <Card className="border-manzarri-black/10">
              <div className="p-6">
                <h3 className="font-semibold text-manzarri-black mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-manzarri-black/70 hover:text-manzarri-reddish-brown">
                    Contact Support
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-manzarri-black/70 hover:text-manzarri-reddish-brown">
                    Track Order
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-manzarri-black/70 hover:text-manzarri-reddish-brown">
                    Return Policy
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}