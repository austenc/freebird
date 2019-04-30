# Freebird

### A starter theme for Statamic with Laravel Mix and Tailwind CSS

Freebird is a theme boilerplate with Tailwind 1.0 (beta), and a familiar Laravel Mix build system. 
It allows you to get your next custom theme up and running quickly with familiar build tools and 
sensible configuration defaults. 

*The theme is usable, but new, so feature requests are certainly welcome!*

## Setup

1. Get a statamic site up and running with your preferred method
2. Download Freebird into your `site/themes` folder
   - or clone from github with `git clone https://github.com/austenc/freebird.git`
3. Set Freebird to the active theme under **Settings => Theming** in the control panel, 
or in the `site/settings/theming.yaml` file. 
4. Install dependencies with `npm install` and build assets with `npm run dev`
5. Check out your site! Feel free to delete the `home.html` template and build your theme as you see fit!

## Building Your Theme

**The theme assets are all within the `resources` folder.**

Freebird configures `primary-*` classes for Tailwind and sets them to purple by default. These classes are especially useful when building your own design system. This can be easily changed in the `tailwind.config.js` file. You may also add your own tailwind config!

## Deploying

By default, the `css/freebird.css` and `css/freebird.js` files are not kept in version control. 
When deploying a project built with Freebird, you have two options:
    
    
1. **(recommended)** You can run `npm run prod` when you deploy your site to build fresh assets         

**OR**
    

2. You can put those files in version control by editing the `.gitignore`



## Contributing

This project is new, pull requests, ideas, and any feedback is certainly welcome!

Please [open a github issue](https://github.com/freebird/issues/new) if you have something to say.
