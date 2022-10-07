-- FundsTransfer Query
CREATE DEFINER = `root` @`localhost` PROCEDURE `FundsTransfer`(
    amount float,
    account_to VARCHAR(50),
    account_from VARCHAR(50),
    timestamp DATETIME
) BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION BEGIN ROLLBACK;
END;
START TRANSACTION;
INSERT INTO transactions (to_account, from_account, amount, created_at)
VALUES (account_to, account_from, amount, timestamp);
UPDATE accounts
SET balance = balance - amount
WHERE account_number = account_from;
UPDATE accounts
SET balance = balance + amount
WHERE account_number = account_to;
COMMIT;
END;
CALL FundsTransfer(200, "456151126165", "45615156165", "2021-09-26");