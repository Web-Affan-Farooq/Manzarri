# Manzarri | Project :
## Technologies : 
Typescript (programming language)
NextJS (main meta framework )
ReactJS (main ui library)
tailwindcss (for styling and design systems)
zod (for validating login and signup forms)
nodemailer (for implementing otp verification)

Milestone-1 : Finalized home page (completed) 
Finalize the home page of the website without any animations and prior nested layouts . complete all ten sections that contain important contents of website 

Milestone-2 : Create account page with functionalities
The navbar have an option with profile icon in it . Link that icons to another page that contains a form for login and signup if user is not logged in show login form and if user is not a customer show the signup form to create an account. There are two types of accounts in the market place 

1. User account (normal account)
2. Seller account (to open a shop in market place)

Create a backend route that handle this form submission and create an account in sanity datasets . If account is user account then create it in customers schema and if account is seller account create it in sellers accounts .

After that both users and sellers have thier own personal dashboards for purchasing and uploading a new product

use nextauth for nessessary authentication

Milestone-3 : Create cart page with functionalities 
Create a cart page that perform carud on user's cart, the cart data should be stored in local storage .

Implament that functionality that if user can click add to cart update the cart status in the dashboard of sellers account dynamically and infom him that his product is added to cart with quantity 
