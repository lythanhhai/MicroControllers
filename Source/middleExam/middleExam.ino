#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); 

int sensor = 5;
int value;
int led[4] = {13, 12, 11, 10};
int buzzer = 9;
double f = 1000;
double T = 0;
int Vmax = 5;
int sound = 0;
int Count = 0;

void setup() {
  lcd.init();                    
  lcd.backlight();

  Serial.begin(128000);
  Serial.println("Date and time, Duty cycle(%), Thresh(%)");
  pinMode(sensor, INPUT);
  pinMode(buzzer, OUTPUT);
  for(int i = 0; i < 4; i++)
  {
    pinMode(led[i], OUTPUT);
    digitalWrite(led[i], LOW);
  }
}

void loop() 
{   
    //value = digitalRead(sensor);
    T = double(1) / f;
    long measurePulseHigh = measurementHigh();
    long measurePulseLow = measurementLow();
    double D = (measurePulseHigh * pow(10, -6) / T) * 100;
    double Vavg = D * Vmax;
    if(D >= 100)
    {
      digitalWrite(led[3], HIGH);
      digitalWrite(led[0], LOW);
      digitalWrite(led[2], LOW);
      digitalWrite(led[1], LOW);
      openLCDAndBuzzer(D, buzzer, sound);
    }
    else if(D > 70)
    {
      //analogWrite(led, round(D * 255));
      digitalWrite(led[2], HIGH);
      digitalWrite(led[3], LOW);
      digitalWrite(led[0], LOW);
      digitalWrite(led[1], LOW);
      openLCDAndBuzzer(D, buzzer, sound);
    }
    else if(D > 35)
    {
      digitalWrite(led[1], HIGH);
      digitalWrite(led[3], LOW);
      digitalWrite(led[2], LOW);
      digitalWrite(led[0], LOW);
      openLCDAndBuzzer(D, buzzer, sound);
    }
    else if(D > 0)
    {
      digitalWrite(led[0], HIGH);
      digitalWrite(led[3], LOW);
      digitalWrite(led[2], LOW);
      digitalWrite(led[1], LOW);
      openLCDAndBuzzer(D, buzzer, sound);
    }
    else
    {
      digitalWrite(led[3], LOW);
      digitalWrite(led[2], LOW);
      digitalWrite(led[1], LOW);
      digitalWrite(led[0], LOW);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Duty Cycle = ");
      lcd.print(D);
      lcd.setCursor(0, 1);
      lcd.print("Khong rung");
      noTone(buzzer);
    }

    Serial.print("DATA,TIME,");   // Gán giá trị cho cột đầu tiên = thời gian hiện hành
    Serial.print(D);
    Serial.print(",");
    Serial.print(100);
    //Serial.print("thời gian xung bật là: ");
    //Serial.println(measurePulseHigh);
    //Serial.print("chu kỳ là dao động là: ");
    //Serial.println(T);
    //Serial.print("chu kỳ xung là: ");
    //Serial.println(D * 100);
    //Serial.print("Vavg là: ");
    //Serial.println(Vavg);
    Serial.println("\n");
    if (Count >= 43200)
    {
        Count = 0;
        Serial.println("ROW,SET,1");  
    }
    Count++;
    delay(200);
}

long measurementHigh()
{
  long measure = pulseIn(sensor, HIGH, 100000);
  return measure;
}

long measurementLow()
{
  long measure = pulseIn(sensor, LOW, 100000);
  return measure;
}

void openLCDAndBuzzer(double D,int buzzer,int sound)
{
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Duty Cycle = ");
      lcd.print(D);
      lcd.setCursor(0, 1);
      lcd.print("Rung lien tuc");
      sound = 1000;
      tone(buzzer, sound);
}
