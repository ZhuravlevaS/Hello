db.users.updateMany(
    { 
      blocked: false, 
      country: { $nin: ["France", "Germany"] }
    },
    { 
      $inc: { balance: 100 } 
    }
  )