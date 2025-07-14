#include<iostream>
using namespace std;

void display(int x)
{
	cout<<"the int: "<<x<<endl;
}
void display(double y)
{
	cout<<"the double: "<<y<<endl;
}

void display(string j)
{
	cout<<"name: "<<j<<endl;
}

int main(){
	display(4);
	display(3.4);
	display("jossy");
	return 0;
}