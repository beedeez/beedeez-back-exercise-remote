# ℹ️ Introduction

### How to submit the exercise?

**1.** Create your **private** repo using this repository as a template.

<img width="750" alt="Screenshot 2022-08-02 at 20 46 19" src="https://user-images.githubusercontent.com/20050165/182450543-33f96cf9-81f7-425f-93ce-0ca26568128d.png">

**2.** Code the exercise.

**3.** When you are done, share the link to your repository with your interviewer, ensuring they have access.

# ✋ Before you get started

### Required tech stack

To run the project, there are several technologies you need to install:

- [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) and [Mongo Database Tools](https://www.mongodb.com/docs/database-tools/installation/installation/)
- [Redis](https://redis.io/docs/connect/clients/nodejs/)
- [pnpm](https://pnpm.io/) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- Typescript

### How to Run the Project?

- Install packages in both `front/` and `back/` directories using ➝ `pnpm i` or `yarn i`.
- Start the backend with `pnpm dev` or `yarn dev`.
- Start the frontend with `pnpm web` or `yarn web`.

Everything should now run smoothly; you are all set!

# 📝 Brief

You'll need to use an external API to fetch data, then save it in a collection. Each entry needs to be processed as a job in a queue, with data fetching scheduled periodically.

Like real business environments, the `front/` and `back/` directories contain base structures, written code, and packages. Navigate the project and enhance it as you see fit.

# ☑️ Tasks

## Back-end

### Requirements

> :warning: The code must be in Typescript!

### Fetching, Processing, and Saving Data

- Use the APIs from [vélib-metropole-opendata](https://www.velib-metropole.fr/donnees-open-data-gbfs-du-service-velib-metropole) to fetch the stations' status and information.
- For each station, create a job to save the fetched information (both status and details).
- Update the stations regularly (every X minutes).
- Process the jobs in a queue using [bullmq](https://github.com/taskforcesh/bullmq).
- After saving the stations, create an API to fetch them on the frontend.

> ℹ️ You can choose which properties to save.

### Synchronization

Each time stations are updated, refresh the stored data in the database and provide real-time updates to the frontend application.

- Implement the necessary process using [socket.io](https://socket.io/) to update the stations on the frontend.

## Front-end

> :warning: Code should be in Typescript and use [react-native-web](https://necolas.github.io/react-native-web/) components. Ensure all components are functional with typed props.

### Requirements

- Display a table or list of the stations using the backend API.
- Store the stations in a global state using either [Redux](https://redux.js.org/) or [React Context](https://react.dev/learn/passing-data-deeply-with-context).
- Update the state whenever a station's data changes on the server.

---

> ℹ️ Feel free to add any feature or missing parts that you deem necessary.

## All information about this exercise is provided in this README. If you have questions, please contact us!
