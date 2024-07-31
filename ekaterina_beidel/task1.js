db.users.updateMany(
    {
        country: 'China',
        is_blocked: true
    },
    {
        is_blocked: false,
        $inc: { balance: 50 }
    }
)