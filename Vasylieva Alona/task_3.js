db.users.updateMany(
  { country: "China" },
  {
    $unset: {
      is_blocked: null,
    },
  },
  {
    $inc: {
      balance: 50,
    },
  }
);
