const search = (arrayValue,value) => {
    if(arrayValue.length===0) return -1
    const binarySearch = (arr, val, start = 0, end = arr.length-1) => {
        let left = start
        let right = end

        while (left <= right) {
            let middleValue = Math.floor((left + right) / 2)
            if (arr[middleValue] === val) {
                return middleValue
            }
            else if (arr[middleValue] < val) {
                left = middleValue + 1
            }
            else {
                right = middleValue - 1
            }



        }
        return -1

    }

    const findK = (rotateArray) => {
        if (rotateArray.length <= 1) return 0
        if (rotateArray[0] < rotateArray[rotateArray.length - 1]) return 0

        let left = 0
        let right = rotateArray.length - 1


        while (left <= right) {
            let middleValue = Math.floor((left + right) / 2)

            if (rotateArray[left] <= rotateArray[middleValue] && rotateArray[middleValue] > rotateArray[middleValue + 1]) {
                return middleValue + 1
            }
            else if (rotateArray[left] > rotateArray[middleValue]) {
                right = middleValue - 1
            }
            else {
                left = middleValue + 1
            }

        }


        return 0
    }


}