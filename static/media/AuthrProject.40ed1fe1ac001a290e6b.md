# Authr

Authr is a task authoring environment that helps an engineer turn an existing manual process into a human-robot collaborative plan, with the work sensibly split between the human and the robot. The hard part of collaborative robotics usually isn't getting the robot to move. It's taking a task designed for human hands and reworking it into something a human-robot team can actually do together. Authr targets that gap, and it grew out of the same ethnography of cobots in industry that later informed CoFrame.

The interface moves through three phases: Environment Setup, Plan Description, and Simulation. We evaluated it with two user studies.

We already provide an extensive writeup on [Github](https://github.com/Wisc-HCI/authr) regarding the technical development. Additionally, check out the paper [here](https://dl.acm.org/doi/10.1145/3379337.3415872).

## The Interface

In Environment Setup, the user lays out the workspace: the Agents (human and robot), the Things they act on, and the Destinations they move between.

:image[]{id="img-authr-setup"}

In Plan Description, the user builds the work as a drag-and-drop program. Tasks are composed of Therbligs, the lowest-level action primitives (originally defined by the Gilbreths for time-and-motion study of human work). Authr implements a subset of the physical therbligs. Once the plan is described, Authr can automatically allocate each piece of work to whichever agent is better suited for it.

:image[]{id="img-authr-task"}

Finally, Simulation runs and inspects the constructed program in a ROS-based simulator before anything touches real hardware (Authr works with the Universal Robots UR3/UR5/UR10 and the Franka Emika Panda).

:image[]{id="img-authr-sim"}

Across the two user studies, Authr held up as an authoring interface, and the assistive allocation meaningfully improved how participants designed the more complex collaborative plans.

### Primary Technical Contributions

My contributions tended toward backend ROS integration, robot simulation, and the data management service.

We used MoveIt to plan the robot's movements for Authr. A critical step was to wrap MoveIt's interface in order to compute and store the trajectories, check reach feasibility, and compute the time-of-flight table. Time-of-flight (ToF) is the time it takes for a robot agent to move between two user-defined destinations in the workspace. ToFs are central to allocation, since assigning agents to specific Therbligs depends on knowing how long each move takes.

Second, the project required a data server that maintains the plan being designed. My responsibility was to help implement the rules that maintained the data structure's relationships as users added, modified, and deleted agents, things, destinations, therbligs, macros, and tasks.

Lastly, I worked a bit on the frontend, mostly implementing the frontend program model and its communication with the ROS infrastructure.
