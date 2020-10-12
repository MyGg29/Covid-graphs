interface IAction {
  nomAction: string;
  dateProgramme: Date;
  responsable: string;
  lieuRealisation: string;
  dateRealisation: Date;
  commentaire: string;
}

interface IParametresActions {
  recurenceJour: number,
  recurenceMois: string,
  recurenceApartirDe: Date,
  notificationMailNbJourAvant: number,
  notificationMethode: string,
  destinataire: string;
}

interface IActionPreventive {
  nomAction: string,
  parametres: IParametresActions,
  actions: IAction[],
}
export { IAction, IParametresActions, IActionPreventive};
