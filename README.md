# Kourtneys-Employee-Management-System
 ![badge](https://img.shields.io/badge/License-MIT-brightgreen)

# Description
The goal of the project is to create an easy-to-use employee management system which enables the user to create an employee and adjust their role, department, and salary. This would allow the user to best organize their employees in the company.
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application The user needs to install sql using npm i sql and inquiry using npm i inquirer.
# Usage
1.) In order to use this app, the user first needs to install SQL on their local machine. See instructions:
https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide

2.) Then, the user needs to clone the repository to their local machine. 
3.) After cloning, they need to open up gitbash in their terminal and run 'npm i sql' as pictured below:
![image](https://user-images.githubusercontent.com/95041311/159190260-b68797f5-726f-4ebd-ae07-aac12f88a9e9.png)
4.) After installing, please locate the server.js file line 17 and put your SQL password in. See below screenshot on where this needs to happen. Make sure that the password is typed in between the single quotes:
![image](https://user-images.githubusercontent.com/95041311/159190392-f21b199f-8769-4ef3-b9bc-38346b96fffc.png)
5.) Once we make sure that the password is entered in correctly for your local SQL, please go back to your git bash terminal and cd into the '/db' folder:

![image](https://user-images.githubusercontent.com/95041311/159190481-fcd49e17-97ac-4997-a109-456e785cd6de.png)

*Note that 'testerFolder' is where I cloned the repository to. This may be different for you based on where you cloned it into your computer.*
6.) After getting into the '/db' folder, please run 'mysql -u root -p' and then type in your SQL password.
![image](https://user-images.githubusercontent.com/95041311/159190563-814ba405-c0b1-42b0-98e2-42d0325995da.png)

7.) Once you are into SQL, please type the command 'SOURCE schema.sql':

![image](https://user-images.githubusercontent.com/95041311/159190594-31eaaf5a-3a1e-4094-a589-34dd3c32546c.png)

8.) Then, type the command 'SOURCE seeds.sql':

![image](https://user-images.githubusercontent.com/95041311/159190616-f549940d-52c4-4098-a0d8-29d37643351b.png)

9.) Exit SQL by typing the command 'exit;'

![image](https://user-images.githubusercontent.com/95041311/159190664-3c98beb6-1d89-437c-a73a-d28a8e0cb9bd.png)

10.) After exiting out of SQL, please run the command 'sql start':

![image](https://user-images.githubusercontent.com/95041311/159190698-a4cb42a3-eba5-4467-8de7-14663a9dd4fa.png)

From there, you can start the application. This applicaion allows the user to:


Please see video below for instructions on how to run the program:

# License
This project is licensed under the MIT license.


# Contributors
 Kourtney Krogman
# Questions
If you have any questions about the repository, feel free to contact me at kourtney.krogman@gmail.com.

Here is a link to view the repository from Github:
https://github.com/kkrogs/Kourtneys-Employee-Management-System
