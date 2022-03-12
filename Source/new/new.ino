#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2); 

int sensor = 5;
int value;
int led = 13;
int buzzer = 7;

void setup() {
  lcd.init();                    
  lcd.backlight();

  Serial.begin(9600);
  pinMode(sensor, INPUT);
  pinMode(led, OUTPUT);
  digitalWrite(led, LOW);
  pinMode(buzzer, OUTPUT);
}

void loop() 
{   
    value = digitalRead(sensor);
    long measurePulse = measurementHigh();
    long measurePulse1 = measurementLow();
    float D = measurePulse / (measurePulse + measurePulse1);
    float Vavg = D * 5;
     
//    if(value==1)
//    {
//      digitalWrite(led,HIGH);
//      digitalWrite(buzzer,HIGH);
//      lcd.clear();
//      lcd.setCursor(3,0);
//      lcd.print("Dang  Rung");
//    }
//    else
//    {
//      digitalWrite(led,LOW);
//      digitalWrite(buzzer,LOW);
//      lcd.clear();
//      lcd.setCursor(3,0);
//      lcd.print("Khong Rung");
//    }
    if(measurePulse > 1000)
    {
      for(int i = 0; i < 10; i++)
      {
        digitalWrite(led, HIGH);
        analogWrite(buzzer, HIGH);
        digitalWrite(buzzer, HIGH);
        delay(100);
        digitalWrite(led, LOW);
        digitalWrite(buzzer, LOW);
      }
      lcd.clear();
      lcd.setCursor(3,0);
      lcd.print("Dang Rung");
    }
    else
    {
      digitalWrite(led, LOW);
      digitalWrite(buzzer, LOW);
      lcd.clear();
      lcd.setCursor(3,0);
      lcd.print("Khong Rung");
    }
    Serial.print("thời gian xung là: ");
    Serial.println(measurePulse);
    Serial.println("\n");
    delay(100);
}

long measurementHigh()
{
  long measure = pulseIn(sensor, HIGH);
  return measure;
}

long measurementLow()
{
  long measure = pulseIn(sensor, LOW);
  return measure;
}
