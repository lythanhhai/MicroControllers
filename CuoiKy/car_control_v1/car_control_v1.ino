int motorControllA = 13;
int motorControllB = 12;

int motorControllC = 11;
int motorControllD = 10;

int motorSpeed1 = 6;
int motorSpeed2 = 5;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println(">> START<<");  
  
  pinMode(motorControllA, OUTPUT);
  pinMode(motorControllB, OUTPUT);
  pinMode(motorControllC, OUTPUT);
  pinMode(motorControllD, OUTPUT);

}

void loop() {
  if(Serial.available() > 0)
  {
    char data;
    data = Serial.read();
    Serial.write(Serial.read());
    Serial.println(data);

    switch (data)
    {
      
      case '1': //FORWARD
          digitalWrite(motorControllA, HIGH);
          digitalWrite(motorControllB, LOW);
          analogWrite(motorSpeed1, 255);

          digitalWrite(motorControllC, HIGH);
          digitalWrite(motorControllD, LOW);
          analogWrite(motorSpeed2, 255);
        break;
        
      case '2': //REVERSE
          digitalWrite(motorControllA, LOW);
          digitalWrite(motorControllB, HIGH);
          analogWrite(motorSpeed1, 255);

          digitalWrite(motorControllC, LOW);
          digitalWrite(motorControllD, HIGH);
          analogWrite(motorSpeed2, 255);

        break;
        
      case '3': //FORWARD LEFT
          digitalWrite(motorControllA, HIGH);
          digitalWrite(motorControllB, LOW);
          analogWrite(motorSpeed1, 255);

          digitalWrite(motorControllC, HIGH);
          digitalWrite(motorControllD, LOW);
          analogWrite(motorSpeed2, 255);

        break;
        
      case '4': //FORWARD RIGHT
          digitalWrite(motorControllA, LOW);
          digitalWrite(motorControllB, HIGH);
          analogWrite(motorSpeed1, 225);

          digitalWrite(motorControllC, LOW);
          digitalWrite(motorControllD, HIGH);
          analogWrite(motorSpeed2, 225);

        break;
               
      default: //If bluetooth module receives any value not listed above, both motors turn off
          digitalWrite(motorControllA, LOW);
          digitalWrite(motorControllB, LOW);
          analogWrite(motorSpeed1, 0);

          digitalWrite(motorControllC, LOW);
          digitalWrite(motorControllD, LOW);
          analogWrite(motorSpeed2, 0);

    }
  }
//  else
//  {
//    Serial.println("deo nhan");
//    delay(1000);
//  }
}
