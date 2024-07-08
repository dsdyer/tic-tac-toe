To run: `npm run dev`

# Tic-Tac-Toe Game in React
## Author: David Dyer
A step-by-step guide to building a React app in node.js using npm, Vitejs, TypeScript, and Git

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
  
    We need to create our app from Powershell or the VSCode terminal, because the Git for Windows terminal doesn't accept arrow key input, which we need for this step

    1.1 `code .`

    1.2 From the `Terminal` menu at the top, select `New Terminal`
    ![Terminal -> New Terminal](dev-assets\vscode-terminal.png)

  1.3 In the new terminal (at the bottom of the screen by default), run: `npm create vite`
* Select your choice of JavaScript or [TypeScript](https://www.typescriptlang.org/) using the arrow keys and press `Enter`.
* If you know TypeScript you should always use TypeScript.