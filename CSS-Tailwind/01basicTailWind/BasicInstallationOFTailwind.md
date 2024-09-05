# **What is Tailwind** ?

Tailwind is an utility css framework. It gives easy access to predefined css files with css selectors defined , helping us in creating appealing front ends.

# **How to install tailwind css** ?

- **Create project structure as follows**
>project folder
>
>dist
>
>  --- index.html
>
>src
>
> ---input.css

- **Execute the command** 
>*npx tailwindcss init*

1) npx stands for node package executor and this command helps to initialise tailwindcss by creating a tailwind config.js file. 
2) The config file has an object, which takes values for content , theme and pulgins. 
3) The config file is used to take an input file which is ***input.css*** in our case and generate a final ***.css*** file used to link our ***index.html*** file.
4) The output css file contains the final css, only that much not everything for its inclusion in index.html

- **Intialise the input.css file**

>@tailwind base
>
>@tailwind components
>
>@tailwind utilities

The above lines need to be added in our input.css file , so the necessary styling could be generated for our html file.

- **Add html file links in config file.**

> content: ["./src/**/*.{html,js}"],

- **Run the command to generate the final css file**
*npx tailwindcss -i ./src/input.css -o ./src/output.css --watch*

- **Link our index.html file with the output.css file.**

    *link href="./output.css" rel="stylesheet"*
