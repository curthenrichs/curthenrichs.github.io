# Authr
Authr is a project I worked on with the goal of enabling engineers to
develop collaborative tasks with better allocations for the agents involved. We
already have an extensive writeup on [Github](https://github.com/Wisc-HCI/authr)
regarding the technical development. Additionaly, checkout the paper
[here](https://dl.acm.org/doi/10.1145/3379337.3415872).

### Primary Technical Contributions
My work tended toward backend ROS integration, robot simulation, and the data server.

We used MoveIt to plan the robot's movements for Authr. A critical step was to
wrap MoveIt's interface in order to compute and store the trajectories, check reach
feasibility, and compute the time-of-flight table. Time-of-flight (ToF) is the time
it takes for a robot agent to move between two user-defined destinations within
the workspace. ToF's are critical for allocation in order to accurately allocate
agents to specific Therblgs.

Second, the project provides a data server that maintained the plan being designed.
My responsibility was to assist in implementing the rules that maintained the data
structure's relationships as users added/modified/deleted agents, things, destinations,
therbligs, macros, and tasks.

Lastly, I worked a bit on the frontend interface. I worked mostly on implementing
the frontend program model and its communciation to the ROS infrastructure.
