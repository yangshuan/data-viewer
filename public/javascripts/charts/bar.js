$(document).ready(function() {
    var netCtx = $('#net').get(0).getContext('2d');
    var netData = {
        labels: [
            '09/09/2013',
            '10/09/2013',
            '11/09/2013',
            '12/09/2013',
            '13/09/2013',
            '14/09/2013',
            '16/09/2013',
            '17/09/2013',
            '18/09/2013',
            '19/09/2013',
            '20/09/2013',
            '21/09/2013',
        ],
        datasets: [
            {
                label: 'XXXADE3',
                fillColor: '#527EA9',
                highlightFill: '#527EA9',
                data: [72.0, 32.7, 37.9, 52.6, 21.0, -2.5, 55.5, 31.3, 38.6, 22.9, 28.5, 52.1]
            },
            {
                label: 'XXXARA',
                fillColor: '#E98F5B',
                highlightFill: '#E98F5B',
                data: [16.7, 25.8, -40.7, -50.5, 35.2, 0, 20.2, 8.4, 12.5, 30.0, 11.8, -0.6]
            },
            {
                label: 'XXXAREC',
                fillColor: '#F5F880',
                highlightFill: '#F5F880',
                data: [-14.4, -6.2, -19.9, -20.1, -2.2, -4.9, -8.2, -11.4, -23.9, -33.7, -27.4, 0]
            }
        ]
    };
    var netChart = new Chart(netCtx).Bar(netData, {
        barShowStroke : false,
        scaleOverride: true,
        scaleSteps: 7,
        scaleStepWidth: 20,
        scaleStartValue: -60,
        showTitle: true,
        titleText: 'Hours Deviation - Net',
        showLegend: true,
        legendPosition: "right",
        legendBoard: true,
        showNegative: true
    });

    var offCtx = $('#off').get(0).getContext('2d');
    var offData = {
        labels: [
            '09/09/2013',
            '10/09/2013',
            '11/09/2013',
            '12/09/2013',
            '13/09/2013',
            '16/09/2013',
            '17/09/2013',
            '18/09/2013',
            '19/09/2013',
            '20/09/2013',
            '21/09/2013',
        ],
        datasets: [
            {
                label: 'XXXADE3',
                fillColor: '#527EA9',
                highlightFill: '#527EA9',
                data: [72.0, 32.7, 37.9, 52.6, 21.0, 55.5, 31.3, 38.6, 22.9, 28.5, 52.1]
            },
            {
                label: 'XXXARA',
                fillColor: '#E98F5B',
                highlightFill: '#E98F5B',
                data: [16.7, 25.8, 0, 0, 35.2, 20.2, 8.4, 12.5, 30.0, 11.8, 0]
            }
        ]
    };
    var offChart = new Chart(offCtx).Bar(offData, {
        barShowStroke : false,
        scaleOverride: true,
        scaleSteps: 8,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        showTitle: true,
        titleText: 'Hours Deviation - Off Target Only',
        showLegend: true,
        legendPosition: "right",
        legendBoard: true
    });

    var unmeasuredCtx = $('#unmeasured').get(0).getContext('2d');
    var unmeasuredData = {
        labels: [
            '09/09/2013',
            '10/09/2013',
            '11/09/2013',
            '12/09/2013',
            '13/09/2013',
            '14/09/2013',
            '16/09/2013',
            '17/09/2013',
            '18/09/2013',
            '19/09/2013',
            '20/09/2013',
            '21/09/2013',
        ],
        datasets: [
            {
                label: 'XXXADMIN',
                fillColor: '#527EA9',
                highlightFill: '#527EA9',
                data: [52.5, 45.0, 45.0, 66.6, 5.0, 37.5, 35.5, 37.5, 37.5, 37.5, 0, 0]
            },
            {
                label: 'XXXAMIT',
                fillColor: '#E98F5B',
                highlightFill: '#E98F5B',
                data: [36.8, 30.0, 35.3, 22.5, 0, 30.0, 22.5, 42.8, 47.3, 37.5, 33.5, 0]
            },
            {
                label: 'XXXHLTDE3',
                fillColor: '#F5F880',
                highlightFill: '#F5F880',
                data: [142.8, 138.5, 143.3, 141.0, 115.9, 0, 136.5, 145.5, 134.5, 125.4, 136.0, 0]
            },
            {
                label: 'XXXHLTREC',
                fillColor: '#DFF808',
                highlightFill: '#DFF808',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.0, 0]
            },
            {
                label: 'XXXHMDE3',
                fillColor: '#9FE7A4',
                highlightFill: '#9FE7A4',
                data: [61.1, 60.1, 59.7, 52.6, 51.1, 0, 57.6, 65.3, 62.1, 59.6, 60.5, 0]
            },
            {
                label: 'XXXAHMREC',
                fillColor: '#BAF171',
                highlightFill: '#BAF171',
                data: [15.0, 11.5, 12.0, 0, 0, 0, 9.5, 10.0, 0, 0, 0, 4.0, 0]
            },
            {
                label: 'XXXINV',
                fillColor: '#A35E0C',
                highlightFill: '#A35E0C',
                data: [44.0, 43.0, 44.0, 41.3, 40.0, 0, 44.5, 44.7, 44.5, 44.4, 44.5, 7.5]
            },
            {
                label: 'XXXMULC',
                fillColor: '#7D2B07',
                highlightFill: '#7D2B07',
                data: [37.5, 37.5, 37.5, 35.0, 37.5, 0, 37.0, 30.0, 44.5, 52.5, 51.5, 5.0]
            }
        ]
    };
    var unmeasuredChart = new Chart(unmeasuredCtx).Bar(unmeasuredData, {
        barShowStroke : false,
        scaleOverride: true,
        scaleSteps: 8,
        scaleStepWidth: 20,
        scaleStartValue: 0,
        showTitle: true,
        titleText: 'Unmeasured Hours',
        showLegend: true,
        legendPosition: "right",
        legendBoard: true
    });

    var totalCtx = $('#total').get(0).getContext('2d');
    var totalData = {
        labels: [
            '09/09/2013',
            '10/09/2013',
            '11/09/2013',
            '12/09/2013',
            '13/09/2013',
            '14/09/2013',
            '16/09/2013',
            '17/09/2013',
            '18/09/2013',
            '19/09/2013',
            '20/09/2013',
            '21/09/2013',
        ],
        datasets: [
            {
                label: 'Measured Hours',
                fillColor: '#527EA9',
                highlightFill: '#527EA9',
                data: [210, 210, 230, 205, 192, 10, 185, 187, 190, 200, 175, 160]
            },
            {
                label: 'Unmeasured Hours',
                fillColor: '#E98F5B',
                highlightFill: '#E98F5B',
                data: [387.2, 373.3, 387.9, 350.4, 386.3, 5, 360.2, 370, 299, 380, 373, 41.8]
            }
        ]
    };
    var totalChart = new Chart(totalCtx).Stackedbar(totalData, {
        barShowStroke : false,
        scaleOverride: true,
        scaleSteps: 7,
        scaleStepWidth: 100,
        scaleStartValue: 0,
        showTitle: true,
        titleText: 'Measured & Unmeasured',
        showLegend: true,
        legendPosition: "right",
        legendBoard: true
    });
});