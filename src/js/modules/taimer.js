function taimer(deadline) {
    function getTimeRemaining(endtime) {
        let time = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(time / (1000 * 60 * 60 * 24)), 
            hours = Math.floor((time / (1000 * 60 * 60)) % 24),
            min = Math.floor((time / (1000 * 60)) % 60),
            sec = Math.floor((time / 1000) % 60);

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': min, 
            'seconds': sec,

        };
    }

    function zero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
        
    }

    function getTimeHTML (endtime) {

        

        const days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            min = document.querySelector('#minutes'),
            sec = document.querySelector('#seconds'),
            update = setInterval(updateTime, 1000);

            updateTime ();

            function updateTime () {
                const time = getTimeRemaining(endtime);

                days.innerHTML = zero(time.days);
                hours.innerHTML = zero(time.hours);
                min.innerHTML = zero(time.minutes);
                sec.innerHTML = zero(time.seconds);

                if (time.total <= 0) {
                    clearInterval(update);
                }
            }
        
    }

    getTimeHTML(deadline);

}
export default taimer;