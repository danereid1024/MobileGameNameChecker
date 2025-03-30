import { Injectable } from '@angular/core';
import { GamesInfo } from '../interfaces/games-info';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  protected gamesList: GamesInfo[] = [
    {
      
        "id": 0,
        "name": "Valorant",
        "photo": "/assets/Valorant_cover.jpg",
        "platform": 'PC, Xbox, Playstation',
        "genre": 'FPS',
        "publisher": 'Riot Games',
        "developer": 'Riot Games',
        "rating": '80%'
      },
      {
       "id": 1,
       "name": "Mobile Legends",
       "photo": "/assets/Mobile_Legends_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'MOBA',
       "publisher": 'Moonton',
       "developer": 'Moonton',
       "rating": '80%'
     },
     {
       "id": 2,
       "name": "Jawaker",
       "photo": "/assets/Jawaker_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'Card Game',
       "publisher": 'Jawaker',
       "developer": 'Jawaker',
       "rating": '80%'
     },
     {
       "id": 3,
       "name": "PUBG Mobile",
       "photo": "/assets/PUBG_Mobile_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'Battle Royale',
       "publisher": 'Tencent Games',
       "developer": 'Tencent Games',
       "rating": '80%'
     },
     {
       "id": 4,
       "name": "Teen Patti Gold",
       "photo": "/assets/Teen_Patti_Gold_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'Card Game',
       "publisher": 'Moonfrog',
       "developer": 'Moonfrog',
       "rating": '80%'
     },
     {
       "id": 5,
       "name": "Higgs Domino",
       "photo": "/assets/Higgs_Domino_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'Domino',
       "publisher": 'Higgs Games',
       "developer": 'Higgs Games',
       "rating": '80%'
     },
     {
       "id": 6,
       "name": "Genshin Impact",
       "photo": "/assets/Genshin_Impact_cover.jpg",
       "platform": 'iOS, Android, PC, Playstation',
       "genre": 'RPG',
       "publisher": 'miHoYo',
       "developer": 'miHoYo',
       "rating": '80%'
     },
     {
       "id": 7,
       "name": "Point Blank",
       "photo": "/assets/Point_Blank_cover.jpg",
       "platform": 'PC',
       "genre": 'FPS',
       "publisher": 'Zepetto',
       "developer": 'Zepetto',
       "rating": '80%'
     },
     {
       "id": 8,
       "name": "Arena of Valor",
       "photo": "/assets/Arena_of_Valor_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'MOBA',
       "publisher": 'Tencent Games',
       "developer": 'Tencent Games',
       "rating": '80%'
     },
     {
       "id": 9,
       "name": "Call of Duty Mobile",
       "photo": "/assets/Call_of_Duty_Mobile_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'FPS',
       "publisher": 'Activision',
       "developer": 'Activision',
       "rating": '80%'
     },
     {
       "id": 10,
       "name": "Ace Racer",
       "photo": "/assets/Ace_Racer_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'Racing',
       "publisher": 'N/A',
       "developer": 'N/A',
       "rating": '80%'
     },
     {
       "id": 11,
       "name": "Dragon Raja",
       "photo": "/assets/Dragon_Raja_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'RPG',
       "publisher": 'Archosaur Games',
       "developer": 'Archosaur Games',
       "rating": '80%'
     },
     {
       "id": 12,
       "name": "Eggy Party",
       "photo": "/assets/Eggy_Party_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'Casual',
       "publisher": 'N/A',
       "developer": 'N/A',
       "rating": '80%'
     },
     {
       "id": 13,
       "name": "Blood Strike",
       "photo": "/assets/Blood Strike_cover.jpg",
       "platform": 'iOS, Android, PC',
       "genre": 'FPS',
       "publisher": 'N/A',
       "developer": 'N/A',
       "rating": '80%'
     },
     {
       "id": 14,
       "name": "Tom and Jerry: Chase",
       "photo": "/assets/Tom_and_Jerry_Chase_cover.jpg",
       "platform": 'iOS, Android',
       "genre": 'Casual',
       "publisher": 'NetEase Games',
       "developer": 'NetEase Games',
       "rating": '80%'
     },
   {  "id": 15,
     "name": "Speed Drifters",
     "photo": "/assets/Speed_Drifters_cover.jpg",
     "platform": 'iOS, Android',
     "genre": 'Racing',
     "publisher": 'Garena',
     "developer": 'Garena',
     "rating": '80%'
    },
    {
     "id": 16,
     "name": "Revelation",
     "photo": "/assets/Revelation_cover.jpg",
     "platform": 'iOS, Android',
     "genre": 'RPG',
     "publisher": 'N/A',
     "developer": 'N/A',
     "rating": '80%'
    },
    {
     "id": 17,
     "name": "One Punch Man: The Strongest",
     "photo": "/assets/One_Punch_Man_The_Strongest_cover.jpg",
     "platform": 'iOS, Android',
     "genre": 'RPG',
     "publisher": 'Oasis Games',
     "developer": 'Oasis Games',
     "rating": '80%'
    },
    {
     "id": 18,
     "name": "MU Origin 3",
     "photo": "/assets/MU_Origin_3_cover.jpg",
     "platform": 'iOS, Android',
     "genre": 'RPG',
     "publisher": 'Webzen',
     "developer": 'Webzen',
     "rating": '80%'
    },
    {
     "id": 19,
     "name": "MU Devils Origin",
     "photo": "/assets/MU_Devils_Awaken_cover.jpg",
     "platform": 'iOS, Android',
     "genre": 'RPG',
     "publisher": 'Webzen',
     "developer": 'Webzen',
     "rating": '80%'
    },
    {
     "id": 20,
     "name": "Metal Slug Awakening",
     "photo": "/assets/Metal_Slug_Awakening_cover.jpg",
     "platform": 'iOS, Android',
     "genre": 'RPG',
     "publisher": 'Mission Start!',
     "developer": 'Mission Start!',
     "rating": '80%'
    },
    {
     "id": 21,
     "name": "Honor of Kings",
     "photo": "/assets/Honor_of_Kings_cover.jpg",
     "platform": 'iOS, Android',
     "genre": 'MOBA',
     "publisher": 'Tencent Games',
     "developer": 'TiMi Studio Group',
     "rating": '80%'
    }
  ]

  // Get all games
  getAllGames() : GamesInfo[] {
    return this.gamesList;
  }

  // Get a game by its id
  getGameById(id: number) : GamesInfo | undefined {
    return this.gamesList.find(game => game.id === id);
  }
  constructor() { }
}
