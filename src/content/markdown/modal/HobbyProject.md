# Hobby Projects

I am an avid MAKER. I have had the privilege to build several robotic and home automation systems in my personal time over the years. My journey started in middle school building simple analog BEAM robots and has grown into several more challenging systems projects since.

## Robotics

My first robots were small BEAM (analog controlled) systems. The circuits were a rat's nest of wires and discrete components. The mechanical systems held together with hot glue. I hesitantly graduated to microcontroller robots. After overcoming the initial overwhelming fear of programming (in BASIC no less), I found that I really enjoyed the craft. With the various small robots I built in my formative years (plus competing in FIRST robotics on [FRC Team 930](https://www.team930.com/)) I gained fundamental electronic and programming skills that serve me to this day. 

:image[]{id="img-hobby-small-robots"}

When I went to graduate school my work, study, and hobby mixed. I focused my efforts on understanding collaborative robotics. Two distinctively hobby projects come to mind: a robot motion “playground” and an abstract trajectory visualization. 

First, the robot motion playground was inspired by my need to control the Universal Robots UR3e cobot arm for my research. I wanted to learn how to use the new ROS driver with my colleagues’ real-time motion controllers ([Relaxed-IK](https://github.com/uwgraphics/relaxed_ik) and [Lively-TK](https://github.com/Wisc-HCI/lively_tk_ros)). The goal was to serve as a reference project in the lab. To that end I built the ur3e_real_time_motion_playground.

The second project builds off the playground with a retro-fitted 2D web fluid visualization tool to express robot end-effector position and orientation. I mostly built it on a whim over a weekend to relax. It doesn’t have any immediate academic or industry use though it is rather enjoyable to watch when a robot operates over a motion trajectory.

That brings us to now. I have three robot projects in active progress, plus maintenance on the older ones. The first is a mobile robot called YAM, the second is a robotic finger named Taltosoid, and the third is a robot dog named Bubbles.

My goal with YAM is to continue improving my understanding of robotic subsystems. The base platform consists of a simple differential drivetrain augmented with three ultrasonic sensors and two infrared sensors, all hooked up to an Arduino. The Arduino monitors sensors, commands the motor controller, and communicates with higher-level ROS control. The ROS subsystem uses a Nvidia Jetson Nano as controller connected to both an Intel RealSense Depth Camera and Tracking Camera. The tracking camera provides decent odometry data for SLAM (which is where I currently am at with the project). Next steps: (1) rework the power system so a home base handles automatic recharging, (2) upgrade the computer since the Jetson Nano is underpowered, and (3) move to ROS 2.

I am also interested in augmenting humans with symbiotic, supernumerary robotic
limbs. I have built a robotic finger called Taltosoid (a play on the Hungarian word Taltos) to start exploring control modalities and use cases of wearing an extra digit. My long-term vision for this system is a functional robotic finger that provides dynamic grasp support for arbitrary objects. I am approaching this space as a human-robot interaction, shared-control problem instead of as a direct control problem (commonly found in the literature).

:image[]{id="img-hobby-taltosoid"}

Bubbles, a robot dog, is the one pulling my attention back lately, even though it actually predates YAM. The base is a wheeled robot-dog toy that I hacked, with an ESP32 camera streaming video off the front. I am poking at two ideas in parallel. The first is real-time depth estimation from that single camera, enough to map the space around it. The second is giving Bubbles a personality: an LLM prompted as a kind of homunculus that presents as the dog itself. I started with GPT, though I am tempted by a local model, which is honestly the more interesting version of the problem. Either way, the heavy compute will live on a base station rather than on the robot.

## Home Automation

In addition to robotics, I also dabble in home automation since my undergraduate degree (when I actually had a place of my own). Most of my systems are commercial-off-the-shelf smart switches, bulbs, cameras, etc. communicating with Amazon Alexa and Google Home, though I am actively building my own server to integrate various DIY embedded smart devices with Amazon / Google (see my other project Okos Polip).

 I have built (and/or actively building) the following devices with integration into Okos Polip:

- LED plant grow light
- DIY WiFi air filter
- Soil moisture sensor
- YAM

Previously, I built a RESTful LED light strip service that ran on an ESP8266 (translating REST commands into IR blasts). I also did some LED automation effects for lighting in my apartment (communicating with the predecessor to Okos Polip).

:image[]{id="img-hobby-leds"}

Lately I've leaned on AI coding assistants like Claude Code to push these builds along, mostly for the firmware and the ROS glue that used to eat my weekends.

I chronicle a lot of this tinkering on my blog, Half-Built-Robots, under the banner "Unfinished Creations, Unbridled Innovation." That name is honest: most of these builds are perpetual works in progress, and I like them that way.

## Links

Feel free to check out my Github for the various projects discussed above.

Github Links:
- [Simple-Hobby-Robot-Projects](https://github.com/curthenrichs/Simple-Hobby-Robot-Projects)
- [ur3e_real_time_motion_playground](https://github.com/curthenrichs/ur3e_real_time_motion_playground)
- [planner_fluid_visualization](https://github.com/curthenrichs/planner_fluid_visualization)
- [YAM](https://github.com/curthenrichs/YAM)
- [Taltosoid](https://github.com/curthenrichs/taltosoid_srf)
- [LED-Service](https://github.com/curthenrichs/LED-Service)
- [LED-Automation-Effects](https://github.com/curthenrichs/LED-Automation-Effects)
