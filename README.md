# Artelax-Interview-Question
Artelix Interview Questoin Solution with JavaScript

This program defines a function which takes an array as a paramater and makes buy and sell operations to maximize the profit at the end. 

My algorithm is that in order to maximize the profit we should buy when it starts to increase and sell when it starts to decrease. Even though right now we are working 
on discrete we can also use this algorithm in continous values as well. Logic is that we look at the derivatives at the each point and then if its derivative is 
0 and increasing then we buy, if decreasing we sell. Since we are working on  discrete values we dont look at the derivates but we look if it is a changing point in 
between decreasing and increasing.



