#include <Servo.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); 

int rot_pin_top = A3;
int rot_pin_bot = A2;
int rot_pin_mid1 = A1;
int rot_pin_mid2 = A0;

int value_top;
int value_bot;
int value_mid1;
int value_mid2;

Servo servo_top;
Servo servo_bot;
Servo servo_mid1;
Servo servo_mid2;

int servo_pin_top = 5;
int servo_pin_bot = 2;
int servo_pin_mid1 = 4;
int servo_pin_mid2 = 3;

int sensor = 8;
int led = 7;
int value_sensor;

void setup() {
  lcd.init();                    
  lcd.backlight();
  pinMode(sensor, INPUT);
  pinMode(led, OUTPUT);
  digitalWrite(led, LOW);
  servo_top.attach(servo_pin_top);
  servo_bot.attach(servo_pin_bot);
  servo_mid1.attach(servo_pin_mid1);  
  servo_mid2.attach(servo_pin_mid2);
  servo_top.write(100);
  Serial.begin(9600);
}
void loop() {
  value_sensor = digitalRead(sensor);
  int rot_inputs[4];
    rot_inputs[0] = analogRead(rot_pin_top);
    rot_inputs[1] = analogRead(rot_pin_bot);
    rot_inputs[2] = analogRead(rot_pin_mid1);
    rot_inputs[3] = analogRead(rot_pin_mid2);
    Serial.println(rot_inputs[0]);
    Serial.println(rot_inputs[1]);
    Serial.println(rot_inputs[2]);
    Serial.println(rot_inputs[3]);
      
    if(rot_inputs[0] > 511)
    {
      value_top = 1;  
    }
    else {
      value_top = 0;
    }
    // will be initially searched between (110, 800) but result will be between 180 to 0 since it is remapped.
//    value_bot = map(rot_inputs[1], 0, 1023, 179, 0);
////    value_mid1 = map(rot_inputs[2], 0, 1023, 179, 0);
// value_mid1 = map(rot_inputs[2], 1023, 600, 30, 160);
//    value_mid2 = map(rot_inputs[3], 0, 1023, 179, 0);
//    Serial.println(value_top);  
    value_bot = map(rot_inputs[1], 110, 800, 180, 0);
    value_mid1 = map(rot_inputs[2], 1023, 600, 30, 160);
    value_mid2 = map(rot_inputs[3], 170, 880, 180, 0);
  
    Serial.println(value_bot);
    Serial.println(value_mid1);
    Serial.println(value_mid2);
    if(value_top)
    {
      servo_top.write(90);
    }
    else {
      servo_top.write(45);
    }
    
    servo_bot.write(value_bot);
    servo_mid1.write(value_mid1);
    servo_mid2.write(value_mid2);
  

  delay(5);
}

void showLCD(double D, int State)
{
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Duty Cycle = ");
      lcd.print(D);
      lcd.setCursor(0, 1);
      if(State == 1)
      {
        lcd.print("Dang Rung");
      }
      else
      {
        lcd.print("Khong Rung");
      }
}

int computeDegree()
{
  
}

//void openLCDAndBuzzer(double D,int buzzer,int sound)
//{
//      lcd.clear();
//      lcd.setCursor(0, 0);
//      lcd.print("Duty Cycle = ");
//      lcd.print(D);
//      lcd.setCursor(0, 1);
//      lcd.print("Rung lien tuc");
//      sound = 1000;
//      tone(buzzer, sound);
//}
