#include <Servo.h>
#include <NewPing.h>        

int motorControllA = 13;
int motorControllB = 12;

int motorControllC = 11;
int motorControllD = 10;

int motorSpeed1 = 6;
int motorSpeed2 = 5;

//sensor pins SR04
#define trig_pin 7 
#define echo_pin 4

#define maximum_distance 200
boolean goesForward = false;
int distance = 100;

NewPing sonar(trig_pin, echo_pin, maximum_distance); //sensor function
Servo servo_motor; //our servo name

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println(">> START<<");  
  
  pinMode(motorControllA, OUTPUT);
  pinMode(motorControllB, OUTPUT);
  pinMode(motorControllC, OUTPUT);
  pinMode(motorControllD, OUTPUT);

  pinMode(motorSpeed1, OUTPUT);
  pinMode(motorSpeed2, OUTPUT);

  servo_motor.attach(9); //our servo pin

  servo_motor.write(90);
  delay(2000);
  distance = readPing();
  delay(100);
  distance = readPing();
  delay(100);
  distance = readPing();
  delay(100);
  distance = readPing();
  Serial.print("Khoang cach ban dau: ");
  Serial.println(distance);
  delay(100);

  analogWrite(motorSpeed1, 200);  // chinh toc do dong co ben trai
  analogWrite(motorSpeed2, 200); // chinh toc do dong co ben phai
}

void loop() {
  
  if(Serial.available() > 0)
  {
    char data;
    data = Serial.read();
    // Serial.write(Serial.read());
    Serial.println(data);

    switch (data)
    {
      
      case '1': //FORWARD
          digitalWrite(motorControllA, HIGH);
          digitalWrite(motorControllB, LOW);
          analogWrite(motorSpeed1, 255);

          digitalWrite(motorControllC, HIGH);
          digitalWrite(motorControllD, LOW);
          analogWrite(motorSpeed2, 255);
        break;
        
      case '2': //REVERSE
          digitalWrite(motorControllA, LOW);
          digitalWrite(motorControllB, HIGH);
          analogWrite(motorSpeed1, 255);

          digitalWrite(motorControllC, LOW);
          digitalWrite(motorControllD, HIGH);
          analogWrite(motorSpeed2, 255);

        break;
        
      case '3': //FORWARD LEFT
          digitalWrite(motorControllA, HIGH);
          digitalWrite(motorControllB, LOW);
          analogWrite(motorSpeed1, 255);

          digitalWrite(motorControllC, HIGH);
          digitalWrite(motorControllD, LOW);
          analogWrite(motorSpeed2, 255);

        break;
        
      case '4': //FORWARD RIGHT
          digitalWrite(motorControllA, LOW);
          digitalWrite(motorControllB, HIGH);
          analogWrite(motorSpeed1, 225);

          digitalWrite(motorControllC, LOW);
          digitalWrite(motorControllD, HIGH);
          analogWrite(motorSpeed2, 225);

        break;
               
      default: //If bluetooth module receives any value not listed above, both motors turn off
          digitalWrite(motorControllA, LOW);
          digitalWrite(motorControllB, LOW);
          analogWrite(motorSpeed1, 0);

          digitalWrite(motorControllC, LOW);
          digitalWrite(motorControllD, LOW);
          analogWrite(motorSpeed2, 0);

    }
  }

}

int lookRight(){  // nhin phai lay khoang cach
  servo_motor.write(10);
  delay(500);
  int distance = readPing();
  delay(100);
  servo_motor.write(90);
  return distance;
}

int lookLeft(){ // nhin trai lay khoang cach 
  servo_motor.write(170);
  delay(500);
  int distance = readPing();
  delay(100);
  servo_motor.write(90);
  return distance;
  delay(100);
}

int readPing(){
  delay(70);
  int cm = sonar.ping_cm();
  if (cm==0){
    cm=250;
  }
  return cm;
}
