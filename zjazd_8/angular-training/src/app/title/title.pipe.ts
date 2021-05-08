import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'wsbTitle'
})
export class TitlePipe implements PipeTransform {
    public transform(value: string): string{
        return value.toLowerCase()
                    .split(' ')
                    .map(word => {
                        return word.charAt[0].toUpperCase() + word.slice(1);
                    })
                    .join(' ');
    }
}
