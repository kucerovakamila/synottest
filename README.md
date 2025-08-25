# Synot Games Assignment (Cypress + TypeScript)

## Stack
- Cypress 12.6 + TypeScript (newer versions unstable and I don't like it as much :D)
- Page Objects Models  (UI as PO folder, API as helper)
- Fixtures for data files

## Prerequisites
- Node.js 18+ and npm

## How to run
````bash
npm install
npx cypress open      # opens the cypress runner
npm test              # headless run
npx cypress run --spec "cypress/e2e/api/**"         # headless api only! RUN THIS
```` 
### Changes, explanations & limitations

For UI test, I chose duckduckgo search engine instead of google. Why? cookie and bot detection limitations on google for automated runs are so severe it would never pass (I looked into ai captcha plugins but decided it would be an overkill to implement for this assignment)

duckduckgo is much more lenient in that regard, HOWEVER, running in headless will at last trigger its captcha guard, that's why I urge you to use the headless api only command, as the full headless will always fails on UI.

Lastly, I chose for the Public Api, the openHolidays api. Now, my current approach has limitations on data (main problem being IDs), this is a problem for live app. you can Find test data in fixtures, making API expectations explicit; update them if the external API changes pls.

thx for coming to my TED talk