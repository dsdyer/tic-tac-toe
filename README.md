To run: `npm run dev`

# Tic-Tac-Toe Game in React
## Author: David Dyer
A step-by-step guide to building a React app from the ground up, using node.js using npm, Vitejs, TypeScript, and Git

## The Ground
We're going to use [Vitejs](https://www.vitejs.dev) to set up the foundations of our project. [Why not use create-react-app?](https://dev.to/ag2byte/create-react-app-is-officially-dead-h7o)

I'm using git bash for Windows, VSCode, and the Chrome browser, version 126.0.6478.127 (64-bit)

0. First, we need to decide where to put our project, and navigate to that directory in our terminal. I'm locating mine in my Home directory.

    ```
    cd ~/
    mkdir tic-tac-toe
    cd tic-tac-toe
    ```

1. Install Vite and create our App
  
    We need to create our app from Powershell or the VSCode terminal, because the Git for Windows terminal doesn't accept arrow key input, which we need for this step.

    ```code .```

    From the `Terminal` menu at the top, select `New Terminal`
    ![Terminal -> New Terminal](dev-assets\vscode-terminal.png)

    In the new terminal (at the bottom of the screen by default), run: `npm create vite`.
   * Select your choice of JavaScript or [TypeScript](https://www.typescriptlang.org/) using the arrow keys and press `Enter`.
   * If you know TypeScript you should always use TypeScript.

2. (Optional) Initialize your git repository.

    ```git init```

    Answer the prompts and git will create a local repository from your `tic-tac-toe` directory. If you want to share your code with anyone, you should [push your local repo to github.com](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

## Up
3. Start the dev server.
 
    ```npm run dev```

4. We now have a fully functioning React App! If it doesn't open automatically in your browser, try navigating to http://localhost:5173/
   
    Let's look around. 