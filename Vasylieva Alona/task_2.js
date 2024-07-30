db.users.updateMany(
    {
        is_blocked: { $ne: true },
        country: { $ne: ['France', 'Germany'] }        
    }, 
    {
        $inc: {
            balance: 100
        }
    } 
)