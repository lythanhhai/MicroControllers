#include <Servo.h>
#include <NewPing.h>        

const int LeftMotorForward = 13; // banh ben trai tien
const int LeftMotorBackward = 12; // banh ben trai lui

const int RightMotorForward = 11; // banh ben phai tien
const int RightMotorBackward = 10; // banh ben phai lui

int motorSpeed1 = 6;
int motorSpeed2 = 5;

//sensor pins SR04
#define trig_pin 7 
#define echo_pin 4

#define maximum_distance 200
boolean goesForward = false;
int distance = 0;

NewPing sonar(trig_pin, echo_pin, maximum_distance); //sensor function
Servo servo_motor; //our servo name

int distanceRight = 0;
int distanceLeft = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println(">> START<<");  
  
  pinMode(RightMotorForward, OUTPUT);
  pinMode(LeftMotorForward, OUTPUT);
  pinMode(LeftMotorBackward, OUTPUT);
  pinMode(RightMotorBackward, OUTPUT);

  pinMode(motorSpeed1, OUTPUT);
  pinMode(motorSpeed2, OUTPUT);

  servo_motor.attach(9); //our servo pin

  servo_motor.write(90);
  delay(1000);
  distance = readPing();
  delay(100);
  Serial.print("Khoang cach ban dau: ");
  Serial.println(distance);
  delay(100);

  analogWrite(motorSpeed1, 0);  // chinh toc do dong co ben trai
  analogWrite(motorSpeed2, 0); // chinh toc do dong co ben phai
}

void loop() {

  if(Serial.available() > 0)
  {
    sendDistanceToApp(distance);
    char data;
    int speedFromApp;
    char data1[100] = "";
    data = Serial.read();
    // Serial.write(Serial.read());
    // Serial.write(Serial.read());
    Serial.println(data);

    switch (data)
    {
      
      case '1': //FORWARD
        moveForward();
        break;
        
      case '2': //REVERSE
        moveBackward();
        break;
        
      case '3': //FORWARD LEFT
        moveLeft();  
        break;
        
      case '4': //FORWARD RIGHT
        moveRight();
        break;
               
      default: //If bluetooth module receives any value not listed above, both motors turn off
        moveStop();      

    }
    
  }

}

int lookRight()
{
  
  // nhin phai lay khoang cach
  servo_motor.write(10);
  delay(500);
  int distance = readPing();
  delay(100);
  servo_motor.write(90);
  return distance;
  
}

int lookLeft()
{ 
  
  // nhin trai lay khoang cach 
  servo_motor.write(170);
  delay(500);
  int distance = readPing();
  delay(100);
  servo_motor.write(90);
  return distance;
  delay(100);
  
}

int readPing()
{
  
  delay(50);
  int cm = sonar.ping_cm();
  if (cm == 0)
  {
    cm=250;
  }
  return cm;
  
}

void moveForward()
{

  analogWrite(motorSpeed1, 255);
  analogWrite(motorSpeed2, 255);

  digitalWrite(LeftMotorForward, HIGH);
  digitalWrite(RightMotorForward, HIGH);
  
  digitalWrite(LeftMotorBackward, LOW);
  digitalWrite(RightMotorBackward, LOW); 
  
}

void moveBackward()
{

  analogWrite(motorSpeed1, 255);
  analogWrite(motorSpeed2, 255);
  
  digitalWrite(LeftMotorBackward, HIGH);
  digitalWrite(RightMotorBackward, HIGH);
  
  digitalWrite(LeftMotorForward, LOW);
  digitalWrite(RightMotorForward, LOW);
  
}

void moveLeft()
{

  analogWrite(motorSpeed1, 255);
  analogWrite(motorSpeed2, 255);
  
  digitalWrite(LeftMotorBackward, HIGH);
  digitalWrite(RightMotorForward, HIGH);
  
  digitalWrite(LeftMotorForward, LOW);
  digitalWrite(RightMotorBackward, LOW);

  delay(300);
  
  digitalWrite(LeftMotorForward, HIGH);
  digitalWrite(RightMotorForward, HIGH);
  
  digitalWrite(LeftMotorBackward, LOW);
  digitalWrite(RightMotorBackward, LOW);
  
}

void moveRight()
{
  
  analogWrite(motorSpeed1, 255);
  analogWrite(motorSpeed2, 255);
  
  digitalWrite(LeftMotorForward, HIGH);
  digitalWrite(RightMotorBackward, HIGH);
  
  digitalWrite(LeftMotorBackward, LOW);
  digitalWrite(RightMotorForward, LOW);
  
  delay(300);
  
  digitalWrite(LeftMotorForward, HIGH);
  digitalWrite(RightMotorForward, HIGH);
  
  digitalWrite(LeftMotorBackward, LOW);
  digitalWrite(RightMotorBackward, LOW);
  
}

void moveStop() 
{

  analogWrite(motorSpeed1, 0);
  analogWrite(motorSpeed2, 0);

  digitalWrite(RightMotorForward, LOW);
  digitalWrite(LeftMotorForward, LOW);
  digitalWrite(RightMotorBackward, LOW);
  digitalWrite(LeftMotorBackward, LOW);
  
}

void sendDistanceToApp(distance)
{
  
  if (distance <= 20){
    moveStop(); // dung lai
    delay(300);
    distanceRight = lookRight(); // lay khoang cach ben trai
    Serial.print("Khoang cach phai: ");
    Serial.println(distanceRight);
    delay(300);
    distanceLeft = lookLeft(); // lay khoang cach ben phai
    Serial.print("Khoang cach trai: ");
    Serial.println(distanceLeft);
   
    if (distance >= distanceLeft)
    { 
      
      // neu khoang cach hien tai >= khoang cach ben trai 
      turnRight(); //re phai
      
    }
    else
    { 
      
      // ko thi
      turnLeft(); // re trai
      
    }
  }
  else
  {
    moveForward();  // ko phai 2 truong hop tren thi chay thang
  }
  distance = readPing();
  Serial.print("Khoang cach hien tai: ");
  Serial.println(distance);
  
}
