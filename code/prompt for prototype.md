developing the ui for an app that does the following tasks -







homepage -

* plan a trip (this will lead to another in-app page)
* start a trip (this would lead to another in-app page)
* book a ride (this would lead to another in-app page)
* map (this would be an api of some map app or tool that would be used for trip planning and navigation and/or allowing a friend to track you, like sharing location thing) (this would also lead to another in-app page)
* a small toggle button for SOS mode, and another one for getting scam alerts (turning this off would not get alerts) (both of them would be turned off by default)
* contribute button (leads to a different in-app page)
* get weather reports button (leads to a different in-app page)
* profile button on the top right
* friends who have planned a trip button to the left of profile
* app name in the center at the top just below the header including the profile button
* a button for a chatbot in the middle, right above the footer, slightly larger than the other buttons
* a button named data in the bottom right (leads to a different in-app page)

choose an intuitive layout, keep a simple background, preferably abstract art image







"plan a trip" page -

* "make trip public, keep trip private" will be two radio buttons, only one can be selected at a time, default - private (provide description for make trip public as - your friends will be able to know and join you; for private as - plan for yourself)
* "choose travel domain
   - intercity
   - plan a weekend
   - plan a vacation"
* add a purpose button that's optional to be filled
* choosing intercity will lead to an interface that also asks for source, destination, mode of travel, and date or travel (and return stuff similar to intracity, a list of dummy rides)
* plan a weekend will ask to choose between events and outings then ask them to enter the source location or provide a skip button
* outings will lead to an interface that shows a list of cards (these cards will show an image, and some tour package details) (the details include trip location, )
* plan a weekend shows tours that are of max length 2 days and near to the entered location (if no entered location, use user's previous location)
* do the same for events section (events could be concerts, films, shows, campings, parties, gatherings, or any kind of events)
* plan a vacation will lead to an interface just like outings from plan a weekend, except it will have trips ranging from minimum 3 days to 15 days
* all the cards are simply placeholders, they wont be clickable






"start a trip" page -

all planned trips appear as a list in a chronological order







"book a ride" page -

* choosing intracity leads to an interface where the user inputs their source, destination, and mode of travel (among city bus, train, cab, ride sharing, bike, rickshaw) and the app returns a list of dummy rides based on what user entered
* intracity will also offer a prebook button where the user can do the previous procedure after selecting either the time of departure or the time of arrival (this wont return anything, it is just a placeholder for now)
* add a purpose button that's optional to be filled







"map" page -

this opens an in-app window where a map is shown with your location
the map will also show telemetry data like speed, direction, and other stuff besides the regular features
refer google maps api







on turning on the sos button, a text box appears on the homepage under the title "SOS note"
try not keeping a word limit, and if a word limit is necessary, keep it as high as possible (not so high that it affects the functioning of the phone or the app or makes the OS suspicious of the app)



on turning on the scam alerts button, a button appears that will lead to an in-app page that logs all the scam alerts shown in the notifications (log one regarding taxi drivers at Dadar railway station Mumbai)
the log page will also have a clear button



"contribute" page -
the user can contribute to the app by reporting a scam or a fake ride
generate a ticket for the same


weather reports leads to a default weather report beign displayed on another in-app page
an api of any weather app can be used to get the weather report



the chatbot will be an api, it will have three modes -
* tour guide
* travel assistant
* itinerary planner
the user will be able to select the mode they want to use
for the ui, refer "chatgpt_ui.jpg"
the changes to be made -
* the suggestive promt in the middle of the page will be replaced by mode to be selected
* once the mode is selected, the modes will be replaced by suggestive prompts (place 3 random prompts like "plan a trip to manali from mumabi for 5 days 4 nights for a group of 4", etc)





now here's the main part -
upon the completion of any trip, the app shall export data into a json file
any scam reports, log it into the json file
all confirmed user inputs go into the json file - like confirmed ride bookings, confirmed cancellations of rides, event bookings, reviews, preferences, etc

the format of storing will be -
* username, date, time (of start)
   - source and destination
   - purpose
   - number of people
   - time, distance
   - places visited (with categories in brackets)
   - etc
on clicking the "data" button on the app, the app loads the json file titled "username.json" and shows it in a read only format
put a button of clear data at the top right
on clicking the data, prompt the user that the data will be deleted permanently and cannot be recovered, would you like to proceed
if yes, show an empty json file and empty the username.json file
