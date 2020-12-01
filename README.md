# Cloud Project

## University : [San Jose State University](http://www.sjsu.edu/)
## Course: [Cloud Technologies](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE281.html)
## Professor: [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)
## Team :
Student Name      | 
-------------     |
[Parvathi Pai](https://www.linkedin.com/in/parvathipai/)      |
[Shreya Ghotankar](https://www.linkedin.com/in/shreya-ghotankar/)  |
[Sania Gonsalves](https://www.linkedin.com/in/sania-gonsalves-8b961962/)   |

### Introduction
Our project provides insights to people on the global rise of COVID-19 cases along with information on where people are meeting or planning to meetup. With our project we want to help people understand that COVID-19 should be taken seriously. People should be aware of the locations where the cases are high and for the same location they can see if people are meeting or not.
Our web application provides following visualizations –
*	Data extracted from Twitter filtered over keywords like meetup, meet
*	Real-time COVID-19 new cases, new deaths
*	Predicted Deaths

### Architecture
![](screenshots/architecture.png)

#### Application UI screenshots
![](screenshots/welcome.png)

![](screenshots/login.png)

![](screenshots/userloggedin.png)

![](screenshots/dashboard.png)

#### [Demo Link](https://drive.google.com/file/d/1m6JtMwWU1Mz5kxaf2l254i2ewR6bOy9Y/view?usp=sharing)

#### Pre-requisite
AWS resources:
* For COVID-19 data
    * AWS Glue Data Catalog
    * Amazon Athena 
    * AWS S3 bucket to save Athena queries
* For Twitter data stream
   * Amazon EC2
   * Amazon MSK
   * AWS Glue Database
   * AWS Glue Crawler
   * Amazon Redshift
* Tableau Server
* Okta - Single Page Application

#### Install Dependencies
`npm install`

#### Environment variable setup
Create a '.env.local' file in your project root directory.
Add following variables -
* REACT_APP_OKTA_CLIENT_ID={yourClientId}
* REACT_APP_OKTA_ORG_URL=https://{yourOktaDomain}
* REACT_APP_TABLEAU_URL={yourTableauUrl}

Use these varaibles in AppWithRouterAccess.js

#### Run application
`npm start`
* URI: http://localhost:3000

