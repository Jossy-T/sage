#include <iostream>
using namespace std;

int main() {
    char op;
    float x, y;

    cout << "Enter operator (+, -, *, /): ";
    cin >> op;

    cout << "Enter two numbers (use space between numbers): ";
    cin >> x >> y;

    switch(op) {
        case '+':
            cout << "Result: " << x + y << endl;
            break;

        case '-':
            cout << "Result: " << x - y << endl;
            break;

        case '*':
            cout << "Result: " << x*y << endl;
            break;

        case '/':
            if (y != 0)
                cout << "Result: " << x / y << endl;
            else
                cout << "Error: Division by zero!" << endl;
            break;

        default:
            cout << "Error: Invalid operator!" << endl;
    }

    return 0;
}
