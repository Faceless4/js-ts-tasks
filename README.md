# Tasks: 05 Context

## Task description

<<<<<<< HEAD
Here are several simple tasks. Each of them is located in their own js files.
=======
### Git

Please install Git on your local machine https://git-scm.com/download

Verify it's done:
- In console type `git --version`
- If you see smth like `git version 2.29.2.windows.2` you're done

### Configuring SSH

We're highly recommend to configure SSH key for your machine (Windows/MacOS/Linux/etc) and put it into your Github account.

Follow this instruction to complete that step: [https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-configure-GitLab-SSH-keys-for-secure-Git-connections](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

#### MacOs tips
you can get your public key by run in terminal `cat ~/.ssh/id_rsa.pub`


### Fork current repository into your account
>>>>>>> 93c8449ca3e24e64024ab664f9493d144c69ba3e

### sort.js

Write a function that returns a function that will sort all it's arguments in an order being specified by sortNumbersComparator function from TestUtils object

<<<<<<< HEAD
**Note**: You MUST use a function sortComparator from TestUtils object
=======
1. Navigate to your forker repository and click on green button `Clone`
2. In dropdown find section **Clone with SSH** and copy that url git@github:...git
3. In console on your machine navigate to any folder you like and paste copied url after git clone: `git clone git@github...tasks.git`
4. Type in yes if console asks you about fingerprint
5. After cloning is done, in console type in `cd js-ts-tasks` and click Enter
6. Now you should be in a folder `js-ts-tasks`
7. In console type in `git config user.name "Name Surname"` where Name is your Name (same as on Github profile) and Surname is your Surname (same as on Github profile). **Your name should be written in English**. **Don't remove " " symbols**
8. In console type in `git config user.email youremailaddress@student.ehu.lt` where `youremailaddress@student.ehu.lt` is your address you used to register on Github (the same as on Github profile)
9. In console type in `git config user.name` and click Enter. You should see your name
10. In console type in `git config user.email` and click Enter. You should see your email address
>>>>>>> 93c8449ca3e24e64024ab664f9493d144c69ba3e

**Note**: DON'T require/import TestUtils from a test/testUtils

#### Test cases

| Input                                             | Expected Output                    | Explanation                                                                                                                                                                                          |
| ------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort(TestUtils)(1, 2, 5, 3, 4)`                  | `[5, 4, 3, 2, 1]`                  | Please check test/testUtils file and sortComparator function for comparator function details. In current implementation numbers are being sorted in decreasing order                                 |
| `sort(TestUtils)("Steve", "Ada", "Jane", "Jene")` | `["Steve", "Jene", "Jane", "Ada"]` | Please check test/testUtils file and sortComparator function for comparator function details. In current implementation strings are being sorted in decreasing order by using localeCompare function |

### payments.js

Write a function that returns a function calculating how much money will a person have after all income/debts calculation

`income` is an Object that may look like:

```js
{
  salary: 100, // person's salary
  investment: 200 // person's income he gets from investment activities
}
```

`debts` is an Object that may look like:

```js
{
    rent: 50, // how much a person should pay for renting a flat/house/etc
    food: 25 // how much a person will spend on food
}
```

At the end after calculation all person's money we will have: 100 + 200 - 50 - 25 = 225, that's a final answer

**Note**: You **MUST** use a function sumAllObjectProperties from TestUtils object that will calculate all object numeric properties

**Note**: DON'T require/import TestUtils from a test/testUtils

#### Test cases

| Input                                                                                                            | Expected Output | Explanation                       |
| ---------------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------- |
| `payments(TestUtils)({ "salary": 500, "business": 100, "investment": 400 }, { "taxes": 100, "education": 200 })` | `700`           | 500 + 100 + 400 - 100 - 200 = 700 |

### palindrome.js

Write a function that returns a function that

1. converts all uppercase letters into lowercase letters
2. removes all non-alphanumeric characters
3. returns a result of a calling isPalindrome function from TestUtils object

**Note**: Alphanumeric characters include letters and numbers.

**Note**: You MUST call isPalindrome function from TestUtils object

**Note**: DON'T require/import TestUtils from a test/testUtils

_Original task: https://leetcode.com/problems/valid-palindrome/_

#### Test cases

| Input                                                     | Expected Output | Explanation                                                                                                                                        |
| --------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `palindrome(TestUtils)("A man, a plan, a canal: Panama")` | `true`          | "amanaplanacanalpanama" is a palindrome.                                                                                                           |
| `palindrome(TestUtils)("race a car")`                     | `false`         | "raceacar" is not a palindrome.                                                                                                                    |
| `palindrome(TestUtils)(" ")`                              | `true`          | s is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome. |

## Step before starting working on tasks

1. You need to execute the command npm install in the console. (1 time step)

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
<<<<<<< HEAD
2. Ensure there's a `node_modules` folder (all packages are installed)
3. In console run `npm run test:local` command to test your solution
4. In console you will see results of your solution
=======
2. Each task has its own instructions in README.md
3. to run test localy you need to execute the proper command in the console e.g. npm run test:local:digitSum
>>>>>>> 93c8449ca3e24e64024ab664f9493d144c69ba3e

## Evaluation criterias - max 10 points

<<<<<<< HEAD
If a task passes all of its test cases, then it gives its maximum points assigned for that task

- palindrome: 4 point(s)
- payments: 4 point(s)
- sort: 2 point(s)
=======
1. Develop a solution
2. Commit your solution. You need to follow the next commit message pattern: `feat: {commit message}` or `fix: {commit message}` e.g. `feat: solved task 1` or `fix: fixed comments` for task 3
3. _Push your solution to your forked repository_
4. Submit a link to the branch with solution in your forked repository to the moodle
>>>>>>> 93c8449ca3e24e64024ab664f9493d144c69ba3e
