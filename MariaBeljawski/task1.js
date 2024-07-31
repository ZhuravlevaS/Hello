db.users.updateMany({
    country: { $nin: ["China"] },
    is_blocked: { $eq: true }
},
    {
        $set: { is_blocked: false },
        $inc: { balance: 50 }
    },
)