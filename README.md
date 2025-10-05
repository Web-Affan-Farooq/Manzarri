# Manzarri E-commerce Platform Documentation

**Manzarri** is a rapidly developing e-commerce platform. This documentation provides an overview of the project's development milestones, recent activities, known issues, and future implementation goals.

---

## 🚀 Project Status - Milestones

The following table summarizes the completion status of the core features and development milestones:

| Feature | Status |
| :--- | :--- |
| **Core E-commerce** | |
| Product Listing | ✅ Completed |
| Product Detail Page | ✅ Completed |
| Cart System | ✅ Completed |
| Checkout & Order | ✅ Completed |
| Order placement cycle | ✅ Completed |
| Wishlist | ✅ Completed |
| Order table | ✅ Completed |
| Order details | ✅ Completed |
| Payment Integration | ✅ Completed |
| **System & Administration** | |
| Authentication | ✅ Completed |
| g.analytics setup | ✅ Completed |
| Profile | 🔲 Pending |
| Finance management | 🔲 Pending |
| Search & Filter | 🔲 Pending |
| Reviews / Ratings | 🔲 Pending |
| Account functions | 🔲 Pending |
| Email server int. | 🔲 Pending |
| Dashboard | 🔲 Pending |
| Notifications | 🔲 Pending |
| Agent (AI) | 🔲 Pending |
| Inventory management | 🔲 Pending |
| Error Fallback UI | 🔲 Pending |
| Code testing | 🔲 Pending |
| Security testing | 🔲 Pending |

---

## 🕰️ Development Timestamps - Recent Activity Log

This section details the recent development and bug-fixing history, providing a granular view of progress:

| Date | Time | Description |
| :--- | :--- | :--- |
| **2-6-2025** | 1:30 PM | Fixed login token issue. |
| | 2:30 PM | Fixed cart duplication issue. |
| | 2:45 PM | Fixed cart card responsiveness. |
| | 3:00 PM | Created and fixed responsiveness for the wishlist card. |
| | 3:10 PM | Created checkout success page. |
| | 3:30 PM | Created logs. |
| | 3:33 PM | Fixed repeat product issue in product details. |
| | 4:30 PM | Completed basic order placement functionality. |
| **5-6-2025** | 2:10 PM | Integrated payment system and completed order placement. |
| | 3:30 PM | Created Orders table. |
| | 9:25 PM | Created frontend of contact form. |
| | 10:05 PM | Completed Contact form functionality. |
| | 11:25 PM | Linted and fixed simple bugs. |
| **14-6-2025** | 3:10 PM | Fixed bug in the delete account button in `admin/accounts`. |
| **17-6-2025** | 12:36 AM | Fixed block account feature. |
| **19-6-2025** | 1:28 AM | Completed Order details and fixed stock update after order placement. |
| **20-6-2025** | 12:00 AM | Completed search bar in inventory. |
| **21-6-2025** | 5:25 PM | Completed architecture for maintaining account activities. |
| **25-6-2025** | 5:25 PM | Fixed signup local storage ID assignment issue. |
| | 7:00 PM | Fixed responsiveness issue in orders table. |
| | 8:00 PM | Completed frontend UI for account activity monitoring in accounts. |
| | 8:15 PM | Completed API and utility functions for notification push. |
| **26-6-2025** | 3:45 PM | Created Admin APIs in FastAPI. |
| **1-7-2025** | 2:30 PM | Completed fetching orders corresponding to month logic. |
| **3-7-2025** | 9:40 PM | Completed Google Analytics setup, integration, and data fetching. |
| | 10:45 PM | Added sales-related chart in the dashboard. |
| **5-7-2025** | 3:00 PM | Added category filter in inventory. |
| | 3:10 PM | Implemented search accounts functionality in the accounts section. |
| **7-7-2025** | 3:15 PM | Updated notification card in profile. |
| | 3:30 PM | Fixed accounts activity section. |
| **8-7-2025** | 1:35 AM | Created navbar in the new landing page. |
| | 1:00 PM | Fixed background changing animation in the new landing page. |
| **17-8-2025** | 9:10 PM | Integrated **React Hook Form** in the contact form. |
| | 9:15 PM | Integrated **React Hook Form** in login and signup forms. |

---

## ⚠️ Known Bugs and Potential Pitfalls
The following are the identified issues and areas of concern that require immediate attention:

### Logout Failure
**Issue:** Upon logging out in production environments, although tokens are correctly removed and logic runs, the user retains access to the profile page until a manual page refresh is performed.
**Possible Pitfalls:**
* Middleware failure or incomplete execution flow at the specific point of user logout.

### Data Orphanage on Account Deletion
Two critical issues have been identified where data persists after the associated user account is deleted:
1.  **Order Deletion Failure:** User data is removed from the `Accounts` document, but their corresponding orders remain in the `Orders` document.
2.  **Notification Deletion Failure:** User data is removed from the `Accounts` document, but their corresponding notifications remain in the `Notifications` document.

**Mitigation (Planned):**
* Implement a functionality to ensure that when an account is deleted, all corresponding orders and notifications are also automatically deleted (cascading delete).

---

### 🔮 Future Implementations & Roadmap :
The following features and improvements are planned for future development .
**Primary :**
- Create a search product functionality.
- Implement header functionality to show Login/Signup options if the user is unauthorized.
- On the account deletion , all the orders and notifications related to that account should be deleted
- Create an edit profile functionality in the profiles section.
- Implement push notifications on the Admin Dashboard.
- Create and customize notifications for success and failure states.
- Implement session storage in Zustand for all states.
- Create this app a PWA
- Implement pagination in the main marketplace.
- Create an Accounts settings page UI.
- Implement a functionality to push a notification to all users when an offer is created.
- Maintain the codebase for better readability and long-term sustainability.

**Secondary :**
- Implement dashboard guest mode
- implement a membership functionality (mini gamification)
- Implement a functionality for users to order custom-designed jewelry.
- Implement a recommendation system for products.
- Create a Ratings/Reviews system.
- Implement Social Authentication using NextAuth.
- Create a user-friendly section for adding products from the dashboard.

**Advanced :**
- Create an events section from which the admin can create events.
- Create a finances section for managing financial data.
- Implement an AI Agent to handle administration and warehouse systems.
- Integrate Facebook ads automation 
- Integrate paypal
- Integrate shipment api
- Create notifications section in profile section