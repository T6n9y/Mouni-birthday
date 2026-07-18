// EDIT THIS FILE to add your own images, videos, and personal notes.
// mediaType can be "image", "video", or "none" (use "none" if you don't have media for that age yet).
// image/video paths are relative to the assets folder.

const memories = [
  {
    age: 1,
    title: "THE BEGINING",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-01.jpg" // or "assets/videos/age-01.mp4"
  },
  {
    age: 2,
    title: "Chapter 2",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-02.jpg" // or "assets/videos/age-02.mp4"
  },
  {
    age: 3,
    title: "Chapter 3",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-03.jpg" // or "assets/videos/age-03.mp4"
  },
  {
    age: 4,
    title: "Chapter 4",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-04.jpg" // or "assets/videos/age-04.mp4"
  },
  {
    age: 5,
    title: "Chapter 5",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-05.jpg" // or "assets/videos/age-05.mp4"
  },
  {
    age: 6,
    title: "Chapter 6",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-06.jpg" // or "assets/videos/age-06.mp4"
  },
  {
    age: 7,
    title: "Chapter 7",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-07.jpg" // or "assets/videos/age-07.mp4"
  },
  {
    age: 8,
    title: "Chapter 8",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-08.jpg" // or "assets/videos/age-08.mp4"
  },
  {
    age: 9,
    title: "Chapter 9",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-09.jpg" // or "assets/videos/age-09.mp4"
  },
  {
    age: 10,
    title: "Chapter 10",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-10.jpg" // or "assets/videos/age-10.mp4"
  },
  {
    age: 11,
    title: "Chapter 11",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-11.jpg" // or "assets/videos/age-11.mp4"
  },
  {
    age: 12,
    title: "Chapter 12",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-12.jpg" // or "assets/videos/age-12.mp4"
  },
  {
    age: 13,
    title: "Chapter 13",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-13.jpg" // or "assets/videos/age-13.mp4"
  },
  {
    age: 14,
    title: "Chapter 14",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-14.jpg" // or "assets/videos/age-14.mp4"
  },
  {
    age: 15,
    title: "Chapter 15",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-15.jpg" // or "assets/videos/age-15.mp4"
  },
  {
    age: 16,
    title: "Chapter 16",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-16.jpg" // or "assets/videos/age-16.mp4"
  },
  {
    age: 17,
    title: "Chapter 17",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-17.jpg" // or "assets/videos/age-17.mp4"
  },
  {
    age: 18,
    title: "Chapter 18",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-18.jpg" // or "assets/videos/age-18.mp4"
  },
  {
    age: 19,
    title: "Chapter 19",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-19.jpg" // or "assets/videos/age-19.mp4"
  },
  {
    age: 20,
    title: "Chapter 20",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-20.jpg" // or "assets/videos/age-20.mp4"
  },
  {
    age: 21,
    title: "Chapter 21",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-21.jpg" // or "assets/videos/age-21.mp4"
  },
  {
    age: 22,
    title: "Chapter 22",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-22.jpg" // or "assets/videos/age-22.mp4"
  },
  {
    age: 23,
    title: "Chapter 23",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-23.jpg" // or "assets/videos/age-23.mp4"
  },
  {
    age: 24,
    title: "Chapter 24",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-24.jpg" // or "assets/videos/age-24.mp4"
  },
  {
    age: 25,
    title: "Chapter 25",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-25.jpg" // or "assets/videos/age-25.mp4"
  },
  {
    age: 26,
    title: "Chapter 26",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-26.jpg" // or "assets/videos/age-26.mp4"
  },
  {
    age: 27,
    title: "Chapter 27",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-27.jpg" // or "assets/videos/age-27.mp4"
  },
  {
    age: 28,
    title: "Chapter 28",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-28.jpg" // or "assets/videos/age-28.mp4"
  },
  {
    age: 29,
    title: "Chapter 29",
    preview: "A tiny piece of your story",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-29.jpg" // or "assets/videos/age-29.mp4"
  },
  {
    age: 30,
    title: "Chapter 30",
    preview: "The birthday-girl era begins",
    text: "Replace this with a personal note, a funny detail, or something you love about her.",
    secret: "Replace this with an inside joke, a hidden compliment, or a future promise.",
    mediaType: "none", // change to "image" or "video" once you add a file
    mediaSrc: "assets/photos/age-30.jpg" // or "assets/videos/age-30.mp4"
  },
];
