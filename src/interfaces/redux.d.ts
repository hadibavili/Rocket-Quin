interface InitialStateType {
   rockets: any[];
   isLoading: boolean;
   error: string;
   count: number;
}
interface Filter {
   start: string;
   end: string;
   limit: number;
}
interface ActionFetchRocketType {
   results: Rocket[];
   count: number;
}
