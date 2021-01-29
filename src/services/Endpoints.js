
export const ENDPOINTS_TNYT = {
    SCIENCE: (auth) => `svc/topstories/v2/science.json?api-key=${auth}`,
    TECH: (auth) => `svc/topstories/v2/technology.json?api-key=${auth}`

};

export const ENPOINTS_COVID = {
    GLOBAL: "summary",
    COUNTRIES_BY_DAY: (country, dateFrom, dateTo) =>
        `total/country/${country}/status/confirmed?from=${dateFrom}T00:00:00Z&to=${dateTo}T00:00:00Z`
}

//Ex date: yyyy-MM-dd