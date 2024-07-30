db.products.updateMany(
  { price: { $gte: 100 } },
  { $mul: { price: 1.035 } }
)