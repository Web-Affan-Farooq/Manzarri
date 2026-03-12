import {
  ProfileData,
  QuickStats,
  RecentOrders,
  QuickActions,
  SupportLinks,
  MemberShip,
} from "./_components";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
      <ProfileData />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <QuickStats />
            {/* Recent Orders */}
            <RecentOrders />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <QuickActions />
            {/* Membership Status */}
            <MemberShip />
            {/* Support */}
            <SupportLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
