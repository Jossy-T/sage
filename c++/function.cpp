#include<iostream>
using namespace std;
void celcius_to_farhenite(double cel)
/*the bracket is to write the parameter*/
{
	double f;
	f=(cel*1.8)+32;
	cout<<f<<endl;
}

void farhenite_to_celcius(double far){
	double c;
	c=(far-32)*5/9;
	cout<<c<<endl;
}


int main(){
	celcius_to_farhenite(0);
	celcius_to_farhenite(32);
	
	farhenite_to_celcius(32);
	
	return 0;
}