-- Table Definition ----------------------------------------------
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    phone_number text,
    email_address text NOT NULL UNIQUE,
    street text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    zip_code integer NOT NULL
);

CREATE TABLE order_history (
    order_id SERIAL PRIMARY KEY,
    customer_id integer REFERENCES customers(customer_id) ON DELETE CASCADE,
    order_date timestamp without time zone,
    product_id integer NOT NULL REFERENCES products(product_id)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name text NOT NULL UNIQUE,
    image_url text NOT NULL,
    price numeric NOT NULL,
    information text NOT NULL, 
    season text[],
    category text[] NOT NULL,
    quantity text NOT NULL
);

CREATE TABLE favorites (
    favorite_id SERIAL PRIMARY KEY,
    product_id integer NOT NULL REFERENCES products(product_id) ON DELETE CASCADE
);


