import { Pipe, PipeTransform } from '@angular/core';

interface Vowel {
  [x: string]: string;
}

@Pipe({
  name: 'vocalsChange'
})
export class VocalsChangePipe implements PipeTransform {

  transform(value: string): string {

    const vocales: Vowel = {
      a: '0',
      e: '1',
      i: '2',
      o: '3',
      u: '4'
    }

    for (let key of Object.keys(vocales)) {
      value = value.replaceAll(key, vocales[key]);
    }


    return value;
  }

}
