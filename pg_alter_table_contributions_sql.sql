ALTER TABLE contributions ADD COLUMN member_id integer REFERENCES members(id);
