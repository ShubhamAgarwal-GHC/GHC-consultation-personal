import Type1 from "../Components/Options/Type1";
import along_the_hairline from "../Images/along_the_hairline.png"
import overall_hairloss from "../Images/overall_hairloss.png"
import receding_hairline_and_overall_thining from "../Images/receding_hairline_and_overall_thining.png"
import thining_at_the_crown from "../Images/thining_at_the_crown.png"


// import Type1 from "../Components/Options/Type1";
// import "" from "../Images/"".png";

/*
            NOTE-1
  1: skipToQuestion is a req function
  2: the argument passed is a object which contains the options selected for all previous questions
  3: below is the sample obj structure
  4: obj : {
      0 : [1,3]
      1 : [2]
    } 
  5: here the key denotes the number number
  6: value is the array of numbers which denotes the option number selected for that question
  7: if no constion is there to skip, just return the current question number
  8: everything is 0-indexed
*/

const ASSESSMENT_CARDS = [
  {
    typeOfAssessment: "Quick Assessment",
    features: ["Take a quick assessment and get a treatment plan tailored to address your specific concerns"],
    buttonText: "Start Assessment",
    cardType: "short",
  },
  {
    typeOfAssessment: "Schedule a FREE Call",
    features: ["Get in touch with our in house health experts and get personalized treatment plan"],
    buttonText: "Consult an Expert",
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
  Type1: Type1,
};

// all questions/options number are 0-index based
const QUESTIONS_WITH_OPTIONS = {
  MARS: {
    SHORT: {
      HAIR: {
        isProgressBarRequired: true,
        questions: [
          {
            questionId: 0,
            nextQuestionid: 1,
            previousQuestionId: -1, // req -> -1 if its the first question
            optionType: "Type1",
            question: "What best describes the current condition of your hair?", //req
            quotes:
              "Hair loss affects 60.5 % of the total Men population in India", //req
            quotesDelay: 300, //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            // Refer NOTE-1
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test-0", obj);
              return 0;
            },
            options: [
              {
                displayText: "Receding hairline",
                value: "receding_hairline",
                image: along_the_hairline,
              },
              {
                displayText: "Thinning at the crown",
                value: "thinning_at_the_crown",
                image: thining_at_the_crown,
              },
              {
                displayText: "Overall hair loss/thinning",
                value: "Overall_hair_loss/thinning",
                image: overall_hairloss,
              },
              {
                displayText: "receding + overall thinning",
                value: "receding_overall_thinning",
                image: receding_hairline_and_overall_thining,
              },
            ],
          },

          {
            questionId: 1,
            nextQuestionid: 2,
            previousQuestionId: 0, // req -> -1 if its the first question
            optionType: "Type1",
            question: "Have you tried hair loss treatments before?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test-1", obj);
              return 1;
            },
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
            optionType: "Type1",
            question: "Which treatments have you tried?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: true,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test-1", obj);
              let questionNumber = 1;
              let optionNumber0 = 0;
              if (obj[questionNumber].includes(optionNumber0)) {
                return 2;
              } else {
                return 4;
              }
            },
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
            optionType: "Type1",
            question: "How did these treatments go?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 3;
            },
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
            optionType: "Type1",
            question: "What results are you looking for?", //req
            quotes:
              "50% of the male pattern baldness can be attributed due to  hereditary roots.However, hereditary male pattern baldness is treatable by taking early preventive actions", //req
            quotesDelay: 300, //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 4;
            },
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
            optionType: "Type1",
            question: "Does anyone in your family have hair loss?", //req
            quotes:
              "FACT: Every time we try a new medication it takes time for our body to react. Similarly, we can observe minimal hair loss when we start to use minoxidil for a few days", //req
            quotesDelay: 300, //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 5;
            },
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
            optionType: "Type1",
            question:
              "Our doctors need a photo of your scalp selfie photo descriptive image for how to take photo", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 6;
            },
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
      PERFORMANCE: {
        isProgressBarRequired: true,
        questions: [
          {
            questionId: 0,
            nextQuestionid: 1,
            previousQuestionId: -1, // req -> -1 if its the first question
            optionType: "Type1",
            question: "What problems are you facing?", //req
            quotes: "",
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: true,
            // Refer NOTE-1
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test-0", obj);
              return 0;
            },
            options: [
              {
                displayText: "Erection problem",
                value: "erection_problem",
                image: "",
              },
              {
                displayText: "Low sexual desire",
                value: "low_sexual_desire",
                image: "",
              },
              {
                displayText: "Ejaculatory problems",
                value: "ejaculatory_problems",
                image: "",
              },
              {
                displayText: "Stamina problems",
                value: "stamina_problems",
                image: "",
              },
            ],
          },
      
          {
            questionId: 1,
            nextQuestionid: 2,
            previousQuestionId: 0, // req -> -1 if its the first question
            optionType: "Type1",
            question: "In the last 3 months, how often were you able to get an erection during sexual activity?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test-1", obj);
              let questionNumber = 0;
              let optionNumber0 = 0;
              let optionNumber2 = 2;
              if (obj[questionNumber].includes(optionNumber0)) {
                return 1;
              } else if(obj[questionNumber].includes(optionNumber2)) {
                return 3;
              } else {
                return 6;
              }
            },
            options: [
              {
                displayText: "Almost never",
                value: "almost_never",
                image: "",
              },
              {
                displayText: "Sometimes",
                value: "sometimes",
                image: "",
              },
              {
                displayText: "Most times",
                value: "most_times",
                image: "",
              },
              {
                displayText: "Always - no problem during sexual activity",
                value: "Always_no_problem_during_sexual_activity",
                image: "",
              },
            ],
          },
      
          {
            questionId: 2,
            nextQuestionid: 3,
            previousQuestionId: 1, // req -> -1 if its the first question
            optionType: "Type1",
            question: "In the last 3 months, how often were you able to sustain the erection till ejaculation?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test-2", obj);
              return 2;
            },
            options: [
              {
                displayText: "Almost never",
                value: "almost_never",
                image: "",
              },
              {
                displayText: "Sometimes",
                value: "sometimes",
                image: "",
              },
              {
                displayText: "Most times",
                value: "most_times",
                image: "",
              },
              {
                displayText: "Always - no problem once the erection happened",
                value: " Always_no_problem_once_the_erection_happened",
                image: "",
              },
            ],
          },
      
          {
            questionId: 3,
            nextQuestionid: 4,
            previousQuestionId: 2, // req -> -1 if its the first question
            optionType: "Type1",
            question: "What concerns are you experiencing with respect to ejaculation? Ejaculation - when one orgasms or climaxes and semen is released from the penis.", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test-3", obj);
              let questionNumber = 0;
              let optionNumber2 = 2;
              if (obj[questionNumber].includes(optionNumber2)) {
                return 3;
              } else {
                return 6;
              }
            },
            options: [
              {
                displayText: "Early ejaculation",
                value: "early_ejaculation",
                image: "",
              },
              {
                displayText: "Delayed ejacultation",
                value: "delayed_ejacultation",
                image: "",
              },
              {
                displayText: "Unable to ejaculate/orgasm",
                value: "unable_to _ejaculate/orgasm",
                image: "",
              },
            ],
          },
      
          {
            questionId: 4,
            nextQuestionid: 5,
            previousQuestionId: 3, // req -> -1 if its the first question
            optionType: "Type1",
            question: "How often do you have trouble getting or keeping an erection during sex?", //req
            quotes: "40% of men experience symptoms like this by the age of 40", //req
            quotesDelay: 300, //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 4;
            },
            options: [
              {
                displayText: "Every time",
                value: "every_time ",
                image: "",
              },
              {
                displayText: "Half of the time",
                value: "half_of_the_time",
                image: "",
              },
              {
                displayText: "Occasionally",
                value: "occasionally",
                image: "",
              },
              {
                displayText: "Rarely",
                value: "rarely",
                image: "",
              },
            ],
          },
      
          {
            questionId: 5,
            nextQuestionid: 6,
            previousQuestionId: 4, // req -> -1 if its the first question
            optionType: "Type1",
            question: "How long were you able to last during sex in the last 3 months?", //req
            quotes: "30-40% of the men experience this at some point in their lives Understanding more about your condition helps us suggest the best-suited plan for you",
            quotesDelay: 300, //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 5;
            },
            options: [
              {
                displayText: "I ejaculate before penetration",
                value: "i_ejaculate_before_penetration ",
                image: "",
              },
              {
                displayText: "under 1 min",
                value: "under_1_min",
                image: "",
              },
              {
                displayText: "2-3 min",
                value: "2_3_min",
                image: "",
              },
              {
                displayText: "5- 10 min",
                value: "5_10_min",
                image: "",
              },
            ],
          },
      
          {
            questionId: 6,
            nextQuestionid: -1, // req -> no more question
            previousQuestionId: 5, // req -> -1 if its the first question
            optionType: "Type1",
            question:
              "Have you been diagnosed with any of the following illness or disorders?", //req
            quotes: "Knowing your physical strength during intercourse helps us navigate to the right treatment for you", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: true,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 6;
            },
            options: [
              // This will be a input box
              {
                displayText: "No I do not have any long term illness or disorders",
                value: "no_I_do_not_have_any_long_term_illness_or_disorders ",
                image: "",
              },
              {
                displayText: "Diabetes",
                value: "Diabetes ",
                image: "",
              },
              {
                displayText: "Cardiac issues",
                value: "Cardiac_issues ",
                image: "",
              },
              {
                displayText: "Hypertension",
                value: "Hypertension ",
                image: "",
              },
              {
                displayText: "Anxiety disorders",
                value: "Anxiety_disorders ",
                image: "",
              },
              {
                displayText: "Other",
                value: "Other ",
                image: "",
              },
            ],
          },
      
          {
            questionId: 7,
            nextQuestionid: 8, // req -> no more question
            previousQuestionId: 6, // req -> -1 if its the first question
            optionType: "Type1",
            question:
              "Do you consume any of the following?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 7;
            },
            options: [
              // This will be a input box
              {
                displayText: "Alcohol",
                value: "Alcohol ",
                image: "",
              },
              {
                displayText: "Tobacco based products",
                value: "Tobacco_based_products ",
                image: "",
              },
              {
                displayText: "Recreational drugs",
                value: "Recreational_drugs ",
                image: "",
              },
            ],
          },
      
      
          {
            questionId: 8,
            nextQuestionid: -1, // req -> no more question
            previousQuestionId: 7, // req -> -1 if its the first question
            optionType: "Type1",
            question: "Do you experience cramps or tiredness while having sex?", //req
            quotes: "", //req
            quotesDelay: "", //req
            defaultOptionIndex: "", // -1 if no deafult req
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
              console.log("skipToQuestion test", obj);
              return 8;
            },
            options: [
              // This will be a input box
              {
                displayText: "Yes",
                value: "yes ",
                image: "",
              },
              {
                displayText: "No",
                value: "no ",
                image: "",
              },
            ],
          },
        ],
      },
      SKIN: {
        isProgressBarRequired: true,
        questions: [
          {
            questionId: 0,
            optionType: "Type1",
            question: "whats best descrribe the condition of your hair?", //req
            previousQuestionId: -1, // req -> -1 if its the first question
            nextQuestionid: 1,
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue", //req
            quotesDelay: 300, //req
            defaultOptionIndex: "", // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair",
                value: "hair_regrowth",
                image: "",
              },
              {
                displayText: "hair fall",
                optionType: "checkbox",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
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
            defaultOptionIndex: "", // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: "",
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: "",
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
              },
            ],
          },
        ],
      },
      WELLNESS: {},
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
            optionType: "Type1",
            question: "whats best descrribe the condition of your hair?", //req
            previousQuestionId: -1, // req -> -1 if its the first question
            nextQuestionid: 1,
            type: "radio", // radio, checkbox, input, textarea
            quotes: "30% people suffer this issue", //req
            quotesDelay: 300, //req
            defaultOptionIndex: "",
            options: [
              {
                displayText: "Regrowing your hair",
                value: "hair_regrowth",
                image: "",
              },
              {
                displayText: "hair fall",
                optionType: "checkbox",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
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
            defaultOptionIndex: "", // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: "",
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: "",
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
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
            defaultOptionIndex: "", // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: "",
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: "",
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
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
            defaultOptionIndex: "", // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: "",
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: "",
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
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
            defaultOptionIndex: "", // -1 if no deafult req
            options: [
              {
                displayText: "Regrowing your hair2",
                value: "hair_regrowth2",
                image: "",
              },
              {
                displayText: "hair fall2",
                optionType: "checkbox2",
                image: "",
              },
              {
                displayText: "hair thining2",
                optionType: "textbox2",
                image: "",
              },
              {
                displayText: "hair thining",
                optionType: "textbox",
                image: "",
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
