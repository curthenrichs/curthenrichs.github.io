# Hobby Projects
Perhaps my journey started when I cracked open an old PC gathering dust in my parent’s basement. Regardless of the inquisitive spark, by high-school I was an avid MAKER building several automation systems of varying degree of complexity.

## Robotics
My first robots were several BEAM (analog controlled) systems. I quickly graduated to microcontroller robots. With my small hobby robots I learned fundamental electronics and programming skills that serve me to this day. In high-school I also participated in FIRST robotics on [FRC team 930](https://www.team930.com/) as a programmer. 

While in graduate school my work (and hobby) was focused on collaborative robotics. To learn a new Universal Robots ROS driver, I created a small side project called ur3e_real_time_motion_playground. It made use of my colleagues’ real-time motion controllers Relaxed-IK and Lively-TK. The goal was to serve as reference for both myself and others in the lab regarding interaction of the driver with our higher level control.

During graduate school I also retro-fitted a 2D web fluid visualization to express robot end-effector position and orientation. I have yet to find real-world value in it though it was enjoyable to write and still enjoyable to watch.

I have two projects in progress right now. First is a mobile robot called YAM. The second is a robotic finger named Taltosoid.

My goal with YAM is to continue improving my understanding of robotic subsystems. The base platform consists of a simple differential drivetrain augmented with three ultrasonic sensors, two infrared sensors all hooked up to an Arduino. The Arduino monitors sensors, commands the motor controller, and communicates with higher-level ROS control. The ROS subsystem uses a Nvidia Jetson Nano as controller connected to both an Intel RealSense Depth Camera and Tracking Camera. The tracking camera provides decent odometry data for SLAM (which is where I currently am at with the project). Next steps (1) is to rework the battery charge to have a home base with automatic recharge; (2) upgrade the computer as Jetson Nano is underpowered; and (3) transition to ROS2.

I am also interested in augmenting humans with symbiotic, supernumerary robotic
limbs. I have built a robotic finger called Taltosoid (a play on the Hungarian word Taltos) to start exploring the control modalities and use cases of wearing an extra digit. My long-term vision for this system is a functional robotic finger that provides dynamic grasp support for arbitrary objects. I am approaching this space as a human-robot interaction, shared-control problem instead of as a direct control problem (commonly found in the literature).

## Home Automation
My current home automation project is a server that I am calling Okos Polip that exposes device data ingest (for my various ESP8266 / ESP32 devices) with Alexa API integration. There is significant work to be done on this. I don’t plan on releasing the code as open source.

I also use several commercial off the shelf items such as Third Reality smart switches, smart bulbs, Blink cameras, etc. 

Previously, I dabbled with LED lighting control with a RESTful LED strip service that ran on an ESP8266. And did some LED automation effects for lighting in my apartment (communicating with the predecessor to Okos Polip).

## Links
Feel free to check out my Github for the various projects discussed above.
- [Simple-Hobby-Robot-Projects](https://github.com/curthenrichs/Simple-Hobby-Robot-Projects)
- [ur3e_real_time_motion_playground](https://github.com/curthenrichs/ur3e_real_time_motion_playground)
- [planner_fluid_visualization](https://github.com/curthenrichs/planner_fluid_visualization)
- [YAM](https://github.com/curthenrichs/YAM)
- [Taltosoid](https://github.com/curthenrichs/taltosoid_srf)
- [LED-Service](https://github.com/curthenrichs/LED-Service)
- [LED-Automation-Effects](https://github.com/curthenrichs/LED-Automation-Effects)
