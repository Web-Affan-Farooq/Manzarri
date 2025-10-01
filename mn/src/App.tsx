import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { MarketplacePage } from "./components/pages/MarketplacePage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { CartPage } from "./components/pages/CartPage";
import { WishlistPage } from "./components/pages/WishlistPage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { LoginPage } from "./components/pages/LoginPage";
import { SignupPage } from "./components/pages/SignupPage";
import { NotificationPanel } from "./components/NotificationPanel";

export default function App() {
  const [showNotifications, setShowNotifications] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-manzarri-white flex flex-col">
        <Header
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
        />

        <NotificationPanel
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/cart" element={<CartPage />} />
            <Route path="/profile/wishlist" element={<WishlistPage />} />
            <Route path="/profile/settings" element={<SettingsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
