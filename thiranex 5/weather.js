const cityInput =
document.getElementById("cityInput");

const searchBtn =
document.getElementById("searchBtn");

const weatherCard =
document.getElementById("weatherCard");

const loading =
document.getElementById("loading");

const errorBox =
document.getElementById("errorBox");

/* ==========================
   GET WEATHER DATA
========================== */

async function getWeather() {

    const city =
    cityInput.value.trim();

    if (city === "") {

        showError(
            "Please enter a city name."
        );

        return;
    }

    loading.style.display =
    "block";

    errorBox.style.display =
    "none";

    weatherCard.innerHTML = "";

    try {

        const response =
        await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if (!response.ok) {

            throw new Error(
                "Weather data not found"
            );

        }

        const data =
        await response.json();

        displayWeather(
            data,
            city
        );

    }

    catch (error) {

        showError(
            "Unable to fetch weather data. Please try again."
        );

    }

    finally {

        loading.style.display =
        "none";

    }

}

/* ==========================
   DISPLAY WEATHER
========================== */

function displayWeather(
    data,
    city
) {

    const current =
    data.current_condition[0];

    weatherCard.innerHTML = `

        <h2>${city}</h2>

        <h1>
            ${current.temp_C}°C
        </h1>

        <p style="font-size:1.2rem;color:#38bdf8;">
            ${current.weatherDesc[0].value}
        </p>

        <div class="weather-details">

            <div class="detail-box">

                <h3>
                    🌡 Temperature
                </h3>

                <p>
                    ${current.temp_C} °C
                </p>

            </div>

            <div class="detail-box">

                <h3>
                    💧 Humidity
                </h3>

                <p>
                    ${current.humidity}%
                </p>

            </div>

            <div class="detail-box">

                <h3>
                    💨 Wind Speed
                </h3>

                <p>
                    ${current.windspeedKmph} km/h
                </p>

            </div>

            <div class="detail-box">

                <h3>
                    ☁ Cloud Cover
                </h3>

                <p>
                    ${current.cloudcover}%
                </p>

            </div>

            <div class="detail-box">

                <h3>
                    👁 Visibility
                </h3>

                <p>
                    ${current.visibility} km
                </p>

            </div>

            <div class="detail-box">

                <h3>
                    🌍 Feels Like
                </h3>

                <p>
                    ${current.FeelsLikeC} °C
                </p>

            </div>

        </div>

    `;

}

/* ==========================
   SHOW ERROR
========================== */

function showError(message) {

    errorBox.style.display =
    "block";

    errorBox.innerHTML =
    `❌ ${message}`;

}

/* ==========================
   SEARCH BUTTON
========================== */

searchBtn.addEventListener(
    "click",
    getWeather
);

/* ==========================
   ENTER KEY SUPPORT
========================== */

cityInput.addEventListener(
    "keypress",
    (e) => {

        if (e.key === "Enter") {

            getWeather();

        }

    }
);

/* ==========================
   DEFAULT WEATHER
========================== */

window.addEventListener(
    "load",
    () => {

        cityInput.value =
        "Coimbatore";

        getWeather();

    }
);

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
    "Weather Dashboard Loaded Successfully 🌦"
);