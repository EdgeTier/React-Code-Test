# EdgeTier React Coding Challenge

Create a quiz application to guess the band name from a song title. Please fork this repository and email the solution to Ciarán. Since we have multiple applicants doing the same task, we would ask that you make your solution a private repository.

## Setup

Uses a standard [Vite](https://vitejs.dev/) setup. Node and Yarn required.

-   `yarn` to install dependencies
-   `yarn dev` to start the application
-   `yarn run backend` to start the demo backend

## Instructions

Make a quiz that asks users to guess a series of band names from a song. There are five bands/questions in total. After each guess, let the user know if the answer is correct or incorrect and show the next song.

To save time, we have provided a starting point and some components already made. CSS has also been provided so you don't have to write that (unless you would like to change the appearance, then feel free). You only really need to edit `<Application />`, `</Question />` and/or any new components you'd like to add. Existing components provided that are more or less complete (you probably don't need to edit these):

`<Button />`: Render a button with an icon.

![Button](images/button.png)

`<Form />`: Input box with a submit button.


![Button](images/form.png)
`<Loading />`: Show a loading spinner.

![Button](images/loading.png)

`<Results />`: Player's correct answer count versus the total.

![Button](images/results.png)

## API

The questions come from a fake backend (using [json-server](https://github.com/typicode/json-server)). It has a delay on the responses to simulate a real API's behaviour. You don't need to write any API code, it exists already in `/src/api`. You can call `useQuestion(questionId)` to get a question and `useAnswer(questionId)` to get the answer for that question. Example:

```typescript
// Get the first question.
const { isLoading: isQuestionLoading, question } = useQuestion(1);
```

You can see the data returned in `api.json`.

## Example

Here is how a final version could look:

![Example](images/example.gif)
