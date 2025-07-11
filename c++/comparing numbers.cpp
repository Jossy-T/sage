#include<iostream>
using namespace std;

int main(){
	
	double x,y;
	
	cout<<"enter the first numbers to compare"<<endl;
	cin>>x;
	cout<<"enter the second numbers to compare"<<endl;
	cin>>y;
	
	if(x>y){
		cout<<"the largest number is: "<<x<<endl;
	}
	
	else{
		cout<<"the smallest number is: "<<y<<endl;
	}
}