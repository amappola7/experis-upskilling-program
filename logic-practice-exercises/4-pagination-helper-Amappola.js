// Pagination Helper
// Link: https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

class PaginationHelper {
	constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
                this.collection = collection;
                this.numeration = itemsPerPage;
	}
	itemCount() {
	// returns the number of items within the entire collection
                return this.collection.length;
	}
	pageCount() {
	// returns the number of pages
                return Math.ceil(this.itemCount() / this.numeration);
	}
	pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
                return -1;
        } else if (pageIndex !== this.pageCount() - 1) {
                return this.numeration;
        } else {
                return this.itemCount() - (this.numeration * (this.pageCount() - 1));
        }
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
                return itemIndex < 0 ||  itemIndex > this.itemCount() - 1 ? -1 : Math.floor(itemIndex / this.numeration);
	}
}

const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// const helper = new PaginationHelper(['a','b','c','d','e','f', 1, 2, 3, 4], 4);
console.log(helper.itemCount()); // should == 6
console.log(helper.pageCount()); // should == 2
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1