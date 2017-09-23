const a = [20, 33, 41, 27, 100, 54, 17, 31]

function bubble(arr) {
    let swapped

    do {
        swapped = false

        for (var i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = a[i]
                a[i] = a[i + 1]
                a[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

bubble(a)
console.log(a)




