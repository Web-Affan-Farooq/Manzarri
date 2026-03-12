# Manzarri E-commerce Platform Documentation

**Manzarri** is an e-commerce platform. This documentation provides an overview of the project's development milestones, recent activities, known issues, and future implementation goals.

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
Implement a functionality that if order is created and not paid then status is pending , if order is created and paid status is proceeding and if successfully completed status is completed .
- Create a different section on the admin dashboard from where the admin would enter email or phone number to send a dashboard invite link . Send the invite link
- Complete setup of google analytics .
- Fix the advertisement component showed on marketplace .
- Take and store more user data on account like address , phonenumber , last login , phone number (optional) , country , orders array referencing to created orders
- Implement header functionality to show Login/Signup options if the user is unauthorized.
- On the account deletion , all the orders and notifications related to that account should be deleted
- Create an edit profile functionality in the profiles section.
- Implement push notifications on the Admin Dashboard.
- Create and customize notifications for success and failure states.
- Create this app a PWA
- Implement pagination in the main marketplace.
- Maintain the codebase for better readability and long-term sustainability.

**Secondary :**
- implement a membership functionality (mini gamification)
- Implement a functionality for users to order custom-designed jewelry.
- Implement a recommendation system for products.
- Create a Ratings/Reviews system.
- Implement Social Authentication using NextAuth.
- Create a user-friendly section for adding products from the dashboard.

**Advanced :**
- Create a finances section for managing financial data.
- Implement an AI Agent to handle administration and warehouse systems.
- Integrate Facebook ads automation 
- Integrate paypal
- Integrate shipment api
- Create notifications section in profile section