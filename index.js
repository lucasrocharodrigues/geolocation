const api = (config, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === 4) {
        const data = JSON.parse(this.response);
        callback(data);
      }
    });
    xhr.open(config.method, config.url);
    xhr.send(config.data);
}

navigator.geolocation.getCurrentPosition(position => {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude

    const config = {
        method: 'GET',
        url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1&accept-language=pt-BR`
    }
    const callback = data => {

        console.log(data)
        
    }
    api(config, callback)
})