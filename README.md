Dutch Auction - Sam

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
