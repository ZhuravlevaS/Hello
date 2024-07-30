db.products.updateMany(
  {
      price: { $gt: 100 }
  },
  { $mul: { balance: 1.035 } }
)