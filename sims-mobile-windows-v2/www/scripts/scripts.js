$(document).ajaxStart(function () {
    $('.overlay').removeClass('hide');
});
$(document).ajaxStop(function () {
    $('.overlay').addClass('hide');
});
function objectifyForm(formArray) {//serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
    }
    return returnArray;
}
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}
$(document).on('click', '#btnData', function () {
    $('#postedData').toggleClass('hide');
});
$(document).on('click', "img.pp", function (e) {
    var that = $(this);
    var $textAndPic = $('<div></div>');
    $textAndPic.append($(this).attr('href'));
    $textAndPic.append('<img src="' + $(this).attr('src') + '" width="480" height="360" />');

    BootstrapDialog.show({
        title: 'Photo',
        message: $textAndPic,
        buttons: [{
            label: 'Remove',
            action: function (dialogRef) {
                that.remove();
                dialogRef.close();
            }
        },{
            label: 'Close',
            action: function (dialogRef) {
                dialogRef.close();
            }
        }]
    });
});
$(document).on('change', 'input:checkbox', function (e) {
    e.preventDefault();
    if ($(this).is(":checked")) {
        $(this).val('on');
    } else {
        $(this).val('off');
    }
});
$(document).on('change', 'input:radio', function (e) {
    e.preventDefault();
    if ($(this).is(":checked")) {
        $('#form1').find("input[type='radio'][name='" + $(this).attr('name') + "']").val($(this).next().text());
    }
});
$('#sampleInfo').click(function () {
    var siLink = "http://mylink.agdaff.gov.au/region/northern/Document%20Library/NAQS/Science/Animal%20Health/Collection%20of%20biological%20samples%20during%20NAQS%20animal%20health%20targeted%20surveillance%20activities.pdf#search=biological%20samples";
    window.open(siLink,'_blank', 'Avoka TransactField App', 'titlebar=no,menubar=no,toolbar=no,location=no,scrollbars=0,resizable=yes,width=1248,height=760,top=20,left=100');
    return false;
});
$(document).on('click', "#movetodest", function () {
    $("#source > option:selected").each(function () {
        $(this).remove().appendTo("#destination");
    });
});
$(document).on('click', "#movetosource", function () {
    $("#destination > option:selected").each(function () {
        $(this).remove().appendTo("#source");
    });
});
function BindAutoComplete() {
    function log(message) {
        //$("<div>").text(message).prependTo("#log");
        //$("#log").scrollTop(0);
    }
    $(".taxonText").autocomplete({
        source: function (request, response) {
            var names = [];
            $.ajax({
                url: "http://ag-bie.ala.org.au/ws/auto",
                dataType: "json",
                data: {
                    q: request.term,
                    limit: 100
                },
                success: function (data) {
                    $.each(data.autoCompleteList, function () {
                        if (this.name) {
                            names.push(this.matchedNames[0]);
                        }
                        else {
                            names.push('Not Defined');
                        }
                    });
                    response(names);
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            log(ui.item ?
                "Selected: " + ui.item.label :
                "Nothing selected, input was " + this.value);
        },
        open: function () {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
};
function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}