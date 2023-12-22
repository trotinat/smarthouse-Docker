import {Categorie} from "./Categorie";

export class Appareil {
  id?: number
  label?: string;
  description?: string;
  state?: boolean
  photo?: string;
  categorie?: Categorie;
}

