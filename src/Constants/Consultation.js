import image_30_sec from "../Images/30-sec-small.png";
import image_60_sec from "../Images/60-sec-small.png";
import image_green_tick from "../Images/green-tick.png";

const ASSESSMENT_CARDS = [
  {
    timeToAssessment : "30 sec",
    typeOfAssessment : "Quick Assessment",
    timerImage : image_30_sec,
    features : [
      "Complete a short questionnaire to book your FREE consultation"
    ],
    listType : image_green_tick,
    buttonText : "Start Assessment",
    cardType : "short",
  },
  {
    timeToAssessment : "6 Mins",
    typeOfAssessment : "Detailed Self Assessment",
    timerImage : image_60_sec,
    features : [
      "Get a detailed assessment report in 6 min",
      "Book a FREE consultation with doctor to get a treatment plan",
    ],
    listType : image_green_tick,
    buttonText : "Start Assessment",
    cardType : "long",
  },
]
const ASSESSMENT_TYPES = [
  "Short",
  "Long",
]


// const PRODUCT_TYPES = [
//     "Mars",
//     "Saturn",
// ]



// const CATEGORIES_FOR_ASSESSMENT_TYPES_MARS = [
//     Short = [
//         "Skin",
//         "Wellness",
//         "Hair",
//         "Performance",
//         "Beard",
//     ],
//     Long = [
//         "Skin",
//         "Wellness",
//         "Hair",
//         "Performance",
//         "Beard",
//     ]
// ]

// const CATEGORIES_FOR_ASSESSMENT_TYPES_SATURN = [
//     Short = [
//         "Skin",
//         "Wellness",
//         "Hair",
//         "Performance",
//         "Beard",
//     ],
//     Long = [
//         "Skin",
//         "Wellness",
//         "Hair",
//         "Performance",
//         "Beard",
//     ]
// ]

// const MARS_SHORT_CATEGORIES_QUESTIONS = [
//     HAIR = {
//       questions: [
//         {
//           questionId: 2,
//           question: "whats best descrribe the condition of your hair", //req
//           previousQuestionId: 1, // req -> -1 if its the first question
//           nextQuestionid: 3,
//           type: "radio", // radio, checkbox, input, textarea
//           quotes: "30% people suffer this issue", //req
//           quotesDelay: 300, //req
//           defaultOptionIndex: 1,
//           options: [
//             {
//               displayText: "Regrowing your hair",
//               value: "hair_regrowth",
//               image : "https//....", //optional
//             },
//             {
//               text: "hair fall",
//               optionType: "checkbox",
//               image : "https//....",
//             },
//             {
//               text: "hair thining",
//               optionType: "textbox",
//               image : "https//....",
//             },
//           ],
//         },
//       ],
//     }
// ]

// const MARS_LONG_CATEGORIES_QUESTIONS = [
//     HAIR = {
//         progressBarValues: ["my hair", "basic", "life style", "health"],
//         questions: [
//             {
//               questionId: 1,
//               question: "whats best descrribe the condition of your hair", //req
//               previousQuestionId: 2, // req -> -1 if its the first question
//               multipleAnswersAllowed: true, //req
//               quotes: "30% people suffer this issue", //req
//               quotesDelay: 300, //req
//               belongsToProgressBarValue: "my hair",
//               Options: [
//                 {
//                   text: "Regrowing your hair", //req
//                   optionType: "radio", //req
//                   image : "https//....", //optional
//                 },
//                 {
//                   text: "hair fall",
//                   optionType: "checkbox",
//                   image : "https//....",
//                 },
//                 {
//                   text: "hair thining",
//                   optionType: "textbox",
//                   image : "https//....",
//                 },
//               ],
//             },
//           ],
//     }
// ]

// const SATURN_SHORT_CATEGORIES_QUESTIONS = [
//     HAIR = {
//         questions: [
//             {
//               questionId: 1,
//               question: "whats best descrribe the condition of your hair", //req
//               previousQuestionId: 2, // req -> -1 if its the first question
//               multipleAnswersAllowed: true, //req
//               quotes: "30% people suffer this issue", //req
//               quotesDelay: 300, //req
//               Options: [
//                 {
//                   text: "Regrowing your hair", //req
//                   optionType: "radio", //req
//                   image : "https//....", //optional
//                 },
//                 {
//                   text: "hair fall",
//                   optionType: "checkbox",
//                   image : "https//....",
//                 },
//                 {
//                   text: "hair thining",
//                   optionType: "textbox",
//                   image : "https//....",
//                 },
//               ],
//             },
//           ],
//     }
// ]

// const SATURN_LONG_CATEGORIES_QUESTIONS = [
//     HAIR = {
//         progressBarValues: ["my hair", "basic", "life style", "health"],
//         questions: [
//             {
//               questionId: 1,
//               question: "whats best descrribe the condition of your hair", //req
//               previousQuestionId: 2, // req -> -1 if its the first question
//               multipleAnswersAllowed: true, //req
//               quotes: "30% people suffer this issue", //req
//               quotesDelay: 300, //req
//               belongsToProgressBarValue: "my hair",
//               Options: [
//                 {
//                   text: "Regrowing your hair", //req
//                   optionType: "radio", //req
//                   image : "https//....", //optional
//                 },
//                 {
//                   text: "hair fall",
//                   optionType: "checkbox",
//                   image : "https//....",
//                 },
//                 {
//                   text: "hair thining",
//                   optionType: "textbox",
//                   image : "https//....",
//                 },
//               ],
//             },
//           ],
//     }
// ]

export {
  ASSESSMENT_CARDS,
  ASSESSMENT_TYPES,


  // PRODUCT_TYPES,
  // CATEGORIES_FOR_ASSESSMENT_TYPES_MARS,
  // CATEGORIES_FOR_ASSESSMENT_TYPES_SATURN,
  // MARS_SHORT_CATEGORIES_QUESTIONS,
  // MARS_LONG_CATEGORIES_QUESTIONS,
  // SATURN_SHORT_CATEGORIES_QUESTIONS,
  // SATURN_LONG_CATEGORIES_QUESTIONS,
}

 
