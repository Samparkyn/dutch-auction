import { constants } from './constants'

const subtractTime = (timeInMS, seconds) => {
  const secondsInMS = seconds * 1000
  return timeInMS - secondsInMS
}

export const olivia = {
  username: 'Olivia',
  userId: 1
}

export const kate = {
  username: 'Kate',
  userId: 2
}

export const sam = {
  username: 'Sam',
  userId: 3
}

export const john = {
  username: 'John',
  userId: 4
}

export const getItems = () => {

  return [
    {
      ...olivia,
      id: Date.now() - 120938,
      bids: [],
      title: 'Ipad 2',
      price: 400,
      startPrice: 400,
      start: subtractTime(Date.now(), 0),
      active: true,
      winner: null,
      duration: constants.DEFAULT_AUCTION_TIME
    },
    {
      ...john,
      id: Date.now() - 1,
      bids: [
        {
          ...kate,
          price: 85,
          start: subtractTime(Date.now(), 1000 - 120),
        }
      ],
      title: 'Road bike',
      price: 580,
      startPrice: 500,
      start: subtractTime(Date.now(), 1000),
      active: false,
      winner: {
        ...kate,
        price: 85,
        start: subtractTime(Date.now(), 1000 - 120),
      },
      duration: constants.DEFAULT_AUCTION_TIME
    },
    {
      ...sam,
      id: Date.now() - 2,
      bids: [
        {
          ...olivia,
          price: 550,
          start: subtractTime(Date.now(), 75),
        },
        {
          ...john,
          price: 550,
          start: subtractTime(Date.now(), 65),
        }
      ],
      title: 'Downhill all mountain skis',
      price: 800,
      startPrice: 1000,
      start: subtractTime(Date.now(), 60),
      active: true,
      duration: constants.DEFAULT_AUCTION_TIME
    },
    {
      ...kate,
      id: Date.now() - 3,
      bids: [
        {
          ...sam,
          price: 590,
          start: subtractTime(Date.now(), 130),
        },
        {
          ...john,
          price: 590,
          start: subtractTime(Date.now(), 135),
        }
      ],
      title: 'Head Ski boots',
      price: 600,
      startPrice: 950,
      start: subtractTime(Date.now(), 180),
      active: true,
      duration: constants.DEFAULT_AUCTION_TIME
    },
    {
      ...sam,
      id: Date.now() - 8,
      bids: [],
      title: 'Wilson tennis bag',
      price: 100,
      startPrice: 100,
      start: subtractTime(Date.now(), 12000),
      active: false,
      duration: constants.DEFAULT_AUCTION_TIME
    },
  ]
}