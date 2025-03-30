import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {NameCheckerResponse} from '../interfaces/name-checker-response';

@Injectable({
  providedIn: 'root'
})
export class NameCheckerService {
  getSomeData() {
    throw new Error('Method not implemented.');
  }

  private http = inject(HttpClient);
  url = 'https://id-game-checker.p.rapidapi.com/';
  apiKey = '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb';


  //0
  getValorantID(id?: string, tag?: string) {
    return this.http.get<NameCheckerResponse>( this.url + 'valorant/' + id + "/" + tag, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }
//1
  getMobileLegendsID(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'mobile-legends/' + id + '/' + server, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }
//2
  getJawakerID(userId?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'jawaker/' + userId, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }
//3
  getPUBGID(id?: string) {
    return this.http.get<NameCheckerResponse>('https://id-game-checker.p.rapidapi.com/pubgm-global/' + id, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }

  // getRoyalDreamID(id?: string) {
  //   return this.http.get<NameCheckerResponse>(this.url + 'royal-dream/' + id, {
  //     headers: {
  //       'x-rapidapi-key' : this.apiKey,
  //     }
  //   });
  // }

//4
  getTeenPattiGold(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'teen-patti-gold/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey, 
      }
    });
  }
//
  // getBrawlStars(tag?: string) {
  //   return this.http.get<NameCheckerResponse>(this.url + 'brawl-stars/' + tag, {
  //     headers: {
  //       'x-rapidapi-key': this.apiKey
  //     }
  //   });
  // }
//
  // getClashRoyale(tag?: string) {
  //   return this.http.get<NameCheckerResponse>(this.url + 'clash-royale/' + tag, {
  //     headers: {
  //       'x-rapidapi-key': this.apiKey
  //     }
  //   });
  // }
//
  // getClashOfClans(tag?: string) {
  //   return this.http.get<NameCheckerResponse>(this.url + 'coc/' + tag, {
  //     headers: {
  //       'x-rapidapi-key': this.apiKey
  //     }
  //   });
  // }
//5
  getHiggsDomino(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'higgs-domino/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//6
  getGenshinImpact(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'genshin/' + id + '/' + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//7
  getPointBlank(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'point-blank/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//8
  getArenaOfValor(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'arena-of-valor/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//9
  getCallOfDuty(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'cod-mobile/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }//10

  getAceRacer(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'ace-racer/' + id + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  // getLifeAfter(id?: string) {
  //   return this.http.get<NameCheckerResponse>(this.url + 'lifeafter/' + id, {
  //     headers: {
  //       'x-rapidapi-key': this.apiKey
  //     }
  //   });
  // }
//11
  getDragonRaja(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'dragon-raja/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//12
  getEggyParty(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'eggy-party/' + id + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  // getHayDay(tag?: string) {
  //   return this.http.get<NameCheckerResponse>(this.url + 'hayday/' + tag, {
  //     headers: {
  //       'x-rapidapi-key': this.apiKey
  //     }
  //   });
  // }
//13
  getBloodStrike(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'blood-strike/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//14
  getTomAndJerryChase(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'tom-and-jerry-chase/' + id + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//15
  getSpeedDrifters(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'speed-drifters/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//16
  getRevelation(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'revelation/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//17
  getOnePunchMan(id?: string, zone_id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'opm-the-strongest/' + id + zone_id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//18
  getMUOrigin3(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'mu-origin-3/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//19
  getMUDevilsAwaken(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'mu-devils-awaken/' + id + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//20
  getMetalSlug(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'metal-slug/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }
//21
  getHonorOfKings(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'honor-of-kings/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  constructor() { }
}
