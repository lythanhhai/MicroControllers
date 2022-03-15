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
int Count = 0;     // Biến Count dùng để xác định số bộ dữ liệu gửi trong 1 vòng

void setup() {
  lcd.init();                    
  lcd.backlight();

  Serial.begin(128000);
  Serial.println("Date and time, Duty cycle(%), Thresh(%)");
  pinMode(sensor, INPUT);
  pinMode(led[0], OUTPUT);
  pinMode(led[1], OUTPUT);
  pinMode(led[2], OUTPUT);
  pinMode(led[3], OUTPUT);
  pinMode(buzzer, OUTPUT);
  digitalWrite(led[0], LOW);
  digitalWrite(led[1], LOW);
  digitalWrite(led[2], LOW);
  digitalWrite(led[3], LOW);
}

void loop() 
{   
    value = digitalRead(sensor);
    T = double(1) / f;
    long measurePulseHigh = measurementHigh();
    long measurePulseLow = measurementLow();
    double D = (measurePulseHigh * pow(10, -6) / T) * 100;
    double Vavg = D * Vmax;
    if(D >= 100)
    {
      //analogWrite(led, 255);
      digitalWrite(led[3], HIGH);
      digitalWrite(led[0], LOW);
      digitalWrite(led[2], LOW);
      digitalWrite(led[1], LOW);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Duty Cycle = ");
      lcd.print(D);
      lcd.setCursor(0, 1);
      lcd.print("Rung lien tuc");
      sound = 1000;
      tone(buzzer, sound);
    }
    else if(D > 70)
    {
      //analogWrite(led, round(D * 255));
      //analogWrite(led, 191);
      digitalWrite(led[2], HIGH);
      digitalWrite(led[3], LOW);
      digitalWrite(led[0], LOW);
      digitalWrite(led[1], LOW);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Duty Cycle = ");
      lcd.print(D);
      lcd.setCursor(0, 1);
      lcd.print("Rung manh");
      sound = 800;
      tone(buzzer, sound);
    }
    else if(D > 35)
    {
      //analogWrite(led, round(D * 255));
      //analogWrite(led, 128);
      digitalWrite(led[1], HIGH);
      digitalWrite(led[3], LOW);
      digitalWrite(led[2], LOW);
      digitalWrite(led[0], LOW);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Duty Cycle = ");
      lcd.print(D);
      lcd.setCursor(0, 1);
      lcd.print("Rung vua");
      sound = 600;
      tone(buzzer, sound);
    }
    else if(D > 0)
    {
      //analogWrite(led, round(D * 255));
      //analogWrite(led, 64);
      digitalWrite(led[0], HIGH);
      digitalWrite(led[3], LOW);
      digitalWrite(led[2], LOW);
      digitalWrite(led[1], LOW);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Duty Cycle = ");
      lcd.print(D);
      lcd.setCursor(0, 1);
      lcd.print("Rung nhe");
      sound = 400;
      tone(buzzer, sound);
    }
    else
    {
      //analogWrite(led, round(D * 255));
      //analogWrite(led, 0);
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

    Count++;
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
    if (Count >= 43200) {     // giới hạn số bộ dữ liệu trong 43200 lần gửi, sau đó lặp lại & lưu chồng lên dữ liệu cũ
        Count = 0;
        Serial.println("ROW,SET,2");  // Bắt đầu từ Row 2 của sheet Excel    
    }
    delay(300);
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
