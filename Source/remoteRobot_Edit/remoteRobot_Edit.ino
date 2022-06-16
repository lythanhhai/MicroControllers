age
#include <IRremote.h>
#include <Servo.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); 

int RECV_PIN = 11;

int angle[4];
int angleStep = 3;
String nameServo[4] = {"TOP", "MID1", "MID2", "BOTTOM"};

Servo servo_top;
Servo servo_mid1;
Servo servo_mid2;
Servo servo_bottom;

const int pin_servoTop = 2;
const int pin_servoMid1 = 3;
const int pin_servoMid2 = 4;
const int pin_servoBottom = 5;
int pin_servoCurrent = pin_servoBottom;

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

unsigned int RemoteHexd[] =
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
    irrecv.enableIRIn();
  
    servo_top.attach(pin_servoTop);
    servo_mid1.attach(pin_servoMid1);
    servo_mid2.attach(pin_servoMid2);
    servo_bottom.attach(pin_servoBottom);
    resetAngle();
    pinMode(led, OUTPUT);
    digitalWrite(led, LOW);

    lcd.init();                    
    lcd.backlight();
    
}

void loop()
{
  
    value_sensor = digitalRead(sensor);
    if(value_sensor == 1)
    {
        resetAngle();
        digitalWrite(led, HIGH);
        delay(3000);
    }
    else
    {
        digitalWrite(led, LOW);
        if (irrecv.decode(&results))
        {
          Serial.println(results.value, HEX);
          pressKey(results.value);
          irrecv.resume();
        }
        delay(50); 
    }
    
  
}


void pressKey(int code)
{
  
    int found = 0;
    for(int i = 0; i < sizeof(RemoteHexd) / sizeof(int); i++)
    {
      if(RemoteHexd[i] == code)
      {     
        Servo servo_current = getNextServo(RemoteKey[i]);
        int indexAngle = pin_servoCurrent - 2;
        showLCD(nameServo[indexAngle]);
        servoAction(RemoteKey[i], servo_current, indexAngle);     
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

Servo getNextServo(String value)
{
  
      if(value == TOP)
      {
         pin_servoCurrent = pin_servoTop;
         return getServoByPin(pin_servoCurrent);
      }
      else if(value == MID1)
      {
         pin_servoCurrent = pin_servoMid1;
         return getServoByPin(pin_servoCurrent);
      }
      else if(value == MID2)
      {
         pin_servoCurrent = pin_servoMid2;
         return getServoByPin(pin_servoCurrent);
      }
      else if(value == BOTTOM)
      {
         pin_servoCurrent = pin_servoBottom;
         return getServoByPin(pin_servoCurrent);
      }
      else if(value == UP)
      {
         pin_servoCurrent = getNextPinByUpOrDown(UP, pin_servoCurrent);
         return getServoByPin(pin_servoCurrent);
      }
      else if(value == DOWN)
      {
         pin_servoCurrent = getNextPinByUpOrDown(DOWN, pin_servoCurrent);
         return getServoByPin(pin_servoCurrent);
      }
      else
      {
         return getServoByPin(pin_servoCurrent);
      }

}

int getNextPinByUpOrDown(String value, int pin_servoCurrent)
{
  
    int pinCurrent = 0;
    if(value == UP)
    {
      if(pin_servoCurrent == pin_servoTop)
      {
        pinCurrent = pin_servoBottom;
      }
      else 
      {
        pinCurrent = pin_servoCurrent - 1;
      }
    }
    else
    {
      if(pin_servoCurrent == pin_servoBottom)
      {
        pinCurrent = pin_servoTop;
      }
      else 
      {
        pinCurrent = pin_servoCurrent + 1;
      }
    }
    return pinCurrent;
    
}

Servo getServoByPin(int pinCurrent)
{
  
    switch(pinCurrent)
    {
      
      case pin_servoBottom:
            return servo_bottom; 
      case pin_servoMid2:
            return servo_mid2;
      case pin_servoMid1:
            return servo_mid1;
      case pin_servoTop:
            return servo_top;
      default: 
            return servo_bottom;
            
    }
    
}

void servoAction(String value, Servo servo, int index)
{
  
    if(value == LEFT)
    {
        angle[index] = angle[index] - angleStep;
        if(angle[index] < 0)
        {
          angle[index] = 0;
        }
        else
        {
          servo.write(angle[index]);
        }
        delay(20);
    }
   
    if(value == RIGHT)
    {
        angle[index] = angle[index] + angleStep;
        if(angle[index] > 180)
        {
          angle[index] = 180;
        }
        else
        {
          servo.write(angle[index]);
        }
        delay(20);
    }
    
    if(value == CENTRE)
    {
        resetAngle();
    }

}

void showLCD(String name)
{
  
     lcd.clear();
     lcd.setCursor(0, 0);
     lcd.print("Current Servo: ");
     lcd.setCursor(0, 1);
     lcd.print(name);
     
}
  
void resetAngle()
{
    
     angle[0] = map(500, 450, 800, 90, 0);
     angle[1] = map(630, 450, 800, 90, 0);
     angle[2] = map(1000, 1000, 600 , 10, 160);
     angle[3] = map(435, 0,1023, 180, 0);
  
     servo_top.write(angle[0]);
     servo_mid1.write(angle[1]);
     servo_mid2.write(angle[2]);
     servo_bottom.write(angle[3]);

     pin_servoCurrent = pin_servoBottom;

     showLCD(nameServo[pin_servoCurrent - 2]);

}
