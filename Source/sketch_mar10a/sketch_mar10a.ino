
int led = 8;
int sen = 9;
void setup() {
  // put your setup code here, to run once:
  pinMode(led, OUTPUT);
  pinMode(sen, INPUT);
  
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  long measure = vibration();
  delay(50);
  Serial.println(measure);
  if(measure > 50)
  {
    digitalWrite(led, HIGH);
  }
  else
  {
    digitalWrite(led, LOW);
  }
}

long vibration()
{
  long measure = pulseIn(sen, HIGH);
  return measure;
}
