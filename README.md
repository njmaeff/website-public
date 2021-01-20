# @njmaeff/website

## Development

I like to use docker for web development. You will find all the development files located in the [app](./src/website-app) directory. I like to use a dns proxy, so I don't have to use `localhost` when developing with storybook and webpack. The website is primarily developed with ubuntu linux using the webstorm IDE, so I'm sorry if things blow up on Windows. I find that nodejs and web development is way more friendly on linux. WSL2 is pretty good on Windows and will catch up soon. Actually everything should work except for the dns-proxy if using WSL2 and docker.

You will also see I am using the [yarn/berry](https://github.com/yarnpkg/berry) repository. I have spent a few months reading the source code, and I think the project is very strong. I have not gotten used to the PnP feature yet, so I still use node_modules. 

I have use a special [private](./src/private) workspace for storing config files shared among workspaces.

I don't use typescript conventionally. I utilize the static typechecking integrations from the IDE and then use babel for transpilation because of the speed. This mixture of strict (typescript) and speed (babel) is a good fit for me at this time, and I have the most fun with this combo.  

### Running the app
```bash
cd ./src/website-app
docker-compose up www.jmaeff.me
```

## Technology

### React
React is just great.

### MDX
This project uses mdx for content generation. I much prefer using mdx than writing content using standard html. What a great tool. IDE support is improving too.

### styled-components
I like styled components because I can use the strong module system afforded by nodejs package management. I also really like how easy it is to compose and style existing components. The theming is also a neat feature.

### Material UI
Wow, what a great selection of React components I can use!

### Webpack
Webpack is used for bundling the site. I made a custom loader for generating various image sizes that utilize the srcset attribute with the `image` tag. There are other public plugins available, but I really enjoy using webpack and found I was able to get exactly what I wanted with the loader.

Webpack is a very large project and has many features.

## Special Thanks
Thank you to the authors of the open source packages I use. I'm sorry if I am using your package incorrectly and will amend any issues that arise.
