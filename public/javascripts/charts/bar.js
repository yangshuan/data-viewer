$(document).ready(function() {
    var context = $('.bar').get(0).getContext('2d');
    var data = {
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
                label: 'Hours Deviation',
                fillColor: '#527EA9',
                highlightFill: '#527EA9',
                data: [72.0, 32.7, 37.9, 52.6, 21.0, 55.5, 31.3, 38.6, 22.9, 28.5, 52.1]
            },
            {
                label: 'Off Target Only',
                fillColor: '#E98F5B',
                highlightFill: '#E98F5B',
                data: [16.7, 25.8, 0, 0, 35.2, 20.2, 8.4, 12.5, 30.0, 11.8, 0]
            }
        ]
    };
    var options = {
        barShowStroke : false,
        scaleOverride: true,
        scaleSteps: 8,
        scaleStepWidth: 10,
        scaleStartValue: 0,
    };
    var chart = new Chart(context);
    var barChart = chart.Bar(data, options);

    var title = '';
    for (var i = 0; i < data.datasets.length; i++) {
        var label = data.datasets[i].label;
        if (i < data.datasets.length - 1) {
            title += label + ' - ';
        } else {
            title += label;
        }
    }
    $('#title').html(title);

    var illustrate = '<ul class="bar-legend">';
    for (var i = 0; i < data.datasets.length; i++) {
        var dataset = data.datasets[i];
        illustrate += '<li><span style="background-color:' + dataset.fillColor + '">&nbsp;</span>' + dataset.label;
    }
    illustrate += '</ul>';
    $('.illustrate').html(illustrate);
});