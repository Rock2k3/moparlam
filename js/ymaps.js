
$(function() {
	// Яндекс карта
	var myMap,
    fullScreen = true;

	// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);
	
	function init () {
		// Создание экземпляра карты и его привязка к контейнеру с
		// заданным id ("map").
		myMap = new ymaps.Map('map', {
			// При инициализации карты обязательно нужно указать
			// её центр и коэффициент масштабирования.
			center:[55.6545, 37.5755],
			zoom:17
		});
		
		myPlacemark1 = new ymaps.Placemark([55.654492, 37.575307], {
				balloonContent: '<div class="balloon"><div class="ymap_custom_close_button"><a href="#" title="#"><span>Закрыть</span></a></div>'+$('#map .point1').html()+'<div class="arrow"></div></div>'
			},
			{
				hideIconOnBalloonOpen: false,
				iconImageHref: 'images/point.png',
				iconImageSize: [95, 79],
				iconImageOffset: [-10, -70],
				balloonLayout: "default#imageWithContent",
				balloonImageHref: '',
				balloonImageOffset: [-143, -200],
				balloonShadow: false,
		});
		
		myMap.geoObjects
			.add(myPlacemark1);
	}
	
	$(document).on('click', '.ymap_custom_close_button a', function(e) {
		e.preventDefault();
		myMap.balloon.close();
	});
});