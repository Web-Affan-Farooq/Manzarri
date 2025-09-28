import React from 'react';
import { X, ShoppingBag, Heart, Star, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'order',
      icon: ShoppingBag,
      title: 'Order Shipped',
      message: 'Your Diamond Tennis Bracelet has been shipped and will arrive in 2-3 days.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      type: 'wishlist',
      icon: Heart,
      title: 'Back in Stock',
      message: 'The Rose Gold Engagement Ring you wishlisted is now available!',
      time: '5 hours ago',
      unread: true
    },
    {
      id: 3,
      type: 'review',
      icon: Star,
      title: 'Review Request',
      message: 'How did you like your Pearl Earrings? Leave a review and get 10% off your next order.',
      time: '1 day ago',
      unread: false
    },
    {
      id: 4,
      type: 'promotion',
      icon: Gift,
      title: 'Special Offer',
      message: 'Enjoy 20% off on all necklaces this weekend. Use code SPARKLE20.',
      time: '2 days ago',
      unread: false
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-manzarri-white shadow-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-manzarri-black/10 px-6 py-4">
            <h2 className="text-xl font-semibold text-manzarri-black">Notifications</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-manzarri-black hover:text-manzarri-reddish-brown"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Notifications List */}
          <div className="flex-1 overflow-y-auto">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`border-b border-manzarri-black/5 px-6 py-4 hover:bg-manzarri-skin/20 transition-colors cursor-pointer ${
                    notification.unread ? 'bg-manzarri-skin/10' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      notification.type === 'order' ? 'bg-manzarri-green/20 text-manzarri-green' :
                      notification.type === 'wishlist' ? 'bg-manzarri-reddish-brown/20 text-manzarri-reddish-brown' :
                      notification.type === 'review' ? 'bg-manzarri-faun/20 text-manzarri-faun' :
                      'bg-manzarri-skin/50 text-manzarri-black'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-manzarri-black">{notification.title}</p>
                        {notification.unread && (
                          <Badge variant="secondary" className="w-2 h-2 p-0 bg-manzarri-reddish-brown" />
                        )}
                      </div>
                      <p className="text-sm text-manzarri-black/70 mt-1 leading-relaxed">
                        {notification.message}
                      </p>
                      <p className="text-xs text-manzarri-black/50 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="border-t border-manzarri-black/10 px-6 py-4">
            <Button
              variant="outline"
              className="w-full border-manzarri-reddish-brown text-manzarri-reddish-brown hover:bg-manzarri-reddish-brown hover:text-manzarri-white"
            >
              Mark All as Read
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}