# Internship
I worked as an intern at Dedicated Computing for three summers. Through this
opportunity I was able to work on several projects with the R&D team. On this
team I experienced agile development and frequent code reviews. I gained experince
developing software that had end-users, in contrast to my undergrad coursework.

## Matrix Storage
Matrix Storage was the first project I worked on when I was hired as an intern.
My specific duty was to develop the firmware for the system backplane. The firmware
had to report power supply states, sensor states (humidity, temperature), and fan
states. The firmware was also responsible for exposing control of the fans. A higher-level
interface based on a set of virtual registers to the main node over I2C was used for this
functionality.

Additionally, I wrote the python interface that communicated between the main node
and the backplane controller.

## OLED Display
A smaller project I worked on was the firmware development of a small OLED
display board, which could be inserted into a 3.5" bay. The intended use was as
a server node identifier. The system also consisted of two capacitive touch buttons
and required both standard RS-232 serial and USB serial interfaces.

## Fan Controller
Another smaller project I worked on was a custom fan controller for use within
Dedicated Computing builds. The controller supported four 4-wire fans and two
external thermalcouples. The firmware allows for independent fan curves based on
the three temperature zones (two external and one internal). Communication through
USB serial with a JSON interface was used. I also wrote a small python interface
for the controller.

## Thermal Chamber Automation
In the last summer of my internship I helped with an internal project to automate
thermal chamber testing. A large portion of time spent during testing was on
manual / custom configuration of sensing (physical and virtual) for the unit under
test. To automate this I helped develop three systems.

First was a software tool written as a Node.js app that scraped the OS and drivers
for relevant "sensor" variables. This included internal temperatures, voltages,
software versions, etc. A set of regex filters were used to cut down the large
number of potential sensors into a smaller set of interesting variables commonly
used by engineers during their tests. This software was also able to execute
common task loads used during testing.

Second, I helped develop a Node.js app to control the thermal chamber itself.
The controller accepted byte-level commands over a TCP socket. I along with a
collegue helped wrap this interface for our automation system.

Third, I helped develop a python app that ran on a cRIO controller used for
external sensor readings. This app wrapped the sensors into the same schema as
the internal sensor tool.

Once these three subsystems were developed, I worked with a senior engineer to
extend his automated BIOS configuration test code for this system. That codebase
provided a JSON interface that acted as a domain specfic language. My job was to
provide the low-level primitives to start/stop recording sensor values and to
control the test loads being applied.

## Maker Space
Dedicated Computing had a maker space set aside on the manufacturing shop floor
where employees could go to work on personal projects after work. My manager /
mentor very much encouraged interns to work hard and play hard. I worked on a
few personal projects there.

First was a medium sized mobile robot with an ESP8266 as its controller. I
wrote a simple javascript app that provided a touch-based joystick to the user
for them to drive the robot around. I also started exploring 3D printing with
this project; making many failed motor mount prototypes.

I also worked on a project with my mentor to collect environment sensor data
on a low-power RF mesh network. Specifically, I had several nodes with light,
temperature, humidity sensors connected to Teensy microcontrollers. Additionally,
there was a master node that aggregated the data on the mesh network and pumped
it to a phone connected over bluetooth (bluetooth UART communicating with a
native wrapped web app). 
