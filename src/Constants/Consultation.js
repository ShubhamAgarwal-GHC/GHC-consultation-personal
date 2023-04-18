import Type1 from "../Components/Options/Type1";
import UploadImage from "../Components/Options/UploadImage";
import InputText from "../Components/Options/InputText";

import along_the_hairline from "../Images/along_the_hairline.png"
import overall_hairloss from "../Images/overall_hairloss.png"
import receding_hairline_and_overall_thining from "../Images/receding_hairline_and_overall_thining.png"
import thining_at_the_crown from "../Images/thining_at_the_crown.png"
import large_open_pores from "../Images/large_open_pores.png"
import pigmentation from "../Images/pigmentation.png"
import acne_pimples from "../Images/acne_&_pimples.png"
import aging_wrinkles from "../Images/aging_&_wrinkles.png"
import dark_circles from "../Images/dark_circles.png"
import spot_marks from "../Images/spots_&_marks.png"
import dry_skin from "../Images/dry_skin.png"

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
  UploadImage: UploadImage,
  InputText: InputText,
};

// all questions/options number are 0-index based
const QUESTIONS_WITH_OPTIONS = {
  MARS: {
    SHORT: {
      HAIR: {
        recommandTagLine : "Based on your Hair analysis,   this routine will help you transform your hair to the healthiest",
        isProgressBarRequired: true,
        questions: [
          {
            questionId: 0,
            skipQuestionReq : false,
            nextQuestionid: 1,
            previousQuestionId: -1,
            optionType: "Type1",
            question: "What best describes the current condition of your hair?",
            quotes: "Hair loss affects 60.5 % of the total Men population in India",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
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
            skipQuestionReq : false,
            nextQuestionid: 2,
            previousQuestionId: 0,
            optionType: "Type1",
            question: "Have you tried hair loss treatments before?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
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
            skipQuestionReq : true,
            nextQuestionid: 3,
            previousQuestionId: 1,
            optionType: "Type1",
            question: "Which treatments have you tried?",
            quotes: "", 
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: true,
            skipToQuestion: (obj) => {
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
            skipQuestionReq : false,
            nextQuestionid: 4,
            previousQuestionId: 2,
            optionType: "Type1",
            question: "How did these treatments go?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
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
            skipQuestionReq : false,
            nextQuestionid: 5,
            previousQuestionId: 3,
            optionType: "Type1",
            question: "What results are you looking for?",
            quotes: "50% of the male pattern baldness can be attributed due to  hereditary roots.However, hereditary male pattern baldness is treatable by taking early preventive actions",
            quotesDelay: 1000,
            defaultOptionIndex: "",
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
            skipQuestionReq : false,
            nextQuestionid: 6,
            previousQuestionId: 4,
            optionType: "Type1",
            question: "Does anyone in your family have hair loss?",
            quotes: "FACT: Every time we try a new medication it takes time for our body to react. Similarly, we can observe minimal hair loss when we start to use minoxidil for a few days", //req
            quotesDelay: 1000,
            defaultOptionIndex: "",
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
            skipQuestionReq : false,
            nextQuestionid: -1,
            previousQuestionId: 5,
            optionType: "UploadImage",
            question:"Your Hair Expert needs a photo of your Hair to help you better",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Submit",
                value: "submit ",
                image: "",
              },
              {
                displayText: "Skip",
                value: "skip ",
                image: "",
              },
            ],
          },
        ],
      },
      PERFORMANCE: {
        recommandTagLine : "Based on your PERFORMANCE analysis,this routine will help you transform your hair to the healthiest",
        isProgressBarRequired: true,
        questions: [
          {
            questionId: 0,
            skipQuestionReq : false,
            nextQuestionid: 1,
            previousQuestionId: -1,
            optionType: "Type1",
            question: "What problems are you facing?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: true,
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
            skipQuestionReq : true,
            nextQuestionid: 2,
            previousQuestionId: 0,
            optionType: "Type1",
            question: "In the last 3 months, how often were you able to get an erection during sexual activity?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
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
            skipQuestionReq : false,
            nextQuestionid: 3,
            previousQuestionId: 1,
            optionType: "Type1",
            question: "In the last 3 months, how often were you able to sustain the erection till ejaculation?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
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
            skipQuestionReq : true,
            nextQuestionid: 4,
            previousQuestionId: 2,
            optionType: "Type1",
            question: "What concerns are you experiencing with respect to ejaculation? Ejaculation - when one orgasms or climaxes and semen is released from the penis.",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
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
            skipQuestionReq : false,
            nextQuestionid: 5,
            previousQuestionId: 3,
            optionType: "Type1",
            question: "How often do you have trouble getting or keeping an erection during sex?",
            quotes: "40% of men experience symptoms like this by the age of 40",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
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
            skipQuestionReq : false,
            nextQuestionid: 6,
            previousQuestionId: 4,
            optionType: "Type1",
            question: "How long were you able to last during sex in the last 3 months?",
            quotes: "30-40% of the men experience this at some point in their lives Understanding more about your condition helps us suggest the best-suited plan for you",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
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
            skipQuestionReq : false,
            nextQuestionid: 7,
            previousQuestionId: 5,
            optionType: "Type1",
            question: "Have you been diagnosed with any of the following illness or disorders?",
            quotes: "Knowing your physical strength during intercourse helps us navigate to the right treatment for you", //req
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: true,
            options: [
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
            skipQuestionReq : false,
            nextQuestionid: 8,
            previousQuestionId: 6,
            optionType: "Type1",
            question: "Do you consume any of the following?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
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
            skipQuestionReq : false,
            nextQuestionid: -1,
            previousQuestionId: 7,
            optionType: "Type1",
            question: "Do you experience cramps or tiredness while having sex?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
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
        recommandTagLine : "Based on your SKIN analysis,this routine will help you transform your hair to the healthiest",
        isProgressBarRequired: true,
        questions: [
          {
            questionId: 0,
            skipQuestionReq : false,
            nextQuestionid: 1,
            previousQuestionId: -1,
            optionType: "Type1",
            question: "What are your main skin concerns?",
            quotes: "Skin concerns are unique to each individual and one needs the right care to keep up with good skin health",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: true,
            options: [
              {
                displayText: "Large open pores",
                value: "large_open_pores",
                image: large_open_pores,
              },
              {
                displayText: "Pigmentation",
                value: "pigmentation",
                image: pigmentation,
              },
              {
                displayText: "Acne & pimples",
                value: "acne_&_pimples",
                image: acne_pimples,
              },
              {
                displayText: "Aging & wrinkles",
                value: "aging_&_wrinkles",
                image: aging_wrinkles,
              },
              {
                displayText: "Dark circles",
                value: "dark_circles",
                image: dark_circles,
              },
              {
                displayText: "Spots & Marks",
                value: "spots_&_marks",
                image: spot_marks,
              },
              {
                displayText: "Dry skin",
                value: "dry_skin",
                image: dry_skin,
              },
            ],
          },
      
          {
            questionId: 1,
            skipQuestionReq : false,
            nextQuestionid: 2,
            previousQuestionId: 0,
            optionType: "Type1",
            question: "When you wake up in the morning, your skin feels:",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Tight or dry",
                value: "tight_or_dry",
                image: "",
              },
              {
                displayText: "Normal",
                value: "normal",
                image: "",
              },
              {
                displayText: "Oily in t-zone",
                value: "oily_in_t_zone",
                image: "",
              },
              {
                displayText: "Oily",
                value: "oily",
                image: "",
              },
              {
                displayText: "Not sure",
                value: "not_sure",
                image: "",
              },
            ],
          },
      
          {
            questionId: 2,
            skipQuestionReq : false,
            nextQuestionid: 3,
            previousQuestionId: 1,
            optionType: "Type1",
            question: "How do you describe your skin type?",
            quotes: "It's important to listen to our bodies and understand allergies before beginning any treatment.",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Dry",
                value: "dry",
                image: "",
              },
              {
                displayText: "Neutral",
                value: "neutral",
                image: "",
              },
              {
                displayText: "Oily",
                value: "oily",
                image: "",
              },
              {
                displayText: "Combination of dry and normal",
                value: "combination_of_dry_and_normal",
                image: "",
              },
            ],
          },
      
          {
            questionId: 3,
            skipQuestionReq : true,
            nextQuestionid: 4,
            previousQuestionId: 2,
            optionType: "Type1",
            question: "How would you best describe your acne?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            skipToQuestion: (obj) => {
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
                displayText: "Pus filled ones",
                value: "pus_filled_ones",
                image: "",
              },
              {
                displayText: "Hard ones",
                value: "hard_ones",
                image: "",
              },
              {
                displayText: "Swollen ones",
                value: "swollen_ones",
                image: "",
              },
              {
                displayText: "Red ones",
                value: "red_ones",
                image: "",
              },
            ],
          },
      
          {
            questionId: 4,
            skipQuestionReq : false,
            nextQuestionid: 5,
            previousQuestionId: 3,
            optionType: "Type1",
            question: "What are your skin needs?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: true,
            options: [
              {
                displayText: "Hydration",
                value: "hydration ",
                image: "",
              },
              {
                displayText: "Anti-aging",
                value: "anti_aging",
                image: "",
              },
              {
                displayText: "Glow & Radiance",
                value: "glow_&_radiance",
                image: "",
              },
              {
                displayText: "Redness relief",
                value: "redness_relief",
                image: "",
              },
              {
                displayText: "Acne removal",
                value: "acne_removal",
                image: "",
              },
              {
                displayText: "Pigmentation treatment",
                value: "pigmentation_treatment",
                image: "",
              },
            ],
          },
      
          {
            questionId: 5,
            skipQuestionReq : false,
            nextQuestionid: 6,
            previousQuestionId: 4,
            optionType: "Type1",
            question: "Do you have any known allergies to any of the following ingredients used in our products?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: true,
            options: [
              {
                displayText: "Multiple option selection",
                value: "multiple_option_selection",
                image: "",
              },
              {
                displayText: "Vitamin C",
                value: "vitamin_c",
                image: "",
              },
              {
                displayText: "Salicylic Acid",
                value: "salicylic_acid",
                image: "",
              },
              {
                displayText: "Retinol",
                value: "retinol",
                image: "",
              },
              {
                displayText: "Niacinamide",
                value: "niacinamide",
                image: "",
              },
              {
                displayText: "Kojic Acid",
                value: "kojic_acid",
                image: "",
              },
              {
                displayText: "None of the above",
                value: "none_of_the_above",
                image: "",
              },
            ],
          },
      
          {
            questionId: 6,
            skipQuestionReq : false,
            nextQuestionid: 7,
            previousQuestionId: 5,
            optionType: "Type1",
            question: "How much stress do you experience on a regular basis?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "No stress",
                value: "no_stress",
                image: "",
              },
              {
                displayText: "Little stress",
                value: "little_stress ",
                image: "",
              },
              {
                displayText: "Moderate stress",
                value: "moderate_stress ",
                image: "",
              },
              {
                displayText: "High stress",
                value: "high_stress ",
                image: "",
              },
            ],
          },
      
          {
            questionId: 7,
            skipQuestionReq : false,
            nextQuestionid: 8,
            previousQuestionId: 6,
            optionType: "Type1",
            question: "Which of these are a part of your lifestyle?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Balanced Diet",
                value: "balanced_diet ",
                image: "",
              },
              {
                displayText: "Regular workout",
                value: "regular_workout ",
                image: "",
              },
              {
                displayText: "Frequent traveller",
                value: "frequent_traveller",
                image: "",
              },
              {
                displayText: "Love for alcohol",
                value: "love_for_alcohol",
                image: "",
              },
              {
                displayText: "Not-listed here",
                value: "not_listed_here",
                image: "",
              },
            ],
          },
      
      
                
          {
            questionId: 8,
            skipQuestionReq : false,
            nextQuestionid: -1,
            previousQuestionId: 7,
            optionType: "Type1",
            question: "How much time [hours] do you spend under direct sun exposure per day?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "None",
                value: "none ",
                image: "",
              },
              {
                displayText: "1 or less",
                value: "1_or_less ",
                image: "",
              },
              {
                displayText: "2-3 hours",
                value: "2_3_hours ",
                image: "",
              },
              {
                displayText: "4-6 hours",
                value: "4_6_hours ",
                image: "",
              },
              {
                displayText: "7 or more hours",
                value: "7_or_more_hours ",
                image: "",
              },
            ],
          },
        ],
      },
      BEARD: {
        recommandTagLine : "Based on your BEARD analysis,this routine will help you transform your BEARD to the healthiest",
        isProgressBarRequired: true,
        questions: [
          {
            questionId: 0,
            skipQuestionReq : false,
            nextQuestionid: 1,
            previousQuestionId: -1,
            optionType: "Type1",
            question: "What is the current condition of your facial hair?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Patchy beard",
                value: "patchy_beard",
                image: "",
              },
              {
                displayText: "No Beard",
                value: "no_Beard",
                image: "",
              },
              {
                displayText: "Sparse facial hair (only mustache and chin hair)",
                value: "sparse_facial_hair",
                image: "",
              },
              {
                displayText: "Excellent beard, just in need of beard care products",
                value: "excellent_beard_just_in_need_of_beard_care_products",
                image: "",
              },
            ],
          },
      
          {
            questionId: 1,
            skipQuestionReq : false,
            nextQuestionid: 2,
            previousQuestionId: 0,
            optionType: "Type1",
            question: "How often do you groom your beard?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Daily",
                value: "daily",
                image: "",
              },
              {
                displayText: "Weekly",
                value: "weekly",
                image: "",
              },
              {
                displayText: "monthly",
                value: "oily_in_t_zone",
                image: "",
              },
              {
                displayText: "Occasionally",
                value: "occasionally",
                image: "",
              },
            ],
          },
      
          {
            questionId: 2,
            skipQuestionReq : false,
            nextQuestionid: 3,
            previousQuestionId: 1,
            optionType: "Type1",
            question: "What tools do you use for beard grooming?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Beard trimmer",
                value: "beard_trimmer",
                image: "",
              },
              {
                displayText: "Scissors",
                value: "scissors",
                image: "",
              },
              {
                displayText: "Razor",
                value: "razor",
                image: "",
              },
              {
                displayText: "Beard comb/brush",
                value: "beard_comb_brush",
                image: "",
              },
              {
                displayText: "Other",
                value: "other",
                image: "",
              },
            ],
          },
      
          {
            questionId: 3,
            skipQuestionReq : false,
            nextQuestionid: 4,
            previousQuestionId: 2,
            optionType: "Type1",
            question: "What is your preferred beard style?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Clean-shaven",
                value: "clean_shaven",
                image: "",
              },
              {
                displayText: "stubble",
                value: "stubble",
                image: "",
              },
              {
                displayText: "Short beard",
                value: "short_beard",
                image: "",
              },
              {
                displayText: "Medium beard",
                value: "medium_beard",
                image: "",
              },
              {
                displayText: "Long beard",
                value: "long_beard",
                image: "",
              },
              {
                displayText: "Other",
                value: "other",
                image: "",
              },
            ],
          },
      
          {
            questionId: 4,
            skipQuestionReq : false,
            nextQuestionid: 5,
            previousQuestionId: 3,
            optionType: "Type1",
            question: "How do you moisturize your beard?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Beard oil",
                value: "beard_oil ",
                image: "",
              },
              {
                displayText: "Beard balm",
                value: "beard_balm",
                image: "",
              },
              {
                displayText: "Beard conditioner",
                value: "beard_conditioner",
                image: "",
              },
              {
                displayText: "Natural oils (e.g., coconut oil, jojoba oil)",
                value: "natural_oils",
                image: "",
              },
              {
                displayText: "I don't moisturize my beard",
                value: "I_don't_moisturize_my_beard",
                image: "",
              },
            ],
          },
      
          {
            questionId: 5,
            skipQuestionReq : false,
            nextQuestionid: 6,
            previousQuestionId: 4,
            optionType: "Type1",
            question: "How do you deal with beard dandruff or dryness?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Use a beard oil/balm",
                value: "use_a_beard_oil_balm",
                image: "",
              },
              {
                displayText: "Use a beard conditioner",
                value: "use_a_beard_conditioner",
                image: "",
              },
              {
                displayText: "Exfoliate the skin under the beard",
                value: "exfoliate_the_skin_under_the_beard",
                image: "",
              },
              {
                displayText: "Other",
                value: "other",
                image: "",
              },
            ],
          },
      
          {
            questionId: 6,
            skipQuestionReq : false,
            nextQuestionid: 7,
            previousQuestionId: 5,
            optionType: "Type1",
            question: "How do you clean your beard?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Beard wash/shampoo",
                value: "beard_wash_shampoo",
                image: "",
              },
              {
                displayText: "Regular shampoo/soap",
                value: "regular_shampoo_soap ",
                image: "",
              },
              {
                displayText: "Water only",
                value: "water_only ",
                image: "",
              },
              {
                displayText: "Other",
                value: "other ",
                image: "",
              },
            ],
          },
      
          {
            questionId: 7,
            skipQuestionReq : false,
            nextQuestionid: 8,
            previousQuestionId: 6,
            optionType: "Type1",
            question: "How do you maintain your beard's overall health and appearance?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: true,
            options: [
              {
                displayText: "Regular grooming routine",
                value: "regular_grooming_routine ",
                image: "",
              },
              {
                displayText: "Healthy diet and lifestyle",
                value: "healthy_diet_and_lifestyle ",
                image: "",
              },
              {
                displayText: "Regular exercise",
                value: "regular_exercise",
                image: "",
              },
              {
                displayText: "Proper sleep",
                value: "proper_sleep",
                image: "",
              },
              {
                displayText: "Use of beard care products",
                value: "use_of_beard_care_products",
                image: "",
              },
              {
                displayText: "Other",
                value: "other",
                image: "",
              },
            ],
          },
        ],
      },
      WELLNESS: {
        recommandTagLine : "Based on your WELLNESS analysis,this routine will help you transform your WELLNESS to the healthiest",
        isProgressBarRequired: true,
        questions: [
          {
            questionId: 0,
            skipQuestionReq : false,
            nextQuestionid: 1,
            previousQuestionId: -1,
            optionType: "InputText",
            question: "Please enter your:",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Age",
                placeHolder: "Age in years",
                value: "age",
                type: "number",
                image: "",
              },
              {
                displayText: "Height",
                placeHolder: "Height in cms",
                value: "height",
                type: "number",
                image: "",
              },
              {
                displayText: "Weight",
                placeHolder: "Weight in kgs",
                value: "weight",
                type: "number",
                image: "",
              },
            ],
          },
      
          {
            questionId: 1,
            skipQuestionReq : false,
            nextQuestionid: 2,
            previousQuestionId: 0,
            optionType: "Type1",
            question: "Please select the option that best describes your current physical condition:",
            quotes: "Eating clean at regular intervals can help you notice changes in your weight management journey",
            quotesDelay: 2000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Overweight/Obese",
                value: "overweight_obese",
                image: "",
              },
              {
                displayText: "Weak bones/muscles",
                value: "weak_bones_muscles",
                image: "",
              },
              {
                displayText: "Weak joints",
                value: "weak_joints",
                image: "",
              },
              {
                displayText: "Knee/Shoulder/Joint pain",
                value: "knee_shoulder_joint_pain",
                image: "",
              },
              {
                displayText: "Body fatigue",
                value: "body_fatigue",
                image: "",
              },
              {
                displayText: "Stretch marks on the skin",
                value: "stretch_marks_on_the_skin",
                image: "",
              },
            ],
          },
      
          {
            questionId: 2,
            skipQuestionReq : false,
            nextQuestionid: 3,
            previousQuestionId: 1,
            optionType: "Type1",
            question: "How frequently do you consume food and beverages in a day, including tea, coffee, fruits, salads, and snacks?",
            quotes: "Your metabolism is highly responsive to your daily routine and adjusts accordingly.",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "More than 6 times",
                value: "more_than_6_times",
                image: "",
              },
              {
                displayText: "4-6 times",
                value: "4_6_times",
                image: "",
              },
              {
                displayText: "3 times",
                value: "3_times",
                image: "",
              },
              {
                displayText: "Less than 3 times",
                value: "less_than_3_times",
                image: "",
              },
            ],
          },
      
          {
            questionId: 3,
            skipQuestionReq : false,
            nextQuestionid: 4,
            previousQuestionId: 2,
            optionType: "Type1",
            question: "What is your daily water intake in liters?",
            quotes: "There's something special about outside food--tastier, love! Though homemade food is healthy :)",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "1-2 liters",
                value: "1_2_liters",
                image: "",
              },
              {
                displayText: "2-3 liters",
                value: "2_3_liters",
                image: "",
              },
              {
                displayText: "3-4 liters",
                value: "3_4_liters",
                image: "",
              },
              {
                displayText: "4-5 liters",
                value: "4_5_liters",
                image: "",
              },
            ],
          },
      
          {
            questionId: 4,
            skipQuestionReq : false,
            nextQuestionid: 5,
            previousQuestionId: 3,
            optionType: "Type1",
            question: "How frequently do you dine at restaurants?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Once per week",
                value: "once_per_week ",
                image: "",
              },
              {
                displayText: "Several times per week",
                value: "several_times_per_week",
                image: "",
              },
              {
                displayText: "Never dine out",
                value: "never_dine_out",
                image: "",
              },
            ],
          },
      
          {
            questionId: 5,
            skipQuestionReq : false,
            nextQuestionid: 6,
            previousQuestionId: 4,
            optionType: "Type1",
            question: "How frequently do you consume junk food?",
            quotes: "A good diet and sufficient rest are crucial to maintaining healthy skin.",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Regularly",
                value: "regularly",
                image: "",
              },
              {
                displayText: "Occasionally",
                value: "occasionally",
                image: "",
              },
              {
                displayText: "Never",
                value: "never",
                image: "",
              },
            ],
          },
      
          {
            questionId: 6,
            skipQuestionReq : false,
            nextQuestionid: 7,
            previousQuestionId: 5,
            optionType: "Type1",
            question: "How much sleep do you typically get per night?",
            quotes: "Let's not tell your boss how many hours you worked yesterday.",
            quotesDelay: 1000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Less than 4 hours",
                value: "less_than_4_hours",
                image: "",
              },
              {
                displayText: "4-6 hours",
                value: "4_6_hours ",
                image: "",
              },
              {
                displayText: "6-8 hours",
                value: "water_only ",
                image: "",
              },
              {
                displayText: "8-10 hours",
                value: "8_10_hours ",
                image: "",
              },
            ],
          },
      
          {
            questionId: 7,
            skipQuestionReq : false,
            nextQuestionid: 8,
            previousQuestionId: 6,
            optionType: "Type1",
            question: "What dietary choice do you make?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Lacto-vegetarian (includes milk products)",
                value: "lacto_vegetarian ",
                image: "",
              },
              {
                displayText: "Vegan (excludes milk products)",
                value: "vegan ",
                image: "",
              },
              {
                displayText: "Non-vegetarian (includes meat and animal products)",
                value: "non_vegetarian",
                image: "",
              },
            ],
          },
      
          {
            questionId: 8,
            skipQuestionReq : false,
            nextQuestionid: 9,
            previousQuestionId: 7,
            optionType: "Type1",
            question: "How long is your typical workday in terms of hours?",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Less than 9 hours",
                value: "less_than_9_hours",
                image: "",
              },
              {
                displayText: "9-10 hours",
                value: "9_10_hours ",
                image: "",
              },
              {
                displayText: "10-12 hours",
                value: "10_12_hours",
                image: "",
              },
              {
                displayText: "12 hours or more",
                value: "12_hours_or_more",
                image: "",
              },
            ],
          },
      
          {
            questionId: 9,
            skipQuestionReq : false,
            nextQuestionid: 10,
            previousQuestionId: 8,
            optionType: "Type1",
            question: "How frequently do you engage in smoking or drinking behaviors?",
            quotes: "Fact: Your metabolism is quite “adaptable.” It will adjust based on what you do in your daily life.",
            quotesDelay: 2000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Daily",
                value: "daily",
                image: "",
              },
              {
                displayText: "Occasionally",
                value: "occasionally ",
                image: "",
              },
              {
                displayText: "Never",
                value: "never",
                image: "",
              },
            ],
          },
      
          
          {
            questionId: 10,
            skipQuestionReq : false,
            nextQuestionid: 11,
            previousQuestionId: 9,
            optionType: "Type1",
            question: "What is your exercise frequency? (No judgments here)",
            quotes: "Some medical conditions do require a special plan. Help us find you a healthy way to manage your wellness",
            quotesDelay: 2000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "No exercise at all",
                value: "no_exercise_at_all",
                image: "",
              },
              {
                displayText: "Daily",
                value: "daily ",
                image: "",
              },
              {
                displayText: "5-6 days a week",
                value: "5_6_days_a_week",
                image: "",
              },
              {
                displayText: "1-2 days a week",
                value: "1_2_days_a_week",
                image: "",
              },
            ],
          },
      
          {
            questionId: 11,
            skipQuestionReq : false,
            nextQuestionid: 12,
            previousQuestionId: 10,
            optionType: "Type1",
            question: "Have you ever experienced allergic reactions to any of the following components?",
            quotes: "Listen to our bodies and understand them before starting any treatment",
            quotesDelay: 2000,
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Glucosamine",
                value: "glucosamine",
                image: "",
              },
              {
                displayText: "Chondroitin",
                value: "chondroitin ",
                image: "",
              },
              {
                displayText: "Methylsulfonylmethane (MSM)",
                value: "methylsulfonylmethane",
                image: "",
              },
              {
                displayText: "None of the above",
                value: "none_of_the_above",
                image: "",
              },
            ],
          },
      
          {
            questionId: 12,
            skipQuestionReq : false,
            nextQuestionid: 13,
            previousQuestionId: 11,
            optionType: "Type1",
            question: "Have you previously used any healthcare or nutritional products? ",
            quotes: "",
            quotesDelay: "",
            defaultOptionIndex: "",
            multipleSelectAllowed: false,
            options: [
              {
                displayText: "Yes",
                value: "yes",
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
    },
  },
  SATURN: {
    SHORT: {
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
