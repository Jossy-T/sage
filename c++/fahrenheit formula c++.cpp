#include<iostream>
using namespace std;
int main(){
	double celcius;
	const double value=1.8;
	const double far=32;
	float fahrenheit;
	
	cout<<"enter celcius value"<<endl;
	cin>>celcius;
	
	fahrenheit=(celcius*1.8)+32;
	cout<<"fahrenheit  "<<fahrenheit<<endl;
	return 9;
}