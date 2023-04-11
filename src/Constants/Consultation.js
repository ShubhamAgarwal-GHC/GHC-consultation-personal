import image_30_sec from "../Images/30-sec-small.png";
import image_60_sec from "../Images/60-sec-small.png";
import image_green_tick from "../Images/green-tick.png";
import ImageTextHorizontal from "../Components/Options/ImageTextHorizontal";
import ImageTextVertical from "../Components/Options/ImageTextVertical";
import Isolation_Mode from "../Images/Isolation_Mode.png";

const ASSESSMENT_CARDS = [
  {
    timeToAssessment: "30 sec",
    typeOfAssessment: "Quick Assessment",
    timerImage: image_30_sec,
    features: ["Get recommended products that suit your concerns"],
    listType: image_green_tick,
    buttonText: "Start",
    cardType: "short",
  },
  {
    timeToAssessment: "6 Mins",
    typeOfAssessment: "Detailed Self Assessment",
    timerImage: image_60_sec,
    features: [
      "Get a free Doctor’s consultation and Personalized Treatment Plan",
    ],
    listType: image_green_tick,
    buttonText: "Start",
    cardType: "long",
  },
];
const ASSESSMENT_TYPES = ["Short", "Long"];

const CATEGORIES_FOR_ASSESSMENT = {
  MARS: {
    SHORT: ["Skin", "Wellness", "Hair", "Performance", "Beard"],
    LONG: ["Skin", "Wellness", "Hair"],
  },
  SATURN: {
    SHORT: ["Skin", "Wellness", "Hair", "Performance", "Beard"],
    LONG: ["Skin", "Wellness", "Hair"],
  },
};

const OPTIONS_COMPONENT = {
  imageTextHorizontal: ImageTextHorizontal,
  imageTextVertical: ImageTextVertical,
};

const QUESTIONS_WITH_OPTIONS = {
  MARS: {
    SHORT: {
      SKIN: {
        isProgressBarRequired: false,
        questions: [
          {
            questionId: 0,
            optionType: "imageTextHorizontal",
            question: "whats best descrribe the condition of your hair?", //req
            previousQuestionId: -1, // req -> -1 if its the first question
            nextQuestionid: 1,
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 1, // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair",
                value: "hair_regrowth",
                image: Isolation_Mode,
              },
              {
                displayText: "hair fall",
                optionType: "checkbox",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
            ],
          },
          {
            questionId: 1,
            optionType: "imageTextVertical",
            question: "Whats best descrribe the condition of your hair2?", //req
            previousQuestionId: 0, // req -> -1 if its the first question
            nextQuestionid: 2,
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue2", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 1, // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
            ],
          },
        ],
      },
      WELLNESS: {},
      HAIR: {},
      PERFORMANCE: {},
      BEARD: {},
    },
    LONG: {
      SKIN: {
        isProgressBarRequired: true,
        progressBarItems: ["Basic", "Life Style", "Health"],
        questions: [
          {
            questionId: 0,
            belongsToProgressBarItem: "Basic",
            optionType: "imageTextHorizontal",
            question: "whats best descrribe the condition of your hair?", //req
            previousQuestionId: -1, // req -> -1 if its the first question
            nextQuestionid: 1,
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 1,
            options: [
              {
                displayText: "Regrowing your hair",
                value: "hair_regrowth",
                image: Isolation_Mode,
              },
              {
                displayText: "hair fall",
                optionType: "checkbox",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
            ],
          },
          {
            questionId: 1,
            belongsToProgressBarItem: "Basic",
            optionType: "imageTextVertical",
            question: "Whats best descrribe the condition of your hair2?", //req
            previousQuestionId: 0, // req -> -1 if its the first question
            nextQuestionid: 2,
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue2", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 1, // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
            ],
          },
          {
            questionId: 2,
            belongsToProgressBarItem: "Life Style",
            optionType: "imageTextVertical",
            question: "Whats best descrribe the condition of your hair2?", //req
            previousQuestionId: 1, // req -> -1 if its the first question
            nextQuestionid: 3,
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue2", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 1, // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
            ],
          },
          {
            questionId: 3,
            belongsToProgressBarItem: "Health",
            optionType: "imageTextVertical",
            question: "Whats best descrribe the condition of your hair2?", //req
            previousQuestionId: 2, // req -> -1 if its the first question
            nextQuestionid: 4,
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue2", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 1, // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
            ],
          },
          {
            questionId: 4,
            belongsToProgressBarItem: "Health",
            optionType: "imageTextVertical",
            question: "Whats best descrribe the condition of your hair2?", //req
            previousQuestionId: 3, // req -> -1 if its the first question
            nextQuestionid: -1, // req -1 if no more questions is there
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue2", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 1, // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: Isolation_Mode,
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: Isolation_Mode,
              },
            ],
          },
        ],
      },
      WELLNESS: {},
      HAIR: {},
      PERFORMANCE: {},
      BEARD: {},
    },
  },
  SATURN: {
    SHORT: {
      SKIN: {},
      WELLNESS: {},
      HAIR: {},
    },
    LONG: {
      SKIN: {},
      WELLNESS: {},
      HAIR: {},
    },
  },
};

export {
  ASSESSMENT_CARDS,
  CATEGORIES_FOR_ASSESSMENT,
  ASSESSMENT_TYPES,
  QUESTIONS_WITH_OPTIONS,
  OPTIONS_COMPONENT,
};
