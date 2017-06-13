//problem 1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
//233168

#include <stdio.h>

int main(void){
  int total = 0;
  int i = 0;
  int z;
  z = 0;
  int checksum = 0;
  //int stop1 = 1000 / 5;
  int range = 10;
  int stop1 = (1000 / 5) -1;
  int stop2 = (1000 / 3);
  /*
  //int stop2 = 10 / 3;
  int stop1, stop2 = 0;
  if ( (stop1 = range % 5) != 0){
    stop1 = range / 5 - 1;
  }else
    stop1 = range / 5;
  if ( (stop2 = range % 3) != 0){
    stop2 = range / 3 - 1;
  }else
    stop2 = range / 3;
    */
    //try doing the sum of 1 to 333) * 3 ) + the sum of 1 -> 200 ) * 5

  /*

  printf("stop1 = %d, stop2 = %d\n", stop1, stop2);
  for(i = 1; i <= 333; i++){
    total += (3 * i);
    printf("total is now %d\n", total);
    if ( i < 200) {
      total += (5 * i);
      printf("total is now %d\n", total);
    }

  }
  */
  printf("stop1 = %d, stop2 = %d\n", stop1, stop2);
  total = ( ((333/ 2) * 334 + (333/2+1)) * 3) + ( ( (199/2) * 200 + (199/2+1) ) * 5 ) - ( ( (66/2) * 67 ) * 15 ) ;
  for (z = 1; z <= 333; z++){
    checksum = checksum + z;
  }
  printf("checksum is %d\n", checksum);//should be 55611
  /*for(i = stop1 + 1; i <= stop2; i++){
    total += 3 * i;
    printf("3 * i = %d\n", 3*i);
    printf("/total is now %d\n", total);
  }*/

  printf("Total = %d\n", total);
  return 0;
}
