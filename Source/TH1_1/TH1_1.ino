#include <Servo.h>
#include <LiquidCrystal_I2C.h>
#include <vector>

LiquidCrystal_I2C lcd(0x27, 16, 2);

int pot_pin_top = A0;
int pot_pin_mid1 = A1;
int pot_pin_mid2 = A2;
int pot_pin_bottom = A3;

int servo_pin_top = 2;
int servo_pin_mid1 = 3;
int servo_pin_mid2 = 4;
int servo_pin_bottom = 5;

int sensor = 6;
int led = 7;
int value_sensor;

int value_top;
int value_mid1;
int value_mid2;
int value_bottom;

Servo servo_top;
Servo servo_mid1;
Servo servo_mid2;
Servo servo_bottom;

void setup()
{
  
  servo_top.attach(servo_pin_top);
  servo_mid1.attach(servo_pin_mid1);
  servo_mid2.attach(servo_pin_mid2);
  servo_bottom.attach(servo_pin_bottom);
  pinMode(led, OUTPUT);
  digitalWrite(led, HIGH);
  Serial.begin(9600);

}

void loop()
{

  int state_start[4] = {500, 630, 1000, 435};
  int pot_inputs[4];

  value_sensor = digitalRead(sensor);
  
  pot_inputs[0] = analogRead(pot_pin_top);
  pot_inputs[1] = analogRead(pot_pin_mid1);
  pot_inputs[2] = analogRead(pot_pin_mid2);
  pot_inputs[3] = analogRead(pot_pin_bottom);

  record_memory(pot_inputs, current_servo);

  if(value_sensor == 1)
  {
    pot_inputs[0] = state_start[0];
    pot_inputs[1] = state_start[1];
    pot_inputs[2] = state_start[2];
    pot_inputs[3] = state_start[3];

    Control(pot_inputs[0], pot_inputs[1], pot_inputs[2], pot_inputs[3]);
    digitalWrite(led, HIGH);
    
    delay(4000);
  }
  else
  {
    Control(pot_inputs[0], pot_inputs[1], pot_inputs[2], pot_inputs[3]); 
    digitalWrite(led, LOW);
  }
   
}
 
void Control(int param_top, int param_mid1, int param_mid2, int param_bottom)
{
  
  value_top = map(param_top, 450, 800, 90, 0);
  value_mid1 = map(param_mid1, 450, 800, 90, 0);
  value_mid2 = map(param_mid2, 1000, 600 , 10, 160);
  value_bottom = map(param_bottom, 0,1023, 180, 0);

  //  Serial.print("mid = ");
  //  Serial.println(value_bottom);
  //  delay(500);
  
  servo_top.write(value_top);
  servo_mid1.write(value_mid1);
  servo_mid2.write(value_mid2);
  servo_bottom.write(value_bottom);

  delay(5);
  
}




//int n = 10000;
//int count_step = 0;
//std::vector<int> pot_value_memory;
//std::vector<int> servo_memory;
////int pin_servo_working[4] = {0, 0, 0, 0};
//int current_servo[4] = {0 ,0, 0, 0};

//void reset_pin_servo()
//{
//  current_servo[0] = 0;
//  current_servo[1] = 0;
//  current_servo[2] = 0;
//  current_servo[3] = 0;
//}
//
//void record_memory(int *pot_inputs, int *current_servo)
//{
//   for(int i = 0; i < sizeof(current_servo)/sizeof(current_servo[0]); i++)
//   {
//      if(pot_inputs[i] != current_servo[i])
//      {
//         pot_value_memory.push_back(pot_inputs[i]);
//         servo_memory[i].push_back(i);
//         current_servo[i] = pot_inputs[i];
//      }
//      
//   }
//}
