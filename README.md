Dutch Auction - Sam

This is a Dutch auction style app where users are able to add new items to auction, as well as see all current auctions and place bids. There is mock data so that there are always some current auctions when the app starts. Auctions run for 5 minutes ans the price decreases by 25% after each minute passed. This was a fun little project built using react :) 

### Instructions
1. `yarn` to install dependencies
2. `yarn start` to run the app locally


### Notes
- Keep all main logic on a component called AppState. No need for a state management library like Redux in this case.
- Set the timers as setTimeouts. A server would do this normally, and communicate over a socket connection.
- Add some mock data to help test the logic, and inject it like a server would - hydrate the state.
- I tried to keep it simple and focus mostly on the JS logic


### What's missing
- Polished styling
