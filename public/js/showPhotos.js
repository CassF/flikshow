$(() => {
    let map;
    $("#searchFlikr").click((e) => {
        e.preventDefault();
        $.ajax({
            url: `/search`,
            method: 'POST',
            data: {
                search: $("#searchBar").val()
            }
        })
            .then((data) => {
                initMap(data);
            });
    })
    /**
     * This function initialises the map
     * @param data - This is the data returned from the 
     */
    function initMap(data) {
        //setting markers as an empty array
        let markers = [];
        //setting the position of the map
        let mapPosition = { lat: 51.643173, lng: 0.050168 };
        //creating the map
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: mapPosition
        });

        let markerData = data.result;

        for (let i in markerData) {
            console.log(markerData[i].latitude);
            console.log(markerData[i].longitude);
            //setting the position of the markers 
            var pos = new google.maps.LatLng(markerData[i].latitude, markerData[i].longitude);
            //calling the createMarker function and passes through the position, title and url
            createMarker(pos, markerData[i].title, markerData[i].url_m);
        }
    }

    /**
     * This function creates the markers for the map
     * @param position - This is the data returned from the 
     * @param t - This is the data returned from the 
     * @param url_m - This is the data returned from the 
     */
    function createMarker(pos, t, url_m) {
        let marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: t
        });

        let contentString = `<img src="${url_m}" />`;

        let infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
            //Trigger a Modal Window here showing the photo
            infowindow.open(map, marker);
        });

        return marker;
    }

});
