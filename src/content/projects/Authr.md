# Authr
Authr is a tool I help develop with the goal of enabling engineers to better allocation
collaborative tasks for humans and robots. There is already an extensive writeup on
Github [here](https://github.com/Wisc-HCI/authr).

### Primary Technical Contributions
My work tended toward backend ROS integration, simulation, and the data server.

First, this project used MoveIt to plan robot behavior. A job of mine was to wrap MoveIt's
interface  in order to compute the time-of-flight table. A time-of-flight (ToF) is the
time it takes the robot agent to traverse two user-defined destinations. Thus, in
order to perform allocation, all possible ToFs need to be computed. Likewise, final
plan simulation used the same wrapper interface.

Second, the project provides a data server that maintained the plan being designed.
My responsibility was to assist in implementing the rules that maintained data
structure's relationships as users added/modified/deleted agents, things, destinations,
therbligs, macros, and tasks.

Lastly, I worked a bit on the frontend interface. Job one was primarily in the
frontend variant of the model. Job two was implemetenting the simulation player,
which hooked up to the backend interface.
