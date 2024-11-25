const productData = [
    {
      "title": "Wireless Bluetooth Earbuds",
      "price": "49.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Stainless Steel Water Bottle",
      "price": "15.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Portable Phone Charger",
      "price": "25.50",
      "isAvailable": false,
      "rating": 4
    },
    {
      "title": "Organic Cotton T-Shirt",
      "price": "19.99",
      "isAvailable": true,
      "rating": 3
    },
    {
      "title": "Adjustable Office Chair",
      "price": "129.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Noise-Canceling Headphones",
      "price": "89.99",
      "isAvailable": false,
      "rating": 4
    },
    {
      "title": "Ceramic Coffee Mug",
      "price": "12.49",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Smart LED Light Bulb",
      "price": "14.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Waterproof Backpack",
      "price": "39.99",
      "isAvailable": false,
      "rating": 3
    },
    {
      "title": "Yoga Mat with Carrying Strap",
      "price": "22.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Digital Alarm Clock",
      "price": "29.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Nonstick Frying Pan",
      "price": "18.99",
      "isAvailable": true,
      "rating": 3
    },
    {
      "title": "Laptop Stand",
      "price": "34.99",
      "isAvailable": false,
      "rating": 5
    },
    {
      "title": "Eco-Friendly Grocery Bags",
      "price": "9.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "LED Desk Lamp",
      "price": "24.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Electric Kettle",
      "price": "39.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Foldable Camping Chair",
      "price": "44.99",
      "isAvailable": false,
      "rating": 3
    },
    {
      "title": "Reusable Glass Straw Set",
      "price": "8.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Adjustable Dumbbell Set",
      "price": "59.99",
      "isAvailable": false,
      "rating": 4
    },
    {
      "title": "Multi-Port USB Charger",
      "price": "21.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Electric Toothbrush",
      "price": "49.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Memory Foam Pillow",
      "price": "19.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Wireless Mouse",
      "price": "15.99",
      "isAvailable": true,
      "rating": 3
    },
    {
      "title": "HDMI Cable 6ft",
      "price": "7.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Compact Hair Dryer",
      "price": "27.99",
      "isAvailable": false,
      "rating": 4
    },
    {
      "title": "Stainless Steel Mixing Bowls",
      "price": "35.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Fitness Resistance Bands",
      "price": "14.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Digital Kitchen Scale",
      "price": "19.49",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Wireless Keyboard",
      "price": "34.99",
      "isAvailable": true,
      "rating": 3
    },
    {
      "title": "Portable Camping Stove",
      "price": "59.99",
      "isAvailable": false,
      "rating": 4
    },
    {
      "title": "Non-Slip Bath Mat",
      "price": "16.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Reusable Silicone Food Bags",
      "price": "10.49",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Car Phone Mount",
      "price": "13.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Stainless Steel Travel Mug",
      "price": "18.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Rechargeable LED Flashlight",
      "price": "25.99",
      "isAvailable": false,
      "rating": 4
    },
    {
      "title": "Wireless Security Camera",
      "price": "89.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Cordless Handheld Vacuum",
      "price": "59.99",
      "isAvailable": false,
      "rating": 3
    },
    {
      "title": "Cotton Bath Towels Set",
      "price": "35.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Bluetooth Speaker",
      "price": "39.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Adjustable Laptop Stand",
      "price": "29.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Ergonomic Office Chair",
      "price": "129.99",
      "isAvailable": false,
      "rating": 4
    },
    {
      "title": "Foldable Treadmill",
      "price": "299.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Digital Meat Thermometer",
      "price": "15.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Ultralight Hiking Tent",
      "price": "199.99",
      "isAvailable": false,
      "rating": 4
    },
    {
      "title": "Carbon Fiber Trekking Poles",
      "price": "69.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Stainless Steel Knife Set",
      "price": "49.99",
      "isAvailable": true,
      "rating": 5
    },
    {
      "title": "Pet Hair Removal Roller",
      "price": "9.99",
      "isAvailable": true,
      "rating": 4
    },
    {
      "title": "Cooling Gel Memory Foam Mattress",
      "price": "399.99",
      "isAvailable": false,
      "rating": 5
    },
    {
      "title": "Electric Griddle",
      "price": "59.99",
      "isAvailable": true,
      "rating": 4
    }
  ]
  
  module.exports = productData;