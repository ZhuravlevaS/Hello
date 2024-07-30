SELECT productName, price * 1.2 AS price_in_usd
FROM Products
WHERE price BETWEEN 10 AND 100;