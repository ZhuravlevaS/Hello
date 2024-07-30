SELECT ProductName, Price * 1.08 AS PriceInUSD
FROM Products
WHERE Price BETWEEN 10 AND 100;