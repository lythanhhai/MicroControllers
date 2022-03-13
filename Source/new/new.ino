#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); 

int sensor = 4;
int value;
int led = 5;
int buzzer = 6;
double f = 1000;
double T = 0;
int Vmax = 5;
int sound = 0;

void setup() {
  lcd.init();                    
  lcd.backlight();

  Serial.begin(9600);
  pinMode(sensor, INPUT);
  pinMode(led, OUTPUT);
  pinMode(buzzer, OUTPUT);
  digitalWrite(led, LOW);
}

void loop() 
{   
    value = digitalRead(sensor);
    T = double(1) / f;
    long measurePulseHigh = measurementHigh();
    long measurePulseLow = measurementLow();
    double D = (measurePulseHigh * pow(10, -6) / T);
    double Vavg = D * Vmax;
    if(measurePulseHigh * pow(10, -6) >= T)
    {
      digitalWrite(led, HIGH);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Duty Cycle = ");
      lcd.print(D);
      lcd.setCursor(0, 1);
      lcd.print("Rung hoan toan");
      //lcd.print("Dang Rung voi Vavg = ");
      //lcd.print(Vavg);
    }
    else
    {
      if(D * 100 > 70)
      {
        //analogWrite(led, round(D * 255));
        analogWrite(led, 191);
        //analogWrite(buzzer, round(D * 255));
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Duty Cycle = ");
        lcd.print(D);
        lcd.setCursor(0, 1);
        lcd.print("Rung manh");
      }
      else if(D * 100 > 35)
      {
        //analogWrite(led, round(D * 255));
        analogWrite(led, 128);
        //analogWrite(buzzer, round(D * 255));
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Duty Cycle = ");
        lcd.print(D);
        lcd.setCursor(0, 1);
        lcd.print("Rung vua");
      }
      else if(D * 100 > 0)
      {
        //analogWrite(led, round(D * 255));
        analogWrite(led, 64);
        //analogWrite(buzzer, round(D * 255));
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Duty Cycle = ");
        lcd.print(D);
        lcd.setCursor(0, 1);
        lcd.print("Rung nhe");
      }
      else
      {
        //analogWrite(led, round(D * 255));
        analogWrite(led, 0);
        //analogWrite(buzzer, round(D * 255));
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Duty Cycle = ");
        lcd.print(D);
        lcd.setCursor(0, 1);
        lcd.print("Khong rung");
      }
    }

    
     
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

    Serial.print("thời gian xung bật là: ");
    Serial.println(measurePulseHigh);
    Serial.print("chu kỳ là dao động là: ");
    Serial.println(T);
    Serial.print("chu kỳ xung là: ");
    Serial.println(D * 100);
    Serial.print("Vavg là: ");
    Serial.println(Vavg);
    Serial.println("\n");
    delay(500);
}

long measurementHigh()
{
  long measure = pulseIn(sensor, HIGH, 200);
  return measure;
}

long measurementLow()
{
  long measure = pulseIn(sensor, LOW, 200);
  return measure;
}
