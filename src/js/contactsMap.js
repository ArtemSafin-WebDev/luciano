export default function contactsMap() {
    const elements = Array.from(document.querySelectorAll('.js-contacts-map'));

    elements.forEach(element => {
        function initializeMap() {
            const center = window.mapCenter || [55.786569, 49.115965];
            const mapInstance = new ymaps.Map(element, {
                center: center,
                zoom: window.zoomLevel || 10,
                controls: []
            });

            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        right: 20,
                        bottom: 60
                    }
                }
            });
            mapInstance.controls.add(zoomControl);

            mapInstance.behaviors.disable('scrollZoom');

            const objectManager = new ymaps.ObjectManager({
                clusterize: false,
                clusterHasBalloon: false,
                geoObjectOpenBalloonOnClick: false
            });
            mapInstance.geoObjects.add(objectManager);

            if (window.pointsMapData) {
                window.pointsMapData.forEach(item => {
                    var objectToAdd = {
                        id: item.id,
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: item.coords
                        },
                        options: {
                            ...item.pin
                        },
                        properties: {
                            type: item.type
                        }
                    };
                    objectManager.add(objectToAdd);
                });
            }

            const select = document.querySelector('.js-contacts-map-select');

            if (select) {
                const current = select.querySelector('.contacts__select-current');
                const currentText = select.querySelector('.contacts__select-current-text');

                const btns = Array.from(select.querySelectorAll('.contacts__select-btn'));
                const setActivePoint = id => {
                    objectManager.setFilter(function(object) {
                        if (object.properties.type === 'sight') return true;

                        console.log(object.id);

                        if (object.id == id) return true;

                        return false;
                    });

                    const object = window.pointsMapData.find(element => element.id == id);

                    console.log('Points map data', window.pointsMapData);

                    console.log('ID', id);

                    console.log('Object', object);

                    if (!object) return;

                    // mapInstance.setCenter(object.coords, window.zoomLevel || 10);
                    mapInstance.panTo(object.coords, {
                        checkZoomRange: true,
                        center: window.zoomLevel || 10
                    });
                };

                current.addEventListener('click', event => {
                    event.preventDefault();

                    select.classList.toggle('dropdown-shown');
                });

                document.addEventListener('click', event => {
                    if (event.target.matches('.js-contacts-map-select') || event.target.closest('.js-contacts-map-select')) {
                        return;
                    } else {
                        select.classList.remove('dropdown-shown');
                    }
                });

                btns.forEach(btn => {
                    btn.addEventListener('click', event => {
                        event.preventDefault();

                        btns.forEach(btn => btn.classList.remove('active'));
                        btn.classList.add('active');
                        select.classList.remove('dropdown-shown');
                        currentText.textContent = btn.textContent;

                        setActivePoint(btn.getAttribute('data-id'));
                    });
                });

                if (btns.length) {
                    btns[0].click();
                }
            }
        }

        ymaps.ready(initializeMap);
    });
}
