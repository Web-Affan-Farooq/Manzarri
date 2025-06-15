## Manzarri

Milestones : 
| Feature             | Status |
| ------------------- | ------ |
| Product Listing     | Completed     |
| Product Detail Page | Completed     |
| Cart System         | Completed     |
| Checkout & Order    | Completed     |
| Authentication      | Completed    |
| Profile             | 🔲      |
| Admin Panel         | 🔲     |
| Search & Filter     | 🔲     |
| Wishlist            | Completed     |
| Reviews / Ratings   | 🔲     |
| Payment Integration | Completed     |
| Order table         | 🔲     |
| Account functions   | 🔲     |
| g.analytics setup   | 🔲     |
| Dashboard           | 🔲     |
| Notifications       | 🔲     |
| agent               | 🔲     |
| Inventory management| 🔲     |
| Landing ui update   | 🔲     |

Timestamps :
- 2-6-2025.1:30 pm    fixed login token issue
- 2-6-2025.2:30pm     fixed cart duplication issue
- 2-6-2025.2:45pm     fixed cart card responsiveness
- 2-6-2025.3:00pm     Created wishlist card
- 2-6-2025.3:00pm     fixed wishlist card responsiveness
- 2-6-2025.3:10pm     Created checkout success page
- 2-6-2025.3:30pm     Created logs
- 2-6-2025.3:33pm     Fixed repeat product issue in product details
- 2-6-2025.4:30pm     Completed Basic order placement
- 5-6-2025.2:10pm     Integrated payment system and completed order placement
- 5-6-2025.3:30pm     Created Orders table
- 5-6-2025.9:25pm     Created frontend of contact form
- 5-6-2025.10:05pm    Completed Contact form functionality
- 5-6-2025.11:25pm    Lint and fix simple bug
- 14-6-2025.3:10pm   fix fug in the delete account button in admin/accounts

Notes:
implement push notifications on admin dashboard
create notification card for notification display and user vercel notification bar as inspiration
get accounts from state instead of getting it from datasets for maintaining cache
edit the signup route and setup for pushing notifications
create and customize notifications for success and failures .
fix block account api route . 
fix notification push route .
complete all the admin preveledges in accounts 
create a zustand state for storing email ,name , isadmin , is blocked ,
check in the header is user is admin , or not and render link for admin dashboard
Implement header functionality. If user is not authorized, the header that's shown can contains options or buttons for login and signup
Learn chart.js or similar libraries for creating analytics module
handover the store to ai agent . Agent should run the administration in the store as well as warehouse systems
Create search product functionality
Create Accounts settings page ui 
Create edit profile functionality in profiles
Create ratings system
Implement Dynamic animations and smooth scrolling animations along with 3d models in landing page
Integrate Order tracking systems
whenever any new route is created on admin , make sure to add this route path to the adminPages array in ViewsContext.tsx

use this https://www.pinterest.com/pin/689473024237631462/ for creating orders management section in admin dashboard


Create a basic inventory managemment system that have the following abilities :
a single column grid that shows the product ,
a details page which shows the analytics of how many products havebeen sold out this month , how it can be 