const initState = {
    posts:[  {
        id: 1,
        title: "Why i killed my boyfriend",
        img:  "data:image/jpeg;base64,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",
        body:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      },
      {
        id: 2,
        title: "23 going through a mid life crisis",
        // img: "./setup/img/img-2.jpg",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHHJXkqI_2ooutsE2eDMIVb-jd5egGHKQEYiZ0rqRHPWjxQAH&usqp=CAU",
        body:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      },
      {
        id: 3,
        title: "My Taste",
        // img: "./setup/img/img-2.jpg",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL1TeLtEDrWiwd3cjR6Gdg3HUJtolMgX_CuZAD1PB-QESbq_Eq&usqp=CAU",
        body:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      },
      {
        id: 4,
        title: "Can I count on you?",
        // img: "./setup/img/img-2.jpg",
        img: "data:image/png;base64,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",
        body:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      }
    ]
}
const projectReducer = (state=initState, action)=>{
  switch (action.type){
    case 'CREATE_POST': 
    console.log('post created', action.post)
    return state;
    case 'CREATE_POST_ERROR':
      console.log('create post error', action.err);
      return state;
    case 'CREATE_ARTICLE':
      console.log('article created', action.article);
      return state;
    case 'CREATE_ARTICLE_ERROR':
      console.log('create article error', action.err);
      return state;
    default:
      return state;
  }
}
export default projectReducer;