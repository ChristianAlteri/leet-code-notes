let maxProfit = function(prices) {
    let minValue = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minValue) {
        minValue = prices[i];
        minIndex = i;
        }
    }

    newArray = prices.splice(minIndex + 1)

    let maxValue = newArray[0];
    for (let i = 1; i < newArray.length; i++) {
        if (newArray[i] > maxValue) {
            maxValue = newArray[i];
        }
    }
    return profit = maxValue - minValue
};



maxProfit([7,6,4,3,1])
console.log(profit);