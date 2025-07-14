#include<iostream>
using namespace std;

int main(){
    int y;

    for(int i = 5; i >= 1; i--){

        // Print leading spaces (increasing)
        for(int j = 1; j <= 5 - i; j++){
            cout << " ";
        }

        // Print stars (decreasing)
        for(y = 0; y < (i * 2 - 1); y++){
            cout << "*";
        }

        cout << endl;
    }

    return 0;
}
