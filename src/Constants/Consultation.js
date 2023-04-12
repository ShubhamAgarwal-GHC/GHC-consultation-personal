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
      HAIR: {
        isProgressBarRequired: false,
        questions: [
          {
            questionId: 0,
            nextQuestionid: 1,
            previousQuestionId: -1, // req -> -1 if its the first question
            optionType: "imageTextHorizontal",
            type: "radio", // radio, checkbox, input, textarea (will remove)
            question: "What best describes the current condition of your hair?", //req
            quotes:
              "Hair loss affects 60.5 % of the total Men population in India", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 0, // -1 if no deafult req
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Receding hairline",
                value: "receding_hairline",
                image: "",
              },
              {
                displayText: "Thinning at the crown",
                value: "thinning_at_the_crown",
                image: "",
              },
              {
                displayText: "Overall hair loss/thinning",
                value: "Overall_hair_loss/thinning",
                image: "",
              },
              {
                displayText: "receding + overall thinning",
                value: "receding_overall_thinning",
                image: "",
              },
            ],
          },

          {
            questionId: 1,
            nextQuestionid: 2,
            previousQuestionId: 0, // req -> -1 if its the first question
            optionType: "imageTextHorizontal",
            type: "radio", // radio, checkbox, input, textarea (will remove)
            question: "Have you tried hair loss treatments before?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: 0, // -1 if no deafult req
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Yes",
                value: "yes",
                image: "",
              },
              {
                displayText: "No",
                value: "no",
                image: "",
              },
            ],
          },

          {
            questionId: 2,
            nextQuestionid: 3,
            previousQuestionId: 1, // req -> -1 if its the first question
            optionType: "imageTextHorizontal",
            type: "radio", // radio, checkbox, input, textarea (will remove)
            question: "Which treatments have you tried?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: 0, // -1 if no deafult req
            multipleSelectAllowed: true,
            options: [
              {
                displayText: "Oral prescription",
                value: "oral_prescription",
                image: "",
              },
              {
                displayText: "Minoxidil",
                value: "minoxidil",
                image: "",
              },
              {
                displayText: "Hair loss shampoo",
                value: "hair_loss_shampoo",
                image: "",
              },
              {
                displayText: "Supplements",
                value: "supplements",
                image: "",
              },
              {
                displayText: "Others",
                value: "others",
                image: "",
              },
            ],
          },

          {
            questionId: 3,
            nextQuestionid: 4,
            previousQuestionId: 2, // req -> -1 if its the first question
            optionType: "imageTextHorizontal",
            type: "radio", // radio, checkbox, input, textarea (will remove)
            question: "How did these treatments go?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: 0, // -1 if no deafult req
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "I saw some results ",
                value: "i_saw_some_results ",
                image: "",
              },
              {
                displayText: "I didn't see results",
                value: "i_didn't_see_results",
                image: "",
              },
              {
                displayText: "I didn't react well to it.",
                value: "i_ didn't_react_well_to_it.",
                image: "",
              },
            ],
          },

          {
            questionId: 4,
            nextQuestionid: 5,
            previousQuestionId: 3, // req -> -1 if its the first question
            optionType: "imageTextHorizontal",
            type: "radio", // radio, checkbox, input, textarea (will remove)
            question: "What results are you looking for?", //req
            quotes:
              "50% of the male pattern baldness can be attributed due to  hereditary roots.However, hereditary male pattern baldness is treatable by taking early preventive actions", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 0, // -1 if no deafult req
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Regrowing your hair",
                value: "regrowing_your_hair ",
                image: "",
              },
              {
                displayText: "Preventing future hair loss",
                value: "preventing_future_hair_loss",
                image: "",
              },
              {
                displayText: "Both regrowth & loss prevention",
                value: "Both regrowth & loss prevention",
                image: "",
              },
            ],
          },

          {
            questionId: 5,
            nextQuestionid: 6,
            previousQuestionId: 4, // req -> -1 if its the first question
            optionType: "imageTextHorizontal",
            type: "radio", // radio, checkbox, input, textarea (will remove)
            question: "Does anyone in your family have hair loss?", //req
            quotes:
              "FACT: Every time we try a new medication it takes time for our body to react. Similarly, we can observe minimal hair loss when we start to use minoxidil for a few days", //req
            quotesDelay: 300, //req
            defaultOptionIndex: 0, // -1 if no deafult req
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Yes",
                value: "yes ",
                image: "",
              },
              {
                displayText: "No",
                value: "no",
                image: "",
              },
            ],
          },

          {
            questionId: 6,
            nextQuestionid: -1, // req -> no more question
            previousQuestionId: 5, // req -> -1 if its the first question
            optionType: "imageTextHorizontal",
            type: "radio", // radio, checkbox, input, textarea (will remove)
            question:
              "Our doctors need a photo of your scalp selfie photo descriptive image for how to take photo", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: 0, // -1 if no deafult req
            multipleSelectAllowed: false,
            options: [
              // This will be a input box
              {
                displayText: "Yes",
                value: "yes ",
                image: "",
              },
            ],
          },
        ],
      },
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
