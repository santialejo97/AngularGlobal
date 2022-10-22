export interface CastResponse {
  ok: boolean;
  cast: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: KnownForDepartment;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export enum KnownForDepartment {
  Acting = 'Acting',
  Crew = 'Crew',
}
