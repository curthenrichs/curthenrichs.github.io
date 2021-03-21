# Expert-View Dashboard
Expert-View Dashboard is a training environment for cobot operators to learn
to modify their cobot's program without risking the physical system. The idea
is built around an ethnographic study investigating how experts think about
cobot applications.

We isolate four expert frames---safety, code quality, robot performance, and buisness objectives---from expert thought. These frames each contain a set of checks that an operator should perform when they make changes to their program. For example, in the safety frame,
an operator should check that the robot is not colliding with any static objects (e.g., table, CNC machine).

The operator is provided a blockly environment that presents a domain language called EvD Script. I developed this language off my experiences with Authr. The language is a bit lower-level as it presents more traditional robot primitives in a procedural, robo-centric model (relative to Authr with agent-independent Therbligs).

At the time of writing, the repository is private and in active development. Please contact me
directly for the source code if interested.
