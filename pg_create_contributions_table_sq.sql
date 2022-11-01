CREATE TABLE contributions(
    id SERIAL PRIMARY KEY,
    amount FLOAT,
    date_send date default NULL
);