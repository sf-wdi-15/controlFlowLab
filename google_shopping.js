/* WDI LAB 2 - Part 2 - INVENTORY MANAGER 1.0
Date: Nov. 18, 2014
Author: Ky Meyer-Choi

Instructions: 
Use the product search result in your file to check the following:

1.) The kind of results you're are dealing are shopping#products. Go through 
	the items and find all results that have kind of shopping#product. How 
	many are there? Where else is this count information stored in the search 
	results?

2.) Find all items with a backorder availability in inventories.

3.) Find all items with more than one image link.

4.) Find all canon products in the items (careful with case sensitivity).

5.) Find all items that have product author name of "eBay" and are brand "Canon".

6.) Print all the products with their brand, price, and a image link


Notes:
	ARRAY HIERARCHY
		data (main object)
			items
				product
					inventories
*/

var data = require("./products.json")

/* 1 */

var numShopProd = 0;
var items = data["items"];

for (var index = 0; index < items.length; index += 1)
{
	if (items[index]["kind"] === "shopping#product");
	{
		numShopProd += 1;
	}
}

console.log("1.) There are " + numShopProd + " shopping#product kinds of items.");

/* 2 */

var backorderItems = [];
for (var index = 0; index < items.length; index += 1)
{
	for (var item = 0; item < items[index]["product"]["inventories"].length; item += 1)
	{
		if (items[index]["product"]["inventories"][item]["availability"] === "backorder")
		{
			backorderItems.push(items[index]);
		}
	}

}

console.log("2.) There are " + backorderItems.length + " backordered items.");
	


/* 3.) Find all items with more than one image link. */

var multiImagesItems = [];
for (var index = 0; index < items.length; index += 1)
{
	if (items[index]["product"]["images"].length > 1)
	{
		multiImagesItems.push(items[index]);
	}
		
}


console.log("3.) There are " + multiImagesItems.length + " items with more than 1 image.");



/* 4.) Find all canon products in the items (careful with case sensitivity). */
var canonProducts = [];

for (var index = 0; index < items.length; index += 1)
{
	if (items[index]["product"]["brand"].toUpperCase() === "CANON")
	{
		canonProducts.push(items[index]);
	}
}

console.log("4.) There are " + canonProducts.length + " Canon products.");




/* 5.) Find all items that have product author name of "eBay" and are brand "Canon".*/
var canonEbay = [];

for (var index = 0; index < items.length; index += 1)
{
	if (items[index]["product"]["brand"].toUpperCase() === "CANON")
	{
		if (items[index]["product"]["author"]["name"].toUpperCase() === "EBAY")
		{
			canonEbay.push(items[index]);
		}
	}
}

console.log("5.) There are " + canonEbay.length + " Canon/eBay products.");



/* 6.) Print all the products with their brand, price, and a image link */
for (var index = 0; index < items.length; index += 1)
{
	var brand = items[index]["product"]["brand"];
	var price = 0;
	var imageLink = "";

	for (var item = 0; item < items[index]["product"]["inventories"].length; item += 1)
	{
		price = items[index]["product"]["inventories"][item]["price"];
	}

	imageLink = items[index]["product"]["images"][0]["link"];

	console.log("\nItem " + (index+1) + " -- " +
		"\nBrand: " + brand + 
		"\nPrice: " + price +
		"\nImage Link: " + imageLink);
}





