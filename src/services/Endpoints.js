
export const ENDPOINTS_TNYT = {
    SCIENCE: (auth) => `svc/topstories/v2/science.json?api-key=${auth}`,
    TECH: (auth) => `svc/topstories/v2/technology.json?api-key=${auth}`,
    WORLD: (auth) => `svc/topstories/v2/world.json?api-key=${auth}`,
    DAILY: (auth) => `svc/topstories/v2/home.json?api-key=${auth}`,
    ARTS: (auth) => `svc/topstories/v2/arts.json?api-key=${auth}`,
    SPORTS: (auth) => `svc/topstories/v2/sports.json?api-key=${auth}`,
    POLITICS: (auth) => `svc/topstories/v2/politics.json?api-key=${auth}`,

};

export const ENPOINTS_COVID = {
    GLOBAL: "summary",
    COUNTRIES_BY_DAY: (country, dateFrom, dateTo) =>
        `total/country/${country}/status/confirmed?from=${dateFrom}T00:00:00Z&to=${dateTo}T00:00:00Z`
}

//Ex date: yyyy-MM-dd