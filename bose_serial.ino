#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 12); // RX, TX
int var=0;
int led=13;

void setup()  
{
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  pinMode(led, OUTPUT);  
  digitalWrite(led, LOW);
  
  // set the data rate for the SoftwareSerial port
  mySerial.begin(1200);
  delay(100);
}

void loop() // run over and over
{ 
  if(Serial.available()){ 
    var=Serial.read();
    if(var!=0){
      if(var<22){
        var=63+var; 
        mySerial.print(97,DEC);
        mySerial.print(69,DEC);
        mySerial.print(var,DEC);
        mySerial.print(var,DEC);
        var=0;
        delay(100);
      }else{
        var=var-21;
        mySerial.print(97,DEC);
        mySerial.print(65,DEC);
        mySerial.print(var,DEC);
        mySerial.print(var,DEC);
        var=0;
        delay(100);
      }
    }
  }  
}
  
   
