db.users.updateMany(
  { country: "China" },
  { $set: { isBlocked: false }},
  { $inc: { balance: 50 }}
)
