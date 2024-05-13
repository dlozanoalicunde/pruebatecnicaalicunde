export const ROUTES_PATHS = {
	OPENDATA: {
		DEFAULT: ``,
		MARKET_PARTIES: {
			DEFAULT: `MARKET_PARTIES`,
			RESULTS: `results`,
		},
	},
	SERVER: {
		ERROR_404: `404`,
		ERROR_400: `400`,
		ERROR_401: `401`,
		ERROR_403: `403`,
		ERROR_500: `500`,
	},
};

export const INTERNAL_PATHS = {
	//OPENDATA
	OPENDATA_DEFAULT: `${ROUTES_PATHS.OPENDATA.DEFAULT}`,
	
	// OPENDATA - MARKET PARTIES
	OPENDATA_MARKET_PARTIES_DEFAULT: `${ROUTES_PATHS.OPENDATA.MARKET_PARTIES.DEFAULT}`,
	OPENDATA_MARKET_PARTIES_RESULTS: `${ROUTES_PATHS.OPENDATA.MARKET_PARTIES.RESULTS}`,
	
	// Server
	SERVER_ERROR_404: `${ROUTES_PATHS.SERVER.ERROR_404}`,
	SERVER_ERROR_401: `${ROUTES_PATHS.SERVER.ERROR_401}`,
	SERVER_ERROR_400: `${ROUTES_PATHS.SERVER.ERROR_400}`,
	SERVER_ERROR_403: `${ROUTES_PATHS.SERVER.ERROR_403}`,
	SERVER_ERROR_500: `${ROUTES_PATHS.SERVER.ERROR_500}`,
};

export const INTERNAL_ROUTES = {
	// Server
	SERVER_ERROR_404: `/${INTERNAL_PATHS.SERVER_ERROR_404}`,
	SERVER_ERROR_401: `/${INTERNAL_PATHS.SERVER_ERROR_401}`,
	SERVER_ERROR_400: `/${INTERNAL_PATHS.SERVER_ERROR_400}`,
	SERVER_ERROR_403: `/${INTERNAL_PATHS.SERVER_ERROR_403}`,
	SERVER_ERROR_500: `/${INTERNAL_PATHS.SERVER_ERROR_500}`,
	
	// OPENDATA
	OPENDATA_DEFAULT: `/${INTERNAL_PATHS.OPENDATA_DEFAULT}`,
	
	// OPENDATA - MARKET PARTIES
	OPENDATA_MARKET_PARTIES_DEFAULT: `/${INTERNAL_PATHS.OPENDATA_MARKET_PARTIES_DEFAULT}`,
	OPENDATA_MARKET_PARTIES_RESULTS: `/${INTERNAL_PATHS.OPENDATA_MARKET_PARTIES_DEFAULT}/${INTERNAL_PATHS.OPENDATA_MARKET_PARTIES_RESULTS}`,
};