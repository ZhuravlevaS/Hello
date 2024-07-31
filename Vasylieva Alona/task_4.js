db.users.find(
  {
    balance: { $gte: 10, $lte: 1000 },
    is_blocked: { $ne: true },
    country: { $nin: ["China", "France"] },
  },
  { fullname: 1, balance: 1, _id: 0 }
);
