# Trayio test
### Assumptions
The test was developed on a mac and assume it will work on windows too.

### Framework
WebdriverIO v6
This can be installed from https://webdriver.io/docs/gettingstarted.html
##### also install wdio cli
`npm i --save-dev @wdio/cli`

# Setup
#### install lastest node
`git clone https://github.com/raj12032020/tray.git`

##### And also install google chrome
This test uses chrome browser

#### install chromedriver
`brew cask install chromedriver`

# Excecution
Clone the project and then follow the commands

1. `cd tray`
2. npm install --production
3. npm run test

The step definition file hosts all the navigation and assertions, but this can be easily scaled for bigger projects with various navigations