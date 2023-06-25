export class Holiday {
    date: Date = new Date(Date.now());
    localName: string = "";
    name: string = "";
    countryCode: string = "";
    fixed: boolean = false;
    global: boolean = false;
    counties: null = null;
    launchYear: null = null;
    types: Array<string> = ["Public"]
}