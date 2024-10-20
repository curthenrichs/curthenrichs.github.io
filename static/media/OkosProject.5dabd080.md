# Okos Polip
Okos Polip is a device-to-cloud state ingester platform as a service, acting as the middleman between various hardware devices (e.g., my various DIY projects) and external integrations (e.g., Amazon Alexa, Google Home). The motivation for this work was a realization that home automation state ingest is often reimplemented due to hard coupling to various firmware/hardware constraints or external integrations. My goal is to provide a _descriptive_ general purpose ingest service regardless of whether the physical device implementation is a ROS-based robot running on linux or a baremetal ESP8266.

Okos Polip is composed of the following microservices:
- Device Ingest V1 (service) : Generalized RESTful state protocol for hardware devices
- Schema (service) : Versioned definitions of devices
- State API (service) : External API for two-way control of device state to integrations
- User (service) : User settings CRUD API
- Authentication Server : OAuth login and session management
- Factory API (service) : API to design device types and instantiate devices

I chose a MERN (MongoDB, Express.js, React, and Node.js) stack for core services and dashboard. Passport.js used for OAuth login (Google and Amazon providers) with a Redis session. Using Python for test scripts. And of course, device libraries written in C/C++ (targeting Arduino ESP8266), Python (targeting ROS), and Javascript. 

Landing and content pages make use of Wordpress. Why reinvent the wheel for a non-product system.

There is still significant work to be done; stay tuned.

Interested in learning more checkout the [Okos Polip Landing Page](https://www.okospolip.com/).