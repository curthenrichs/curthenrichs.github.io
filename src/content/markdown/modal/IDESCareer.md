# IDES

IDES (a JEOL subsidiary) is a small company with 10+ employees working in the transmission electron microscope (TEM) market. IDES sells a deflector sub-framing system called Relativity, an electrostatic dose modulation system (EDM), and related TEM peripherals to support scientific applications. 

## Firmware Engineer

During my role as the primary firmware engineer at IDES, I focused on maintaining and extending existing firmware, developing new voltage control firmware for our flagship product Movie-Mode, and performing various hardware bringups for PCBAs. Our firmware ecosystem is mixed C/C++ on baremetal Xilinx Zynq and Atmel/Microchip processor. Additionally, I worked on preparing Nvidia Jetson Xaiver system images with Avermedia for production of the IDES Acuity Edge platform.

Due to the nature of working at a small company, I also have worked on projects outside of my narrowly defined firmware role. I have built out both R&D and production EDM, Relativity, and Luminary electronic components. I assisted in ECAD development tasks and PCBA / component procurement. Additionally, I have worked on user facing software in python that interfaces with our various hardware products. Finally, I performed manufacturing duties for electronic components within our products.

## Senior Embedded Systems Engineer

My promotion to senior embedded system engineer brought modest changes to my responsibilities. I am continuing to support existing hardware/firmware shipped to customers; including working with JEOL Ltd. to diagnose/test our systems in Japan and in the field. I have spent time refactoring our codebase for maintainability and building out test frameworks (where previously there weren’t any - again due to the size of the company). 

My major refactoring project was transitioning our Xilinx codebase from supporting the Zynq z7030 SoC to also support z7020 and ultrascale+ variant while maintaining a common codebase. This was motivated by our z7030 module source drying up due to parts shortages. We initially investigated the z7020 but found it was only acceptable for a subset of our use cases. Therefore, we made the leap to ultrascale+ for one product line and z7020 for another (with the z7020 being cheaper and already having a stockpile). Existing z7030 units must continue to be supported with new features. Technically, this involved building out a development process for multiple Vivado projects with shared Verilog source HDL and building out a "unified" C/C++ system supporting multi-core Vitis projects.

On the manufacturing side, I assisted in the hiring process for our manufacturing engineers. I trained them in our electronics manufacturing processes and continue to provide support for units failing QA. Extensive documentation that I maintained while building the units myself were rather helpful in the training process. Separately, I standardized our packing procedures and trained our logistics specialist on the latest processes. Finally, I rounded out my manufacturing work with continued maintenance on our MRP system; including transitioning to a new nested MO structure.

I have several projects in progress. 

The first two are continuation of Xilinx SoC firmware development for our applications: transitioning to FreeRTOS and utilizing the second core as an onboard application specific accelerator. Currently our firmware uses a single z7030 ARM core with a simple round-robin service scheme. The round-robin approach works well given limited services though as that number increases (i.e., with the acceleration core) I expect it to falter. The FreeRTOS port itself has moved into the testing phase. Next two milestones are in progress. First is hosting a service dashboard with REST API built on FreeRTOS+TCP. The dashboard was written in Vue.js by an intern that I collaborated with. Second milestone, is delayed to focus on other projects.

I am also working on selecting new microcontrollers, ethernet controllers, and I2C components for upgraded revisions of our existing products. My goal with these new components is to design a dual population scheme for each; with different component families/manufacturers. Ideally, this hedges against future supply shortages. For microcontrollers and ethernet controllers I am steering toward easy to build / maintain solutions with minimal rework risk (primarily motivated by manpower constraints).  My focus is on producing better integrations through refining our existing products.

Lastly, I am working on a new user-facing system that I can't discuss further.
