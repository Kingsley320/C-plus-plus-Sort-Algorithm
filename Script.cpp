#include <iostream>
#define MAX 100
using namespace std;

int main(){
    int n;
    int arr[MAX];
    cout<<"Enter a number N: "<< endl;
    cin>>n;
    
    for(int i=0; i<n; i++)
    {
        arr[i] = rand();
    }
    
    for(int i = 0; i<n; i++){
        cout<< arr[i]<<" ";
        
    }
    cout<<endl;
    
    // sorting array
    for (int i = 0; i<n; i++){
    // Assending or descending depends on greater than / less than
        for(int j=i+1; j<n; j++){
            if(arr[j] > arr[i]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // display sorted array
    
      for(int i = 0; i<n; i++){
        cout<< arr[i]<<" ";
        
    }
    cout<<endl;
    return 0;
    
}

// August 22, didn't finish code