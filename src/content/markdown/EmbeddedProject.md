# Undergrad Embedded Systems Projects
During my time in undergrad, I worked on several projects that helped develop my
firmware development skills. All of these projects are available [here](https://github.com/curthenrichs/Undergrad-Embedded-Projects).

## Networking One - Term Project
I worked in a team of three to develop an embedded device that can communicate
on a networking protocol defined for the course. We selected a Cypress Mixed-Signal
SOC to develop against. Our implementation was interrupt based. Specifically we
built an interrupt callback scheme to handle the protocol.

I programmed the ISR-based networking protocol, one teammate handled user input /
control, and the third teammate focused on testing and external documentation.

## Embedded Systems IV - Term Project
For this project, we were tasked with developing the firmware for a treadmill.
This system tracks the heart rate of the user in order to adjust treadmill warnings
and motor speed based on a set of fitness profiles. The user interacts with the
device through capacitive touch buttons and a LCD character display.

This was an individual project.

## Embedded Systems III - Term Project
This was a rather fun project where we had to develop a system that tracked the
users hand with a two-axis servo actuated turret. The processor was a soft-core
NIOS processor running on an FPGA. We had a single black-and-white low resolution
camera that streamed data into the processor.

I had to develop the interface with the camera by reading the datasheet as no
driver existed (as per the expectation of the course). Also, to display the video
feed, primarily for testing, I used the memory-mapped VGA video buffer.

The main challenge was in the limited time between finishing reading the video
frame (serially) and the start of the next frame. In that slice of time, I had
to run a simple vision solution on a very much computationally underpowered
processor. The solution was a bit hacky but it did teach me the trade-offs in
elegance, performance, and code clarity.

This was an individual project.

## Embedded Systems III - Board Layout
Lastly in my embedded three course, I had my first foray into board layout. I
created a microcontroller breakout board for an Atmel Mega. This is a skill that
I have not developed further but would be interested in learning more about.

This was an individual assignment.
