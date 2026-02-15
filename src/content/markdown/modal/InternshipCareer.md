# Internship

I interned with Dedicated Computing for three summers on the R&D team. Through this opportunity I experienced agile development, frequent code reviews, and gained experience developing firmware with real end-users.

## Storage Appliance Backplane

My first project was developing firmware for the backplane of a data center storage appliance. The firmware reported power supply states, environmental sensor readings (humidity, temperature), and fan states while exposing fan control. Communication used a virtual register interface over I2C to the main node. I also wrote the Python driver for the main node to communicate with the backplane controller.

## OLED Node Display

I developed firmware for a small OLED display board designed to fit in a 3.5" bay as a server node identifier. The system included two capacitive touch buttons and supported both RS-232 serial and USB serial interfaces.

## Fan Controller

I developed firmware for a custom fan controller supporting four 4-wire fans and two external thermocouples. The firmware provided independent fan curves across three temperature zones (two external, one internal) with a USB serial JSON interface. I also wrote a Python driver for the controller.

## Thermal Chamber Automation

In my final summer I helped automate thermal chamber testing, which had previously required significant manual configuration. I developed three subsystems:

- A Node.js application that scraped OS and driver sensor data (temperatures, voltages, software versions) from units under test and could execute common test workloads.
- A Node.js application to control the thermal chamber hardware over a TCP socket interface.
- A Python application running on a NI cRIO for external thermocouple readings, unified under the same sensor schema.

These subsystems were integrated into a larger automated test framework, where I provided low-level primitives for controlling sensor recording and test load execution.

## Makerspace

Dedicated Computing maintained a makerspace on the manufacturing floor, encouraging interns to explore personal projects outside of work hours. I used the space to build a small mobile robot with an ESP8266 controller and got my start with 3D printing.
