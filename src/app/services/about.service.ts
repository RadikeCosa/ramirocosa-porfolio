import { Injectable } from '@angular/core';
import { AboutList } from '../components/about/iabout';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  aboutList: AboutList[] = [
    {
      title: 'programador',
      description: 'soy programador bastante bueno che',
      image: ' aca iria el link de la foto',
    },
    {
      title: 'kinesiologo',
      description: 'fui kinesiologo, aun lo soy un poco',
      image: ' aca iria el link de la foto',
    },
    {
      title: 'musico',
      description:
        'es mucho decir que soy musico pero el porfolio es mio y hago lo que quiero',
      image: ' aca iria el link de la foto',
    },
  ];

  constructor() {}

  public getAbout(): AboutList[] {
    return this.aboutList;
  }
}
