-- heroku pg:psql
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


CREATE TABLE visited(
    visited_id  serial  PRIMARY KEY,
    user_id     INT     references users(user_id),
    temple_id   INT     references temples(temple_id)
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

-- Insert April 8
INSERT INTO temples(name, address, city, state, state_id, zipcode, website, region_id)
VALUES
('Cedar City Utah Temple','280 South Cove Dr','Cedar City','Utah','34','84720','https://www.lds.org/temples/details/cedar-city-utah-temple?lang=eng','4'),
('Chicago Illinois Temple','4151 W Lake Ave','Glenview','Illinois','11','60025-1240','https://www.lds.org/temples/details/chicago-illinois-temple?lang=eng','2'),
('Columbia River Washington Temple','969 Gage Blvd','Richland','Washington','35','99352-7777','https://www.lds.org/temples/details/columbia-river-washington-temple?lang=eng','4'),
('Columbia South Carolina Temple','2905 Trotter Rd','Hopkins','South Carolina','31','29061-9573','https://www.lds.org/temples/details/columbia-south-carolina-temple?lang=eng','3'),
('Columbus Ohio Temple','3870 Gateway Blvd','Columbus','Ohio','27','43228-9747','https://www.lds.org/temples/details/columbus-ohio-temple?lang=eng','2'),
('Dallas Texas Temple','6363 Willow Ln','Dallas','Texas','33','75230-2227','https://www.lds.org/temples/details/dallas-texas-temple?lang=eng','3'),
('Denver Colorado Temple','2001 E Phillips Cir','Centennial','Colorado','5','80122-3264','https://www.lds.org/temples/details/denver-colorado-temple?lang=eng','4'),
('Detroit Michigan Temple','37425 Woodward Ave','Bloomfield Hills','Michigan','17','48304','https://www.lds.org/temples/details/detroit-michigan-temple?lang=eng','2'),
('Draper Utah Temple','14065 Canyon Vista Ln','Draper','Utah','34','84020-5626','https://www.lds.org/temples/details/draper-utah-temple?lang=eng','4'),
('Fort Collins Colorado Temple','2180 Majestic Dr','Fort Collins','Colorado','5','80528','https://www.lds.org/temples/details/fort-collins-colorado-temple?lang=eng','4'),
('Fort Lauderdale Florida Temple','3901 SW 154th Ave','Davie','Florida','7','33331','https://www.lds.org/temples/details/fort-lauderdale-florida-temple?lang=eng','3'),
('Fresno California Temple','6290 N Valentine Ave','Fresno','California','4','93711','https://www.lds.org/temples/details/fresno-california-temple?lang=eng','4'),
('Gilbert Arizona Temple','3301 S Greenfield Rd','Gilbert','Arizona','3','85297','https://www.lds.org/temples/details/gilbert-arizona-temple?lang=eng','4'),
('Hartford Connecticut Temple','2 Central Wy','Farmington','Connecticut','6','06032','https://www.lds.org/temples/details/hartford-connecticut-temple?lang=eng','1'),
('Houston Texas Temple','15725 Champion Forest Dr','Spring','Texas','33','77379-7036','https://www.lds.org/temples/details/houston-texas-temple?lang=eng','3'),
('Idaho Falls Idaho Temple','1000 Memorial Dr','Idaho Falls','Idaho','10','83402-3410','https://www.lds.org/temples/details/idaho-falls-idaho-temple?lang=eng','4'),
('Indianapolis Indiana Temple','11565 Temple Dr','Carmel','Indiana','12','46032-8859','https://www.lds.org/temples/details/indianapolis-indiana-temple?lang=eng','2'),
('Jordan River Utah Temple','10200 S Temple Drive','South Jordan','Utah','34','84095-8814','https://www.lds.org/temples/details/jordan-river-utah-temple?lang=eng','4'),
('Kansas City Missouri Temple','7001 Searcy Creek Pkwy','Kansas City','Missouri','19','64119-5336','https://www.lds.org/temples/details/kansas-city-missouri-temple?lang=eng','2'),
('Kona Hawaii Temple','75-230 Kalani St','Kailua-Kona','Hawaii','9','96740-1833','https://www.lds.org/temples/details/kona-hawaii-temple?lang=eng','4'),
('Laie Hawaii Temple','55-600 Naniloa Loop','Laie','Hawaii','9','96762-2202','https://www.lds.org/temples/details/laie-hawaii-temple?lang=eng','4'),
('Las Vegas Nevada Temple','827 Temple View Dr','Las Vegas','Nevada','22','89110-2920','https://www.lds.org/temples/details/las-vegas-nevada-temple?lang=eng','4'),
('Logan Utah Temple','175 N 300 E','Logan','Utah','34','84321-4720','https://www.lds.org/temples/details/logan-utah-temple?lang=eng','4'),
('Los Angeles California Temple','10777 Santa Monica Blvd','Los Angeles','California','4','90025-4718','https://www.lds.org/temples/details/los-angeles-california-temple?lang=eng','4'),
('Louisville Kentucky Temple','7116 West Hyw 22','Crestwood','Kentucky','13','40014-9069','https://www.lds.org/temples/details/louisville-kentucky-temple?lang=eng','3'),
('Lubbock Texas Temple','7016 Frankford Ave','Lubbock','Texas','33','79424','https://www.lds.org/temples/details/lubbock-texas-temple?lang=eng','3'),
('Manhattan New York Temple','125 Columbus Ave, Fourth Floor','New York','New York','24','10023-6514','https://www.lds.org/temples/details/manhattan-new-york-temple?lang=eng','1'),
('Manti Utah Temple','200 E 510 N','Manti','Utah','34','84642-1701','https://www.lds.org/temples/details/manti-utah-temple?lang=eng','4'),
('Medford Oregon Temple','3900 Grant','Central Point','Oregon','29','97502-3911','https://www.lds.org/temples/details/medford-oregon-temple?lang=eng','4'),
('Memphis Tennessee Temple','4199 Kirby-Whitten Pkwy','Bartlett','Tennessee','32','38135-9245','https://www.lds.org/temples/details/memphis-tennessee-temple?lang=eng','3'),
('Meridian Idaho Temple','7355 N Linder Rd','Meridian','Idaho','10','83646','https://www.lds.org/temples/details/meridian-idaho-temple?lang=eng','4'),
('Mesa Arizona Temple','101 S LeSueur','Mesa','Arizona','3','85204-1031','https://www.lds.org/temples/details/mesa-arizona-temple?lang=eng','4'),
('Monticello Utah Temple','365 N 200 W','Monticello','Utah','34','84535','https://www.lds.org/temples/details/monticello-utah-temple?lang=eng','4'),
('Mount Timpanogos Utah Temple','742 N 900 E','American Fork','Utah','34','84003-9124','https://www.lds.org/temples/details/mount-timpanogos-utah-temple?lang=eng','4'),
('Nashville Tennessee Temple','1100 Gray Fox Ln','Franklin','Tennessee','32','37069','https://www.lds.org/temples/details/nashville-tennessee-temple?lang=eng','3'),
('Nauvoo Illinois Temple','50 N Wells St','Nauvoo','Illinois','11','62354','https://www.lds.org/temples/details/nauvoo-illinois-temple?lang=eng','2'),
('Newport Beach California Temple','2300 Bonita Canyon Dr','Newport Beach','California','4','92660-9118','https://www.lds.org/temples/details/newport-beach-california-temple?lang=eng','4'),
('Oakland California Temple','4770 Lincoln Ave','Oakland','California','4','94602-2535','https://www.lds.org/temples/details/oakland-california-temple?lang=eng','4'),
('Ogden Utah Temple','350 22nd St','Ogden','Utah','34','84401-1487','https://www.lds.org/temples/details/ogden-utah-temple?lang=eng','4'),
('Oklahoma City Oklahoma Temple','12030 N Mustang Rd','Yukon','Oklahoma','28','73099-9801','https://www.lds.org/temples/details/oklahoma-city-oklahoma-temple?lang=eng','3'),
('Oquirrh Mountain Utah Temple','11022 S 4000 W','South Jordan','Utah','34','84009-5797','https://www.lds.org/temples/details/oquirrh-mountain-utah-temple?lang=eng','4'),
('Orlando Florida Temple','9000 Windy Ridge Rd','Windermere','Florida','7','34786-8347','https://www.lds.org/temples/details/orlando-florida-temple?lang=eng','3'),
('Palmyra New York Temple','2720 Temple Rd','Palmyra','New York','24','14522-9573','https://www.lds.org/temples/details/palmyra-new-york-temple?lang=eng','1'),
('Payson Utah Temple','1494 S 930 W','Payson','Utah','34','84651','https://www.lds.org/temples/details/payson-utah-temple?lang=eng','4'),
('Philadelphia Pennsylvania Temple','1739 Vine St','Philadelphia','Pennsylvania','30','19103','https://www.lds.org/temples/details/philadelphia-pennsylvania-temple?lang=eng','1'),
('Phoenix Arizona Temple','5220 W Pinnacle Peak Rd','Phoenix','Arizona','3','85310','https://www.lds.org/temples/details/phoenix-arizona-temple?lang=eng','4'),
('Portland Oregon Temple','13600 Kruse Oaks Blvd','Lake Oswego','Oregon','29','97035-8602','https://www.lds.org/temples/details/portland-oregon-temple?lang=eng','4'),
('Provo City Center Temple','50 South University Ave','Provo','Utah','34','84601','https://www.lds.org/temples/details/provo-city-center-temple?lang=eng','4'),
('Provo Utah Temple','2200 Temple Hill Dr','Provo','Utah','34','84604-1775','https://www.lds.org/temples/details/provo-utah-temple?lang=eng','4'),
('Raleigh North Carolina Temple','574 Bryan Dr','Apex','North Carolina','25','27502-4127','https://www.lds.org/temples/details/raleigh-north-carolina-temple?lang=eng','3'),
('Redlands California Temple','1761 Fifth Ave','Redlands','California','4','92374-5503','https://www.lds.org/temples/details/redlands-california-temple?lang=eng','4'),
('Reno Nevada Temple','2000 Beaumont Pkwy','Reno','Nevada','22','89523','https://www.lds.org/temples/details/reno-nevada-temple?lang=eng','4'),
('Rexburg Idaho Temple','750 S 2nd E','Rexburg','Idaho','10','83440-5404','https://www.lds.org/temples/details/rexburg-idaho-temple?lang=eng','4'),
('Sacramento California Temple','2110 California Cir','Rancho Cordova','California','4','95742-6415','https://www.lds.org/temples/details/sacramento-california-temple?lang=eng','4'),
('Salt Lake Temple','50 W North Temple St','Salt Lake City','Utah','34','84150-9709','https://www.lds.org/temples/details/salt-lake-temple?lang=eng','4'),
('San Antonio Texas Temple','20080 Stone Oak Pkwy','San Antonio','Texas','33','78258-6920','https://www.lds.org/temples/details/san-antonio-texas-temple?lang=eng','3'),
('San Diego California Temple','7474 Charmant Dr','San Diego','California','4','92122-5000','https://www.lds.org/temples/details/san-diego-california-temple?lang=eng','4'),
('Seattle Washington Temple','2808 148th Ave SE','Bellevue','Washington','35','98007-6453','https://www.lds.org/temples/details/seattle-washington-temple?lang=eng','4'),
('Snowflake Arizona Temple','1875 W Canyon Dr','Snowflake','Arizona','3','85937-6014','https://www.lds.org/temples/details/snowflake-arizona-temple?lang=eng','4'),
('Spokane Washington Temple','13710 E 40th Ave','Spokane','Washington','35','99206','https://www.lds.org/temples/details/spokane-washington-temple?lang=eng','4'),
('St. George Utah Temple','250 E 400 S','St. George','Utah','34','84770-3699','https://www.lds.org/temples/details/st.-george-utah-temple?lang=eng','4'),
('St. Louis Missouri Temple','12555 N Outer Forty Dr','St. Louis','Missouri','19','63141-8620','https://www.lds.org/temples/details/st.-louis-missouri-temple?lang=eng','2'),
('St. Paul Minnesota Temple','2150 Hadley Ave N','Oakdale','Minnesota','18','55128-4505','https://www.lds.org/temples/details/st.-paul-minnesota-temple?lang=eng','2'),
('Star Valley Wyoming Temple','885 S Washington St','Afton','Wyoming','36','83110','https://www.lds.org/temples/details/star-valley-wyoming-temple?lang=eng','4'),
('The Gila Valley Arizona Temple','5291 W Highway 70','Central','Arizona','3','85531','https://www.lds.org/temples/details/the-gila-valley-arizona-temple?lang=eng','4'),
('Tucson Arizona Temple','7281 North Skyline Dr','Tucson','Arizona','3','85718','https://www.lds.org/temples/details/tucson-arizona-temple?lang=eng','4'),
('Twin Falls Idaho Temple','1405 Eastland Dr N','Twin Falls','Idaho','10','83301','https://www.lds.org/temples/details/twin-falls-idaho-temple?lang=eng','4'),
('Vernal Utah Temple','170 S 400 W','Vernal','Utah','34','84078-2536','https://www.lds.org/temples/details/vernal-utah-temple?lang=eng','4'),
('Washington D.C. Temple','9900 Stoneybrook Dr','Kensington','Maryland','15','20895-3199','https://www.lds.org/temples/details/washington-d.c.-temple?lang=eng','3'),
('Winter Quarters Nebraska Temple','8283 N 34th St','Omaha','Nebraska','21','68112','https://www.lds.org/temples/details/winter-quarters-nebraska-temple?lang=eng','2');

