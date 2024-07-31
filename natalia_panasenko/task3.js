db.users.updateMany(
  { country: 'China', is_blocked: true },
  {
      $unset: { is_blocked: false }, $inc: { balance: 50 }
  }

)
