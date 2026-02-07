//#include <iostream>

//int main() {
  //  std::cout << "Hello\n";
//std::cout << "Hello again\n";
//


#include <iostream>
#include <vector>

int main() {
    char name = 'J';
    double pay = 9.99;
    bool ball = false;
    std::string namess = "Jason";
    int money = 0;
    std::cout << "enter money amount: ";
    std::cin >> money;
    std::cout << "$" << money;
    while (money < 100) {
        money += 1;
        std::cout << money << "\n";
    }
    
    
    int grade = 1;
    switch (grade) {
  case 9:
    std::cout << "Freshman\n";
    break;
  case 10:
    std::cout << "Sophomore\n";
    break;
  case 11:
    std::cout << "Junior\n";
    break;
  case 12:
    std::cout << "Senior\n";
    break;
  default:
    std::cout << "Invalid\n";
    break;
}

for (int i = 0; i < 10; i++) {
  
  std::cout << i << "\n";
  
}

std::vector<int> numbers = {18, 93, 8342, 392, 192};
std::cout << numbers[2];

}