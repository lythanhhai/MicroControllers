#include <Servo.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); 


int pot_pin_top = A0;
int pot_pin_mid1 = A1;
int pot_pin_mid2 = A2;
int pot_pin_bottom = A3;

int value_top;
int value_mid1;
int value_mid2;
int value_bottom;

Servo servo_top;
Servo servo_mid1;
Servo servo_mid2;
Servo servo_bottom;

int servo_pin_top = 2;
int servo_pin_mid1 = 3;
int servo_pin_mid2 = 4;
int servo_pin_bot = 5;

int sensor = 6;
int led = 7;
int value_sensor;

void setup() {
  lcd.init();                    
  lcd.backlight();
  pinMode(sensor, INPUT);
  pinMode(led, OUTPUT);
  digitalWrite(led, LOW);
  servo_top.attach(servo_pin_top);
  servo_mid1.attach(servo_pin_mid1);
  servo_mid2.attach(servo_pin_mid2);
  servo_bottom.attach(servo_pin_bot);
  servo_top.write(95);
  
  Serial.begin(9600);
}

void loop() {
  int pot_inputs[4];
  pot_inputs[0] = analogRead(pot_pin_top);
  pot_inputs[1] = analogRead(pot_pin_mid1);
  pot_inputs[2] = analogRead(pot_pin_mid2);
  pot_inputs[3] = analogRead(pot_pin_bottom);
 Serial.println( pot_inputs[3]);

  if(pot_inputs[0] > 511) {
    value_top = 1;
  } else {
    value_top = 0;
  }
  
  value_mid1 = map(pot_inputs[1], 110, 800, 180, 0);
  value_mid2 = map(pot_inputs[2], 1023, 600, 30, 160);
  value_bottom = map(pot_inputs[3], 0,1023, 180, 0);

  if(value_top) {
    servo_top.write(90);
  } else {
    servo_top.write(50);
  }
  
  servo_mid1.write(value_mid1);
  servo_mid2.write(value_mid2);
  servo_bottom.write(value_bottom);

  delay(5);
}

// tính tỉ lệ của hàm map từ biến trở sang servo 
// quay biến trở lấy giá trị đầu tiên rồi xét hàm map
// độ mid1 = 40, 630
// độ mid2 = 5, 1000
// độ bot = 100, 435
