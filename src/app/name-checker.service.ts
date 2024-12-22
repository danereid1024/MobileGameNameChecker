import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface NameCheckerResponse {
  "error": boolean,
  "status": number,
  "msg": string,
  "data": {
    "id": string,
    "userId": string,
    "server": string,
    "username": string,
    "tag": string,
    "zone_id": string
  } 
}

@Injectable({
  providedIn: 'root'
})
export class NameCheckerService {

  private http = inject(HttpClient);
  url = 'https://id-game-checker.p.rapidapi.com/';
  apiKey = '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb'


  getValorantID(id?: string, tag?: string) {
    return this.http.get<NameCheckerResponse>( this.url + 'valorant/' + id + "/" + tag, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }

  getMobileLegendsID(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'mobile-legends/' + id + '/' + server, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }

  getJawakerID(userId?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'jawaker/' + userId, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }

  getPUBGID(id?: string) {
    return this.http.get<NameCheckerResponse>('https://id-game-checker.p.rapidapi.com/pubgm-global/' + id, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }

  getRoyalDreamID(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'royal-dream/' + id, {
      headers: {
        'x-rapidapi-key' : this.apiKey,
      }
    });
  }

  getTeenPattiGold(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'teen-patti-gold/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey, 
      }
    });
  }

  getBrawlStars(tag?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'brawl-stars/' + tag, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getClashRoyale(tag?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'clash-royale/' + tag, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getClashOfClans(tag?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'coc/' + tag, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getHiggsDomino(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'higgs-domino/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getGenshinImpact(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'genshin/' + id + '/' + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getPointBlank(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'point-blank/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getArenaOfValor(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'arena-of-valor/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getCallOfDuty(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'cod-mobile/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getAceRacer(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'ace-racer/' + id + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getLifeAfter(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'lifeafter/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getDragonRaja(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'dragon-raja/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getEggyParty(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'eggy-party/' + id + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getHayDay(tag?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'hayday/' + tag, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getBloodStrike(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'blood-strike/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getTomAndJerryChase(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'tom-and-jerry-chase/' + id + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getSpeedDrifters(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'speed-drifters/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getRevelation(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'revelation/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getOnePunchMan(id?: string, zone_id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'opm-the-strongest/' + id + zone_id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getMUOrigin3(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'mu-origin-3/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getMUDevilsAwaken(id?: string, server?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'mu-devils-awaken/' + id + server, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getMetalSlug(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'metal-slug/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  getHonorOfKings(id?: string) {
    return this.http.get<NameCheckerResponse>(this.url + 'honor-of-kings/' + id, {
      headers: {
        'x-rapidapi-key': this.apiKey
      }
    });
  }

  constructor() { }
}
