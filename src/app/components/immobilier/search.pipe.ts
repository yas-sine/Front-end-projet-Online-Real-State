import { Pipe } from '@angular/core';


@Pipe({
  name: 'find'
})

export class  SearchPipe{
  transform(pipeData, [pipeModifier]){
    return pipeData.filter((eachItem)=>{
      return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}
