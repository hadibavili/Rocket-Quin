interface Rocket {
    results: any;
    id: string;
    url: string;
    slug: string;
    name: string;
    status: Status;
    last_updated: string;
    net: string;
    window_end: string;
    window_start: string;
    probability?: null;
    holdreason: string;
    failreason: string;
    hashtag?: null;
    launch_service_provider: AgenciesEntityOrLaunchServiceProvider;
    rocket: Rocket1;
    mission: Mission;
    pad: Pad;
    webcast_live: boolean;
    image: string;
    infographic?: null;
    program: ProgramEntity[];
 }
 interface Status {
    id: number;
    name: string;
    abbrev: string;
    description: string;
 }
 interface AgenciesEntityOrLaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string;
 }
 interface Rocket1 {
    id: number;
    configuration: Configuration;
 }
 interface Configuration {
    id: number;
    url: string;
    name: string;
    family: string;
    full_name: string;
    variant: string;
 }
 interface Mission {
    id: number;
    name: string;
    description: string;
    launch_designator?: null;
    type: string;
    orbit: Orbit;
 }
 interface Orbit {
    id: number;
    name: string;
    abbrev: string;
 }
 interface Pad {
    id: number;
    url: string;
    agency_id?: null;
    name: string;
    info_url?: null;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: Location;
    map_image: string;
    total_launch_count: number;
 }
 interface Location {
    id: number;
    url: string;
    name: string;
    country_code: string;
    map_image: string;
    total_launch_count: number;
    total_landing_count: number;
 }
 interface ProgramEntity {
    id: number;
    url: string;
    name: string;
    description: string;
    agencies?: AgenciesEntityOrLaunchServiceProvider[] | null;
    image_url: string;
    start_date: string;
    end_date?: null;
    info_url?: null;
    wiki_url: string;
    mission_patches?: null[] | null;
 }
 