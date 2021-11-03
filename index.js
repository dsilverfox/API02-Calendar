const baseURL = "https://calendarific.com/api/v2";
const apiKey = "?api_key=68bd7f5c7ab1938ae71f4eed4c374256b3f1814a";
const hend = "/holidays";
const year = document.getElementById('year')
const searchForm = document.querySelector('form'); 
const submitBTN = document.querySelector('.submit'); 
let select = document.getElementById("select");

//Submit Button
submitBTN.addEventListener("click", fetchResults);

//Arrays (Country, ISO, States)
const country_arr = new Array(
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo Democratic Republic",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See (Vatican City)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St. Barts",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "The Bahamas",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "US Virgin Islands",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Wallis and Futuna",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "eSwatini"
);

//ISO - 3166 Country Codes

const iso_arr = new Array( 
  "af",
  "al",
  "dz",
  "as",
  "ad",
  "ao",
  "ai",
  "ag",
  "ar",
  "am",
  "aw",
  "au",
  "at",
  "az",
  "bh",
  "bd",
  "bb",
  "by",
  "be",
  "bz",
  "bj",
  "bm",
  "bt",
  "bo",
  "ba",
  "bw",
  "br",
  "vg",
  "bn",
  "bg",
  "bf",
  "bi",
  "cv",
  "kh",
  "cm",
  "ca",
  "ky",
  "cf",
  "td",
  "cl",
  "cn",
  "co",
  "km",
  "cg",
  "cd",
  "ck",
  "cr",
  "ci",
  "hr",
  "cu",
  "cw",
  "cy",
  "cz",
  "dk",
  "dj",
  "dm",
  "do",
  "tl",
  "ec",
  "eg",
  "sv",
  "gq",
  "er",
  "ee",
  "et",
  "fk",
  "fo",
  "fj",
  "fi",
  "fr",
  "pf",
  "ga",
  "gm",
  "ge",
  "de",
  "gh",
  "gi",
  "gr",
  "gl",
  "gd",
  "gu",
  "gt",
  "gg",
  "gn",
  "gw",
  "gy",
  "ht",
  "va",
  "hn",
  "hk",
  "hu",
  "is",
  "in",
  "id",
  "ir",
  "iq",
  "ie",
  "im",
  "il",
  "it",
  "jm",
  "jp",
  "je",
  "jo",
  "kz",
  "ke",
  "ki",
  "xk",
  "kw",
  "kg",
  "la",
  "lv",
  "lb",
  "ls",
  "lr",
  "ly",
  "li",
  "lt",
  "lu",
  "mo",
  "mg",
  "mw",
  "my",
  "mv",
  "ml",
  "mt",
  "mh",
  "mq",
  "mr",
  "mu",
  "yt",
  "mx",
  "fm",
  "md",
  "mc",
  "mn",
  "me",
  "ms",
  "ma",
  "mz",
  "mm",
  "na",
  "nr",
  "np",
  "nl",
  "nc",
  "nz",
  "ni",
  "ne",
  "ng",
  "kp",
  "mk",
  "mp",
  "no",
  "om",
  "pk",
  "pw",
  "pa",
  "pg",
  "py",
  "pe",
  "ph",
  "pl",
  "pt",
  "pr",
  "qa",
  "re",
  "ro",
  "ru",
  "rw",
  "sh",
  "kn",
  "lc",
  "mf",
  "pm",
  "vc",
  "ws",
  "sm",
  "st",
  "sa",
  "sn",
  "rs",
  "sc",
  "sl",
  "sg",
  "sx",
  "sk",
  "si",
  "sb",
  "so",
  "za",
  "kr",
  "ss",
  "es",
  "lk",
  "bl",
  "sd",
  "sr",
  "se",
  "ch",
  "sy",
  "tw",
  "tj",
  "tz",
  "th",
  "bs",
  "tg",
  "to",
  "tt",
  "tn",
  "tr",
  "tm",
  "tc",
  "tv",
  "vi",
  "ug",
  "ua",
  "ae",
  "gb",
  "us",
  "uy",
  "uz",
  "vu",
  "ve",
  "vn",
  "wf",
  "ye",
  "zm",
  "zw",
  "sz"
);

 for(let i = 0; i < country_arr.length; i++)
      {let option = document.createElement("option")
      option.innerText = country_arr[i];
      select.appendChild(option);
      }


//Fetch
async function fetchResults(e) {
  e.preventDefault();
  for (let i = 0; i < country_arr.length; i++) {
    if  (select.value === country_arr[i]) {
      console.log(country_arr[i]);
          let url =
            baseURL + hend + apiKey + "&country=" +`${iso_arr[i]}` + "&year=" + `${year.value}`;

          let response = await fetch(url);
          let json = await response.json();
          console.log(url);
          console.log(json);
    }
  }   
}; 

// //BootStrap Cards 
// let row = document.querySelector('.row');
// console.log(row);


// //Notes
// for(let i=0;  i < showsObj.shows.length; i++) {
//     let card = document.createElement('div');
//     card.className = 'card text-white bg-dark mb-3';
//     card.style = 'width: 18rem; margin: 1em; height: 300px; padding: .3em; overflow: auto;';

//     let img = document.createElement('img');
//     img.className = 'card-img-top'
//     img.src = showsObj.shows[i].img_src;

//     let cardTitle = document.createElement('h5');
//     cardTitle.className = 'card-title';
//     cardTitle.innerText = showsObj.shows[i].name;

//     let cardText = document.createElement('p');
//     cardText.className = 'card-text';
//     cardText.innerText = showsObj.shows[i].desc;

//     let cardBody = document.createElement('div');
//     cardBody.className = 'card-body';
    
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);
//     card.appendChild(img);
//     card.appendChild(cardBody);
//     row.appendChild(card);
// };


// //Pulling info from objects.

//   let color = document.createElement("p");
//   color.className = "color";
//   color.innerText = `Favorite Color: ${json[x].color}`;
//   color.style = "font-family: Montserrat; color: white;";