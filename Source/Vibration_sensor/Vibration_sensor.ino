/*Vibration sensor tutorial.
  created by the SriTu Tech team.
  Read the code below and use it for any of your creation.
  https://srituhobby.com
*/

#define LED 8
#define Sensor 9
void setup() {
  Serial.begin(9600);
  pinMode(Sensor, INPUT);
  pinMode(LED, OUTPUT);
}
void loop() {
  bool value = digitalRead(Sensor);
  delay(100);
  Serial.print("Gia tri doc duoc la: ");
  Serial.println(value);
  if (value == 1) {
    digitalWrite(LED,HIGH);
  }else if(value == 0){
    digitalWrite(LED,LOW);
  }
}
