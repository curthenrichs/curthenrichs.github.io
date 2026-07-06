# Cobot Interaction Experiments

During graduate school, I studied how human workers actually collaborate with a cobot. With my colleagues, I ran two experiments, Task Interdependence and pRAD, on a shared setup we called ITER (the Interdependence Task Experiment Runner). ITER drove a Universal Robots UR3e through a simplified job, building a small magnetic block house, and handled the experiment procedure around it. The two studies were really two halves of one effort: a labmate and I each took the lead on one, splitting them by which questions we were more drawn to, while both of us stayed hands-on across both. The code is on [Github](https://github.com/Wisc-HCI/ITER).

## Task Interdependence

This experiment looked at how the *structure* of a collaboration shapes the people in it. We compared three levels of interdependence from organizational theory: pooled (human and robot work independently toward a shared result), sequential (one's output feeds the other), and reciprocal (they hand work back and forth). The human and robot shared a single job, building the block house, and we measured worker performance and social perception across the three. Our paper is [here](https://ieeexplore.ieee.org/document/9223555).

My labmate led this one, but I was fully in it on the technical side, building the experiment procedure and running and monitoring the software during evaluation. This is also where I got comfortable with the Universal Robots platform and its Polyscope visual programming tool.

## pRAD

The pRAD experiment came out of a simple observation: in cobot work the hard part often isn't the robot, it's the human trying to figure out *when* the robot actually needs them. We modeled that as Robot Attention Demand (RAD), the split between "neglect time" (the robot working on its own) and "interaction time" (when it needs a person). pRAD is the predictive version: show the operator that schedule ahead of time so they know when they'll be needed.

To test it, the operator juggled two jobs, inspecting the block house the robot was building and a secondary sorting task, while we compared two interfaces against a no-interface baseline: a timeline of the full task sequence, and a simple color-coded countdown timer. Across the study, the timeline meaningfully reduced perceived workload, and both interfaces improved usability over no guidance at all. Our paper is [here](https://ieeexplore.ieee.org/document/9515519).

pRAD was the study I led, as experimenter and author, so my contributions ran the full range: designing and running it, building the interfaces and setup, and writing up the results.

## Computer Vision

One piece of ITER I built was a computer-vision system to detect the magnetic blocks during a task. In the end it wasn't essential, since we could position the blocks in roughly the same spot for each run, but it was a fun subsystem to build and a good excuse to work on block detection.
