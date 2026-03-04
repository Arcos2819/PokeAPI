export interface RickapiResponse {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface Location {
    name: string;
    url:  string;
}

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

