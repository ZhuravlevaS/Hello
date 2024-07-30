db.users.updateMany(
  {
      is_blocked: { $eq: true },
      country: { $nin: ['Germany', 'France'] }
  },
  {
      $inc: {
          balance: 100
      }
  }
)