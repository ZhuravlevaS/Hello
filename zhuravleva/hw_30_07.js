// Заблокировать всех не заблокированных юзеров не из China и уменьшить их баланс на 25 EUR

db.getCollection("users").updateMany(
    {
        is_blocked: { $ne: true },
        country: { $ne: "China" }
    },
    {
        $set: {
            is_blocked: true,
        },
        $inc: {
            balance: -25
        }
    }
)

// Вывести имена и баланс заблокированных юзеров из China и из France, если их баланс находится в диапазоне значений от 10 до 1000 (вкл.)
db.getCollection("users").find({
    is_blocked: true,
    country: { $in: ["China", "France"] },
    balance: { $gte: 10, $lte: 100 }
})