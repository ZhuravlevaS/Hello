db.users.updateMany(
    {
        country: { $in: 'China' }
    },
    {
        $set: {is_blocked : false},
        $inc: { balance: 50 }
    }
)