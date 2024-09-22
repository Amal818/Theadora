import {
    
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
  
  } from "../utils";
  
  export const navLists = ["Menu", "Food", "Drink", "Support"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Moroccan tea is a sweet,",
        "Refreshing blend of green tea, mint, and sugar.",
        "Symbolizing hospitality.",
      ],
      video: highlightFirstVideo,
      videoDuration: 15,
    },
    {
      id: 2,
      textLists: ["Traditional Moroccan barbecue", 
        "Cooked over an open flame",
        "Enjoyed during celebrations and gatherings"
      ],
      video: highlightSecondVideo,
      videoDuration: 14,
    },
    {
      id: 3,
      textLists: [
        "Traditional Moroccan flatbread",
        "Made from barley or wheat flour",
        "Served with olive oil, honey, or butter",
      ],
      video: highlightThirdVideo,
      videoDuration: 6,
    },
    {
      id: 4,
      textLists: ["traditional Moroccan sausage made from a mix of spiced lamb or beef",
         "combined with rice or wheat"],
      video: highlightFourthVideo,
      videoDuration: 3,
    },
  ];
  
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];