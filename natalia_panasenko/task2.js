db.users.updateMany(
  {
      is_blocked: { $eq: true },
      country: { $nin: ['Germany', 'France'] }
  },
  {
      $mul: {
          balance: 100
      }
  }
)