#include<iostream>
using namespace std;
class BankAccount{int accNo;string depositorName,accType;double balance;public:void Initialize_members(){cout<<"Initializing members...\n";}void Deposit_Amount(){cout<<"Depositing amount...\n";}void Withdraw_Amount(){cout<<"Withdrawing amount...\n";}void Display_Balance(){cout<<"Displaying balance...\n";}};
int main(){BankAccount account[10];for(int i=0;i<10;++i){cout<<"Testing Bank Account class for customer "<<i+1<<endl;// Code to test Bank Account class for 10 customers
}return 0;}
