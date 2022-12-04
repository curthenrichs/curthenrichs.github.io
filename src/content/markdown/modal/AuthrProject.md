# Authr
Authr was designed to enable engineers to develop collaborative tasks with better allocations for the agents involved. Users could take their existing work descriptions and convert it to a human robot collaborative process where the agent allocation was optimized by Authr. The interface consisted of three workflow phases: (1) Environment Setup, (2) Plan Description, (3) Simulation. We evaluated the user interface with a couple of user studies. 
 
We already provide an extensive writeup on [Github](https://github.com/Wisc-HCI/authr) regarding the technical development. Additionally, checkout the paper [here](https://dl.acm.org/doi/10.1145/3379337.3415872).
 
### Primary Technical Contributions
My contributions tended toward backend ROS integration, robot simulation, and the data server.
 
We used MoveIt to plan the robot's movements for Authr. A critical step was to wrap MoveIt's interface in order to compute and store the trajectories, check reach feasibility, and compute the time-of-flight table. Time-of-flight (ToF) is the time it takes for a robot agent to move between two user-defined destinations within the workspace. ToF's are critical for allocation in order to accurately allocate agents to specific Therblgs.
 
Second, the project required a data server that maintains the plan being designed. My responsibility was to assist in implementing the rules that maintained the data structure's relationships as users added/modified/deleted agents, things, destinations, therbligs, macros, and tasks.
 
Lastly, I worked a bit on the frontend interface. I worked mostly on implementing the frontend program model and its communication to the ROS infrastructure.
