#include <iostream>
using namespace std;

int main() {
    int number, i = 1;

    cout << "Enter a number to see its multiplication table: "<<endl;
    cin >> number;

    cout << "Multiplication Table for " << number << ":"<<endl;
    cout << "-----------------------------"<<endl;

    while (i <= 12) {
        cout << number << " x " << i << " = " << number * i << endl;
        i=i+2;
    }

    return 0;
}
