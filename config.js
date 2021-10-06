/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	//address: "localhost", 	// Address to listen on, can be:
	address: "0.0.0.0",
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
	ipWhitelist: [],
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			header: "Central Timezone",
			position: "top_left",
			config: {
			showDate:true,
			timeFormat:12,
			}
			
		},
				{
					header: "Taipei",
			module: "clock",
			position: "top_right",
			config: {
			showDate:true,
			timeFormat:12,
			timezone: "Asia/Taipei",
			dateformat: "YYYY-MM-DD"
			}
			
		},
		{
			module: "calendar",
			//header: "US Holidays",
			position: "top_left",
			
			config: {
				fade: false,
				maxTitleLines: 10,
				maxEventTitleLines: 10,
				maximumNumberOfDays:30,
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/soulhippo%40gmail.com/private-b6fb447c851f099a7b4a54ac3e72f43f/basic.ics"		
					//	url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					
					}
				]
			}
		},/*
		{
			module: "compliments",
			position: "lower_third"
		},*/
		{
			module: "weather",
			position: "top_right",
			
			config: {
				weatherProvider: "openweathermap",
				fade: false,
				colored: true,
				showSun: true,
				showPrecipitationAmount:true,
				type: "current",
				location: "Chicago",
				locationID: "4887398", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "(*********************)"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			
			config: {
				weatherProvider: "openweathermap",
				colored: true,
				showWindDirection: true,
				showPrecipitationAmount:true,
				showSun:true,
				showWindDirectionAsArrow: true,
				fade: false,
				calendarClass:"calendar",
				type: "daily",
				location: "Chicago",
				locationID: "4887398", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "(*********************)"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Hourly Forecast",
			
			config: {
				lat:41.888796,
				lon:-87.63384,
				colored: true,
				showPrecipitationAmount: true,
				appendLocationNameToHeader:true,
				showWindDirection: true,
				showWindDirectionAsArrow:true,
				maxNumberOfDays:8,
				maxEntries:8,
				weatherProvider: "openweathermap",
				fade: false,
				type: "hourly",
				location: "Chicago",
				locationID: "4887398", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "(*********************)"
			}
		},
	  {
		module: "MMM-Wallpaper",
		position: "fullscreen_below",
		config: { // See "Configuration options" for more information.
		  source: "bing",
		  slideInterval: 60 * 1000 // Change slides every minute
		}
	  },
	  {
    module: "MMM-WeeklySchedule",
    position: "center_top",
    header: "Daily Schedule",
    config: {
            schedule: {
                    timeslots: [ "Wake Up", "Leave for Work", "Come Home", "Dinner","Work Out", "Sleep" ],
                    lessons: {
                            mon: [ "7:20AM",  "8:45AM", "5:30PM", "6:30PM" ,"8:30PM","11:30PM" ],
                            tue: [ "7:20AM",  "8:45AM",  "5:30PM", "6:30PM","8:30PM","11:30PM" ],
                            wed: [ "7:20AM", "8:45AM",  "5:30PM",  "6:30PM" ,"8:30PM","11:30PM"],
                            thu: [ "7:20AM", "8:45AM", "5:30PM",  "6:30PM"  ,"8:30PM","11:30PM"],
                            fri: [ "7:20AM",  "8:45AM", "5:30PM", "6:30PM" ,"8:30PM","11:30PM"]
                    }
            },
            updateInterval: 1 * 60 * 60 * 1000, // every hour
            showNextDayAfter: undefined
    }
},

	  /*
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},*/
		{
			module: 'calendar_monthly',
			position: 'top_left',
			config: {
					// The config property is optional
					// Without a config, a default month view is shown
					// Please see the 'Configuration Options' section for more information
			}
		},
		     {
	module: 'MMM-CTA',
	position: 'bottom_left',
	config: {
		updateTime: 60000, // 1 minute, the API does not update much more often so going below this is unnecessary
		ctaApiKey: (*********************),
		busStopName: '',
		//busStopName: 'Lasale & Kinzie (North)',  // String value, Name your bus stop
		stopId: 14528, // Bus station ID: Chicago and Milwaukee example; go to http://www.transitchicago.com/riding_cta/systemguide/default.aspx to find your stop ID
		maxResult: 1,  // The maximum number of incoming bussesy you want to display for bus stops
		ctaApiKeyTrain: (*********************),
		trainStopName: 'Merchandise Mart',  //String value, name your train stop
		trainStationID: 40460, //Train station ID:  Chicago Blue line example; http://www.transitchicago.com/developers/ttdocs/default.aspx#_Toc296199909
		maxResultTrain: 5, // Max number of incoming trains to disply
		moduleInstance: 2, // To run multiple instances of this module
	},
     },
     /*{
	module: 'MMM-CTA',
	position: 'bottom_left',
	hiddenOnStartup:true,
	config: {
		updateTime: 60000, // 1 minute, the API does not update much more often so going below this is unnecessary
		ctaApiKey: (*********************),
		busStopName: 'Grand & Franklin (East)',  // String value, Name your bus stop
		stopId: 744, // Bus station ID: Chicago and Milwaukee example; go to http://www.transitchicago.com/riding_cta/systemguide/default.aspx to find your stop ID
		maxResult: 1,  // The maximum number of incoming bussesy you want to display for bus stops
		ctaApiKeyTrain: (*********************),
		trainStopName: 'Clark/Lake',  //String value, name your train stop
		trainStationID: 40380, //Train station ID:  Chicago Blue line example; http://www.transitchicago.com/developers/ttdocs/default.aspx#_Toc296199909
		maxResultTrain: 5, // Max number of incoming trains to disply
		moduleInstance: 3, // To run multiple instances of this module
	},
},*/
{
                        module: 'MMM-PIR-Sensor',
                        position: "top_center",
                        config: {
                                sensorPIN: 23,
                                powerSavingDelay: 25,
								//preventHDMITimeout: 4, // Turn HDMI ON and OFF again every 4 minutes when power saving, to avoid LCD/TV timeout
								//supportCEC: true, 
								presenceIndicator: "fa-eye", // Customizing the indicator
								presenceOffIndicator: "fa-eye", // Customizing the indicator
								presenceIndicatorColor: "#f51d16", // Customizing the indicator
								presenceOffIndicatorColor: "#2b271c" // Customizing the indicator
			}
                },

     {
	module: 'MMM-CTA',
	position: 'bottom_left',
	hiddenOnStartup:true,
	config: {
		updateTime: 60000, // 1 minute, the API does not update much more often so going below this is unnecessary
		ctaApiKey: (*********************),
		busStopName: 'Orleans & Grand (NE)',  // String value, Name your bus stop
		stopId: 14762, // Bus station ID: Chicago and Milwaukee example; go to http://www.transitchicago.com/riding_cta/systemguide/default.aspx to find your stop ID
		maxResult: 1,  // The maximum number of incoming bussesy you want to display for bus stops
		ctaApiKeyTrain: (*********************),
		trainStopName: 'Grand',  //String value, name your train stop
		trainStationID: 40330, //Train station ID:  Chicago Blue line example; http://www.transitchicago.com/developers/ttdocs/default.aspx#_Toc296199909
		maxResultTrain: 5, // Max number of incoming trains to disply
		moduleInstance: 2, // To run multiple instances of this module
	},
},
 


	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
