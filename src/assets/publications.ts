export interface PublicationList {
  author: string
  year: number
  article_title: string
  periodical_name: string
  volume: number
  issue_number: number
  page_number: number
  edition_number: string
  doi: string
}

//  d
export const publications = [
  {
    authors: `Manickam K, Buchanan AH, Schwartz MLB, Hallquist MLG, Williams JL, Rahm AK, Rocha H, Savatt JM, Evans AE, Butry LM, Lazzeri AL, Lindbuchler DM, Flansburg CN, Leeming R,     Vogel VG, Lebo MS, Mason-Suares HM, Hoskinson DC, Abul-Husn NS, Dewey FE, Overton JD, Reid JG, Baras A, Willard HF, McCormick CZ, Krishnamurthy SB, Hartzel DN, Kost KA, Lavage DR, Sturm AC, Frisbie LR, Person TN, Metpally RP, Giovanni MA, Lowry LE, Leader JB, Ritchie MD, Carey DJ, Justice AE, Kirchner HL, Faucett WA, Williams MS, Ledbetter DH, Murray MF`,
    year: 2018,
    article_title:
      'Exome Sequencing-Based Screening for BRCA1/2 Expected Pathogenic Variants Among Adult Biobank Participants',
    periodical_name: 'JAMA network open',
    volume: 1,
    issue_number: 5,
    edition_number: 'e182140',
    doi: 'https://doi.org/10.1001/jamanetworkopen.2018.2140',
  },
  {
    authors: `Parikh, K., Huether, R., White, K., Hoskinson, D., Beaubier, N., Dong, H., Adjei, A. A., & Mansfield, A. S.`,
    year: 2020,
    article_title:
      'Tumor Mutational Burden From Tumor-Only Sequencing Compared With Germline Subtraction From Paired Tumor and Normal Specimens',
    periodical_name: 'JAMA network open',
    volume: 3,
    issue_number: 2,
    edition_number: 'e200202',
    doi: 'https://doi.org/10.1001/jamanetworkopen.2020.0202',
  },
]
