# IDES

IDES (a JEOL group subsidiary) is a small company with 10+ employees working in the transmission electron microscope (TEM) market. IDES acts as a de-facto R&D group within JEOL Ltd. IDES develops a deflector sub-framing system called Relativity, an electrostatic dose modulation system (EDM), and various other related TEM peripherals to support scientific applications. 

## Firmware Engineer

During my role as the primary firmware engineer at IDES, back in 2021, I focused on maintaining and extending existing firmware, developing new voltage control firmware for our flagship product Movie-Mode, and performing various hardware bringups for PCBAs. Our firmware ecosystem is mixed C/C++ on baremetal Xilinx Zynq and Atmel/Microchip processor. Additionally, I worked on preparing Nvidia Jetson Xaiver system images with Avermedia for production of the IDES Acuity Edge platform.

Due to the nature of working at a small company, I also have worked on projects outside of my narrowly defined firmware role. I have built out both R&D and production EDM, Relativity, and Luminary electronic components. I assisted in ECAD development tasks and PCBA / component procurement. Additionally, I have worked on user facing software in python that interfaces with our various hardware products. Finally, I performed manufacturing duties for electronic components within our products.

IDES recognized my contributions and I was quickly promoted to senior engineer.

## Senior Embedded Systems Engineer

My promotion to senior embedded system engineer brought modest changes to my responsibilities. I am continuing to support existing hardware/firmware shipped to customers; including working with JEOL Ltd. to diagnose/test our systems in Japan and in the field. I have spent time refactoring our codebase for maintainability and building out test frameworks (where previously there weren’t any - again due to the size of the company). 

### Area : FPGA / SoC
My major refactoring project was transitioning our Xilinx codebase from supporting the Zynq z7030 SoC to also support z7020 and Ultrascale+ variant while maintaining a common codebase. This was motivated by our z7030 module source drying up due to parts shortages. We initially investigated the z7020 but found it was only acceptable for a subset of our use cases. Therefore, we made the leap to Ultrascale+. All the while, existing z7030 units must continue to be supported with new features. Technically, this involved building out a development process for multiple Vivado projects with shared "unified" Verilog source HDL and building out a "unified" C/C++ system supporting multi-core Vitis projects.

In progress work includes transitioning to FreeRTOS and utilizing the second core as an onboard application specific accelerator. Currently our firmware uses a single application ARM core with a simple round-robin service scheme. The round-robin approach works well given limited services though as that number increases (i.e., with the acceleration core) I expect it to falter. The FreeRTOS port itself has moved into the testing phase. Next two milestones are in progress. First is hosting a service dashboard with REST API built on FreeRTOS+TCP. The dashboard was written in Vue.js by an intern that I collaborated with. Second milestone, is delayed to focus on other projects.

### Area : Manufacturing
On the manufacturing side, I assisted in the hiring process for our manufacturing engineers. I trained them in our electronics manufacturing processes and continue to provide support for units failing QA. Extensive documentation that I maintained while building the units myself were rather helpful in the training process. Separately, I standardized our packing procedures and trained our logistics specialist on the latest processes. Finally, I rounded out my manufacturing work with continued maintenance on our MRP system; including transitioning to a new nested MO structure.

### Area : Gen 2 Hardware

I am also working on selecting new microcontrollers, ethernet controllers, and I2C components for the next generation of our EDM products. For microcontrollers and ethernet controllers I am steering toward easy to build / maintain solutions with minimal rework risk (primarily motivated by manpower constraints). My focus is on producing better integrations through refinement of our existing products. 

A couple of our boards are rather sensitive to supply-chain disruption and have a decent amount of extra real-estate on the PCBA. I have been working to select new components for a dual population scheme; with different component families/manufacturers. At board spin we can "mix-and-match" the various IC options that are known to work together and DNP the alternatives. Ideally, this hedges against future supply shortages. 

#### Multi-Purpose Control Knob

I am also working on a new user-facing Multi-Purpose Control Knob system that replaces the existing IDES EDM Attenuation Control Knob. The design has two OLED displays integrated into push buttons and a tactile encoder for variable input. I designed the knob to have an arbitrary animation table state-machine loaded at run time with transition entries for rising / falling events on the various buttons. Each button press can also be programmatically linked to a haptic vibration and/or a piezo tone. Visually, image frames are pointed to by the animation table into a frame RAM buffer (as an off-chip SPI device). Images are streamed using custom interrupt-driven stream controller logic that interleaves packets from frame RAM, USB, or internal flash to either OLED or back into the frame RAM. On the USB side, I went with a vendor class device that uses interrupt endpoints for state / command and bulk endpoints for state-entry and image transfer.

For the Multi-Purpose Control Knob, I had the opportunity to take the device from concept through schematic capture / EDA in Altium, board spin / bringup, firmware development, mechanical enclosure design, Windows driver development, Python interface development, and high-level application integration (into our EDM backend). I am still working on refining the firmware and software for more use-cases. And I hope to wrap up CE marking, certifications, and productization.

### Area : Software
In order to support generation two EDM hardware, our existing backend needed a significant overhaul. The original backend was a tightly coupled REST interface, PyQT GUI, and backend for our EDM Signal Combiner and EDM Attenuation Control Knob products. Learning from this system (which has been a nightmare to maintain), I managed an intern who prototyped a new REST interface scheme that was aware of new hardware / capabilities. We severed the tight coupling of PyQT (any frontend now properly goes through REST interface instead of being an additional client). 

I reworked the backend to implement hardware control over a PubSub graph between a configuration / state node and various hardware drivers instead of the original tight coupling of state-management and hardware access. My experience with robotics and more specifically ROS has been helpful here. In regards to testing, I focused on two levels (1) driver level unit tests / integration tests and (2) PubSub node-level tests. Testing for base driver functionality is done at the Python interface drivers, which are imported modules that get wrapped by PubSub nodes. One of the benefits of robust lower-level tests is the increased certainty and reduced test latency that hardware / firmware is behaving as expected. At the node level, I am more focused on Quality of Service; specifically maintaining the node polling frequency and message queue pileup. At the highest level, I am focused on evaluating for low-latency convergence and proper update lockout when required (e.g., locking Multi-Purpose Control Knob updates while REST automation is reaching steady state).

The frontend is TBD and lower priority given most use happens through either an automation system over REST or direct system control through Multi-Purpose Control Knob / Attenuation Control Knob.
