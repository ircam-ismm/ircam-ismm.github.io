# Gestural Sound Tookit

The `Gestural Sound Kit`, using the package `MuBu`, is a set of object to facilitate sensor processing, gesture recognition, and mapping to sound engines.


GST is designed to build gestural interactions with sounds, using ML methods for gesture recognition, gesture following, or gesture-sound mapping among other applications. The toolkit is built on the notion of high-level modules handling specific operations. The toolkit is comprised of four types of modules:

Receiver modules receive motion data from the sensing hardware. In the interface, a module for R-IoT and bitalino is presented. Other modules exist to get data from the Leapmotion, the Myo, or generic OSC input streams. 

Preprocessing and Analysis modules analyze and process gesture data. A Filter module can be used to reduce noise. The Energy module extracts gestural energy from the incoming signal. Velocity is calculated by computing the derivative. Some modules are specific to inertial sensors, as the most used hardware in our work with the toolkit.

Machine Learning modules perform gesture recognition and regression. Classification can be static (for posture recognition) or temporal (for gesture following and real-time time warping). Similarly, regression can be static or temporal.

Synthesis modules allow prerecorded sounds to be played and manipulated. The toolkit integrates temporal modulation (scrubbing). A trigger module allows for triggering a sound from a sound bank. A manipulation module allows sound to be sculpted and modified live as movement is performed.

> Implementation

The toolkit is implemented in the Max/MSP visual programming environment and is based on the MuBu library . Each module is a patcher that typically accepts inputs and has outputs. The use of Max/MSP allows users to build interactive scenarios by pulling cords from one module to another, which, in turn, provides immediate feedback from users' actions. The toolkit relies on the MuBu library that provides the necessary low-level operations for signal processing and sound synthesis.

As an example, Figure 2 depicts the moving average module, called [sp.movingaverage.maxpat]. On the left, the patcher is shown in edit (or implementation) mode. It has two inputs and one output. In between, the patcher implements a moving average filter using some components from the MuBu library. Elements of the patch highlighted in pink are the ones remaining in the interface, depicted on the right of the Figure. The patcher opens in presentation mode by default (right of Figure 2). Each module is independent from other modules. Therefore, extending the toolkit is made easy. One can create an arbitrary patchers and can follow the guidelines for its look in presentation mode, which defines its interface.
[[toc]]

- Available in [Gestural-Sound-Toolkit@github](https://github.com/ircam-ismm/Gestural-Sound-Toolkit)

Typical use cases

> Use case 1: Pedagogical tool for gestural sound interaction 

> Use case 2: Research through iteration/practice - rapid prototyping
