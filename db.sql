-- \pset pager off

CREATE TABLE states(
    state_id    serial PRIMARY KEY,
    name        varchar(100),
    abbrev      varchar(2)  
);

CREATE TABLE regions(
    region_id   serial PRIMARY KEY,
    name        varchar(100)
);

CREATE TABLE temples(
    temple_id           serial          PRIMARY KEY,
    name                varchar(100),
    address             varchar(100),
    city                varchar(100),
    state               varchar(100),
    state_id            int             references states(state_id),
    zipcode             varchar(100),
    region_id           int             references regions(region_id),
    website             varchar(100)
);

CREATE TABLE users(
    user_id             serial          PRIMARY KEY,
    username            varchar(100)    NOT NULL unique,
    password            varchar(100)    NOT NULL,
    name                varchar(100),
    home_address        varchar(100),
    home_city           varchar(100),
    home_state          varchar(100),
    home_zipcode        varchar(100),
    home_stateId        int             references states(state_id),
    home_regionID       int             references regions(region_id),
    favoriteTemple      int             references temples(temple_id)
);

INSERT INTO states(name, abbrev)
VALUES
('Alabama', 'AL'),
('Alaska', 'AK'),
('Arizona', 'AZ'),
('California', 'CA'),
('Colorado', 'CO'),
('Connecticut', 'CT'),
('Florida', 'FL'),
('Georgia', 'GA'),
('Hawaii', 'HI'),
('Idaho', 'ID'),
('Illinois', 'IL'),
('Indiana', 'IN'),
('Kentucky', 'KY'),
('Louisiana', 'LA'),
('Maryland', 'MD'),
('Massachusetts', 'MA'),
('Michigan', 'MI'),
('Minnesota', 'MN'),
('Missouri', 'MO'),
('Montana', 'MT'),
('Nebraska', 'NE'),
('Nevada', 'NV'),
('New Mexico', 'NM'),
('New York', 'NY'),
('North Carolina', 'NC'),
('North Dakota', 'ND'),
('Ohio', 'OH'),
('Oklahoma', 'OK'),
('Oregon', 'OR'),
('Pennsylvania', 'PA'),
('South Carolina', 'SC'),
('Tennessee', 'TN'),
('Texas', 'TX'),
('Utah', 'UT'),
('Washington', 'WA'),
('Wyoming', 'WY');

INSERT INTO regions(name)
VALUES
('Northeast'),
('Midwest'),
('South'),
('West');

INSERT INTO temples(name, address, city, state, state_id, zipcode, website, region_id)
VALUES
('Albuquerque New Mexico Temple','10301 San Francisco Rd NE','Albuquerque','New Mexico','23','87122-3437','https://www.lds.org/temples/details/albuquerque-new-mexico-temple?lang=eng','4'),
('Anchorage Alaska Temple','13161 Brayton Dr','Anchorage','Alaska','2','99516','https://www.lds.org/temples/details/anchorage-alaska-temple?lang=eng','4'),
('Atlanta Georgia Temple','6450 Barfield Rd NE','Sandy Springs','Georgia','8','30328-4283','https://www.lds.org/temples/details/atlanta-georgia-temple?lang=eng','3'),
('Baton Rouge Louisiana Temple','10339 Highland Rd','Baton Rouge','Louisiana','14','70810','https://www.lds.org/temples/details/baton-rouge-louisiana-temple?lang=eng','3'),
('Billings Montana Temple','3100 Rim Point Dr','Billings','Montana','20','59106-1386','https://www.lds.org/temples/details/billings-montana-temple?lang=eng','4'),
('Birmingham Alabama Temple','1927 Mount Olive Blvd','Gardendale','Alabama','1','35071','https://www.lds.org/temples/details/birmingham-alabama-temple?lang=eng','3'),
('Bismarck North Dakota Temple','2930 Cody Dr','Bismarck','North Dakota','26','58503-0116','https://www.lds.org/temples/details/bismarck-north-dakota-temple?lang=eng','2'),
('Boise Idaho Temple','1211 S Cole Rd','Boise','Idaho','10','83709-1871','https://www.lds.org/temples/details/boise-idaho-temple?lang=eng','4'),
('Boston Massachusetts Temple','100 Hinckley Wy','Belmont','Massachusetts','16','02478-2135','https://www.lds.org/temples/details/boston-massachusetts-temple?lang=eng','1'),
('Bountiful Utah Temple','640 S Bountiful Blvd','Bountiful','Utah','34','84010-1394','https://www.lds.org/temples/details/bountiful-utah-temple?lang=eng','4'),
('Brigham City Utah Temple','250 S Main St','Brigham City','Utah','34','84302-2560','https://www.lds.org/temples/details/brigham-city-utah-temple?lang=eng','4');

INSERT INTO users(username, password, name, home_address, home_city, home_zipcode, home_state, home_stateId)
VALUES ('test','password','my name', 'my address', 'redding', '84003', (select name from states where abbrev = 'CA'), (select state_id from states where abbrev = 'CA'));