-- schema/01_create_users.sql
DROP TABLE IF EXISTS users CASCADE;

-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  -- Ensure full name is not empty
  email VARCHAR(255) NOT NULL UNIQUE,
  -- Enforce unique email addresses
  password VARCHAR(255) NOT NULL,
  -- Ensure password is not empty
  reset_token VARCHAR(255),
  -- For password reset functionality
  reset_token_expiration TIMESTAMPTZ -- Expiration time for reset tokens
);