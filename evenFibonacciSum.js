prev = 0;
current = 1;
sum = 0;
evenSum = 0;
while (current < 4000000){
    if (current % 2 == 0)
    	evenSum += current;
    sum = current + prev;
    prev = current;
    current = sum;
}
window.alert(evenSum);
