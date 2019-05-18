CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "category_name" VARCHAR (120) NOT NULL
);

-- Favorite Link Table
CREATE TABLE "favorite_links" (
    "id" SERIAL PRIMARY KEY,
    "giphy_link" VARCHAR (250) NOT NULL,
	"category_id" int
);



-- Favorite_Link_Category Table
CREATE TABLE "favorites_link_category" (
	"id" SERIAL PRIMARY KEY,
	"cat_id" VARCHAR,
	"link_id" VARCHAR
);


-- Default categories. 
INSERT INTO "category" ("category_name")
VALUES ('Asshole_Cats'), ('Babies'), ('Ron_Swanson');

-- Default gifs
INSERT INTO "favorite_links" ("giphy_link")
VALUES ('https://gph.is/1Izr2ao'), ('https://gph.is/2jIZynP'), ('https://gph.is/18UySK4');


-- Default 'favorite_link_category' table values
INSERT INTO "favorites_link_category" ("cat_id", "link_id")
VALUES (1, 1), (2, 2), (3, 3);