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
  animalPreference VARCHAR(255),
  -- Ensure animal preference is not empty
  adoptionStatus VARCHAR(255),
  -- Ensure adoption status is not empty
  phoneNumber VARCHAR(255),
  -- Ensure phone number is not empty
  postalCode VARCHAR(255),
  -- Ensure postal code is not empty
  reset_token VARCHAR(255),
  -- For password reset functionality
  reset_token_expiration TIMESTAMPTZ -- Expiration time for reset tokens
);