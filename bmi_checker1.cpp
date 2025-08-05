# include<iostream>
using namespace std;
int main(){
	double weight,height,Bmi;
	
	cout<<"enter your weight"<<endl;
	cin>>weight;
	
	cout<<"enter your height"<<endl;
	cin>>height;
	
	Bmi=weight/(height*height);
	
	if(Bmi<18.5){
		cout<<"under weight"<<endl;
	}
	else if(Bmi>=18.5 && Bmi<=24.9){
		cout<<"normal"<<endl;
	}
	else if(Bmi>=25 && Bmi<=29.9){
		cout<<"Over weight"<<endl;
	}
	else{
		cout<<"Obese"<<endl;
	}
	
	cout<<"you are"<<Bmi<<endl;
	
	return 0;
}