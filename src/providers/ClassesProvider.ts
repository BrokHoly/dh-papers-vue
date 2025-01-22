//For now, this is a realy realy basic provider that only works for proof of concept.
//In futur, it will extract the datas from the csv files.
import type { ClassData } from '@/interfaces/bookInterface'

function getRankName(className: string, rank: number, branch?: number): string {
  const classData: ClassData = getClassData(className)
  rank = 0 //POUR LE MOMENT pour les tests, le rank est toujours à zéro mais oklm.
  return branch ? classData.ranks[rank].names[branch] : classData.ranks[rank].names[0]
}

function getClassData(className: string): ClassData {
  return { name: className, ranks: [{ names: ['Neophyte'] }] } //from the classes_data.csv
}

export { getRankName, getClassData }
