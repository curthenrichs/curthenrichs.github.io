# IDES, Inc.

IDES is a JEOL group subsidiary working in the transmission electron microscope (TEM) market. IDES develops Relativity sub-framing system, electrostatic dose modulation system, and various other TEM peripheral systems to support scientific applications.

## Firmware Engineer

As the primary firmware engineer at IDES, I focused on maintaining and extending existing firmware, developing new voltage control firmware for our flagship product, and performing hardware bringups. Our firmware ecosystem is mixed C/C++ across Xilinx Zynq SoC and Atmel/Microchip platforms. Additionally, I prepared embedded Linux system images for production of an edge computer vision platform.

Working at a small company, I also took on responsibilities outside of my core firmware role including electronics manufacturing, ECAD support, PCBA procurement, and developing user-facing Python software for hardware interfacing.

IDES recognized my contributions and I was quickly promoted to senior engineer.

## Senior Embedded Systems Engineer

As senior engineer, I continued supporting existing hardware/firmware shipped to customers, including working with our parent company to diagnose and test systems internationally. I also took on mentoring responsibilities, assisting in hiring and training of manufacturing and software engineers.

### Area : FPGA / SoC
My major firmware project was transitioning our Xilinx codebase to support multiple SoC variants while maintaining a unified codebase. This involved building out a development process for multiple Vivado projects with shared Verilog HDL and a unified C/C++ system supporting multi-core Vitis projects.

I developed a SCPI-based voltage instrument control service and implemented an AXI DMA transfer pipeline that improved memory throughput by 10x for a key application.

I also led the transition from a bare-metal round-robin architecture to FreeRTOS, utilizing dual cores to enable onboard application-specific acceleration. This included spinning up a REST API and embedded web dashboard built on FreeRTOS+TCP.

### Area : Manufacturing & QA
I trained manufacturing engineers in electronics assembly processes and provided ongoing QA support. I authored extensive build documentation, standardized packing procedures, and maintained our MRP system. Over time I was able to transition out of active time on this role to be minorly supporting.

### Area : Next-Gen Hardware
I led component selection for next-generation products, evaluating microcontrollers, ethernet controllers, and I2C devices with a focus on maintainability and supply-chain resilience.

#### Multi-Purpose Control Knob
I designed and developed a USB user-interface peripheral featuring integrated OLED displays, a tactile encoder, and haptic/audio feedback. I took this product from requirements analysis through schematic capture in Altium, board bringup, firmware development, mechanical enclosure design, custom Windows driver development, Python interface development, integration into the existing software ecosystem, CE marking and productization.

### Area : Software
I led a major refactor of our hardware control backend, replacing a tightly coupled architecture with a decoupled PubSub-based system (drawing on my experience with ROS). I built out a layered testing strategy spanning driver-level unit/integration tests through system-level QoS validation. I also mentored an intern who prototyped the new REST API layer.

### Area : AI-Augmented Development
More recently, my role has expanded to include exploring AI-augmented development workflows for firmware and software tasks. I've been evaluating agentic coding tools such as Gemini CLI to accelerate development cycles, assist with debugging, and support code generation across our embedded and application-level codebases.
