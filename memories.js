// EDIT THIS FILE to add your own images, videos, and personal notes.
// mediaType can be "image", "video", or "none" (use "none" if you don't have media for that age yet).
// image/video paths are relative to the assets folder.

const memories = [
  {
    age: 1,
    title: "THE BEGINING",
    preview: "A tiny piece of your story",
    text: "Omg look at you, i think one thing has remained constant and thats your smile, oh the way i love those bunny teeth! Chala Premisthunnu!",
    secret: "Well there's more pictures i saved the funny ones and the most precious ones for the best",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-01.jpg" // or "assets/videos/age-01.mp4"
  },
  {
    age: 2,
    title: "Chapter 2",
    preview: "Do you even remember this one?",
    text: "When you are eyeing for the last piece of mango or that leg piece in chicken biryani!",
    secret: "Not all the time you reveal this you will get a secret but here's a secret for you. I am two times more in love with you",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-02.jpg" // or "assets/videos/age-02.mp4"
  },
  {
    age: 3,
    title: "Chapter 3",
    preview: "No more cups of milk only TEA",
    text: "Okay this is one of my other favourite pictures, its so amazing the playfulnes, Your mom fed up of you playing around! Just drink re mouni!",
    secret: "It paid off, look at you now standing strong!",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-03.jpg" // or "assets/videos/age-03.mp4"
  },
  
  {
    age: 5,
    title: "Chapter 5",
    preview: "Looks like a celebration",
    text: "Thanks to Bujjama, this is her favorite picture, 'Naa Cutie' - Bujjama ",
    secret: "Yeah i dont think i will stop calling her Bujjama",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-05.jpg" // or "assets/videos/age-05.mp4"
  },
  {
    age: 7,
    title: "Chapter 7",
    preview: "RUNNNN",
    text: "POV - You are trying to take her candid picture annd she is acting normal",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-07.jpg" // or "assets/videos/age-07.mp4"
  },
  {
    age: 8,
    title: "Chapter 8",
    preview: "Well well well, this pic is so iconic that you recreated it 15 years later",
    text: "Amazing how you two are sooo similar, i mean the same pose, the same smile and the same hair style! I think this is the best picture of you and i will never forget this",
    secret: "Since its on your fridge it deserved to be here!",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-08.jpg" // or "assets/videos/age-08.mp4"
  },
  {
    age: 9,
    title: "Chapter 9",
    preview: "Get Ready to be blessed",
    text: "Behold Mounica Devi",
    secret: "I am blessed to have you because i am getting my biryani!",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-09.jpg" // or "assets/videos/age-09.mp4"
  },
  {
    age: 10,
    title: "Chapter 10",
    preview: "Chiranjeevi did it better",
    text: "Okay you take about my weird shirts lets talk about that now.",
    secret: "# Moucheal Jackson",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-10.jpg" // or "assets/videos/age-10.mp4"
  },
  {
    age: 20,
    title: "Chapter 20",
    preview: "A tiny piece of your story",
    text: "So whats with you and staring right into the camera????Okay the last one was abit to creepy maybe thats me looking at you without my spects",
    secret: "TBH i like that pose with the bottle you could have been a model!",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-20.jpg" // or "assets/videos/age-20.mp4"
  },
  {
    age: 23,
    title: "Chapter 23",
    preview: "This looks straight of a movie",
    text: "Lets see how many memories this brings back, awesome if you can remember what both of you were talking about",
    secret: "Im sure it was about Cashew!",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-23.jpg" // or "assets/videos/age-23.mp4"
  },
  {
    age: 24,
    title: "Chapter 24",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-24.jpg" // or "assets/videos/age-24.mp4"
  },
  {
    age: 25,
    title: "Chapter 25",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-25.jpg" // or "assets/videos/age-25.mp4"
  },
  {
    age: 26,
    title: "Chapter 26",
    preview: "Okay this feels like home ",
    text: "MMM i wonder what joke you cracked here but Aswini seems to have a a good laugh",
    secret: "Theres no secret here but i think they love you way more than you think!",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-26.jpg" // or "assets/videos/age-26.mp4"
  },
  {
    age: 27,
    title: "Chapter 27",
    preview: "NATTU NATTU NATTU",
    text: "adey when i ask you to dance you just say you dont know, now explain this! Credit goes to Shruti!!!",
    secret: "Okay those are really good dance moves because i am not a great dancer",
    mediaType: "video", // change to "image" or "video" once you add a file
    mediaSrc: "assets/videos/age-27.mp4" // or "assets/videos/age-27.mp4"
  },
  {
    age: 28,
    title: "Chapter 28",
    preview: "Well this is very it all changed!",
    text: "It was a very special day for us and i will never forget this",
    secret: "I know i made you pay for the Musuem tour and well i was like this girl got a better job than me so why not?",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-28.jpg" // or "assets/videos/age-28.mp4"
  },
  {
    age: 29,
    title: "Chapter 29",
    preview: "Looks like red is your Favourtie color!",
    text: "I think i know now, everytime you wear red i have always made you walk countless kilometres. The only redflag i will never stop at!",
    secret: "Red suits you! and also that was foreshadowing for you next move, since you are going to be a Canadian!",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-29.jpg" // or "assets/videos/age-29.mp4"
  },
  {
    age: 30,
    title: "Chapter 30",
    preview: "The birthday-girl era begins",
    text: "Quite a journey huh, you have reached the end of the time capsule and then theres more to come, so what you have seen is the best moments so far and to more years to come",
    secret: "We have had alot of memories we made together and these were some i wish i was part of but thats the beauty of it, we want to be part of someone's life because we see how happy and genuine they are at that time and with this in the future i know that i will say that i am now part of what i wanted to be!",
    mediaType: "image", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-30.jpg" // or "assets/videos/age-30.mp4"
  },
];
