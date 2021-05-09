# @njmaeff/website

## Development

I like to use `docker` for web development. You will find all the development files located in the [app](./src/website-app) directory. I use a DNS proxy, so I don't have to use `localhost` when developing with the `storybook` and `webpack` tools. 

For the operating system, I am using ubuntu and the Webstorm IDE. Things may not work so well on Windows. I believe `NodeJS` and web development are way more friendly on Linux. WSL2 is pretty good on Windows and will catch up soon. If using WSL2, you will need to modify the `DNS-proxy` service.

I use the [yarn/berry](https://github.com/yarnpkg/berry) package manager. I spent a few months reading the source code and developing some custom plugins. I have not gotten used to the PnP feature yet, so I still use node_modules. 

I use a dedicated [private](./src/private) workspace for storing config files shared among workspaces.

For Typescript, I utilize the static type-checking integrations from the IDE and then use babel for transpilation due to the speed. This mixture of strict (Typescript) and speed (babel) is a good fit for me, and I have the most fun with this combo.  

### Running the app
```bash
cd ./src/website-app
docker-compose up app.jmaeff.me
```

## Technology

### React
I use React because there are many good developer tools and a strong community. In addition, you can use the same programming language for the UI as the server, which makes sharing validation code and refactoring less complex.

### MDX
This project uses `MDX` for content generation. I much prefer using `MDX` to writing content using standard HTML. IDE support is improving too.

### styled-components
I like `styled-components` because they work nicely with the `Javascript` and `Typescript` languages. I also really like how easy it is to compose and style existing components. The theming is also a neat feature.

### Material UI
I can quickly prototype using a great selection of pre-made components.

### Webpack
I generate the production version of this site using the `webpack` bundler. I made a custom loader for generating various image sizes that utilize the `srcset` attribute with the `image` tag. Webpack has other plugins available, but I enjoy using this tool and found I could get what I wanted with the loader.

### Vercel
Vercel provided free hosting, custom domain names, SSL, and GitHub integration.

## Special Thanks
Thank you to the authors of the open-source packages used in the website.
