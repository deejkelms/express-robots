-- $ psql -U robot --password -d postgres -f $(pwd)/db/create.sql

DROP DATABASE IF EXISTS robots_dev;
CREATE DATABASE robots_dev;
GRANT ALL PRIVILEGES ON DATABASE robots_Dev to robot;
