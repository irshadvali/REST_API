

var _ = require("lodash");
// var cloneDeep = require("lodash.clonedeep");
const PeopleData = {
  1: {
    name: "Prakash Sanker",
    profileImage: "https://frozen-shore-39944.herokuapp.com/public/Profile_1.png",
    collaboratedWith: [2, 3]
  },
  2: {
    name: "Aakarsh Yadav",
    profileImage: "https://frozen-shore-39944.herokuapp.com/public/Profile_2.png",
    collaboratedWith: [3, 4, 5, 6]
  },
  3: {
    name: "Meghna Sharma",
    profileImage: "https://frozen-shore-39944.herokuapp.com/public/Profile_3.png",
    collaboratedWith: [1, 2, 4]
  },
  4: {
    name: "Shitanshu Roy",
    profileImage: "https://frozen-shore-39944.herokuapp.com/public/Profile_4.png",
    collaboratedWith: [6]
  },
  5: {
    name: "Ankur Gala",
    profileImage: "https://frozen-shore-39944.herokuapp.com/public/Profile_5.png",
    collaboratedWith: []
  },
  6: {
    name: "Vinay Kumar",
    profileImage: "https://frozen-shore-39944.herokuapp.com/public/Profile_3.png",
    collaboratedWith: [1]
  }
};

let FeedsData = [
  {
    id: 1,
    name: "Feed 1",
    createdAt: 1529229437,
    feedCreator: "Prakash Sanker"
  },
  {
    id: 2,
    name: "Feed 2",
    createdAt: 1521280637,
    feedCreator: "Irshad Vali"
  },
  {
    id: 3,
    name: "Feed 3",
    createdAt: 1530439037,
    feedCreator: "Sriram CG"
  },
  {
    id: 4,
    name: "Feed 4",
    createdAt: 1688205437,
    feedCreator: "Meghna Sharma"
  },
  {
    id: 5,
    name: "Feed 5",
    createdAt: 1120211837,
    feedCreator: "Omar Diab"
  },
  {
    id: 6,
    name: "Feed 6",
    createdAt: 1309514237,
    feedCreator: "Anthony Mainero"
  }
];

const getRandomPopulatedUser = () => {
  const randomIndex = Math.floor(Math.random() * 6) + 1;
  const user = _.cloneDeep(PeopleData[randomIndex]);
  const collaboratedWith = user.collaboratedWith;
  const populatedCollaboratedWith = _.map(collaboratedWith, collaboratorId => {
    return PeopleData[collaboratorId];
  });

  user.collaboratedWith = populatedCollaboratedWith;
  return user;
};

const TYPE_1 = "TYPE_1";
const TYPE_2 = "TYPE_2";
const TYPE_3 = "TYPE_3";

const imageUrls = [
  "https://frozen-shore-39944.herokuapp.com/public/img1.jpg",
  "https://frozen-shore-39944.herokuapp.com/public/img2.jpg",
  "https://frozen-shore-39944.herokuapp.com/public/img3.jpg",
  "https://frozen-shore-39944.herokuapp.com/public/img4.jpg",
  "https://frozen-shore-39944.herokuapp.com/public/img5.jpg"
];

const card1TextValues = [
  {
    heading: "Fishing in the Congo",
    subtext: "Congo"
  },
  {
    heading: "Rafting in the Amazon",
    subtext: "Brazil"
  },
  {
    heading: "Biking in Ladakh",
    subtext: "India"
  },
  {
    heading: "Rafting in Bali",
    subtext: "Indonesia"
  },
  {
    heading: "Hiking in Oaxaca",
    subtext: "Mexico"
  },
  {
    heading: "Painting in Paris",
    subtext: "France"
  }
];

const getRandomImageUrl = () => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const getRandomCard1Text = () => {
  return card1TextValues[Math.floor(Math.random() * card1TextValues.length)];
};

const createType1Card = () => {
  return {
    type: TYPE_1,
    cardData: {
      image: getRandomImageUrl(),
      ...getRandomCard1Text()
    }
  };
};
const createType2Card = () => {
  return {
    type: TYPE_2,
    cardData: {
      bannerImage: getRandomImageUrl()
    }
  };
};
const createType3Card = () => {
  const user = getRandomPopulatedUser();
  return {
    type: TYPE_3,
    cardData: {
      user
    }
  };
};

let SingleFeedData = {
  1: [
    createType3Card(),
    createType3Card(),
    createType3Card(),
    createType3Card()
  ],
  2: [
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType1Card(),
    createType1Card(),
    createType3Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card()
  ],
  3: [
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card()
  ],
  4: [createType1Card(), createType1Card(), createType1Card()],
  5: [createType1Card(), createType2Card(), createType2Card()],
  6: [
    createType1Card(),
    createType2Card(),
    createType2Card(),
    createType1Card(),
    createType1Card(),
    createType1Card()
  ]
};

// what sort o


// module.exports.list=(req,res)=>{
//     res.send({ data: FeedsData });
//     // console.log("irshad")
// }

// import { route } from "./";
// import { FeedsData, SingleFeedData } from "./FeedsData.js";

const PAGE_SIZE = 4;

module.exports.list =(req, res) => {
  res.send({ data: FeedsData });
};

module.exports.get = (req, res) => {
  const params = req.params;
  const feedId = params.id;
  const queryParams = req.query;
  const page = queryParams.page ? queryParams.page : 0;
  const singleFeedData = SingleFeedData[feedId];
  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const dataToSendBack = singleFeedData.splice(startIndex, endIndex);
  res.send({ data: dataToSendBack });
};