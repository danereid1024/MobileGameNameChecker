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
