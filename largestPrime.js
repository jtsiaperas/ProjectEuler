keyNumber = 600851475143
for (i=keynumber/2; i>0; i--){
    prime = true;
    if (keynumber%i == 0) {
        for (j = 2; j<i; j++){
            if (i%j == 0){
               prime = false;
            }
        }
        if (prime){
            window.alert(i);
        }
    }
}