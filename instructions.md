Instructions:
1. Create a command line interface application using Node.js (either with inquirer or process.argv).
2. The application should lead the user to one of two pathways: an Admin View or a User View.
3. The User View should prompt the user to provide their Name and the Location they'd like weather information for. Upon completion, the User should get the weather in Fahrenheits at that location.  
4. The Admin View should simply provide an array of every user's search while also including the "date" of each search. See sample below:
  
  [{"Ahmed", "Atlanta", "10-15-16"}, {"Adri", "Newark", "10-12-16"}, {"Joe", "Omaha", "10-10-16"}]
--------------
Notes:
1. In order to complete this activity you will need to make use of:
  - The weather-js npm package.
  - Two constructors: One for "UserSearch" and one for "WeatherAdmin".
  - A third file called CLI.js, which will direct where users are directed to.
2. This activity borrows from all of the concepts we've covered this week. Pay attention to the following activities:
  - Classroom Example (11.2)
  - Weather-js Example (10.2)
 wrap
Today at 11:15 AM • 1KB Plain Text snippet • Shared in general Unshare from #general
 
==================================================== 

Implement the logic for the CLI component. Refer to the architectural diagram for help.

Before you write any JavaScript, write out the CLI component’s behavior in pseudocode.

Hint: This component doesn’t require much code.

Hint: This component does require components you haven’t written, yet. This is fine. For now, just use null/undefined or a string as a placeholder.

When you’re finished, ask the instructor or one of your TAs to approve your solution. If you finish early, feel free to begin on the UserSearch component.

====================================================