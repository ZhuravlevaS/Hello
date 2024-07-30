SELECT
    ProductName,
    Price*1.07 AS Price_in_usd
FROM Products
WHERE
    Price >= 10
  AND
    Price <= 100