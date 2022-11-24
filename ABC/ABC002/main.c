#include<stdio.h>

int main() {
	int a,b;

	//整数の入力値1
	scanf("%d", &a);

	//整数の入力値2
	scanf("%d", &b);

	//AとBを比べた計算結果を出力
	if(a > b)
		printf("%d\n", a);
	else
		printf("%d\n", b);
	return 0;
}