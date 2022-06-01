SELECT COUNT(*) AS `total` FROM user_info WHERE id = :id
INSERT INTO user_info (id, stage)
        VALUES (:id, 1)