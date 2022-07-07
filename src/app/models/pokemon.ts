export class Pokemon {
    abilities!: [
        {
          ability: {
            name: string,
            url: string
          },
        },
      ];
      base_experience: number = 0;
      name: string = "";
      sprites!: {
        other: {
          home: {
            front_default: string,
          },
        },
      }

}
