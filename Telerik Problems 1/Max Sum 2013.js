function solve (args){
	var len = +args[0],
		arr = args.slice(1).map(function(index){
			return +index;
		}),
		maxSum = arr[0],
		holdSum,
		i,
		j;

	for(i = 0; i < len; i += 1){
		holdSum = 0;
		for(j = i; j < len; j += 1){
			holdSum += arr[j];
			if(holdSum > maxSum){
				maxSum = holdSum;
			}
		}
	}
	return console.log(maxSum);

}

var arr = [
"9",
"-9",
"-8",
"-8",
"-7",
"-6",
"-5",
"-1",
"-7",
"-6"
]

solve(arr);
