export class MovieDetail {
    constructor(
        public id: number, 
        public image: string, 
        public release:Date,
        public title: string,
        public type: string
        ){}
}