/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {

    let max = -Infinity;

    if(heights.length == 2 ){
        let i = heights[0];
        let j = heights[1];
        if(i == 0){
            return j
        } else if (j ==0 ){
            return i
        } else {
            return 2 * Math.min.apply(null, heights)
        }
    }

    for(let i = 0; i < heights.length; i++){
        let el = heights[i];
        let left = 0;
        let right = heights.length;
        for(let j = i+1; j < heights.length; j++){
            if(heights[j] < el){
                right = j;
                break;
            }
        }
        for(let j = i - 1; j >= 0; j--){
            if(heights[j] < el){
                left = j;
                break;
            }
        }
        // console.log(el,left, right)
       

        if(left == i && right == i + 1){
            // console.log('first')
            max = Math.max(max, el )
        } else if(right == heights.length - 1 && right != i){
            // console.log('second')
            max = Math.max(max, el * ((right - 1) - left + 1))
        } else
        {
            // console.log('third')
        max = Math.max(max, ((right - 1) - (left + 1)  + 1) * el);
        }  
        
        // console.log(max)
        

    }
    return max;
    // console.log(heights);
    
};

console.log(largestRectangleArea([2,1,5,6,2,3]))
console.log(largestRectangleArea([2,4]))
console.log(largestRectangleArea([4,2]))
console.log(largestRectangleArea([1,1]))
console.log(largestRectangleArea([4]))
console.log(largestRectangleArea([2,0]))
console.log(largestRectangleArea([0,2]))