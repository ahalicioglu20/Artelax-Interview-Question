/*  This program will check the data set and determine wheter to sell or buy in   change points according to the previous and next value. */


function buySell(arr) {
    let profit = 0;	
    /* setting the inital profit to 0 will give us the final profit. */

    let numberOfTransictions = 0;
    let lastBoughStockValue = 0;
    let numberOfLastBoughtLots = 0;
	let buy = true;
    // determined for the start of the program since it wants to buy the first lot
  
    let sell = false; 
    // this will help when we want to sell after we buy a stock
  
    for (let i = 0; i < arr.length; i++) { 
        if(i != arr.length - 1) { // this is essential to check for the final stock value in order to determine wheter to sell or not 
        // iterating through the list to check every value for buy or sell
            if (buy) {	
                // if we dont have any stock it will perform
                if (arr[i + 1] > arr[i]) { 
                    /*it will perform if the ith value is smaller than the (i+1)th value (checking the increasing change points) */
                    if (numberOfTransictions == 0) { 
                        /* checks wheter it is the first transiction since only 1 lot will be bought */
                        numberOfTransictions += 1;
                        numberOfLastBoughtLots = 1;
                        lastBoughStockValue = arr[i];
                        buy =  false;
                        sell = true;
                        profit = -arr[i];
                    }else 
                    {
                        numberOfTransictions += 1;
                        numberOfLastBoughtLots = Math.floor(profit/arr[i]) 
                        /* profit will not be 0 since this condition will perform after the first sell and buy thus profit will be bigger than 0 */
                        lastBoughStockValue = arr[i];
                        profit = profit % lastBoughStockValue;
                        buy =  false;
                        sell = true;
                    }
                }
            }
            else if (sell) {
                if (arr[i] > arr[i + 1]) {
                    // checks wheter the next value is bigger than the current value so that it is a decreasing changin point
                    numberOfTransictions += 1;
                    profit += arr[i] * numberOfLastBoughtLots
                    buy = true;
                    sell = false;
                }
            }
		}
	    else {
   	        if (sell) {
    	        numberOfTransictions += 1;
                profit += arr[i] * numberOfLastBoughtLots
                buy = true;
			    sell = false;
    	    }
  	    }
	}
  
  console.log("Maximized Profit: ",profit);
}

arr1 = [100, 50, 200, 400, 20, 60, 10, 90, 300, 200];
arr2 = [20, 30, 40, 10, 5, 80, 100, 60];
arr3 = [20, 10, 5, 30, 60, 90, 40, 50];
arr4 = [20, 5, 15, 35, 10, 50, 80, 40];

buySell(arr1);
buySell(arr2);
buySell(arr3);
buySell(arr4);



