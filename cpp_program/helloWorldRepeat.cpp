#include <iostream>

#include <chrono>
#include <iostream>
#include <thread>

// #include "date/date.h"

// using namespace date;
using namespace std;
using namespace std::chrono;

int main()
{
 cout << "start " << endl;
  system_clock::time_point now = system_clock::now();
  auto s = duration_cast<seconds>(now.time_since_epoch());
  system_clock::time_point next_full_second = system_clock::time_point(++s);

  auto interval = seconds(1); // or milliseconds(500) or whatever
  auto wait_until = next_full_second;

  string keywords[] = {"Find me !"};

  int i = 0;
  while (1)
  {
    this_thread::sleep_until(wait_until);
    cout << "lalalalala" << endl;

    if (i++ % 5 == 0)
    {
      cout << keywords[0] << endl;
    }

    wait_until += interval;
  }

  return 0;
}