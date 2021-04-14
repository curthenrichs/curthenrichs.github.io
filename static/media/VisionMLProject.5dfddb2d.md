# Computer Vision and Machine Learning Projects
In my coursework and research I spent some time building (primarily) computer
vision and (secondary) machine learning projects.


## ITER - Computer Vision
During my ITER project I explored a computer vision system to detect painted
magentic wooden blocks for the robot to grasp. In the end I did not use the code
for the study, but I was able to develop a fairly functional object detector.
The repo is [here](https://curthenrichs.github.io/CS534-Term-Project-Website/).

The pipeline starts by detecting a 2D region enclosed by Alvar AR tags. I use
these tags to compute a 2D image coordinate to 3D real world coordinate mapping
of the surface. Then in parallel the system detects the blocks in image
coordinates. The algorithm then computes the 3D block and then registers the
objects with the ITER system.

## Sprite GAN
For a computation photography course project my team and I built a
generative-adversarial network to generate video game sprites. We made some good
progress, though it never did generate the most asthetically pleasing images. If
given more time, perhaps this could be a viable system.

The writeup website is [here](https://curthenrichs.github.io/CS534-Term-Project-Website/).

## Detecting Dysmorphic Facial Signs for Medical Diagnosis
For my Computer Vision graduate course I worked with a team to develop a machine
learning solution to classify various medical diagnoses using face images. The
website writeup for the project is
[here](https://sites.google.com/a/wisc.edu/detecting-dysmorphic-facial-signs-for-medical-diagnosis/introduction)
and the repo [here](https://github.com/nikita0905/Detecting-dysmorphic-facial-signs-for-medical-diagnosis).

## Cache Value Prediction - Neural Network Limit Evaluation
For my graduate Advanced Computer Architecture course, I along with two colleagues
developed a recurrent neural network to predict cache values. The goal was to
explore the limits of prediction by relaxing the real-time and manufacturing
feasibility of the predictor. The system ran within the championship simulator
provided by the challenge. While we did not find much success, some merit was
shown (subject to significantly increasing training time / compute power).

Please contact me directly for the codebase.
