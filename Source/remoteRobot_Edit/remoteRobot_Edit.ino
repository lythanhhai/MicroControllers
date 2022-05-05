#include <IRremote.h>
#include <Servo.h>

int RECV_PIN = 11;
boolean displayCode = true;

int angle = 90;
int angleStep = 10;
const int ANGLE_CENTRE = 90;

Servo servo_top;
Servo servo_mid1;
Servo servo_mid2;
Servo servo_bottom;
Servo servo_current = servo_bottom;

const int pin_servoTop = 2;
const int pin_servoMid1 = 3;
const int pin_servoMid2 = 4;
const int pin_servoBottom = 5;
int pin_servoCurrent = pin_servoBottom;

int angle_top;
int angle_mid1;
int angle_mid2;
int angle_bottom;

int sensor = 6;
int led = 7;
int value_sensor;

const String RIGHT = ">";
const String LEFT = "<";
const String UP = "^";
const String DOWN= "v";
const String CENTRE ="OK";
const String TOP = "1";
const String MID1 = "2";
const String MID2 = "3";
const String BOTTOM= "4";

IRrecv irrecv(RECV_PIN);
decode_results results;

unsigned int RemotePCB[] =
{
  
    0xFF18E7, // ^
    0xFF10EF, // <
    0xFF38C7, // OK
    0xFF5AA5, // >
    0xFF4AB5, // v

    0xFFA25D, // 1
    0xFF629D, // 2
    0xFFE21D, // 3           
    0xFF22DD, // 4 
            
};

String RemoteKey[] =
{
  
    "^",
    "<",
    "OK",
    ">",
    "v",

    "1",
    "2",
    "3",
    "4",
            
};

void setup()
{
  
  Serial.begin(9600);
  Serial.println("IR Decode");
  Serial.println("Servo Control with Remote");
  irrecv.enableIRIn();

  servo_top.attach(pin_servoTop);
  servo_mid1.attach(pin_servoMid1);
  servo_mid2.attach(pin_servoMid2);
  servo_bottom.attach(pin_servoBottom);
  pinMode(led, OUTPUT);

}

void loop()
{
  
  if (irrecv.decode(&results))
  {
    if(displayCode)
    {
        Serial.println(results.value, HEX);
    }
    checkValidateCode(results.value);
    irrecv.resume();
  }
  delay(50);
  
}


void checkValidateCode(int code)
{
  
  int found = 0;
  for(int i = 0; i < sizeof(RemotePCB) / sizeof(int); i++)
  {
    if(RemotePCB[i] == code)
    {     
      Serial.print("Key pressed:");
      Serial.println(RemoteKey[i]);
      servo_current = getCurrentServo(RemoteKey[i]);
      servoAction(RemoteKey[i], servo_current);     
      found = 1;
    }
  } 
 
  if(!found)
  {
    if(code != 0xFFFFFFFF)
    {
      Serial.println("Key unkown");
    }
  }
  
}

Servo getCurrentServo(String value)
{
    switch(value)
    {
      case TOP:
            pin_servoCurrent = pin_servoTop;
            return servo_top;
      case MID1:
            ppin_servoCurrent = pin_servoMid1;
            return servo_mid1;
      case MID2:
            pin_servoCurrent = pin_servoMid2;
            return servo_mid2;
      case BOTTOM:
            pin_servoCurrent = pin_servoBottom;
            return servo_bottom;
      case UP:
            pin_servoCurrent = getCurrentPinByUpDown(UP, pin_servoCurrent);
            servo_current = getCurrentServoByUpOrDown(pin_servoCurrent);
            return servo_current;
      case DOWN:
            pin_servoCurrent = getCurrentPinByUpDown(DOWN, pin_servoCurrent);
            servo_current = getCurrentServoByUpOrDown(pin_servoCurrent);
            return servo_current;
      default:
            pin_servoTop = 5;
            return servo_current;    
    }
}

int getCurrentPinByUpOrDown(String value, int pin_servoCurrent)
{
    int pinCurrent = 0;
    if(value == UP)
    {
      if(pin_servoCurrent == 5)
      {
        pinCurrent = 2;
      }
      else 
      {
        pinCurrent = pin_servoCurrent + 1;
      }
    }
    else
    {
      if(pin_servoCurrent == 2)
      {
        pinCurrent = 5;
      }
      else 
      {
        pinCurrent = pin_servoCurrent - 1;
      }
    }
    return pinCurrent;
}

Servo getCurrentServoByUpOrDown(int pin_servoCurrent)
{
    if(pin_servoCurrent == 5)
    {
      return servo_bottom;
    }
    else if(pin_servoCurrent == 4)
    {
      return servo_mid2;
    }
    else if(pin_servoCurrent == 3)
    {
      return servo_mid1;
    }
    else if(pin_servoCurrent == 2)
    {
      return servo_top;
    }
    else 
    {
      return servo_current;
    }
}

void servoAction(String value, Servo servo)
{
  
  if(value == RIGHT)
  {
    if (angle >= 0 && angle <= 180)
    {
      angle = angle - angleStep;
      if(angle < 0)
      {
        angle = 0;
      }
      else
      {
        servo.write(angle);
        Serial.print("Moved to: ");
        Serial.print(angle);
        Serial.println(" degree");
      }
    }
    delay(20);
  }
  
  if(value == LEFT)
  {
    if (angle >= 0 && angle <= 180)
    {
      angle = angle + angleStep;
      if(angle > 180)
      {
        angle = 180;
      }
      else
      {
        servo.write(angle);
        Serial.print("Moved to: ");
        Serial.print(angle);
        Serial.println(" degree");
      }
    }
    delay(20);
  }
  
  if(value == CENTRE)
  {
    getInitialAngle();
    servo_top.write(angle_top);
    servo_mid1.write(angle_mid1);
    servo_mid2.write(angle_mid2);
    servo_bottom.write(angle_bottom); 
  }

}

void getInitialAngle()
{
  
   angle_top = map(500, 450, 800, 90, 0);
   angle_mid1 = map(630, 450, 800, 90, 0);
   angle_mid2 = map(1000, 1000, 600 , 10, 160);
   angle_bottom = map(435, 0,1023, 180, 0);

}


//  while(value == UP)
//  {
//    if (angle >= 0 && angle <= 180)
//    {
//      angle = angle + angleStep;
//      if(angle >180)
//      {
//        angle =180;
//      }
//      else
//      {
//        servo.write(angle);
//        Serial.print("Moved to: ");
//        Serial.print(angle);
//        Serial.println(" degree");
//      }
//    }
//    value =".";
//    delay(100);
//  }
//
//  while(value == DOWN)
//  {
//    if (angle > 0 && angle <= 180)
//    {
//      angle = angle - angleStep;
//      if(angle < 0)
//      {
//        angle = 0;
//      }
//      else
//      {
//        servo.write(angle);
//        Serial.print("Moved to: ");
//        Serial.print(angle);
//        Serial.println(" degree");
//      }
//    }
//    value =".";
//    delay(100);
//  }
