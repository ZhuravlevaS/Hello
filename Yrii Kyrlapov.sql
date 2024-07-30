SELECT DISTINCT SupplierID, country
FROM Suppliers
ORDER BY Country;


SELECT productName, price * 1.1 AS price_in_usd
FROM Products
WHERE price BETWEEN 10 AND 100;