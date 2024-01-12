window.onload = function() {
    clock();  
      function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'pm';
      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }    
      if(hour==0){ 
        hour=12;
      }
      if(TwentyFourHour < 12) {
         mid = 'am';
      }     
    document.getElementById('time').innerHTML = hour +':'+ ('0' + min).slice(-2) +':'+ ('0' + sec).slice(-2) + ' ' + mid ;
      setTimeout(clock, 1000);
    }

    calldate();
    function calldate() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.toLocaleString("en-US", {month: 'long'});;
        var day = now.getDate();
        var weekday = now.toLocaleString("en-US", {weekday: 'long'});
        document.getElementById('date').innerHTML = weekday.toLowerCase() + ", " + month.toLowerCase() + " " + day + ", " + year;
    }

    weatherupdate();
    function weatherupdate(){
        const apiKey = "97a98c4d65fe31b2daa13041548765a3";
        const inputVal = "Richmond, CA";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, cityname, sys, weather } = data;
            document.getElementById('weather').innerHTML = weather[0]["description"];
            document.getElementById('temperature').innerHTML = Math.round(main.temp) + "&deg;C";
            document.getElementById('feelslike').innerHTML = Math.round(main.feels_like) + "&deg;C";
        })
        .catch(() => {
        console.log("Please search for a valid city");
        });
    }
}