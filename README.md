## Introduction:
This is a simple pizza ordering website which uses React, Redux state management, React Router to navigate between pages, React Query to fetch data from a fake API and Styled Components for styling.

## Usage:
This app is currently hosted on Netlify and can be found at the link below. Just click on "continue ordering" to use it.
https://react-pizza2.netlify.app/

## Site Features:
Users can add Pizza's to their cart, open their cart to view the contents and order the Pizza's when they are ready.

## Folder Structure:
```
.
├── features
│   ├── cart
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartOverview.jsx
│   │   ├── cartSlice.js
│   │   ├── DeleteItem.jsx
│   │   ├── EmptyCart.jsx
│   │   └── UpdateItemQuantity.jsx
│   ├── menu
│   │   ├── Menu.jsx
│   │   └── MenuItem.jsx
│   ├── order
│   │   ├── CreateOrder.jsx
│   │   ├── Order.jsx
│   │   ├── OrderItem.jsx
│   │   ├── SearchOrder.jsx
│   │   └── UpdateOrder.jsx
│   └── user
│       ├── CreateUser.jsx
│       ├── Username.jsx
│       └── userSlice.js
├── services
│   ├── apiGeocoding.js
│   └── apiRestaurant.js
├── ui
│   ├── AppLayout.jsx
│   ├── Button.jsx
│   ├── Error.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   └── Loader.jsx
├── utils
│   ├── helpers.js
│   └── LinkButton.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── store.js
```
