/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>

using namespace std;


void merge(int arr[],int start,int mid,int end){
 int n1=mid-start+1;
 int n2=end-mid;
 int l_array[n1],r_array[n2];
 
 for(int i=0;i<n1;i++){
     l_array[i]=arr[start+i];
 }
 
 for(int i=0;i<n2;i++){
     r_array[i]=arr[mid+i+1];
 }
 int i=0,j=0,k=start;
 while(i<n1 && j<n2){
     if(l_array[i]<=r_array[j]){
         arr[k]=l_array[i];
         i++;
         k++;
     }else{
         arr[k]=r_array[j];
         j++;
         k++;
     }
 }
 
 while(i<n1){
     arr[k]=l_array[i];
     i++;
     k++;
 }
while(j<n2){
    arr[k]=r_array[j];
    j++;k++;
}

}

void merge_sort(int arr[],int i,int j){
    
if(i<j){
    int mid=(i+j)/2;
    merge_sort(arr,i,mid);
    merge_sort(arr,mid+1,j);
    merge(arr,i,mid,j); 
}
   
}
int main()
{
    int arr[10]={23,45,32,67,54,78,43,21,1,45};
    
    merge_sort(arr,0,9);
    for(int i=0;i<10;i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}