db.users.updateMany(
    { 
      is_blocked: { $ne: true }, 
      country: "China"
    },
    { 
      $set: { is_blocked: false },
      $inc: { balance: 50 }
    }
  )