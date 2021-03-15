# Hobby Projects
One of my hobbies, when I have free time, is to tinker with small robots, embedded systems, and automation
projects. I have been an avid MAKER since roughly middle-school. In high-school
I joined an FRC team, [Team 930](https://www.team930.com/), to further this passion. I was an active
particiapnt in the makerspace at my internship and also engaged in making at
univeristy. My goal after COVID, when we all are able to more safely socialize, is
to again be active with a local maker group.

I have several hobby projects on my [Github](https://github.com/curthenrichs?tab=repositories).
A fair number of them are just simple microcontroller robots.

My current project is a robot called [YAM](https://github.com/curthenrichs/YAM). My goal is to continue learning
about robotic subsystems as I implement various components. The platform consists of
a simple differential drivetrain, three ultrasonic sensors, two infrared sensors,
an IMU, and webcam. The main controller is currently a Nvidia Jetson Nano. My next
upgrade is to add the Intel Real-Sense depth camera (I previously tried using a
depth estimation neural network with limitied success). Longer term, I am planning
on using this platform to experiment / replicate social behaviors I find
interesting in robotics papers.

I am also interested in augmenting humans with symbiotic, supernumerary robotic
limbs. I have built a robotic finger to start exploring the control modalities and
use cases of wearing an extra digit. The system is called [taltosoid](https://github.com/curthenrichs/taltosoid_srf). My long-term
vision for this system is a functional robotic finger than provides dynamic grasp
support for arbitary objects. I am approaching this space as a human-robot interaction,
shared-control problem instead of as a direct control problem (commonly found in the
literature).

I have dabbled a bit in LED lighting control for home automation. I have previously
written a RESTful LED lightstrip control service that ran on an ESP8266 microcontroller
([repo](https://github.com/curthenrichs/LED-Service)), along with some simple automation effects for a different lightstrip in
my old apartment ([repo](https://github.com/curthenrichs/LED-Automation-Effects)).
