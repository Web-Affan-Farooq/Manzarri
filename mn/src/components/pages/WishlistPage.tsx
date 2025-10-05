import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Trash2, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      name: 'Diamond Solitaire Ring',
      price: 3299,
      originalPrice: 3899,
      image: 'https://images.unsplash.com/photo-1633092925902-2ccfad179aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVuZ2FnZW1lbnQlMjB3ZWRkaW5nfGVufDF8fHx8MTc1OTA1MDAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      badge: 'Bestseller',
      addedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Gold Chain Necklace',
      price: 899,
      originalPrice: 1099,
      image: 'https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTkwNTAwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      reviews: 89,
      inStock: true,
      badge: 'New',
      addedDate: '2024-01-12'
    },
    {
      id: 3,
      name: 'Pearl Drop Earrings',
      price: 459,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1682822749969-61a63203c501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGVhcnJpbmdzJTIwbHV4dXJ5JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTg5MzgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5.0,
      reviews: 201,
      inStock: true,
      badge: 'Limited',
      addedDate: '2024-01-10'
    },
    {
      id: 4,
      name: 'Diamond Tennis Bracelet',
      price: 2199,
      originalPrice: 2599,
      image: 'https://images.unsplash.com/photo-1758631279564-785e98313f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXQlMjBsdXh1cnklMjBqZXdlbHJ5fGVufDF8fHx8MTc1OTA1MDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      reviews: 78,
      inStock: true,
      badge: null,
      addedDate: '2024-01-08'
    },
    {
      id: 5,
      name: 'Emerald Vintage Ring',
      price: 1899,
      originalPrice: 2299,
      image: 'https://images.unsplash.com/photo-1689775703592-976824d76033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwcmluZyUyMHByZWNpb3VzJTIwc3RvbmVzfGVufDF8fHx8MTc1OTA1MDA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      reviews: 134,
      inStock: false,
      badge: null,
      addedDate: '2024-01-05'
    }
  ];

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
      <div className="bg-manzarri-skin/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="text-manzarri-black hover:text-manzarri-reddish-brown">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Profile
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-manzarri-black mb-2">My Wishlist</h1>
              <p className="text-manzarri-black/70">
                {wishlistItems.length} items • Total value: ${totalValue.toLocaleString()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-manzarri-black/20">
                <Share2 className="w-4 h-4 mr-2" />
                Share Wishlist
              </Button>
              <Button size="sm" className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                Add All to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {wishlistItems.length > 0 ? (
          <>
            {/* Wishlist Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="border-manzarri-black/20">
                  Sort by Date Added
                </Button>
                <Button variant="outline" size="sm" className="border-manzarri-black/20">
                  Sort by Price
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-manzarri-black/60 hover:text-red-600">
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Wishlist
              </Button>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className={`group cursor-pointer overflow-hidden border-manzarri-black/10 hover:shadow-xl transition-all duration-300 ${
                  !item.inStock ? 'opacity-75' : ''
                }`}>
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {item.badge && (
                      <Badge 
                        className={`absolute top-4 left-4 ${
                          item.badge === 'Bestseller' ? 'bg-manzarri-reddish-brown' :
                          item.badge === 'New' ? 'bg-manzarri-green' :
                          item.badge === 'Limited' ? 'bg-manzarri-faun' :
                          'bg-manzarri-black'
                        } text-manzarri-white`}
                      >
                        {item.badge}
                      </Badge>
                    )}
                    
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-manzarri-black/50 flex items-center justify-center">
                        <span className="text-manzarri-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-manzarri-white/90 hover:bg-manzarri-white">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-manzarri-black mb-2 group-hover:text-manzarri-reddish-brown transition-colors">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(item.rating) 
                                ? 'text-manzarri-faun fill-current' 
                                : 'text-manzarri-black/20'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-manzarri-black/60 ml-2">({item.reviews})</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-bold text-manzarri-reddish-brown">
                        ${item.price.toLocaleString()}
                      </span>
                      {item.originalPrice > item.price && (
                        <>
                          <span className="text-sm text-manzarri-black/50 line-through">
                            ${item.originalPrice.toLocaleString()}
                          </span>
                          <Badge className="bg-manzarri-green text-manzarri-white text-xs">
                            Save ${item.originalPrice - item.price}
                          </Badge>
                        </>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-manzarri-black hover:bg-manzarri-black/90 text-manzarri-white"
                        disabled={!item.inStock}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        {item.inStock ? 'Add to Cart' : 'Notify Me'}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </Button>
                    </div>
                    
                    <p className="text-xs text-manzarri-black/50 mt-3">
                      Added on {new Date(item.addedDate).toLocaleDateString()}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Wishlist Summary */}
            <Card className="mt-12 border-manzarri-black/10 bg-gradient-to-r from-manzarri-skin/20 to-manzarri-faun/10">
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-manzarri-black mb-2">Ready to make them yours?</h3>
                    <p className="text-manzarri-black/70">
                      Total wishlist value: <span className="font-semibold text-manzarri-reddish-brown">${totalValue.toLocaleString()}</span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="border-manzarri-reddish-brown text-manzarri-reddish-brown hover:bg-manzarri-reddish-brown hover:text-manzarri-white">
                      Add Available Items to Cart
                    </Button>
                    <Link to="/marketplace">
                      <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </>
        ) : (
          /* Empty Wishlist */
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-manzarri-black/20 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-manzarri-black mb-4">Your wishlist is empty</h2>
            <p className="text-manzarri-black/70 mb-8 max-w-md mx-auto">
              Start adding items to your wishlist by clicking the heart icon on products you love.
            </p>
            <Link to="/marketplace">
              <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                Explore Collection
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}