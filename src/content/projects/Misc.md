# Miscellaneous Projects
These are all projects that don't quite fit into other categories but are nontheless
important to explaining my development experiences.

## Computer Vision
During my ITER project I explored a computer vision system to detect painted magentic wooden blocks for the robot to grasp. In the end I did not use the code for the study, but I was able to develop a fairly functional object detector. The repo is [here](https://curthenrichs.github.io/CS534-Term-Project-Website/).

The pipeline starts by detecting a 2D region enclosed by Alvar AR tags. I use these tags to compute a 2D image coordinate to 3D real world coordinate mapping of the surface. Then in parallel the system detects the blocks in image coordinates. The algorithm then computes the 3D block and then registers the objects with the ITER system.

## Cobot Side-Projects
In order to learn the new Universal Robots ROS driver, I created a small [side-project](https://github.com/curthenrichs/ur3e_real_time_motion_playground)
that made use of my colleagues' real-time controllers ([Relaxed-IK](https://github.com/uwgraphics/relaxed_ik) and [Lively-IK](https://github.com/Wisc-HCI/lively_ik)). The
goal of this project was to serve as a reference for both myself and others for how
our lab could interact with the new driver.

I also got inspired to retro-fit a 2D web fluid visualization ([repo](https://github.com/curthenrichs/planner_fluid_visualization)) to express robot
end-effector position and orientation. It had no real-world value but was
enjoyable to write.

## Sprite GAN
For a computation photography course project my team and I built a generative-adversarial network to generate video game sprites.
We made some good progress, though it never did generate the most asthetically pleasing images. If given more time, perhaps this
could be a viable system.

The writeup website is [here](https://curthenrichs.github.io/CS534-Term-Project-Website/).

## Detecting Dysmorphic Facial Signs for Medical Diagnosis
For my Computer Vision graduate course I worked with a team to develop a machine learning
solution to classify various medical diagnoses using face images. The website writeup for the project is [here](https://sites.google.com/a/wisc.edu/detecting-dysmorphic-facial-signs-for-medical-diagnosis/introduction) and the repo [here](https://github.com/nikita0905/Detecting-dysmorphic-facial-signs-for-medical-diagnosis).
