import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import About from "./components/About";
import Moviedetail from "./components/Moviedetail";
import Category from "./components/Category";

export const MyContext = React.createContext(); // Store

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {
          popularity: 290.086,
          vote_count: 597,
          id: 1,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
          original_language: "en",
          original_title: "The Old Man & the Gun",
          title: "The Old Man & the Gun",
          vote_average: 3.15,
          overview:
            "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public.",
          release_date: "2018-09-28",
          category: "Drama",
        },
        {
          popularity: 365.799,
          vote_count: 232,
          id: 2,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
          original_language: "en",
          original_title: "Joker",
          title: "Joker",
          vote_average: 4.25,
          overview:
            "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          release_date: "2019-10-04",
          category: "Action",
        },
        {
          popularity: 250.351,
          vote_count: 4117,
          id: 3,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
          original_language: "en",
          original_title: "Spider-Man: Far from Home",
          title: "Spider-Man: Far from Home",
          vote_average: 3.8,
          overview:
            "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest.",
          release_date: "2019-07-02",
          category: "Action",
        },
        {
          popularity: 197.005,
          vote_count: 316,
          id: 4,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
          original_language: "en",
          original_title: "Rambo: Last Blood",
          title: "Rambo: Last Blood",
          vote_average: 3.1,
          overview:
            "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers.",
          release_date: "2019-09-20",
          category: "Action",
        },
        {
          popularity: 171.869,
          vote_count: 1217,
          id: 5,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
          original_language: "en",
          original_title: "It Chapter Two",
          title: "It Chapter Two",
          vote_average: 3.5,
          overview:
            "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club.",
          release_date: "2019-09-06",
          category: "Horror",
        },
        {
          popularity: 109.352,
          vote_count: 8156,
          id: 6,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
          original_language: "en",
          original_title: "Cars",
          title: "Cars",
          vote_average: 3.3,
          overview:
            "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line.",
          release_date: "2006-06-09",
          category: "Adventure",
        },
        {
          popularity: 148.568,
          vote_count: 2405,
          id: 7,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
          original_language: "en",
          original_title: "Toy Story 4",
          title: "Toy Story 4",
          vote_average: 3.8,
          overview:
            'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie.',
          release_date: "2019-06-21",
          category: "Drama",
        },
        {
          popularity: 139.48,
          vote_count: 1351,
          id: 8,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
          original_language: "en",
          original_title: "Fast & Furious Presents: Hobbs & Shaw",
          title: "Fast & Furious",
          vote_average: 3.2,
          overview:
            "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
          release_date: "2019-08-02",
          category: "Action",
        },
        {
          popularity: 131.59,
          vote_count: 2730,
          id: 9,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
          original_language: "en",
          original_title: "John Wick: Chapter 3 - Parabellum",
          title: "John Wick: Chapter 3 - Parabellum",
          vote_average: 3.5,
          overview:
            "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail.",
          release_date: "2019-05-17",
          category: "Action",
        },
        {
          popularity: 125.701,
          vote_count: 3553,
          id: 10,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
          original_language: "en",
          original_title: "Aladdin",
          title: "Aladdin",
          vote_average: 3.5,
          overview:
            "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
          release_date: "2019-05-24",
          category: "Adventure",
        },
        {
          popularity: 108.971,
          vote_count: 223,
          id: 11,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/5GynP6w2OQWSbKnCLHrBIriF4Cw.jpg",
          original_language: "en",
          original_title: "Hustlers",
          title: "Hustlers",
          vote_average: 3.1,
          overview:
            "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
          release_date: "2019-09-13",
          category: "Drama",
        },
        {
          popularity: 106.276,
          vote_count: 2006,
          id: 12,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/ojVQv3qO5dL9kA7pk9KxpMi0ANO.jpg",
          original_language: "en",
          original_title: "Dark Phoenix",
          title: "Dark Phoenix",
          vote_average: 3,
          overview:
            "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control.",
          release_date: "2019-06-07",
          category: "Action",
        },
        {
          popularity: 84.525,
          vote_count: 109,
          id: 13,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/eZKJ6Ez3DhVamz1CG1zwUpdwaAS.jpg",
          original_language: "en",
          original_title: "In the Shadow of the Moon",
          title: "In the Shadow of the Moon",
          vote_average: 3,
          overview:
            'In 1988, Philadelphia police officer Thomas "Locke" Lockhart, hungry to become a detective, begins tracking a serial killer whose crimes defy scientific explanation.',
          release_date: "2019-09-21",
          category: "Crime",
        },
        {
          popularity: 98.765,
          vote_count: 570,
          id: 14,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/p3TCqUDoVsrIm8fHK9KOTfWnDjZ.jpg",
          original_language: "en",
          original_title: "Ad Astra",
          title: "Ad Astra",
          vote_average: 3.1,
          overview:
            "An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet.",
          release_date: "2019-09-20",
          category: "Adventure",
        },
        {
          popularity: 102.293,
          vote_count: 6,
          id: 15,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/6z2RYYKl2AAfVkOse7Uxh8TXHJa.jpg",
          original_language: "ru",
          original_title: "Тайна Печати дракона",
          title: "The Mystery of the Dragon’s Seal",
          vote_average: 2.1,
          overview:
            "The Russian Czar Peter the Great commissions Jonathan Green, an English traveller, to map the Far East territories of the Russian Empire.",
          release_date: "2019-08-16",
          category: "Drama",
        },
        {
          popularity: 54.425,
          vote_count: 18883,
          id: 16,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/kHex2XdOmGtazk1VfJjp4bl7BIc.jpg",
          original_language: "en",
          original_title: "Guardians of the Galaxy",
          title: "Guardians of the Galaxy",
          vote_average: 3.8,
          overview:
            "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
          release_date: "2014-08-01",
          category: "Thriller",
        },
        {
          popularity: 88.556,
          vote_count: 10916,
          id: 17,
          adult: false,
          backdrop_path:
            "https://cdn.wallpapersafari.com/76/44/5RofLG.jpg",
          original_language: "en",
          original_title: "John Wick",
          title: "John Wick",
          vote_average: 3.6,
          overview:
            "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
          release_date: "2014-10-24",
          category: "Action",
        },
        {
          popularity: 78.935,
          vote_count: 2012,
          id: 18,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
          original_language: "en",
          original_title: "Once Upon a time... in Hollywood",
          title: "Once Upon a time... in Hollywood",
          vote_average: 3.8,
          overview:
            "A faded television actor and his stunt double strive to achieve fame and success in the film industry.",
          release_date: "2019-07-26",
          category: "Drama",
        },
        {
          popularity: 89.957,
          vote_count: 2678,
          id: 19,
          adult: false,
          backdrop_path:
            "https://image.tmdb.org/t/p/w500/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
          original_language: "en",
          original_title: "The Lion King",
          title: "The Lion King",
          vote_average: 3.5,
          overview:
            "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival.",
          release_date: "2019-07-19",
          category: "Adventure",
        },
        {
          popularity: 82.057,
          vote_count: 291,
          id: 21,
          adult: false,
          backdrop_path:
            "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201501/pk_660_122914045903_010515013429.jpg?size=948:533",
          original_language: "hi",
          original_title: "PK",
          title: "PK",
          vote_average: 4.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2012-10-11",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 29,
          id: 21,
          adult: false,
          backdrop_path:
            "https://www.geo.tv/assets/uploads/updates/2021-04-12/344894_9540745_updates.jpg",
          original_language: "hi",
          original_title: "3 idiots",
          title: "3 idiots",
          vote_average: 3.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2016-10-11",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 209,
          id: 22,
          adult: false,
          backdrop_path:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/gully-boy-movie-review_0.jpeg?iUiuYE3jnoH4bYRybXapw4lKlgo5_BGo",
          original_language: "hi",
          original_title: "Gully Boy",
          title: "Gully Boy",
          vote_average: 4.8,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2011-10-11",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 259,
          id: 23,
          adult: false,
          backdrop_path:
            "https://filmyfocus.com/wp-content/uploads/2021/06/Exclusive-Noted-digital-channel-acquires-Sivakarthikeyans-Doctors-streaming-rights-351x185.jpg",
          original_language: "te",
          original_title: "Varun Doctor",
          title: "Varun Doctor",
          vote_average: 2.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2010-10-11",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 29,
          id: 24,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0sEYM2jX3LWV22y8EAjK94hS3Pe_A1sLww&usqp=CAU",
          original_language: "te",
          original_title: "Lucky the Racer",
          title: "Lucky the Racer",
          vote_average: 4.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2019-10-11",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 29,
          id: 25,
          adult: false,
          backdrop_path:
            "https://yt3.ggpht.com/ytc/AKedOLSC0fYRHB9G9PeMjtV_YnIeqTHjNv40PtF_ycmSNw=s900-c-k-c0x00ffffff-no-rj",
          original_language: "te",
          original_title: "Spyder",
          title: "Spyder",
          vote_average: 2.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2019-10-01",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 129,
          id: 26,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjP2MARV2Y0cNbCx4ge1G1hrl6oTQhJ4Fb5A&usqp=CAU",
          original_language: "ta",
          original_title: "Lift",
          title: "Lift",
          vote_average: 2.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2019-10-31",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 29,
          id: 27,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P7tHHIT7d7XHzFLb8osv9Kze8Np6s87nYQ&usqp=CAU",
          original_language: "ta",
          original_title: "Kaadan",
          title: "Kaadan",
          vote_average: 1.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2019-10-21",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 28,
          id: 28,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7Y_hSM4LyDlhWAde2vr03otHy_HqODM7UA&usqp=CAU",
          original_language: "ta",
          original_title: "Master",
          title: "Master",
          vote_average: 3.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 278,
          id: 29,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPpHFXtVadlCGvpb6_vo4Ke0E-gDJsx00Yg&usqp=CAU",
          original_language: "ta",
          original_title: "Action",
          title: "Action",
          vote_average: 3.1,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2010-10-11",
          category: "Action",
        },
        {
          popularity: 82.057,
          vote_count: 28,
          id: 30,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlqMAVJDs8fjUPHbECQRWpIcIrrB49Ro51g&usqp=CAU",
          original_language: "ta",
          original_title: "96",
          title: "96",
          vote_average: 1.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Romance",
        },
        {
          popularity: 82.057,
          vote_count: 28,
          id: 31,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZ9dj3PN6x_b9Qyk1JHVXzQGPfKhlvseilw&usqp=CAU",
          original_language: "ta",
          original_title: "Badla",
          title: "Badla",
          vote_average: 4.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 281,
          id: 32,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClwT5FY4qI8uru2WaGSo6yjlNL7sRrGGdHw&usqp=CAU",
          original_language: "ta",
          original_title: "Chennai Express",
          title: "Chennai Express",
          vote_average: 4.2,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Action",
        },
        {
          popularity: 82.057,
          vote_count: 428,
          id: 33,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsyCbRAhV3Mh5z7tTxIVeExzVUvReqlXPKA&usqp=CAU",
          original_language: "ta",
          original_title: "Raazi",
          title: "Raazi",
          vote_average: 3.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2011-10-11",
          category: "Crime",
        },
        {
          popularity: 82.057,
          vote_count: 28,
          id: 34,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDk4ayyA9RSRaNHaGDvl7XhBcSvXITcBu8Qw&usqp=CAU",
          original_language: "ta",
          original_title: "Highway",
          title: "Highway",
          vote_average: 3.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Romance",
        },
        {
          popularity: 82.057,
          vote_count: 258,
          id: 35,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BDnY28tzzGWxTTZiesg9DptbNrn3cJpDnw&usqp=CAU",
          original_language: "ta",
          original_title: "The Witch",
          title: "The Witch",
          vote_average: 3.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Horror",
        },
        {
          popularity: 82.057,
          vote_count: 128,
          id: 36,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oku-CLjrBjVihWTayIkxw-VWEyvGB32YKQ&usqp=CAU",
          original_language: "ta",
          original_title: "Wrong Turn",
          title: "Wrong Turn",
          vote_average: 3.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Horror",
        },
        {
          popularity: 82.057,
          vote_count: 116,
          id: 37,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYtjFuoa5mvYHIEqAszxBzCIgxnL-7AcAVw&usqp=CAU",
          original_language: "ta",
          original_title: "Venom",
          title: "Venom",
          vote_average: 2.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Action",
        },
        {
          popularity: 82.057,
          vote_count: 218,
          id: 38,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CThBh8RfRpfuE5Bxyz45lIAeflWZtBk4Eg&usqp=CAU",
          original_language: "ta",
          original_title: "Logan",
          title: "Logan",
          vote_average: 3.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Action",
        },
        {
          popularity: 82.057,
          vote_count: 128,
          id: 39,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwW7Hd-8eletXL9EfGOmtuiBml1XUm2_JKg&usqp=CAU",
          original_language: "ta",
          original_title: "Predator",
          title: "Predator",
          vote_average: 4.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Thriller",
        },
        {
          popularity: 82.057,
          vote_count: 258,
          id: 40,
          adult: false,
          backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNap80cEgb9wiwZc4Y6L261k20odxNv2foEA&usqp=CAU",
          original_language: "ta",
          original_title: "SpiderMan",
          title: "SpiderMan",
          vote_average: 2.9,
          overview:
            "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
          release_date: "2018-10-11",
          category: "Thriller",
        },
        
      ]
    };
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          store: this.state,
        }}
      >
        <Router>
          <Navbar></Navbar>
          {/* <div className="container"> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route
              exact
              path="/moviedetail/:id?"
              component={Moviedetail}
            ></Route>
            <Route
              exact
              path="/category/:category?"
              component={Category}
            ></Route>
          </Switch>
          {/* </div> */}
          <Footer></Footer>
        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;
