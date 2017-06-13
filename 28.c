#include <stdio.h>

int main(void) {
    int t, n, total, last;
    scanf("%d", &t);
    for (int a = 0; a < t; a++){
        //cin >> n;
        scanf("%d", &n);
        total = last = 1;
        for (int i = 1; (2*i)+1 <= n; i++){
            total += (last*4) + ((2*i)*10);
            last = last + (4*2*i);
        }
        //cout << total << endl;
        printf("%d\n", total);
    }
    return 0;
}
