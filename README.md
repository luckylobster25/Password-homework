1. The javascript have developed codes in there but are some missing functions. 

2. The "generatePassword" was not define so that was defined later for it to work properly. 

3. A prompt was added to take input from user such as how long they want the password to be but at least have to be 8 character. Because of the if statement it won't allow user to move forward until they type number higher than 8 

4. A random function was coded in to get a random character by using a build in method. 

5. new variable are used to connect back to html by using querySelector.

6. Eventlistener are also added to react to click from user, making button functionable.

7. if statement was also inserted in to ensure password is at least 8 characters. If statement also insert to exclude numbers from being generated in the password. 

When user open application, this is what they will see. [prompt-1](img\prompt 1.png).
If input is invalid, user will receive an alert that look like this. [alert-1](img\error 1.png).
User then will receive a second prompt that look lik this. [prompt-2](img\prompt 2.png).

After everything is filled out correctly, this is how it should look like. [pass-generator-blink](img\pass-generator blink.png).

When the "Generate Passowrd" button is clicked, this is how it should look like. [pass-generator-password](img\pass-generator .png).