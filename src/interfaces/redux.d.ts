interface InitialStateType {
   rockets: Rocket[];
   currentFilter: Filter;
   isLoading: boolean;
   error: string;
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
