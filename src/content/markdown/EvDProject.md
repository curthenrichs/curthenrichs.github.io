# Expert-View Dashboard
Expert-View Dashboard is a training environment for cobot operators to learn
to modify their cobot's program without risking the physical system. The idea
is built around an ethnographic study investigating how experts think about
cobot applications.

We isolated four expert frames from interviews with cobot experts.

- safety
- code quality
- robot performance
- buisness objectives

These frames each contain a set of checks that an operator should perform when
they make changes to their program. For example, in the safety frame, an operator
should check that the robot is not colliding with any static objects (e.g., table,
CNC machine).

## Subsystems
EvD is composed of three primary subsystems divided by their implementation technologies.

- ROS backend
- Authoring web app written in React
- Unity Simulation (and Hololens variant)

### ROS Backend


## Authoring Web App
The authoring app exposes an expert checklist, tabbed by expert frames. The
checklist has a set of tiles that the user must work through to confrim the
programs state.

The user is also provided a blockly environment that presents a domain language
called EvD Script. I developed this language off my previous experiences with Authr.
The language is a bit lower-level than Authr as it presents more traditional
robot primitives in a procedural, robot-centric model.

Lastly, I embedded a unity simulation to visualize the robot and expert frames.

### Unity Simulation
I initially wanted to use the Hololens to express the expert frame visuals as it
affords real-world embedding of the content. However, my plans changed as the
reality of Covid-19 set in. User studies where participants are required to wear
something (e.g., heart-rate monitor) is more challenging in normal times. Now
with Covid there is further trust concerns in the equipment being clean / safe.
Doubly so when the device is being worn on the participants face.

So, I pivoted the visualization from the Hololens Unity app to a Unity web app
that I could embed into the authoring app.


## Code
At the time of writing, the repository is private and in active development. Please
contact me directly for the source code if interested.
