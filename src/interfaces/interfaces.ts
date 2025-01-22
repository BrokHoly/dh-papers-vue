export interface PlayerData {
  user: UserData
  character: CharacterData
  inventory: InventoryData
  infos: InfosData
}

export interface UserData {
  id: number
  username: string
}

export interface CharacterData {
  tag: number //comme ça username#tag ça renvoie vers un perso précis du joueur.
  profile: ProfileData
  baseStats: number[]
  skills: SkillsData
}

export interface InventoryData {
  money: number
}

export interface InfosData {
  damages: number
  earnXP: number
  spendXP: number
  destinyPoints: number
}

//CharacterDatas
export interface ProfileData {
  heroName: string
  playerName: string
  career: CareerData
  origin: OriginData
  description: DescriptionData
} // La picture sera récupérée via l'id + tag ou un truc du style genre osef.

export interface SkillsData {
  basics: string[]
  //And all the others, to regroup and list clearly. Somes can necessitate interface too maybe ?
  drive: string[]
  generalKnowledge: string[]
  prohibedKnowledge: string[]
  scholasticsKnowledge: string[]
  languages: string[]
}

//InventoryDatas
//if needed

// SkillsDatas
//needed interfaces

//ProfileDatas
export interface CareerData {
  rank: number
  branch: number //to know the name of the rank ? Like, for a Psyker, when the rank is >=3, the player have to chose between two ways so....
  class: string
  specialize: string
}

export interface OriginData {
  world: string //Style MondePerdu ? Paradisiaque ? Ruche ? Ou le truc style Impériale ? "Rebelle" ? "Forge"
}

export interface DescriptionData {
  content: string //Genre description par le joueur, iel décrit ce qu'iel veut.
  religion: string
  ordo: string
  hair: string
  eyes: string
  distinct: string
}
