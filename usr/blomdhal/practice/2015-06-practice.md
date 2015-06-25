Serial 통신
-----------

Date: 2015-06-23

> NOTE: Serial.read() is non-blocking method.

```
#define LED 8

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);	// assign baud rate
}

void loop() {

  if (Serial.available()) { 
    // NOTE: Serial.read() is non-blocking method.
    char cmd = Serial.read();
    
    if (cmd == '0') {
      digitalWrite(LED, LOW);
      Serial.println("LED off.");
    } else if (cmd == '1') {
      digitalWrite(LED, HIGH);
      Serial.println("LED on");
    } else {
      Serial.println("wrong command");
      Serial.println(cmd);
    }
  }
}
```


***

Data 출력 - LED 3개를 이용한 카운터
-------------------

Date: 2015-06-23

```
/*
 * 000
 * 001
 * 010
 * 011
 * 100
 * 101
 * 110
 * 111
*/
#define MAX_LIGHT  3
#define testbit(val, n)  (1 & (val >> n))

const int PIN_2 = 2;
const int PIN_4 = 4;
const int PIN_8 = 8;

void setup() {
  // put your setup code here, to run once:
  pinMode(PIN_2, OUTPUT);
  pinMode(PIN_4, OUTPUT);
  pinMode(PIN_8, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  static const int NR_COUNT = 1 << MAX_LIGHT;
  static const int pins[] = {PIN_2, PIN_4, PIN_8};
  
  for (int i=0; i < NR_COUNT; i++) {
    
    for (int j=(MAX_LIGHT-1); j >=0; j--) {

      if(testbit(i, j)) digitalWrite(pins[j], HIGH);
      /*
      if(testbit(i, 2)) digitalWrite(PIN_8, HIGH);
      if(testbit(i, 1)) digitalWrite(PIN_4, HIGH);
      if(testbit(i, 0)) digitalWrite(PIN_2, HIGH);
       */
    }

    delay(500);
    digitalWrite(PIN_8, LOW);
    digitalWrite(PIN_4, LOW);
    digitalWrite(PIN_2, LOW);
    delay(500);
  }
}
```

***

TIPS
----

### Integer Constans

Binary 를 사용할 때 B0101와 같이 접두어를 사용해서 표현 할 수 있다. 주의할 점은 1byte값만 가능

_example_

7 B0101

255보다 큰 수를 표현

myVal = (B00001111 << 8) + B11110000;	// B00001111가 high byte


```
Integer Constants

Integer constants are numbers used directly in a sketch, like 123. By default, these numbers are treated as int's but you can change this with the U and L modifiers (see below).

Normally, integer constants are treated as base 10 (decimal) integers, but special notation (formatters) may be used to enter numbers in other bases.

Base               Example    Formatter        Comment

10 (decimal)           123    none

2 (binary)        B1111011    leading 'B'      only works with 8 bit values (0 to 255)
                                               characters 0-1 valid

8 (octal)             0173    leading "0"      characters 0-7 valid       

16 (hexadecimal)      0x7B    leading "0x"     characters 0-9, A-F, a-f valid    

Decimal is base 10. This is the common-sense math with which you are acquainted. Constants without other prefixes are assumed to be in decimal format.

Example:
101     // same as 101 decimal   ((1 * 10^2) + (0 * 10^1) + 1)

Binary is base two. Only characters 0 and 1 are valid.

Example:
B101    // same as 5 decimal   ((1 * 2^2) + (0 * 2^1) + 1)
The binary formatter only works on bytes (8 bits) between 0 (B0) and 255 (B11111111). If it is convenient to input an int (16 bits) in binary form you can do it a two-step procedure such as:

myInt = (B11001100 * 256) + B10101010;    // B11001100 is the high byte

```
