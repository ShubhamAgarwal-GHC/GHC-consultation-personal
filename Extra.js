const payloadForBackend = {
  firstName: "Name", //req
  lastName: "Last Name", //req
  consultation_type: "Short Long",
  category: "Skin, hair, ....",
  booking: "Yes -> consult doctor, else -> no",
  type: "process.env.REACT_APP_BRAND.toLowerCase()",
  productLink: productLink, // req (from shopify)
  productName: productName, // req (from shopify)
  user_survey: questionnaire, // req (array of question answer- [{question: key, answer: problems},{question: key, answer: problems}])
};

const PRODUCT_TYPES = ["Mars", "Saturn"];

const CATEGORIES_FOR_ASSESSMENT_TYPES_MARS = {
  Short: ["Skin", "Wellness", "Hair", "Performance", "Beard"],
  Long: ["Skin", "Wellness", "Hair"],
};

const CATEGORIES_FOR_ASSESSMENT_TYPES_SATURN = [
  (Short = ["Skin", "Wellness", "Hair", "Performance", "Beard"]),
  (Long = ["Skin", "Wellness", "Hair", "Performance", "Beard"]),
];

const MARS_SHORT_CATEGORIES_QUESTIONS = [
  (HAIR = {
    questions: [
      {
        questionId: 2,
        question: "whats best descrribe the condition of your hair", //req
        previousQuestionId: 1, // req -> -1 if its the first question
        nextQuestionid: 3,
        type: "radio", // radio, checkbox, input, textarea
        quotes: "30% people suffer this issue", //req
        quotesDelay: 300, //req
        defaultOptionIndex: 1,
        options: [
          {
            displayText: "Regrowing your hair",
            value: "hair_regrowth",
            image: "https//....", //optional
          },
          {
            text: "hair fall",
            optionType: "checkbox",
            image: "https//....",
          },
          {
            text: "hair thining",
            optionType: "textbox",
            image: "https//....",
          },
        ],
      },
    ],
  }),
];

const MARS_LONG_CATEGORIES_QUESTIONS = [
  (HAIR = {
    progressBarValues: ["my hair", "basic", "life style", "health"],
    questions: [
      {
        questionId: 1,
        question: "whats best descrribe the condition of your hair", //req
        previousQuestionId: 2, // req -> -1 if its the first question
        multipleAnswersAllowed: true, //req
        quotes: "30% people suffer this issue", //req
        quotesDelay: 300, //req
        belongsToProgressBarValue: "my hair",
        Options: [
          {
            text: "Regrowing your hair", //req
            optionType: "radio", //req
            image: "https//....", //optional
          },
          {
            text: "hair fall",
            optionType: "checkbox",
            image: "https//....",
          },
          {
            text: "hair thining",
            optionType: "textbox",
            image: "https//....",
          },
        ],
      },
    ],
  }),
];

const SATURN_SHORT_CATEGORIES_QUESTIONS = [
  (HAIR = {
    questions: [
      {
        questionId: 1,
        question: "whats best descrribe the condition of your hair", //req
        previousQuestionId: 2, // req -> -1 if its the first question
        multipleAnswersAllowed: true, //req
        quotes: "30% people suffer this issue", //req
        quotesDelay: 300, //req
        Options: [
          {
            text: "Regrowing your hair", //req
            optionType: "radio", //req
            image: "https//....", //optional
          },
          {
            text: "hair fall",
            optionType: "checkbox",
            image: "https//....",
          },
          {
            text: "hair thining",
            optionType: "textbox",
            image: "https//....",
          },
        ],
      },
    ],
  }),
];

const SATURN_LONG_CATEGORIES_QUESTIONS = [
  (HAIR = {
    isProgressBarRequired: true,
    progressBarValues: ["my hair", "basic", "life style", "health"],
    questions: [
      {
        questionId: 1,
        question: "whats best descrribe the condition of your hair", //req
        previousQuestionId: 2, // req -> -1 if its the first question
        multipleAnswersAllowed: true, //req
        quotes: "30% people suffer this issue", //req
        quotesDelay: 300, //req
        belongsToProgressBarValue: "my hair",
        Options: [
          {
            text: "Regrowing your hair", //req
            optionType: "radio", //req
            image: "https//....", //optional
          },
          {
            text: "hair fall",
            optionType: "checkbox",
            image: "https//....",
          },
          {
            text: "hair thining",
            optionType: "textbox",
            image: "https//....",
          },
        ],
      },
    ],
  }),
];
