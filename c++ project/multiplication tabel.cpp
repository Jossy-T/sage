#include <iostream>
#include <iomanip> /* input/output manipulator*/
using namespace std;

int main() 
	{
	    const int size = 15;
	
	    /* Header row for header*/
	    cout << setw(5) << " ";
	    for (int i = 1; i <= size; ++i) 
		{
	        cout << setw(5) << i;
	    }
	    cout <<endl; /* we can use "\n" instead of endl*/
	    
	
	    /*to separate the upper numbers from the result */
	    cout << setw(5) << " " << string(5 * size, '_') <<endl;
		/* (5*size)Because each number in the table is printed with setw(5) for alignment. */
	    
	
	    /* The Table body part*/
	    for (int row = 1; row <= size; row++) 
		{
	        cout << setw(5) << row << "|";
	        for (int col = 1; col <= size; col++) 
			{
	            cout << setw(5) <<  row * col;
	        }
	        cout <<endl;
	    }
	
	    return 0;
	}
