## Manzarri

Milestones : 
| Feature             | Status |
| ------------------- | ------ |
| Product Listing     | Completed     |
| Product Detail Page | Completed     |
| Cart System         | Completed     |
| Checkout & Order    | Completed     |
| Authentication      | Completed     |
| Wishlist            | Completed     |
| Order table         | Completed     |
| Order details       | Completed     |
| g.analytics setup   | Completed     |
| Payment Integration | Completed     |
| Orderplacementcycle | Completed     |
| Profile             | 🔲     |
| Search & Filter     | 🔲     |
| Reviews / Ratings   | 🔲     |
| Account functions   | 🔲     |
| Email server int.   | 🔲     |
| Dashboard           | 🔲     |
| Notifications       | 🔲     |
| agent               | 🔲     |
| Inventory management| 🔲     |
| Landing ui update   | 🔲     |
| Error Fallback ui   | 🔲     |
| Code testing        | 🔲     |
| Security testing    | 🔲     |

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
- 17-6-2025.12:36am   fix block account feature
- 19-6-2025.1:28am   Completed Order details , fixed stock update after order placement
- 20-6-2025.12:00am   Completed search bar in inventory
- 21-6-2025.5:25pm   Completed architecture for maintaining account activities
- 25-6-2025.5:25pm   Fixed signup localstorage id assign issue
- 25-6-2025.7:00pm   Fixed Responsiveness issue in orders table
- 25-6-2025.8:00pm   Complete frontend ui for account activity monitoring in accounts
- 25-6-2025.8:15pm   Completed api for handling notification push
- 25-6-2025.8:15pm   Completed utility functions for notification push
- 26-6-2025.3:45pm   Created Admin apis in fastapi 
- 1-7-2025.2:30pm   Completed fetching orders corresponding to month logic
- 3-7-2025.10:45pm   Added Sales related chart in dashboard
- 3-7-2025.9:40pm   Completed Google analytics setup , integration and data fetching 

Notes:
implement search accounts functionality in accounts section
Create events section from which admin create events
Create a finances section for managing finances 
Maintain the code for better readability 
implement push notifications on admin dashboard
create notification card for notification display and use vercel notification bar as inspiration
create and customize notifications for success and failures .
create a zustand state for storing email ,name , isadmin , is blocked ,
check in the header is user is admin , or not and render link for admin dashboard
Implement header functionality. If user is not authorized, the header that's shown can contains options or buttons for login and signup
handover the store to ai agent . Agent should run the administration in the store as well as warehouse systems
Create search product functionality
Create Accounts settings page ui 
Create edit profile functionality in profiles
Create ratings system
[Landing page ui design idea](https://www.pinterest.com/pin/595038169537303209/)