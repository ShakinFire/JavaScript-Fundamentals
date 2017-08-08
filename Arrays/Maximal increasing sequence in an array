var arr = [1, 2, 8, 5, 6, 7, 8, 1, 2, 3, 4, 5, 1, 2, 4, 5, 6, 7, 8, 9],
	i,
	holderArr = [],
	holderArrLen = 0,
	len = arr.length,
	holder = 0,
	maxHolder = 0,
	startJ = 0;

for(i = 0; i < len; i+= 1){
	if((arr[i] - arr[i + 1]) === -1){
		holder += 1;
		if(holder > maxHolder){
			maxHolder = holder;
		}
	} else {
		holder = 1;
		if(maxHolder > holderArrLen){
			holderArr = [];
			startJ = i - (maxHolder - 1);
			for(j = startJ; j < startJ + maxHolder; j += 1){
				holderArr.push(arr[j]);
			}
			holderArrLen = holderArr.length;
		}
	}
}

console.log(holderArr);
