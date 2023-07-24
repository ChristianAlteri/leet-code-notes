let containsDuplicate = function(nums) {
    seen = {}

    
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (seen.hasOwnProperty(num)) {
                console.log("Seen has this num in it");
                return true
            }
            seen[num] = num
        }
    
        return false
};

console.log(containsDuplicate([1,2,2]));