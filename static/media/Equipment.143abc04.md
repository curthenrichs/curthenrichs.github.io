Every artisan has their tools. As an embedded systems engineer and hobby robotics enthusiast I have picked up a few things over the years. Below I have documented the most useful pieces but it is by no means a complete (or necessarily up-to-date) list.

&nbsp;

## Computers and Peripherals
I spend way too much time with computers for my projects. Here are some system and peripherals I stand behind.

### Dell XPS 13 2-in-1 Laptop/Tablet
My new travel / business laptop. It has decent CPU and RAM specs but a lack-luster GPU config. I wouldn't use it for CAD or heavy gaming but it works well for VSCode and document management. 

I also tend to use it as a frontend for my Analog Discovery oscilloscope (seem my notes in test and measurement section).

#### System Config

- CPU : Intel Core i7 (12th Gen) 1250U
- RAM : 16 GB
- GPU : Onboard Intel Iris Xe
- Storage : 512 GB
- OS : Windows 11

### HP ZBook Laptop (from undergrad)
During freshman undergrad at MSOE, each engineering student was issued a laptop. Junior year we were offered a new refreshed system, which we could keep upon graduation. I proceeded to use this same laptop throughout grad-school as my day-to-day machine. 

This laptop served me well (with the stuck keys, slow operation, and failing RAM to prove it). It now serves as the frontend for my Analog Discovery if I am doing work in the garage. 

#### System Config

- CPU : Intel Core i7 (6th Gen) 6820HQ
- RAM : 16 GB
- GPU : NVidia Quadro M2000M
- Storage : 240 GB SSD
- OS : Windows 10 + WSL Ubuntu

### Desktop - Custom Build
After grad school, moving to California, and starting my full-time career I finally had the discretionary income to spend on a gaming machine (even though I use it more as a workstation than video games).

#### System Config

- Motherboard : MSI MPG B550
- CPU : AMD Ryzen 5 5600X w/ provided air cooler
- RAM : 32 GB of Corsair Vengence RGB Pro SL (2x16)
- GPU : NVidia GeForce RTX 3070
- Storage : Western Digital 1TB NVMe
- PSU : Corsair RM850x (850W)
- Case : Fractal Design Focus G ATX Mid Tower
- OS : Windows 11 + WSL Ubuntu

Eventually I would like to upgrade but not until a use case prompts it.

### Logitech MX Master Mouse
I have both the two and three variants of this mouse. Love them both, its like a little spaceship for the hand.

### Logitech MX Master Keyboard
Probably the best keyboard I have purchased. The keys aren't too clicky (I hate long travel / loud mechanical keys) but also not too squishy for membrane keys.

Any work-from-home setup needs this keyboard (unless you like loud keyboards; then do that at home and not at the office).

### Blue Snowball iCE Microphone
Purchased this during Covid19 during grad school for presentations and virtual conferences. It has pretty good audio capture. 

### Logitech HD Pro Webcam C920
Mid-range webcam for video calls. No complaints.

### SONY WH-1000XM5 Headphones
I got these noise cancelling headphones as a gift. They work pretty well but sometimes disconnect from the bluetooth card in my PC. I am fairly certain the problem is on the PC side however.

### Monitors
I have several cheap monitors that I have collected over the years. I am not too partial to any of them. When one dies I tend to scrounge up, borrow, or purchase another cheap one. 

Current Config,

- ASUS VG289 as primary monitor
- ASUS VG245 as secondary monitor (portrait orientation)
- DELL S2419NX as secondary monitor

Funny enough during Covid19 there was a time where I was using two old 19" LCD TVs from approx 2008 as additional monitors. I don't have any standards here.

### CyberPower UPS Battery
Recent addition to my desk setup. The place I rent at currently has some voltage fluctuations on the AC line and given the risk of rolling blackouts it seemed prudent to install a UPS.

Model Number : CyberPower CP1500PFCLCD

&nbsp;

## Software
Below are some software systems I have found particularly useful.

### Affinity Suite (Designer, Publisher, Photo)
I am not a graphic artist by any means but sometimes I need to touch up a photo or whip up an illustration for an article. In the past I used to use Adobe's products but the subscription model does not make sense for someone who only used Illustrator once every two months. I found Affinity Suite to be a great alternative at an even better value with its one-time purchase. 

### Visual Studio Code
I almost exclusively use VSCode for software development at this point. If I need to use a vendor specific tool like Xilinx Vitis its only for the tooling but I still tend to have Code open on the side.

&nbsp;

## Soldering Station
Every electronics shop needs the basics. Here is what I am using.

### Weller Soldering Iron
When I first got real adult money I had to spend it on a nice soldering iron. Bought the Weller WE10101 soldering iron plus a set of solder tips, brass brush, helping hand, etc. If there is every a place to splurge in DIY electronics its on a good soldering iron. 

### Sparkfun 303D SMD Rework Station (Heatgun)
I love this little reflow heatgun, perhaps because I became proficient with it at work. 

### Air Filter
An off-brand air filter from Amazon but it along with a cracked window it does the job.

&nbsp;

## Test and Measurement
Every hardware project has a bring-up phase fraught with bugs. These are the tools I have ready during such sessions.

### Analog Discovery (Legacy) w/ BNC Adapter Board
The Analog Discovery has been the workhorse oscilloscope in my shop since undergrad (circa 2015). Digilent to also provides an adapter PCB breaking out scope and wave-gen pins onto BNCs. This is rather useful for interfacing with standard test and measurement tools.

I bought a few cheap scope probes that are good enough for the kinds of work I do.

1. Keysight N2142A 10:1 Passive Probe ~ These are reliable for nearly everything I do.

2. A generic 100x High Voltage Probe off of AliExpress ~ Don't really trust it but it hasn't failed or damaged the Analog Discovery yet.

### Klein Tools MM400 Multimeter
The first (and so far only) multimeter I ever purchased. It does the job. My one gripe is some of the modes are weirdly in the alternate set instead of primary functions.

### KiPRiM Power supply
Acquired this supply as a gift but have yet to use it. It is earmarked for a robot arm project I am slowly working on.

Model Number : DC310S

### Prusa Mini 3D Printer
This is a pretty handy little printer. I tend to only use it for small enclosures or jigs. Attempting to print a small robot arm on it but is been a slow project.

&nbsp;

## Microcontrollers, FPGAs, and other dev boards
I keep the following microcontrollers and FPGAs on the shelf in case I need to prove out a design in hardware.

### ESP8266
My go-to WiFi microcontroller. I tend to use these for developing my various home automation projects.

### Arduino Uno
I tend to keep various Arduino Uno clones around for small microcontroller projects or for some random one-off thing like jogging output lines for power sequence testing.

### Mojo V3 (Spartan 6 FPGA)
I received this FPGA board as a gift. Learned Xilinx's ecosystem on this device. I might try to bring it back up one day to run a custom soft-core processor or something.

### Raspberry Pi Pico
Another gift, used one to control some RGB LEDS. Its a pretty good replacement for Arduino or ESP8266 (if Pico W).

### Raspberry Pi 3B+
Currently using it as a bridge between my Prusa and the home WiFi. Decent little SBC that I have used for robot projects in the past.