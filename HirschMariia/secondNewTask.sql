SELECT
    ProductName AS ProductName,
    Price * 1.08 AS Price_usd
FROM
    Products
WHERE
    Price BETWEEN 10 AND 100