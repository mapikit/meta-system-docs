# Intro to Configuration (WIP)

> Note: properties shown here are just basic properties and some were not addressed. For a complete, in depth look at the configuration, please refer to the `Configuration Section` or `Example Configuration Section` for a quick start.
 
### name
This is the name of your system, it differentiates you from the crowd, so be creative! Do note however that this has no impact on the system's behavior and can be changed later, so don't worry if you can't come up with a catchy name right away.
 
### version
The current version of your system, so you and your colleagues can identify how far you've come. Again, this does not impact the system's behavior, and can be changed later (and should be, as you update your system with new capabilities!)
 
### protocols
These determine how your system communicates with the outside world, so it is quite important! Here is where you configure whether your system will use the worldwide spread HTTP or any other type of communication.
 
More info can be found in the `Protocols Section`.
 
### schemas
Schemas define the things your system will work with. If you sell cars, a car should be defined with properties that matter to you such as the amount of doors, the engine power and the price. Once that is defined your system will be able to store and manage info about individual cars.
 
More info can be found in the `Schemas Section`.
 
### businessOperations
BusinessOperations, or BOps as we like to call them, are the heart of your system. They are what define what your system should do with the information it gets and holds. Here is where you can tell your system what it should do when your user tells the system he/she is 500 years old. Should it refuse to save this info or should it store it in your database anyways? In short, here is where the logic, the brains of the operations lives, so take good care of it!

More info can be found in the `Business Operations Section`.